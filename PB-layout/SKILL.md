---
name: pb-layout
description: >
  **Proces Bouwers (PB) Huisstijl Layout**: Apply the Proces Bouwers corporate identity to Word documents (.docx). This includes the PB color palette (navy #23296C, gold), Roboto font family, PB beeldmerk in the header, cover page with background image, and consistent heading/paragraph/table styling. Use this skill whenever creating or formatting documents for Proces Bouwers — including omgevingsscans, adviesrapporten, proposals, and any other PB-branded deliverables. Trigger on any mention of "PB layout", "PB stijl", "PB huisstijl", "Proces Bouwers", or when creating documents that should follow PB branding.
---

# Proces Bouwers (PB) Document Layout

This skill defines the Proces Bouwers corporate identity for Word documents based on the official PB Template. Use it alongside the `docx` skill — this skill provides the **what** (brand specs), the docx skill provides the **how** (technical implementation).

## When to Use

Apply this layout whenever creating or restyling documents for Proces Bouwers. This includes omgevingsscans, adviesrapporten, project proposals, and any document that should carry PB branding.

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Navy** | `#23296C` | Primary brand color. Use for: Heading 1–4, TOC entries, table headers, accents |
| **Gold** | `#D4A96A` | Warm accent. Use for: decorative lines, highlights, premium accents |
| **Gold Light** | `#F0DBB5` | Soft gold. Use for: subtle backgrounds, table cell shading for highlights |
| **Gold Pale** | `#FDF6EC` | Very light gold. Use for: alternate row shading, info boxes |
| **PB Light** | `#EAEDFA` | Light blue-grey. Use for: alternate row shading in tables, section backgrounds |

### Score Colors (for Omgevingsscans)

| Score | Border/Text Color | Background |
|-------|-------------------|------------|
| **Niet goed** (Not good) | `#C53030` (text), `#FC8181` (border) | `#FFF5F5` |
| **Te optimaliseren** (Can be optimized) | `#B7791F` (text), `#F6AD55` (border) | `#FFFBEB` |
| **Goed** (Good) | `#276749` (text), `#68D391` (border) | `#F0FFF4` |

## Typography

| Element | Font | Size (pt) | Weight | Color |
|---------|------|-----------|--------|-------|
| **Document default** | Roboto | 11 | Normal | Black (default) |
| **Heading 1 (Kop1)** | Roboto | 20 | Bold | `#23296C` (Navy) |
| **Heading 2 (Kop2)** | Roboto | 16 | Normal | `#23296C` (Navy) |
| **Heading 3 (Kop3)** | Roboto | 12 | Normal | `#23296C` (Navy) |
| **Heading 4 (Kop4)** | Roboto | 10 | Italic | `#23296C` (Navy) |
| **Body text** | Roboto | 11 | Normal | Default (black) |
| **TOC Level 1** | Roboto | 11 | Bold | `#23296C` (Navy) |
| **TOC Level 2** | Roboto | 11 | Normal | `#23296C` (Navy), indent 240 twips |
| **TOC Level 3** | Roboto | 11 | Normal | Default, indent 480 twips |
| **Caption / Bijschrift** | Roboto | 9 | Italic | Theme text2 |
| **Table header** | Roboto | 8.5–9 | Bold, UPPERCASE | White on Navy |
| **Cover title (TitelWit)** | Avenir Book (or theme major) | 49 | Bold | White |
| **Cover subtitle (OndertitelWit)** | Avenir Book (or theme minor) | 20 | Normal | White |

### Heading Style Details

- **Heading 1**: Navy `#23296C`, bold, 20pt (40 half-points), `outlineLevel: 0`, spacing before 360 twips, spacing after 80 twips. Used for main sections.
- **Heading 2**: Navy `#23296C`, normal weight (not bold), 16pt (32 half-points), `outlineLevel: 1`, spacing before 160 twips, after 80 twips. **No left border** — clean style.
- **Heading 3**: Navy `#23296C`, normal weight, 12pt (24 half-points = same as default size), `outlineLevel: 2`, spacing before 160, after 80 twips.
- **Heading 4**: Navy `#23296C`, italic, 10pt (20 half-points), `outlineLevel: 3`, spacing before 80, after 40 twips.
- **Titelvanboek / "Titel verslag"**: Character style, Roboto bold 16pt, navy `#23296C`, letter-spacing 5.

## Page Layout

- **Paper size**: A4 (11906 x 16838 DXA) — this is the default for docx-js
- **Margins**: Top 1440 DXA (1 inch), Right 1440 DXA, Bottom 1440 DXA, Left 1440 DXA
- **Default paragraph spacing**: After 160 twips, line 278 (auto)
- **Language**: Dutch (nl-NL)

## Cover Page

The cover page uses a full-page background image (`assets/Cover.jpeg`) with text boxes overlaid. Key elements:

1. **Background image**: Full-width cover photo (image1.jpeg from template) displayed as the top ~60% of the page
2. **Title text box**: Anchored over the image, centered. Uses `TitelWit` style (white, large, bold, Avenir Book font)
3. **Subtitle text box**: Below the title, also white, centered. Uses `OndertitelWit` style
4. **"PROCES BOUWERS" vertical text**: Large golden/tan text rotated 90° on the right side of the cover image
5. **Document info section**: Below the image on the lower part of the first page with fields like:
   - Mentor: [name]
   - Aanleiding: [type of scan]
   - Uitgevoerd: [date]
   Uses `DocumentinfoWit` style (28 half-points, white, theme major font)

**Note**: The cover page in the template uses complex anchored shapes and text boxes. When generating documents programmatically with `docx-js`, a simplified cover page approach may be needed (see Document Structure section).

### Cover Page Styles (Custom)

```
TitelWit: Based on Title, white color, 49pt (98 half-points), line-height 1000 exact, Avenir Book / theme major font
OndertitelWit: Based on Subtitle, white color, 20pt (40 half-points), line-height 240 auto
DocumentinfoWit: Based on Normal, white color, 14pt (28 half-points), line-height 340 exact, theme major font
```

## Header

The header contains the Proces Bouwers **beeldmerk** (the "Pb" icon from `assets/Beeldmerk.png`), positioned in the **top-right** corner of the page.

- **Image dimensions**: width 342900 EMU (≈ 0.38 inch / 27pt), height 553085 EMU (≈ 0.61 inch / 43.5pt)
- **Position**: Relative to margin, horizontal offset 5970905 EMU (right side), vertical offset -696595 EMU (above margin)
- **Wrap**: Square, both sides
- **First page**: Different header (cover page has no header)

When creating new documents with `docx-js`, place the beeldmerk as an `ImageRun` inside the header:

```javascript
const beeldmerkData = fs.readFileSync("<path-to-skill>/assets/Beeldmerk.png");

headers: {
  default: new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({
            type: "png",
            data: beeldmerkData,
            transformation: { width: 27, height: 44 }, // ~0.38" x 0.61" at 72dpi
            floating: {
              horizontalPosition: {
                relative: HorizontalPositionRelativeFrom.MARGIN,
                offset: 5970905,
              },
              verticalPosition: {
                relative: VerticalPositionRelativeFrom.MARGIN,
                offset: -696595,
              },
              wrap: {
                type: TextWrappingType.SQUARE,
                side: TextWrappingSide.BOTH_SIDES,
              },
            },
            altText: { title: "Proces Bouwers", description: "PB Beeldmerk", name: "Beeldmerk" },
          }),
        ],
      }),
    ],
  }),
  first: new Header({ children: [new Paragraph({ children: [] })] }), // Empty for cover page
}
```

**Important**: You need to import `HorizontalPositionRelativeFrom`, `VerticalPositionRelativeFrom`, `TextWrappingType`, and `TextWrappingSide` from the `docx` package. Set `titlePage: true` in section properties so the first page uses the empty header.

## Footer

The footer has two elements:
1. **Page number**: Right-aligned using a frame (`framePr`)
2. **Tagline**: Centered text "Meer grip op AFAS? Ontdek onze inzichten via procesbouwers.nl" in small font (8pt)

The first page (cover) uses a separate footer with the document info section instead.

```javascript
footers: {
  default: new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Meer grip op AFAS? Ontdek onze inzichten via procesbouwers.nl",
            font: "Roboto", size: 16, // 8pt
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({
            children: [PageNumber.CURRENT],
            font: "Roboto", size: 22, // 11pt
          }),
        ],
      }),
    ],
  }),
  first: new Footer({ children: [new Paragraph({ children: [] })] }), // Different for cover page
}
```

## Tables

Tables in PB documents follow this styling:

- **Width**: Full content width (9026 DXA for A4 with 1" margins)
- **Header row**: Background `#23296C` (Navy), text white, bold, uppercase, 8.5–9pt
- **Body rows**: Alternating white / `#EAEDFA` (PB Light) or `#FDF6EC` (Gold Pale)
- **Borders**: Light grey `#E2E8F0`, thin (1pt)
- **Cell padding**: top/bottom 80 DXA, left/right 120 DXA
- **Always use `WidthType.DXA`**, never percentage

### Score Table (Omgevingsscan-specific)

For omgevingsscans, each variable gets a score displayed as a colored badge/cell:

| Score | Cell Background | Text Color | Border Color |
|-------|----------------|------------|--------------|
| Niet goed | `#FFF5F5` | `#C53030` | `#FC8181` |
| Te optimaliseren | `#FFFBEB` | `#B7791F` | `#F6AD55` |
| Goed | `#F0FFF4` | `#276749` | `#68D391` |

## Document Structure (Omgevingsscan Template)

A typical omgevingsscan follows this structure:

1. **Cover page**: Full-page background image with title ("QUICSCAN HRM" or "Omgevingsscan AFAS [Klantnaam]"), subtitle (client name), and document info. First page uses `titlePage: true` with separate header/footer.
2. **Page break**
3. **Table of Contents** ("Inhoudsopgave") with heading levels 1–3 in navy-colored TOC styles
4. **Page break**
5. **Verwijzingen page** (References): Lists actions, decisions, and wishes with colored category headers:
   - "Acties klant e/o mentor:" (gold colored header)
   - "Besluiten e/o afspraken:" (gold colored header)
   - "Wensen:" (gold colored header)
6. **Page break**
7. **Module sections** (Kop1): e.g., "Dit is de hoofdtitel van het onderwerp (Kop1)"
   - **Sub-sections** (Kop2): e.g., "Dit is de subtitel van het onderwerp"
     - **Detail sections** (Kop3): e.g., "Dit zijn de deelonderwerpen"
     - Body text
     - Action items (italic, "Titel verslag" style)
     - Optional: embedded screenshot/image

## Assets

| File | Description |
|------|-------------|
| `assets/Beeldmerk.png` | PB "Pb" icon (2166×3630px) — used in page header, top-right |
| `assets/Cover.jpeg` | Cover page background photo (1387×1796px) |
| `assets/Logo.png` | Full PB logo with text (for use on cover page or standalone) |
| `assets/Logo wit.png` | White version of the full PB logo |

## Checklist

When applying PB layout, verify:

- [ ] Beeldmerk in header top-right (from `assets/Beeldmerk.png`)
- [ ] Cover page has no header (use `titlePage: true`)
- [ ] Navy-themed headings (Heading 1–4 in `#23296C`)
- [ ] Heading 1 is bold; Heading 2 is NOT bold (clean style, no left border)
- [ ] Heading 3 same size as body text; Heading 4 is italic and smaller
- [ ] Footer with "Meer grip op AFAS? Ontdek onze inzichten via procesbouwers.nl" centered + page number right
- [ ] TOC uses navy-colored entries (level 1 bold, level 2 indented, level 3 further indented)
- [ ] Tables use navy header row + PB Light alternating rows
- [ ] Score colors match the red/orange/green system
- [ ] Document language set to nl-NL
- [ ] Font: Roboto throughout (Avenir Book for cover page titles)
- [ ] A4 page size with 1-inch margins
