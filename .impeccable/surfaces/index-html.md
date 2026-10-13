---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["styles.css","app.js"]
---

# Business card page (index.html)

Scope: the single card page, `index.html?id=<id>`, in Operate mode. Customers of Gold Aces Car Display Center open it on their phone right after buying a car; the job is to save the staff member's contact in one tap, then call, email or visit the website later.

Constraints: static HTML/CSS/JS, no build step; contacts from contacts.json with any field except id and names optional; brand palette, logo and fonts pinned in PRODUCT.md.

Unresolved: real staff photos; licensed Bernoru/Flama web fonts; a vector logo.

## Direction contract

THESIS: The card is a dealt ace. A navy lacquered playing card with gold-foil corner indices that carry the staff member's initials and the spade. It refuses the header-band-plus-list e-card that every contact service ships.

OWN-WORLD: A deep #05113e table under one card. Card face #1d2b50 into #061b30, a double gold frame (outer foil line, inner hairline), rounded playing-card corners. Indices in heavy display caps, #fcd77b, with the logo's spade beneath. The Save Contact control is a gold-foil pill (#fcd77b into #e3b865), #ffc619 reserved for focus and the foil's brightest glint. Display Bernoru, falling back to Montserrat; body Flama, falling back to Poppins. Tabler outline icons at 1.5 stroke.

STORY: The customer recognises Gold Aces at once, sees whose card it is, taps Save Contact, and the phone's add-contact screen opens. Later they call, email or open the website from the same card.

FIRST VIEWPORT: At 390x844 the card fills the screen inside a 14px table margin. Top-left index: initials over the spade; bottom-right, the same rotated 180 degrees. Centred: logo (about 160px), 132px photo in a gold ring, name 28px, role, company in gold. Then Save Contact as a 54px full-width pill, the "Download contact file" link under it, a row of Call / Email / Website tiles, and the details as small selectable fine print. Signature move: the deal. The card slides up onto the table with a slight rotation settling flat, then a single foil glint sweeps across the gold. While loading, and when a contact is not found, the card lies face-down (gold lattice back with the spade).

FORM: IMPECCABLE'S PICK, own grounded candidate 1 of 7 (the ace of spades playing card), chosen by the user over the assigned Engraved Certificate. Seed key d9717f5c.

DECISION RECORD: The decision page's server was reaped by the harness twice, and the answer file it left reads "assigned". The round was then re-asked through the structured question tool ("Which direction should the Gold Aces card take?"), and the user answered: "The Gold Ace". That later, explicit answer is the binding choice.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
