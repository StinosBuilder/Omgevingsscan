# Omgevingsscan

Interactieve HTML-tool waarmee consultants een omgevingsscan uitvoeren bij klanten. Per bedrijfsproces (CRM, HRM, Financieel, etc.) worden variabelen gescoord en automatisch omgezet naar een professioneel Word-document in een professionele huisstijl.

## Hoe te gebruiken

Open `omgevingsscan.html` in een browser. Alles draait lokaal — er is geen server nodig.

1. Vul de klantnaam in en voeg variabelen toe per categorie
2. Geef elke variabele een score: *Niet goed*, *Te optimaliseren* of *Goed*
3. Vul per score de bijbehorende tekst in en koppel eventueel afbeeldingen
4. Vink Quick Wins aan waar van toepassing
5. Klik op **Document genereren** voor een preview en download als Word-bestand

## Mapstructuur

| Bestand / map | Omschrijving |
|---|---|
| `omgevingsscan.html` | De tool zelf (open in browser) |
| `docx.umd.js` | Docx-bibliotheek voor Word-export |
| `Background.jpg` | Achtergrondafbeelding UI |
| `Logo wit.png` | Wit logo voor de donkere header in de tool |
| `Logo PB blauw.png` | Blauw logo voor documenten |
| `Logo.png` | Beeldmerk (vierkant) |
| `VBA.txt` | VBA-macro referentie |
| `Omgevingsscan_PB.docx` | Voorbeeld van een gegenereerd document |
| `Stappenplan Omgevingsscan App.docx` | Stappenplan voor verdere ontwikkeling |
| `Completed scans/` | Opgeslagen voltooide scans |
| `Huidige scan/` | Werkbestanden huidige scan |
| `PB-layout/` | Huisstijl-assets en brand guide |
| `backup_2026-02-28/` | Backup van eerdere versie |

## Belangrijkste features

- Score-systeem met kleurbadges (rood / oranje / groen)
- Quick Win checkbox per variabele
- Afbeeldingen koppelen per variabele (enkelvoudig + bulk)
- Categorie-filters voor overzicht
- Bibliotheek: scans opslaan en later terugladen
- Word-export in MHTML-formaat met ingesloten afbeeldingen en PB-logo
- Automatische `[klant]`-vervanging in teksten
- Alles lokaal in de browser (localStorage), geen account nodig

## Huisstijl (PB Layout)

De tool en het gegenereerde document gebruiken de huisstijl:

- **Navy** `#1E2E7A` — titels, koppen, scheidslijnen
- **PB Blue** `#3251C4` — accenten, kop-borders, Quick Win badge
- **Font** — Segoe UI (primair), Calibri (fallback)
- **Score kleuren** — Rood (#c0392b), Oranje (#e67e22), Groen (#27ae60)

Zie `PB-layout/brand-colors.txt` voor het volledige kleurenpalet.
