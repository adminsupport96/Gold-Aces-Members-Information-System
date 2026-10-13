/*
 * Digital business card
 * ---------------------
 * 1. Reads the person's id from the URL, e.g. index.html?id=jane-doe
 * 2. Looks that id up in contacts.json
 * 3. Fills in the card in index.html, hiding any field the contact doesn't have
 * 4. Sets up the "Save Contact" button:
 *      - Android:        an intent link that opens the Contacts app pre-filled
 *      - iPhone/others:  a vCard (.vcf) file generated here, including the photo
 *    The "Download contact file" link always uses the vCard.
 *
 * To add a person, edit contacts.json and put their photo in /images/.
 * Nothing in this file needs to change.
 */

'use strict';

// Largest width/height (in pixels) of the photo embedded in the vCard.
// Photos are scaled down to this so the contact file stays small.
const PHOTO_MAX_SIZE = 400;

// Shown under "Contact not found".
const NOT_FOUND_HELP = 'Check the link you were given, or ask a Gold Aces staff member.';

main();

async function main() {
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) {
    showMessage('Contact not found', NOT_FOUND_HELP);
    return;
  }

  let contacts;
  try {
    // "no-cache" makes the browser check for a newer contacts.json each visit.
    const response = await fetch('contacts.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    contacts = await response.json();
  } catch (error) {
    console.error('Could not load contacts.json:', error);
    showMessage('Could not load contact', 'Please try again in a moment.');
    return;
  }

  const contact = contacts.find((c) => c.id === id);
  if (!contact) {
    showMessage('Contact not found', NOT_FOUND_HELP);
    return;
  }

  renderCard(contact);
  await setUpSaveButtons(contact);
}

/* ==========================================================================
   Rendering
   ========================================================================== */

function renderCard(contact) {
  const name = fullName(contact);
  document.title = name + ' - Gold Aces';
  byId('name').textContent = name;

  showText('title', contact.title);
  showText('company', contact.company);

  // Initials, shown in the card's corners (and instead of a missing photo).
  const initials = (contact.firstName[0] + contact.lastName[0]).toUpperCase();
  document.querySelectorAll('.index-initials').forEach((el) => { el.textContent = initials; });

  // Photo, or the person's initials if there is no photo (or it fails to load).
  const photoInitials = byId('initials');
  if (contact.photo) {
    const photo = document.createElement('img');
    photo.className = 'portrait-photo';
    photo.alt = name;
    photo.onerror = () => { photo.remove(); photoInitials.hidden = false; };
    photo.src = contact.photo;
    byId('portrait').prepend(photo);
  } else {
    photoInitials.hidden = false;
  }

  // Call / email / website buttons, plus the same details as small print.
  if (contact.phone) {
    byId('call-link').href = 'tel:' + contact.phone.replace(/[^\d+]/g, '');
    byId('call-link').setAttribute('aria-label', 'Call ' + contact.phone);
    byId('call-item').hidden = false;
    showText('phone-detail', contact.phone);
  }
  if (contact.email) {
    byId('email-link').href = 'mailto:' + contact.email;
    byId('email-link').setAttribute('aria-label', 'Email ' + contact.email);
    byId('email-item').hidden = false;
    showText('email-detail', contact.email);
  }
  if (contact.website) {
    const url = websiteUrl(contact.website);
    // Show the address without "https://" and a trailing slash, e.g. "example.com".
    const shortUrl = url.replace(/^https?:\/\//i, '').replace(/\/$/, '');
    byId('website-link').href = url;
    byId('website-link').setAttribute('aria-label', 'Website ' + shortUrl);
    byId('website-item').hidden = false;
    showText('website-detail', shortUrl);
  }
  showText('address-detail', contact.address);

  turnCardOver();
}

// Flips the card from its back to its face, then removes the 3D effect once
// it has landed so the text renders crisply.
function turnCardOver() {
  const card = byId('card');
  const back = byId('back');
  const face = byId('face');

  face.hidden = false;
  back.setAttribute('aria-hidden', 'true');
  back.inert = true;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Wait one frame so the browser draws the face turned away before flipping it.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => card.classList.add('is-face'));
  });
  setTimeout(() => card.classList.add('is-settled'), reducedMotion ? 0 : 950);
}

// Shows a short message on the back of the card (used for errors).
function showMessage(title, detail) {
  byId('message-title').textContent = title;
  showText('message-detail', detail);
  document.title = title + ' - Gold Aces';
}

// Sets an element's text and shows it, or hides it if there is no text.
function showText(elementId, text) {
  const element = byId(elementId);
  element.textContent = text || '';
  element.hidden = !text;
}

/* ==========================================================================
   Save Contact buttons
   ========================================================================== */

