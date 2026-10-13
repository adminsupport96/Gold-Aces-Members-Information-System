---
name: Gold Aces
description: A staff member's business card, dealt as a navy-and-gold ace of spades onto a navy table.
colors:
  navy-deep: "#05113e"
  navy: "#061b30"
  navy-light: "#1d2b50"
  table-glow: "#0c1f5c"
  gold: "#e3b865"
  gold-light: "#fcd77b"
  highlight: "#ffc619"
  ink: "#f6f3ec"
  mist: "#c3cadb"
  foil-line: "rgb(252 215 123 / 0.55)"
  foil-hair: "rgb(252 215 123 / 0.22)"
typography:
  display:
    fontFamily: "Bernoru, Montserrat, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  index:
    fontFamily: "Bernoru, Montserrat, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Bernoru, Montserrat, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  button:
    fontFamily: "Bernoru, Montserrat, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
  label:
    fontFamily: "Bernoru, Montserrat, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Flama, Poppins, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  fine-print:
    fontFamily: "Flama, Poppins, system-ui, sans-serif"
    fontSize: "0.84375rem"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "\"tnum\", \"lnum\""
  caption:
    fontFamily: "Flama, Poppins, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  card: "22px"
  card-frame: "15px"
  tile: "14px"
  pill: "999px"
  round: "50%"
spacing:
  table-margin: "14px"
  table-margin-wide: "40px"
  frame-inset: "8px"
  index-inset: "22px"
  face-x: "36px"
  face-y: "84px"
  section-gap: "22px"
  tile-gap: "10px"
components:
  card-face:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "84px 36px"
  card-back:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "48px 32px"
  button-save:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.navy-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: "56px"
    width: "320px"
  link-download:
    textColor: "{colors.mist}"
    typography: "{typography.caption}"
    padding: "6px 10px"
  link-download-hover:
    textColor: "{colors.ink}"
  tile-action:
    backgroundColor: "rgb(255 255 255 / 0.025)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    height: "72px"
    width: "100px"
  tile-action-hover:
    backgroundColor: "rgb(252 215 123 / 0.06)"
  corner-index:
    textColor: "{colors.gold-light}"
    typography: "{typography.index}"
  portrait:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.gold-light}"
    rounded: "{rounded.round}"
    size: "132px"
---

# Design System: Gold Aces

## Overview

**Creative North Star: "The Dealt Ace"**

Every surface is a single playing card lying on a navy card table. The card is a lacquered navy face framed by gold foil, marked in its corners like an ace: the holder's initials over the Gold Aces spade, repeated upside down in the opposite corner. Content stacks down the centre of the card in the order you would read a card: house mark, portrait, name, then the one gold action, then small print. Nothing sits outside the card except the table.

The world is quiet and dense in the way a printed card is dense: one column, centred, generous margins, gold used as foil and ink rather than as fill, except for the single Save Contact pill. Motion follows the card itself. It is dealt onto the table, turns face-up, and one glint of light runs across the foil. When there is nothing to show (loading, contact not found), the card lies face-down and shows its printed lattice back.

The palette, the spade, the logo and the font families are brand commitments pinned in PRODUCT.md, not choices of this system. The system decides how they are used: navy as table and card, gold as foil.

**Key Characteristics:**
- One card per screen, on a navy table, with rounded playing-card corners and a double gold frame.
- Corner indices: heavy display initials over the spade, top-left and rotated 180 degrees bottom-right.
- Gold is foil: hairlines, rings, index ink, icon strokes; the only gold fill is the Save Contact pill.
- A face-down card back (lattice inside the inner frame, spade emblem) for every empty or error state.
- Motion is the deal, the flip and one glint, all removed under reduced motion.

## Colors

Two navies for table and card, two golds for foil, one bright yellow kept back for focus and the glint.

