# Gold Aces Contact Files

This repository serves contact files directly. There is no landing page. Each `.vcf` file has its own URL and can be opened or saved by a compatible phone or browser.

## Current contact

After enabling GitHub Pages from the repository's root, the contact URL will be:

`https://YOUR-USERNAME.github.io/REPOSITORY/contacts/gold-aces-oneal.vcf`

For a user or organization site repository named `YOUR-USERNAME.github.io`, use:

`https://YOUR-USERNAME.github.io/contacts/gold-aces-oneal.vcf`

Write the URL for the contact you want onto its NFC tag. A direct link to the `.vcf` file lets the receiving device handle the contact file; the exact prompt or download behavior depends on the device and browser.

## Add another contact

1. Create another `.vcf` file inside `contacts/`, using a URL-friendly filename such as `contacts/jane-smith.vcf`.
2. Add the contact's details in vCard 3.0 format. Include `BEGIN:VCARD`, `VERSION:3.0`, `FN`, and `END:VCARD`; add fields such as `N`, `ORG`, `TITLE`, `EMAIL`, and `TEL` as needed.
3. Commit and push the new file. Its direct URL will be `https://YOUR-USERNAME.github.io/REPOSITORY/contacts/jane-smith.vcf`.

Each contact stays at its own URL, so you can encode a different contact file URL on each NFC tag.

## Enable GitHub Pages

In the repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the branch containing these files and the `/ (root)` folder, then save. Wait for GitHub Pages to publish before testing a contact URL.
