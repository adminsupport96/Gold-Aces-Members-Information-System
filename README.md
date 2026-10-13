# Gold Aces Digital Business Cards

A static website (plain HTML, CSS and JavaScript, with no backend and no build step) that shows a digital business card for each person in `contacts.json`.

Each person's card has its own URL:

`https://YOUR-USERNAME.github.io/REPOSITORY/index.html?id=gold-aces-oneal`

Write that URL onto the person's NFC tag or QR code. If the `id` is missing or doesn't match anyone, the page shows "Contact not found".

## Files

| File | What it is |
| --- | --- |
| `contacts.json` | Everyone's contact details. **Edit this to add or change people.** |
| `images/` | Profile photos. |
| `index.html` | The card page. |
| `styles.css` | The look of the card. Brand colors and fonts are variables at the top of the file. |
| `app.js` | Loads the contact, fills in the card, and builds the "Save Contact" links. |
| `assets/` | Gold Aces logo (original and a light version for the navy card), the spade mark, and the home-screen icon. |
| `fonts/` | Web fonts used by the card (Montserrat and Poppins). |
| `PRODUCT.md`, `.impeccable/` | Design notes used when changing the card's design. Not needed to add people. |
| `contacts/*.vcf` | Older direct contact files, kept so NFC tags already written with those URLs keep working. |

## Add a person

1. Put their photo in `images/`, e.g. `images/jane-doe.jpg`. A square photo of about 400×400 px works best (JPEG or PNG).
2. Add an entry to `contacts.json`. Entries are separated by commas:

   ```json
   [
     {
       "id": "gold-aces-oneal",
       "firstName": "Gold Aces",
       "lastName": "Oneal",
       "title": "Web Developer",
       "company": "Gold Aces Car Display Center",
       "email": "admin.support@goldaces.ph"
     },
     {
       "id": "jane-doe",
       "firstName": "Jane",
       "lastName": "Doe",
       "title": "Marketing Manager",
       "company": "Gold Aces Car Display Center",
       "phone": "+639171234567",
       "email": "jane@example.com",
       "website": "https://example.com",
       "address": "123 Sample Street, Your City",
       "photo": "images/jane-doe.jpg"
     }
   ]
   ```

   - `id`, `firstName` and `lastName` are required. Every other field is optional; leave out anything you don't have and it won't be shown.
   - `id` goes in the URL, so use lowercase letters, numbers and dashes only, and make it unique.
   - Write phone numbers in international format (e.g. `+639171234567`).
   - With no photo, the card shows the person's initials.
3. Commit and push. Their card is at `index.html?id=jane-doe`.

## How "Save Contact" works

- **Android:** opens the phone's Contacts app with name, phone, email, company, job title and address filled in. (Android can't receive the photo or website this way.)
- **iPhone / iPad:** opens a contact file (vCard) that includes the photo, which shows the "Create New Contact" screen.
- **Computers:** downloads the contact file.

The small **Download contact file** link under the button always downloads the vCard (with photo). Use it if the main button doesn't work in a particular browser.

## Brand fonts and logo

The card uses Gold Aces navy and gold. Its fonts are Montserrat (names, buttons) and Poppins (text), standing in for the brand fonts Bernoru and Flama, which are paid fonts. To switch to the brand fonts, add licensed web font files named exactly `fonts/bernoru.woff2` and `fonts/flama.woff2`; the card picks them up automatically.

The logo was made from a small 400px image, so it can look slightly soft on high-resolution phones. For a sharper card, replace `assets/gold-aces-logo-light.png` with a larger (1200px+) transparent PNG of the logo with light lettering. The spade in the card corners is drawn in `assets/spade.svg`.

## Test it on your computer

The page loads `contacts.json` with JavaScript, which browsers block when you open `index.html` directly from disk. Run a small local web server from the repository folder instead:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html?id=gold-aces-oneal>.

## Enable GitHub Pages

In the repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the branch containing these files and the `/ (root)` folder, then save. Wait for GitHub Pages to publish before testing a card URL.