### Primary
- **Foil Gold Light** (#fcd77b): the foil itself. Corner index initials, the spade asset fill, the portrait ring, tile icon strokes, the top stop of the Save Contact gradient, and (at reduced alpha) both frame lines.
- **Foil Gold** (#e3b865): the deeper, warmer foil. The bottom stop of the Save Contact gradient, the company line under the role, the lattice on the card back (at 9% alpha), and the scrollbar thumb.

### Secondary
- **Ace Highlight** (#ffc619): reserved. Keyboard focus outline and the brightest stop of the foil glint, nothing else.

### Neutral
- **Table Navy** (#05113e): the table behind the card, the theme color, the Save Contact label, the portrait well behind photos and initials.
- **Table Glow** (#0c1f5c): the light pooled on the table above the card; centre of the table's radial gradient, fading to Table Navy by 62%.
- **Card Navy** (#061b30): the card's lacquer at its lower end, and the gap ring between portrait and frame rings.
- **Card Navy Light** (#1d2b50): the card's lacquer at its upper-left end (160-degree gradient into Card Navy by 62%).
- **Card Ink** (#f6f3ec): names, titles and tile labels. A warm off-white, never pure white.
- **Mist** (#c3cadb): role line, card-back detail, download link, small-print details.
- **Foil Line** (gold light at 55%): the outer card edge and hovered tile borders.
- **Foil Hair** (gold light at 22%): the inner printed frame and the outermost hairline ring around portrait and emblem.

### Named Rules
**The Foil Not Paint Rule.** Gold appears as line, ring, ink and icon stroke. The Save Contact pill is the only gold-filled surface on a card; a second gold fill competes with it.

**The Reserved Highlight Rule.** Ace Highlight (#ffc619) is for keyboard focus and the glint's brightest stop. It is never a text, fill or border colour.

## Typography

**Display Font:** Bernoru (with self-hosted Montserrat, then system-ui)
**Body Font:** Flama (with self-hosted Poppins, then system-ui)

**Character:** Bernoru/Montserrat carries everything that names or acts (initials, name, buttons, tile labels) in heavy weights; Flama/Poppins carries everything that describes, at small sizes in Mist. Until licensed Bernoru and Flama web fonts are added to /fonts/, the card renders in Montserrat (variable, 500 to 800) and Poppins (400, 500, 600).

### Hierarchy
- **Index** (800, 1.5rem, line-height 1, +0.02em): corner initials in Foil Gold Light. The same face, at 2.6rem and 700, fills the portrait when there is no photo.
- **Display** (700, 1.75rem, 1.15, -0.01em, balanced wrap): the person's name, the one headline per card.
- **Title** (700, 1.25rem, 1.25): the card-back message ("Contact not found").
- **Button** (700, 1.0625rem, 1): the Save Contact label.
- **Label** (600, 0.75rem, 1, +0.02em): Call / Email / Website tile labels.
- **Body** (400, 0.9375rem, 1.45): role line and card-back detail (detail capped at 26ch).
- **Caption** (500, 0.8125rem): the company line in Foil Gold; the download link uses the same size at 400 in Mist.
- **Fine Print** (400, 0.84375rem, 1.75, tabular lining numerals): the contact details list, selectable and copyable.

### Named Rules
**The Names Speak Display Rule.** Anything that names a person or an action is set in the display stack; anything that describes is set in the text stack, smaller and in Mist.

## Layout

A single centred column on a single card. The table is a full-viewport grid that centres the card with a 14px margin on phones (respecting safe-area insets) and 40px from 640px up. The card is full width up to 420px and exactly the screen height minus the table margin (`--card-h`); from 640px it is capped at 760px tall.

**The Fits-One-Screen Rule.** The card never makes the page scroll on an upright phone or a laptop. Every size on the card is written in `--u`, a card pixel equal to 1px on a 390x844 phone and scaled down by the card's height (`--card-h / 800`) and width (`(100vw - 28px) / 362`). app.js then lowers `--fit` until a long name or address fits. Text and tap targets keep floors (12px small print, a 46px Save Contact, 52px tiles), and `--u` stops at 0.55px, below which the page scrolls (a phone held sideways). Sizes below are at `--u` = 1px.

Inside the face, content is a centred flex column with 60px top and 72px bottom padding (clearing the corner indices) and 36px sides. Corner indices sit 22px in from the card edge. The rhythm down the column: logo (168px wide), 22px, portrait, 20px, name, 8px, role, 3px, company, 24px, Save Contact, 6px, download link, 20px, tiles, 20px, details. Save Contact and the tile row both cap at 320px wide; tiles are up to 100px each with 10px gaps, centred as a group, so one, two or three tiles all read as a set.

**The One Column Rule.** Every element is centred on the card's vertical axis; the only things off-axis are the two corner indices.

## Elevation & Depth

The card is the only lifted object; it casts a long, soft shadow onto the table. Depth on the card itself comes from the lacquer gradient (Card Navy Light into Card Navy) and from concentric rings, not from stacked shadows. The Save Contact pill carries a faint gold underglow and an inner top highlight, as foil catches light.

### Shadow Vocabulary
- **Card on table** (`box-shadow: 0 30px 60px -24px rgb(0 0 0 / 0.65), 0 2px 6px rgb(0 0 0 / 0.35)`): both sides of the card. Nothing else casts a shadow onto the table.
- **Foil pill** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.45), 0 10px 22px -10px rgb(227 184 101 / 0.6)`): Save Contact only.
- **Ringed medallion** (`box-shadow: 0 0 0 2px #fcd77b, 0 0 0 7px #061b30, 0 0 0 8px rgb(252 215 123 / 0.22)`): the portrait. The card-back emblem uses the same construction with a 1px Foil Line inner ring.

### Named Rules
**The One Lifted Card Rule.** Only the card casts a shadow onto the table. Elements on the card are printed onto it and use rings and lines, not drop shadows; the Save Contact pill's gold underglow is the single exception.

## Shapes

Playing-card geometry. The card has 22px corners; its inner printed frame sits 8px inside at 15px corners, so the two lines stay concentric. Everything else is either a full pill (Save Contact), a soft 14px tile, or a circle (portrait, card-back emblem). The spade is the house mark: an SVG asset in Foil Gold Light used in the corner indices (18px wide), the card-back emblem (44px) and the favicon.

**The Double Frame Rule.** Every card side carries both frame lines: the outer Foil Line edge and the inner Foil Hair frame at 8px inset. The card back's lattice is printed only inside the inner frame, leaving a plain border.

## Components

### Card (face and back)
Two sides of one card in the same grid cell, so the card is as tall as its taller side.
- **Corner Style:** 22px card corners, 15px inner frame.
- **Background:** 160-degree lacquer gradient from Card Navy Light to Card Navy at 62%.
- **Shadow Strategy:** Card on table (see Elevation & Depth).
- **Border:** 1px Foil Line edge plus 1px Foil Hair inner frame at 8px inset.
- **Internal Padding:** face 84px by 36px; back 48px by 32px.
- **Motion:** the deal (700ms, from translateY -40px and -3 degrees, settling flat), the flip (rotateY 180 degrees over 850ms, settled at 950ms so 3D transforms are dropped), then one glint (1200ms after a 600ms delay, a 105-degree band of pale gold screened across the face). All share the ease-out curve `cubic-bezier(0.16, 1, 0.3, 1)`. Under `prefers-reduced-motion: reduce` there is no deal, flip or glint; the face simply appears.

### Card Back (loading and not found)
- **Style:** the lattice (two 45-degree hairline grids in Foil Gold at 9%, 15px pitch) inside the inner frame, with a 116px ringed emblem holding the spade at its centre.
- **States:** loading shows the emblem alone with a visually hidden "Loading contact" message in a polite live region; not found adds a Title-weight message and a Mist detail line.

### Corner Index
- **Style:** initials in Index type and Foil Gold Light over an 18px spade, 7px apart; top-left at 22px inset, and the same block rotated 180 degrees bottom-right. Decorative to assistive tech.

### Portrait
- **Style:** a 132px circle in Table Navy with the ringed medallion shadow; the photo fills it with object-fit cover, or the initials appear in Foil Gold Light at 2.6rem.

### Buttons
- **Shape:** full pill (999px), at least 56px tall, full width up to 320px.
- **Primary (Save Contact):** vertical foil gradient from Foil Gold Light to Foil Gold, Table Navy label in Button type, a 22px outline user-plus icon 10px before the label, 14px by 24px padding.
- **Hover / Focus / Active:** brightness 1.05 on hover (hover-capable devices only); a 2px Ace Highlight focus outline at 3px offset; press scales to 0.98 at brightness 0.95.
- **Not ready:** before the contact file is prepared the link has no href and shows at 55% opacity, ignoring taps.
- **Secondary (Download contact file):** a text link in Mist, Caption size, underlined at 50% Mist with 3px offset, 6px by 10px padding for a larger target; Card Ink on hover. Same not-ready treatment.

### Action Tiles
- **Style:** 72px-tall tiles, 14px corners, 1px border in Foil Gold Light at 32%, a 2.5% white wash, a 22px outline icon in Foil Gold Light over a Label-type caption in Card Ink.
- **States:** hover raises the border to Foil Line and the wash to gold at 6%; press scales to 0.97 with gold at 8%. A tile is omitted entirely when the contact lacks that field.

### Fine Print
- **Style:** the contact details as an unmarked centred list in Fine Print type and Mist, wrapping anywhere so long emails never overflow.

### Icons
- Tabler outline icons, inline SVG, 1.5 stroke (1.8 inside the Save Contact pill), round caps and joins, coloured by currentColor.

## Do's and Don'ts

### Do:
- **Do** keep one card per screen, centred on the navy table, with the double gold frame on every side of it.
- **Do** mark the card with corner indices (initials over the spade, mirrored bottom-right) whenever it shows a person.
- **Do** use the face-down card back, lattice and spade emblem, for loading, empty and error states.
- **Do** keep gold as foil: lines, rings, index ink, icon strokes; one gold-filled pill per card.
- **Do** set names and actions in the display stack and descriptions in the text stack in Mist.
- **Do** give every motion a reduced-motion path in which the card simply appears face-up.

### Don't:
- **Don't** use Ace Highlight (#ffc619) for text, fills or borders; it is the focus ring and the glint only.
- **Don't** add a second gold-filled control or let anything compete with Save Contact.
- **Don't** put drop shadows on elements printed on the card other than the Save Contact underglow; only the card casts a shadow onto the table.
- **Don't** use pure white text; Card Ink is the lightest text colour.
- **Don't** run the glint more than once per card, or loop any card motion.
- **Don't** swap the brand fonts or palette; they are pinned in PRODUCT.md, and Montserrat/Poppins stand in only until licensed Bernoru/Flama files are added.
