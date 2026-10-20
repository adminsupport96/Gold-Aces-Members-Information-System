# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Customers of Gold Aces Car Display Center, at the moment they buy a car. A staff member hands over their contact (NFC tag or shared link), and the customer opens it on their phone to save that person for after-sales follow-up.

## Product Purpose
A digital business card per staff member. Success is the customer saving the contact to their phone in one tap, with name, role, phone, email and photo intact.

## Operating Context
- Opened on the customer's own phone (Android or iPhone), usually at the dealership right after the purchase, often in their default browser after an NFC tap.
- One page per person: `index.html?id=<id>`. Contacts live in `contacts.json`; photos in `images/`.
- Older direct `.vcf` URLs in `contacts/` are kept so NFC tags already written keep working.

## Capabilities and Constraints
- Static site on GitHub Pages: plain HTML, CSS and JavaScript, no backend, no build step.
- "Save Contact" uses a generated vCard 3.0 (with photo): opened as a data: URL on iPhone/iPad, downloaded on Android and computers (followed by a "open the file" message). It is the card's only save control: a separate "Download contact file" link was dropped so there is one button whose behavior depends on the device. An Android Contacts intent link was tried and dropped: Chrome on Android won't open the Contacts insert screen from a web page.
- Contacts are maintained by hand by non-developers editing `contacts.json`, so any field except id and names may be missing.

## Brand Commitments
- Name: Gold Aces (Gold Aces Car Display Center).
- Logo: gold spade enclosing a car, with a serif "GOLD ACES" wordmark. Source file is 400x133 PNG on white with black lettering; a light variant for dark backgrounds is derived from it.
- Brand colors (user-supplied): main #061b30 / #1d2b50 / #05113e; sub #e3b865 / #fcd77b; highlight #ffc619.
- Brand fonts (user-supplied): main Bernoru / Flama (licensed, not yet available as web fonts); sub Montserrat / Poppins. Montserrat and Poppins are used until licensed web font files are added.

## Evidence on Hand
- One real contact in `contacts.json`. No staff photos yet.
- No testimonials, ratings or claims; none should be invented.

## Product Principles
1. Saving the contact is the job; nothing competes with the Save Contact button.
2. It must work on whatever phone the customer holds, with a fallback when the main path fails.
3. The card carries the dealership's brand so the saved person is recognisable later.
4. Adding a person stays a JSON edit and a photo upload.
