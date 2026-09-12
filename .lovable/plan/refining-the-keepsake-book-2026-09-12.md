# Refining the keepsake book

Keep the cover identity exactly as it is — deep maroon, antique gold type, fine double gold border, Devanagari title dominant — and raise the craft level of the cover and every page inside.

## Cover refinements

- Devanagari title reduced about 15–20% and given noticeably more space above and below.
- English transliteration stays smaller with wider, more generous letter spacing.
- Subtitle line reset: tighter line length, softer tone, better spacing from the title.
- The small centre divider is replaced with a fine, restrained ornamental rule (thin gold line work with one small motif) — no mandala, no paisley, no florals.
- A very faint cloth/paper weave added to the maroon so it reads as bound fabric rather than flat colour.
- Gold type gets a subtle foil quality: a slight sheen gradient and hairline shadow so it catches light instead of looking like plain yellow text.
- Bottom Gujarati line changed to "એક નાની યાદોની ડાયરી".

## Opening the book

Opening the cover becomes a moment: the maroon board swings away and the warm ivory paper is revealed underneath, with the shadow of the lifted cover falling across the first page and settling.

## Inside pages

A shared paper treatment across all pages — warm cream stock, dark brown text, muted maroon accents, antique gold hairlines, faint blotches and edge wear so no two pages look machine-identical, and soft shadows near the spine.

Recurring physical props: polaroids with handwritten captions, washi tape in muted saffron and green, folded notes, envelopes, small ornamental corner marks.

## One interaction per chapter

| Chapter | What you can do |
| --- | --- |
| 01 शुरुआत | A polaroid that develops when it comes into view |
| 02 बातें | A folded note that unfolds on tap |
| 03 यादें | Photos that flip over to show the note on the back |
| 04 पल | A timeline you scrub through, one moment at a time |
| 05 मुस्कान | Lines that get "ticked" in handwriting as you tap them |
| 06 एक याद खोलो | Envelopes that open with the flap lifting and a card sliding out |
| 07 Mumbai | A postcard you flip between the picture and the message |
| 08 थोड़ા સા મજા (quiz) | A quiz with playful hand-drawn feedback per answer |
| 09 ख़ास | Cards you peel back one at a time |
| 10 आगे... | A letter that unfolds from a sealed sheet |

All copy stays as placeholders until you send the real memories.

## Turning pages

- Desktop: two-page spread, with the turning page curving and casting a moving shadow on the sheet beneath instead of flipping flat.
- Mobile: one page at a time, swipe either direction, tap the left or right edge, with a matching curl and shadow.
- Both keep momentum-feeling easing so a turn feels weighted, not snappy.

## Technical notes

- Cover foil: layered gold gradient text fill plus a low-opacity highlight sweep; cloth texture as a tiled CSS weave over the existing maroon token — no new colour tokens.
- Page-turn upgrade: keep the current 3D leaf model, add a gradient overlay on each leaf face whose opacity tracks the turn so light rolls across it, plus a shadow element under the moving leaf.
- Interactions live in small per-page components under `src/components/book/` and hold their own state; nothing is persisted, so no backend is needed.
- Reduced-motion preference respected: transitions shorten to simple cross-fades.