async function setUpSaveButtons(contact) {
  const saveButton = byId('save-button');
  const downloadLink = byId('download-link');
  const fileName = contact.id + '.vcf';

  // Android: the intent link needs no preparation, so it works right away.
  if (isAndroid()) {
    saveButton.href = buildAndroidIntent(contact);
  }

  // Build the vCard (this loads the photo, so it takes a moment) and turn it
  // into a temporary file URL the browser can open.
  const vcard = await buildVCard(contact);
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const vcardUrl = URL.createObjectURL(blob);

  // Fallback link: always the vCard, downloaded as e.g. "jane-doe.vcf".
  downloadLink.href = vcardUrl;
  downloadLink.download = fileName;

  if (!isAndroid()) {
    saveButton.href = vcardUrl;
    // On iPhone/iPad, *opening* the vCard shows the "Create New Contact" screen.
    // Elsewhere (computers), download it as a properly named .vcf file instead.
    if (!isIOS()) saveButton.download = fileName;
  }
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    // iPads report themselves as a Mac but have a touch screen.
    (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
}

/* ---------- Android intent ---------- */

// Builds a link that opens Android's "Create contact" screen with the fields
// filled in. Every value is URL-encoded, so commas, semicolons, spaces etc.
// in the data can't break the link. (Android can't receive the photo or
// website this way; the vCard download includes them.)
function buildAndroidIntent(contact) {
  const fields = {
    name: fullName(contact),
    phone: contact.phone,
    email: contact.email,
    company: contact.company,
    job_title: contact.title,
    postal: contact.address,
  };

  let intent = 'intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/raw_contact;';
  for (const [key, value] of Object.entries(fields)) {
    if (value) intent += 'S.' + key + '=' + encodeURIComponent(value) + ';';
  }
  return intent + 'end';
}

/* ---------- vCard 3.0 ---------- */

async function buildVCard(contact) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    // N = last name;first name;middle names;prefix;suffix
    'N:' + escapeVCard(contact.lastName) + ';' + escapeVCard(contact.firstName) + ';;;',
    'FN:' + escapeVCard(fullName(contact)),
  ];

  if (contact.company) lines.push('ORG:' + escapeVCard(contact.company));
  if (contact.title) lines.push('TITLE:' + escapeVCard(contact.title));
  if (contact.phone) lines.push('TEL;TYPE=CELL:' + escapeVCard(contact.phone));
  if (contact.email) lines.push('EMAIL;TYPE=INTERNET:' + escapeVCard(contact.email));
  if (contact.website) lines.push('URL:' + escapeVCard(websiteUrl(contact.website)));
  // ADR = PO box;extended;street;city;region;postal code;country.
  // The address is one line of text, so it all goes in the "street" part.
  if (contact.address) lines.push('ADR;TYPE=WORK:;;' + escapeVCard(contact.address) + ';;;;');

  const photo = await loadPhotoAsBase64(contact.photo);
  if (photo) lines.push('PHOTO;ENCODING=b;TYPE=JPEG:' + photo);

  lines.push('END:VCARD');

  // vCards use CRLF line endings, and long lines (like the photo) are
  // "folded" onto several lines.
  return lines.map(foldLine).join('\r\n') + '\r\n';
}

// Escapes characters that have a special meaning in vCard values.
function escapeVCard(value) {
  return String(value)
    .replace(/\\/g, '\\\\')        // backslash first, so we don't double-escape the ones added below
    .replace(/\r\n|\r|\n/g, '\\n') // newlines
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

// Splits a line longer than 75 characters into a first line plus continuation
// lines that start with a space, as the vCard format requires.
function foldLine(line) {
  const chars = Array.from(line); // splits by character, so emoji etc. stay intact
  if (chars.length <= 75) return line;
  const parts = [chars.slice(0, 75).join('')];
  for (let i = 75; i < chars.length; i += 74) {
    parts.push(' ' + chars.slice(i, i + 74).join(''));
  }
  return parts.join('\r\n');
}

// Loads the photo from /images/, scales it down to PHOTO_MAX_SIZE, and returns
// it as base64 JPEG data (without the "data:image/jpeg;base64," prefix).
// Returns null if there is no photo or it can't be loaded, so the vCard is
// still created, just without a photo.
function loadPhotoAsBase64(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);

    const img = new Image();
    img.onload = () => {
      try {
        const scale = Math.min(1, PHOTO_MAX_SIZE / Math.max(img.naturalWidth, img.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.naturalWidth * scale);
        canvas.height = Math.round(img.naturalHeight * scale);

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff'; // white behind transparent PNGs (JPEG has no transparency)
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL('image/jpeg', 0.85).split(',')[1]);
      } catch (error) {
        console.warn('Could not add photo to contact file:', error);
        resolve(null);
      }
    };
    img.onerror = () => {
      console.warn('Could not load photo:', src);
      resolve(null);
    };
    img.src = src;
  });
}

/* ==========================================================================
   Small helpers
   ========================================================================== */

function byId(id) {
  return document.getElementById(id);
}

function fullName(contact) {
  return contact.firstName + ' ' + contact.lastName;
}

// Adds "https://" if the website in contacts.json was written without it.
function websiteUrl(website) {
  return /^https?:\/\//i.test(website) ? website : 'https://' + website;
}
