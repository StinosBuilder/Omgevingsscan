
// ── PB huisstijl & app-constanten ──
const COLOR_NAVY       = '#23296C';
const COLOR_GOLD       = '#D4A843';
const STORAGE_KEY      = 'omgevingsscan_data';
const DEBOUNCE_TIMEOUT = 400;
const TOAST_DURATION   = 3500;    // ms toast zichtbaar
const IMG_MAX_WIDTH    = 500;     // px max afbeelding breedte in docx
const IMG_MAX_HEIGHT   = 350;     // px max afbeelding hoogte in docx
const PAGE_WIDTH       = 11906;   // twips (A4 breedte)
const PAGE_HEIGHT      = 16838;   // twips (A4 hoogte)
const PAGE_MARGIN      = 1440;    // twips (~2.54 cm)

const DEFAULT_SCORES = [
  { key: 'Niet',  label: 'Niet in gebruik',    css: 'niet',  color: '#c53030', bg: '#fff5f5', border: '#fc8181', emoji: '🚫' },
  { key: 'Optim', label: 'Optimalisatiekansen', css: 'optim', color: '#b7791f', bg: '#fffbeb', border: '#f6ad55', emoji: '🔧' },
  { key: 'Goed',  label: 'Goed in gebruik',     css: 'goed',  color: '#276749', bg: '#f0fff4', border: '#68d391', emoji: '✅' },
];
const SCORE_COLORS = [
  { name: 'Rood',    color: '#c53030', bg: '#fff5f5', border: '#fc8181', css: 'sc-rood' },
  { name: 'Oranje',  color: '#b7791f', bg: '#fffbeb', border: '#f6ad55', css: 'sc-oranje' },
  { name: 'Groen',   color: '#276749', bg: '#f0fff4', border: '#68d391', css: 'sc-groen' },
  { name: 'Blauw',   color: '#2b6cb0', bg: '#ebf8ff', border: '#63b3ed', css: 'sc-blauw' },
  { name: 'Paars',   color: '#6b46c1', bg: '#faf5ff', border: '#b794f4', css: 'sc-paars' },
  { name: 'Grijs',   color: '#4a5568', bg: '#f7fafc', border: '#a0aec0', css: 'sc-grijs' },
];
const SCORE_EMOJIS = ['🚫','🔧','✅','⚡','📌','🔍','💡','⚠️','🎯','📊'];
let SCORES = DEFAULT_SCORES.map(s => ({...s}));
let SCORE_MAP = {};
let EMOJIS = {};
function rebuildScoreMaps() {
  SCORE_MAP = Object.fromEntries(SCORES.map(s => [s.key, s]));
  EMOJIS = Object.fromEntries(SCORES.map(s => [s.key, s.emoji || '•']));
}
rebuildScoreMaps();
const DEFAULT_CATEGORIES = ['Algemeen','CRM','HRM','Payroll','Financieel','Ordermanagement','Abonnementen','Projecten','Fiscaal'];
let CATEGORIES = [...DEFAULT_CATEGORIES];

let rows          = [];
let counter       = 0;
let headerTekst   = '';
let docHeaderTekst = '';
let docFooterTekst = '';
let activeCats    = new Set(CATEGORIES); // alle categorieën zichtbaar
let checklistItems = [];  // [{id, text, done}]
let checklistCounter = 0;
/* LIBRARY_KEY verwijderd */

function emptyTeksten() {
  return Object.fromEntries(SCORES.map(s => [s.key, '']));
}

// ── Opslaan & laden ──
function buildPayload() {
  return {
    seedVersion: 1,
    counter, headerTekst, docHeaderTekst, docFooterTekst,
    activeCats: [...activeCats],
    categories: [...CATEGORIES],
    scores: SCORES.map(s => ({...s})),
    checklistItems: checklistItems,
    checklistCounter: checklistCounter,
    rows: rows.map(r => ({ ...r, expanded: false }))
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buildPayload()));
}

async function loadData() {
  let p;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && JSON.parse(raw).seedVersion >= 1) {
      p = JSON.parse(raw);
    } else {
      try {
        const resp = await fetch('Template/Template.json');
        if (!resp.ok) throw new Error(`fetch mislukt: ${resp.status}`);
        p = await resp.json();
      } catch (fetchErr) {
        console.warn('Template/Template.json kon niet geladen worden, lege staat gebruikt.', fetchErr);
        p = { seedVersion: 1, counter: 0, headerTekst: '', docHeaderTekst: '', docFooterTekst: '',
              activeCats: [...DEFAULT_CATEGORIES], categories: [...DEFAULT_CATEGORIES],
              scores: DEFAULT_SCORES.map(s => ({...s})), checklistItems: [], checklistCounter: 0, rows: [] };
      }
    }
    counter        = p.counter        || 0;
    headerTekst    = p.headerTekst    || '';
    docHeaderTekst = p.docHeaderTekst || '';
    docFooterTekst = p.docFooterTekst || '';
    // Herstel categorieën
    if (p.categories && p.categories.length) CATEGORIES = p.categories;
    activeCats     = new Set(p.activeCats && p.activeCats.length ? p.activeCats : CATEGORIES);
    CATEGORIES.forEach(c => { if (!activeCats.has(c)) activeCats.add(c); });
    // Herstel scores
    if (p.scores && p.scores.length) {
      SCORES = p.scores.map(s => ({...s}));
      rebuildScoreMaps();
    }
    // Herstel checklist
    checklistItems   = p.checklistItems   || [];
    checklistCounter = p.checklistCounter || (checklistItems.length ? Math.max(...checklistItems.map(i=>i.id))+1 : 0);
    rows           = (p.rows || []).map(r => {
      const row = { categorie: 'Algemeen', ...r, expanded: false };
      // Migreer oud enkelvoudig afbeelding-veld naar array
      if (!Array.isArray(row.afbeeldingen)) {
        row.afbeeldingen = row.afbeelding ? [row.afbeelding] : [];
      }
      // Migreer tekstvelden voor nieuwe/aangepaste scores
      if (row.teksten) {
        SCORES.forEach(s => { if (!(s.key in row.teksten)) row.teksten[s.key] = ''; });
      }
      return row;
    });
  } catch(e) {
    // corrupt data → lege staat
    console.error('loadData fout:', e);
    counter = 0; headerTekst = ''; docHeaderTekst = ''; docFooterTekst = '';
    activeCats = new Set(CATEGORIES); rows = [];
  }

  const ht = document.getElementById('header-tekst');
  const dh = document.getElementById('doc-header-tekst');
  const df = document.getElementById('doc-footer-tekst');
  if (ht) ht.value = headerTekst;
  if (dh) dh.value = docHeaderTekst;
  if (df) df.value = docFooterTekst;

  renderCatFilter();
  renderTable();
}

// ── Update functies ──
function updateHeaderTekst(v)     { headerTekst    = v; debounceSave(); }
function updateDocTekst(part, v)  {
  if (part === 'header') docHeaderTekst = v;
  else                   docFooterTekst = v;
  debounceSave();
}

let saveTimer = null;
function debounceSave() { clearTimeout(saveTimer); saveTimer = setTimeout(saveData, DEBOUNCE_TIMEOUT); }

// ── Categorie filter ──
function renderCatFilter() {
  const wrap = document.getElementById('cat-filter-chips');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => {
    const checked = activeCats.has(c);
    return `<label class="cat-chip${checked ? ' checked' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleCatFilter(${JSON.stringify(c)}, this)"/>
      ${escHtml(c)}
    </label>`;
  }).join('');
}

function toggleCatFilter(cat, el) {
  if (el.checked) activeCats.add(cat);
  else            activeCats.delete(cat);
  // update chip style
  el.closest('.cat-chip').classList.toggle('checked', el.checked);
  applyFilter();
  debounceSave();
}

function applyFilter() {
  for (const r of rows) {
    const visible  = activeCats.has(r.categorie);
    const mainRow  = document.getElementById(`row-${r.id}`);
    const detRow   = document.getElementById(`detail-${r.id}`);
    if (mainRow) mainRow.classList.toggle('hidden', !visible);
    if (detRow  && !visible) detRow.style.display = 'none';
  }
  updateGenerateBtn();
}

// ── Rijen beheer ──
function addRow() {
  const id = ++counter;
  rows.push({ id, naam: `Variabele ${id}`, categorie: 'Algemeen', score: null, teksten: emptyTeksten(), afbeeldingen: [], quickwin: false, expanded: false });
  renderTable();
  saveData();
  setTimeout(() => { const el = document.getElementById(`naam-${id}`); if (el) { el.focus(); el.select(); } }, 50);
}

function removeRow(id) {
  rows = rows.filter(r => r.id !== id);
  renderTable();
  saveData();
}


function setScore(id, key) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.score = (r.score === key) ? null : key;
  const el = document.getElementById(`score-${id}`);
  if (el) el.innerHTML = scoreHTML(r);
  updateGenerateBtn();
  saveData();
}

function toggleExpand(id) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.expanded = !r.expanded;
  const btn  = document.getElementById(`expand-btn-${id}`);
  const det  = document.getElementById(`detail-${id}`);
  if (btn) { btn.classList.toggle('open', r.expanded); btn.textContent = r.expanded ? '▲ Sluiten' : '▼ Teksten'; updateExpandBtnStyle(r.id); }
  if (det) det.style.display = r.expanded ? 'table-row' : 'none';
  // Sync mobiele expand-knop
  const mobBtn = document.querySelector(`#row-${id} .btn-mob-expand`);
  if (mobBtn) mobBtn.classList.toggle('open', r.expanded);
}

function updateTekst(id, key, value) {
  const r = rows.find(r => r.id === id);
  if (r) { r.teksten[key] = value; updateExpandBtnStyle(id); debounceSave(); }
}

function updateNaam(id, value) {
  const r = rows.find(r => r.id === id);
  if (r) { r.naam = value; debounceSave(); }
}

function updateCategorie(id, value) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.categorie = value;
  // direct filter toepassen
  const visible = activeCats.has(value);
  const mainRow = document.getElementById(`row-${id}`);
  const detRow  = document.getElementById(`detail-${id}`);
  if (mainRow) mainRow.classList.toggle('hidden', !visible);
  if (detRow && !visible) detRow.style.display = 'none';
  updateGenerateBtn();
  saveData();
}

function toggleQuickwin(id) {
  const r = rows.find(r => r.id === id);
  if (r) { r.quickwin = !r.quickwin; debounceSave(); }
  const cb = document.getElementById(`qw-${id}`);
  if (cb) cb.checked = r.quickwin;
}

// ── HTML helpers ──
function scoreHTML(r) {
  return SCORES.map(s => {
    const sel = r.score === s.key ? ' selected' : '';
    return `<span class="score-pill ${s.css}${sel}" onclick="setScore(${r.id},${JSON.stringify(s.key)})">${escHtml(s.label)}</span>`;
  }).join('');
}

function detailHTML(r) {
  const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];
  const thumbsHtml = imgs.length > 0
    ? imgs.map((src, idx) => `
        <div style="display:flex;align-items:center;gap:10px;padding:7px 10px;border:1.5px solid #c4cfe8;border-radius:8px;background:white;margin-bottom:6px;">
          <img src="${src}" style="height:52px;max-width:100px;object-fit:contain;border-radius:5px;border:1px solid #e2e8f0;flex-shrink:0;" alt="afb ${idx+1}"/>
          <span style="flex:1;font-size:0.79rem;color:#4a5568;">Afbeelding ${idx+1}</span>
          <button class="img-remove-btn" onclick="removeAfbeelding(${r.id},${idx})">✕</button>
        </div>`).join('')
    : '';
  return `<div class="mob-row-settings">
      <label>Categorie</label>
      <select class="cat-select" onchange="updateCategorie(${r.id}, this.value)">
        ${CATEGORIES.map(c => `<option value="${escHtml(c)}"${r.categorie===c?' selected':''}>${escHtml(c)}</option>`).join('')}
      </select>
      <div class="mob-qw-wrap">
        <label style="margin:0;">QW</label>
        <input type="checkbox" ${r.quickwin?'checked':''} onchange="toggleQuickwin(${r.id})" title="Quick Win" style="width:18px;height:18px;cursor:pointer;accent-color:#3251c4;"/>
      </div>
      <button class="btn-danger" onclick="removeRow(${r.id})" title="Verwijderen">✕ Verwijderen</button>
    </div>` + SCORES.map(s => `
    <div class="field-group ${s.css}">
      <label>${EMOJIS[s.key]} ${escHtml(s.label)}</label>
      <textarea placeholder="Omschrijving voor '${escHtml(s.label)}'…"
        oninput="updateTekst(${r.id},${JSON.stringify(s.key)},this.value)">${escHtml(r.teksten[s.key])}</textarea>
    </div>`).join('') + `
  <div class="img-upload-row">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
      <label class="img-upload-label" style="margin-bottom:0;">📎 Afbeeldingen${imgs.length > 0 ? ` (${imgs.length})` : ''} — worden getoond in document</label>
      <button class="btn-primary" onclick="bulkImportImages()" title="Koppel meerdere afbeeldingen automatisch op naam" style="font-size:0.75rem;padding:5px 12px;border-radius:50px;">
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        Bulk koppelen
      </button>
    </div>
    ${thumbsHtml}
    <div class="img-upload-area" onclick="triggerImgUpload(${r.id})" style="margin-top:${imgs.length>0?'4px':'0'}">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="opacity:0.45;flex-shrink:0">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="img-upload-placeholder">${imgs.length > 0 ? '+ Nog een afbeelding toevoegen' : 'Klik om een afbeelding te koppelen (PNG, JPG)'}</span>
    </div>
    <input type="file" accept="image/png,image/jpeg,image/gif,image/webp" id="img-input-${r.id}" style="display:none" onchange="handleImgUpload(${r.id}, this)"/>
  </div>`;
}

function renderTable() {
  const tbody = document.getElementById('tbody');
  if (rows.length === 0) {
    tbody.innerHTML = `<tr id="empty-row"><td colspan="7">
      <div class="empty-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
        <p>Geen rijen. Klik op <strong>+ Rij toevoegen</strong> om te starten.</p>
      </div>
    </td></tr>`;
    updateGenerateBtn(); return;
  }

  // Sorteer op categorie (CATEGORIES volgorde), daarna op originele volgorde binnen categorie
  const sortedRows = [...rows].sort((a, b) => {
    const ai = CATEGORIES.indexOf(a.categorie);
    const bi = CATEGORIES.indexOf(b.categorie);
    const av = ai === -1 ? 999 : ai;
    const bv = bi === -1 ? 999 : bi;
    return av - bv;
  });

  let html = '';
  for (const r of sortedRows) {
    const hidden = !activeCats.has(r.categorie) ? ' hidden' : '';
    html += `
    <tr class="row-main${hidden}" id="row-${r.id}">
      <td><input class="naam-input" id="naam-${r.id}" type="text" value="${escHtml(r.naam)}"
        oninput="updateNaam(${r.id}, this.value)" placeholder="Naam variabele…"/></td>
      <td><select class="cat-select" onchange="updateCategorie(${r.id}, this.value)">
        ${CATEGORIES.map(c => `<option value="${escHtml(c)}"${r.categorie===c?' selected':''}>${escHtml(c)}</option>`).join('')}
      </select></td>
      <td><div class="score-group" id="score-${r.id}">${scoreHTML(r)}</div></td>
      <td style="text-align:center;"><input type="checkbox" id="qw-${r.id}" ${r.quickwin?'checked':''} onchange="toggleQuickwin(${r.id})" title="Quick Win" style="width:18px;height:18px;cursor:pointer;accent-color:#3251c4;"/></td>
      <td><button class="btn-expand${r.expanded?' open':''}${hasIncompleteTeksten(r)?' incomplete':''}" id="expand-btn-${r.id}"
        onclick="toggleExpand(${r.id})">${r.expanded?'▲ Sluiten':'▼ Teksten'}</button></td>
      <td><button class="btn-danger" onclick="removeRow(${r.id})" title="Verwijderen">✕</button></td>
      <td class="mob-settings-col"><button class="btn-mob-expand${r.expanded?' open':''}" onclick="toggleExpand(${r.id})" title="Instellingen">⚙</button></td>
    </tr>
    <tr class="row-detail${hidden}" id="detail-${r.id}" style="display:${r.expanded&&!hidden?'table-row':'none'}">
      <td colspan="7" style="padding:0;">
        <div class="detail-inner">${detailHTML(r)}</div>
      </td>
    </tr>`;
  }
  tbody.innerHTML = html;
  updateGenerateBtn();
}

function updateGenerateBtn() {
  document.getElementById('btn-generate').disabled =
    rows.filter(r => r.score).length === 0;
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Check of alle tekstvelden gevuld zijn voor een rij
function hasIncompleteTeksten(r) {
  for (const s of SCORES) {
    if (!r.teksten[s.key] || r.teksten[s.key].trim() === '') return true;
  }
  return false;
}

// Pas oranje kleur toe op expand-knop als teksten incompleet zijn
function updateExpandBtnStyle(id) {
  const r = rows.find(r => r.id === id);
  const btn = document.getElementById(`expand-btn-${id}`);
  if (!r || !btn) return;
  btn.classList.toggle('incomplete', hasIncompleteTeksten(r));
}

// ── Afbeelding per rij ──
function triggerImgUpload(id) {
  const inp = document.getElementById(`img-input-${id}`);
  if (inp) inp.click();
}

function handleImgUpload(id, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const r = rows.find(r => r.id === id);
    if (!r) return;
    if (!Array.isArray(r.afbeeldingen)) r.afbeeldingen = [];
    r.afbeeldingen.push(e.target.result);
    const detDiv = document.querySelector(`#detail-${id} .detail-inner`);
    if (detDiv) detDiv.innerHTML = detailHTML(r);
    debounceSave();
    showToast('✅ Afbeelding toegevoegd!');
  };
  reader.readAsDataURL(file);
}

function bulkImportImages() {
  const inp = document.getElementById('bulk-img-input');
  if (inp) { inp.value = ''; inp.click(); }
}

function normName(str) {
  // Verwijder nummers, spaties, speciale tekens — alleen letters die overblijven
  return String(str).toLowerCase().replace(/[\d\s\-_.,!?()\[\]{}'"\/:;\\]/g, '');
}

let pendingUnmatched = []; // { src, baseName }

function handleBulkImgImport(input) {
  const files = Array.from(input.files);
  if (!files.length) return;

  // Lees alle bestanden tegelijk als base64
  let done = 0;
  const fileData = new Array(files.length);
  files.forEach((file, i) => {
    const reader = new FileReader();
    reader.onload = e => {
      fileData[i] = { file, src: e.target.result };
      if (++done === files.length) processFileData(fileData);
    };
    reader.readAsDataURL(file);
  });
}

function processFileData(fileData) {
  const matched   = [];
  const unmatched = [];

  for (const { file, src } of fileData) {
    const baseName = file.name.replace(/\.[^.]+$/, '');
    const row = rows.find(r => normName(r.naam) === normName(baseName));
    if (row) matched.push({ row, src });
    else     unmatched.push({ src, baseName });
  }

  // Auto-koppel gevonden matches
  for (const { row, src } of matched) {
    if (!Array.isArray(row.afbeeldingen)) row.afbeeldingen = [];
    row.afbeeldingen.push(src);
  }
  if (matched.length > 0) { renderTable(); debounceSave(); }

  if (unmatched.length > 0) {
    pendingUnmatched = unmatched;
    showUnmatchedModal(unmatched);
    if (matched.length > 0)
      showToast(`✅ ${matched.length} gekoppeld — ${unmatched.length} niet herkend (zie popup)`);
  } else {
    showToast(`✅ ${matched.length} afbeelding${matched.length!==1?'en':''} automatisch gekoppeld!`);
  }
}

function showUnmatchedModal(unmatched) {
  const list = document.getElementById('unmatch-list');
  list.innerHTML = unmatched.map((u, i) => `
    <div class="unmatch-item">
      <img class="unmatch-thumb" src="${u.src}" alt="${escHtml(u.baseName)}"/>
      <span class="unmatch-name" title="${escHtml(u.baseName)}">${escHtml(u.baseName)}</span>
      <select class="unmatch-select" id="unmatch-sel-${i}">
        <option value="">— Overslaan —</option>
        ${rows.map(r => `<option value="${r.id}">${escHtml(r.naam)}</option>`).join('')}
      </select>
    </div>`).join('');
  document.getElementById('unmatch-modal').classList.add('open');
}

function closeUnmatchedModal() {
  document.getElementById('unmatch-modal').classList.remove('open');
  pendingUnmatched = [];
}

function saveUnmatchedMappings() {
  let count = 0;
  pendingUnmatched.forEach((u, i) => {
    const sel = document.getElementById(`unmatch-sel-${i}`);
    if (!sel || !sel.value) return;
    const row = rows.find(r => r.id === parseInt(sel.value));
    if (!row) return;
    if (!Array.isArray(row.afbeeldingen)) row.afbeeldingen = [];
    row.afbeeldingen.push(u.src);
    count++;
  });
  closeUnmatchedModal();
  if (count > 0) { renderTable(); debounceSave(); showToast(`✅ ${count} afbeelding${count!==1?'en':''} handmatig gekoppeld!`); }
}

function removeAfbeelding(id, idx) {
  const r = rows.find(r => r.id === id);
  if (!r || !Array.isArray(r.afbeeldingen)) return;
  r.afbeeldingen.splice(idx, 1);
  const detDiv = document.querySelector(`#detail-${id} .detail-inner`);
  if (detDiv) detDiv.innerHTML = detailHTML(r);
  debounceSave();
  showToast('🗑️ Afbeelding verwijderd.');
}

// Vervang [klant] overal in teksten door de ingevulde Klant/Project naam
function replaceKlant(text) {
  if (!text) return text;
  const klant = headerTekst || '[klant]';
  return text.replace(/\[klant\]/gi, klant);
}

function getCatOrder(activeRows) {
  return [...CATEGORIES, ...activeRows.map(r=>r.categorie).filter(c=>!CATEGORIES.includes(c)).filter((c,i,a)=>a.indexOf(c)===i)];
}

// ── Preview modal ──
function buildCatSections(activeRows, forHtml) {
  // Groepeer op categorie (volgorde CATEGORIES), daarna overige
  const catOrder = getCatOrder(activeRows);
  let out = '';
  for (const cat of catOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;
    out += forHtml
      ? `<div class="doc-cat-section"><div class="doc-cat-section-header"><span class="doc-cat-section-title">${escHtml(cat)}</span><span class="doc-cat-section-count">${catRows.length} item${catRows.length!==1?'s':''}</span></div>`
      : `<h2 style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:16pt;color:${COLOR_NAVY};padding-bottom:6pt;margin:24pt 0 10pt;">${escHtml(cat)}</h2>`;
    catRows.forEach((r, idx) => {
      const s     = SCORE_MAP[r.score];
      const tekst = replaceKlant(r.teksten[r.score] || '');
      const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];
      if (forHtml) {
        const imgsHtml = imgs.map(src =>
          `<div style="margin-top:10px;"><img src="${src}" style="max-width:100%;max-height:320px;border-radius:7px;border:1px solid #e2e8f0;display:block;" alt=""/></div>`
        ).join('');
        out += `
          <div class="doc-section">
            <div class="doc-var-title"><span class="doc-item-num">${idx+1}</span>${escHtml(r.naam)}</div>
            <div class="doc-score-badge" style="color:${s.color};background:${s.bg};border-color:${s.border};">${EMOJIS[s.key]} ${escHtml(s.label)}</div>${r.quickwin ? '<span style="display:inline-block;font-size:0.76rem;font-weight:700;padding:3px 11px;border-radius:99px;border:1.5px solid #3251c4;color:#3251c4;background:#eaedfa;margin-left:8px;vertical-align:middle;">⚡ Quick Win</span>' : ''}
            <div class="doc-var-text">${escHtml(tekst).replace(/\n/g,'<br/>') || '<em style="color:#a0aec0">Geen tekst ingevuld</em>'}</div>
            ${imgsHtml}
          </div><hr class="doc-divider"/>`;
      } else {
        const imgsWordHtml = imgs.map(src =>
          `<p style="margin:4pt 0 10pt;"><img src="${src}" style="max-width:14cm;border:1pt solid #e2e8f0;"/></p>`
        ).join('');
        out += `
          <p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:9pt;color:#6b7280;margin:14pt 0 2pt;">${idx+1}.</p>
          <h3 style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:12pt;color:${COLOR_NAVY};margin:0 0 5pt;">${escHtml(r.naam)}</h3>
          <p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:9pt;color:${s.color};background:${s.bg};border:1pt solid ${s.border};padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;font-weight:bold;">${EMOJIS[s.key]} ${escHtml(s.label)}</p>${r.quickwin ? `<p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:9pt;color:${COLOR_NAVY};background:#eaedfa;border:1pt solid ${COLOR_NAVY};padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;margin-left:6pt;font-weight:bold;">⚡ Quick Win</p>` : ''}
          <p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:11pt;color:#2d3748;line-height:1.65;margin:4pt 0 ${imgs.length?'6pt':'14pt'};">${escHtml(tekst).replace(/\n/g,'<br/>')}</p>
          ${imgsWordHtml}`;
      }
    });
    if (forHtml) out += `</div>`;
  }
  return out;
}

function showPreview() {
  const activeRows = rows.filter(r => r.score);
  if (activeRows.length === 0) { showToast('Geen actieve rijen met score geselecteerd.'); return; }

  const now     = new Date();
  const dateStr = now.toLocaleDateString('nl-NL', {year:'numeric',month:'long',day:'numeric'});
  const titel   = headerTekst ? `Omgevingsscan — ${escHtml(headerTekst)}` : 'Omgevingsscan';
  const headerText = replaceKlant(docHeaderTekst);
  const footerText = replaceKlant(docFooterTekst);

  document.getElementById('doc-paper-content').innerHTML = `
    <div style="margin-bottom:18px;"><img src="Logo PB blauw.png" alt="Logo" style="height:44px;width:auto;"/></div>
    <div class="doc-title-bar">
      <div class="doc-main-title">${titel}</div>
      <div class="doc-meta">Aangemaakt op ${dateStr} &nbsp;·&nbsp; ${activeRows.length} variabele${activeRows.length!==1?'n':''}</div>
    </div>
    ${headerText ? `<div class="doc-intro">${escHtml(headerText).replace(/\n/g,'<br/>')}</div>` : ''}
    ${buildCatSections(activeRows, true)}
    ${footerText ? `<div class="doc-outro">${escHtml(footerText).replace(/\n/g,'<br/>')}</div>` : ''}
    `;

  document.getElementById('preview-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  document.getElementById('preview-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closePreviewOnBackdrop(e) {
  if (e.target === document.getElementById('preview-modal')) closePreview();
}

// ── Helpers voor docx library ──
function b64ToUint8(b64) {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}

function dataUriToUint8(dataUri) {
  const parts = dataUri.split(',');
  return b64ToUint8(parts[1] || parts[0]);
}

function dataUriType(dataUri) {
  const m = dataUri.match(/^data:image\/(png|jpe?g|gif|webp|bmp)/i);
  if (m) return m[1].toLowerCase().replace('jpeg','jpg');
  return 'png';
}

// ── Afbeelding-afmetingen schatten uit data URI (voor docx ImageRun) ──
async function getImageDims(dataUri, maxW, maxH) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      let w = img.naturalWidth, h = img.naturalHeight;
      if (w > maxW) { h = h * maxW / w; w = maxW; }
      if (h > maxH) { w = w * maxH / h; h = maxH; }
      resolve({ width: Math.round(w), height: Math.round(h) });
    };
    img.onerror = () => resolve({ width: maxW, height: Math.round(maxW * 0.6) });
    img.src = dataUri;
  });
}

// ── Document downloaden (vanuit preview) — echte .docx met docx-js ──
async function downloadDoc() {
  const D = window.docx;
  if (!D) { showToast('⚠️ docx library niet geladen. Controleer je internetverbinding en herlaad de pagina.'); return; }

  const activeRows = rows.filter(r => r.score);
  if (activeRows.length === 0) return;

  const now     = new Date();
  const dateStr = now.toLocaleDateString('nl-NL', {year:'numeric',month:'long',day:'numeric'});
  const titel   = headerTekst ? `Omgevingsscan — ${headerTekst}` : 'Omgevingsscan';
  const hdrText = replaceKlant(docHeaderTekst);
  const ftrText = replaceKlant(docFooterTekst);

  // Decode images
  const [logoData, beeldmerkData] = await Promise.all([
    fetch('Logo PB blauw.png').then(r => r.arrayBuffer()).then(b => new Uint8Array(b)),
    fetch('Logo.png').then(r => r.arrayBuffer()).then(b => new Uint8Array(b)),
  ]);

  // Build content children
  const children = [];

  // ── Logo bovenaan ──
  children.push(new D.Paragraph({
    spacing: { after: 200 },
    children: [new D.ImageRun({
      type: 'png', data: logoData,
      transformation: { width: 200, height: 42 },
      altText: { title: 'Logo', description: 'Logo', name: 'Logo' }
    })]
  }));

  // ── Titel met navy lijn eronder ──
  children.push(new D.Paragraph({
    spacing: { after: 60 },
    border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: '23296C', space: 8 } },
    children: [new D.TextRun({ text: titel, font: 'Roboto', size: 40, bold: true, color: '23296C' })]
  }));

  children.push(new D.Paragraph({
    spacing: { after: 240 },
    children: [new D.TextRun({ text: `Aangemaakt op ${dateStr}  ·  ${activeRows.length} variabele${activeRows.length!==1?'n':''}`, font: 'Roboto', size: 18, color: 'A0AEC0' })]
  }));

  // ── Header tekst ──
  if (hdrText) {
    const hdrLines = hdrText.split('\n');
    hdrLines.forEach((line, i) => {
      children.push(new D.Paragraph({
        spacing: { after: i === hdrLines.length - 1 ? 280 : 80 },
        children: [new D.TextRun({ text: line, font: 'Roboto', size: 22, color: '2D3748' })]
      }));
    });
  }

  // ── Categorie secties ──
  const catOrder = getCatOrder(activeRows);
  for (const cat of catOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;

    // Categorie heading
    children.push(new D.Paragraph({
      spacing: { before: 320, after: 120 },
      border: { bottom: { style: D.BorderStyle.SINGLE, size: 4, color: '3251C4', space: 6 } },
      children: [
        new D.TextRun({ text: cat, font: 'Roboto', size: 30, bold: true, color: '23296C' }),
        new D.TextRun({ text: `  ${catRows.length} item${catRows.length!==1?'s':''}`, font: 'Roboto', size: 18, color: 'A0AEC0' }),
      ]
    }));

    // Items
    for (let idx = 0; idx < catRows.length; idx++) {
      const r = catRows[idx];
      const s = SCORE_MAP[r.score];
      const tekst = replaceKlant(r.teksten[r.score] || '');
      const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];

      // Item nummer + naam
      children.push(new D.Paragraph({
        spacing: { before: 200, after: 40 },
        children: [
          new D.TextRun({ text: `${idx+1}. `, font: 'Roboto', size: 18, color: '6B7280' }),
          new D.TextRun({ text: r.naam, font: 'Roboto', size: 24, bold: true, color: '23296C' }),
        ]
      }));

      // Score badge als tekst
      const badgeRuns = [
        new D.TextRun({ text: `${EMOJIS[s.key]} ${s.label}`, font: 'Roboto', size: 18, bold: true, color: s.color.replace('#','') }),
      ];
      if (r.quickwin) {
        badgeRuns.push(new D.TextRun({ text: '   ⚡ Quick Win', font: 'Roboto', size: 18, bold: true, color: '3251C4' }));
      }
      children.push(new D.Paragraph({ spacing: { after: 80 }, children: badgeRuns }));

      // Tekst
      if (tekst) {
        const lines = tekst.split('\n');
        lines.forEach((line, li) => {
          children.push(new D.Paragraph({
            spacing: { after: li === lines.length - 1 ? 100 : 60 },
            children: [new D.TextRun({ text: line, font: 'Roboto', size: 22, color: '2D3748' })]
          }));
        });
      } else {
        children.push(new D.Paragraph({
          spacing: { after: 100 },
          children: [new D.TextRun({ text: 'Geen tekst ingevuld', font: 'Roboto', size: 22, color: 'A0AEC0', italics: true })]
        }));
      }

      // Afbeeldingen
      for (const src of imgs) {
        try {
          const imgType = dataUriType(src);
          const imgData = dataUriToUint8(src);
          const dims = await getImageDims(src, IMG_MAX_WIDTH, IMG_MAX_HEIGHT);
          children.push(new D.Paragraph({
            spacing: { after: 120 },
            children: [new D.ImageRun({
              type: imgType, data: imgData,
              transformation: dims,
              altText: { title: r.naam, description: 'Screenshot', name: 'img' }
            })]
          }));
        } catch(e) { console.warn('Afbeelding overgeslagen:', e); }
      }

      // Scheidingslijn (behalve na laatste item)
      if (idx < catRows.length - 1) {
        children.push(new D.Paragraph({
          spacing: { before: 40, after: 40 },
          border: { bottom: { style: D.BorderStyle.SINGLE, size: 1, color: 'E2E8F0', space: 4 } },
          children: []
        }));
      }
    }
  }

  // ── Footer tekst ──
  if (ftrText) {
    children.push(new D.Paragraph({ spacing: { before: 320 }, children: [] }));
    const ftrLines = ftrText.split('\n');
    ftrLines.forEach((line, i) => {
      children.push(new D.Paragraph({
        spacing: { after: i === ftrLines.length - 1 ? 200 : 80 },
        children: [new D.TextRun({ text: line, font: 'Roboto', size: 22, color: '2D3748' })]
      }));
    });
  }

  // ── Document samenstellen ──
  const doc = new D.Document({
    styles: {
      default: { document: { run: { font: 'Roboto', size: 22 } } },
    },
    sections: [{
      properties: {
        page: {
          size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
          margin: { top: PAGE_MARGIN, right: PAGE_MARGIN, bottom: PAGE_MARGIN, left: PAGE_MARGIN }
        },
        titlePage: true,
      },
      headers: {
        default: new D.Header({
          children: [new D.Paragraph({
            alignment: D.AlignmentType.RIGHT,
            children: [new D.ImageRun({
              type: 'png', data: beeldmerkData,
              transformation: { width: 27, height: 44 },
              altText: { title: 'PB', description: 'Beeldmerk', name: 'Beeldmerk' }
            })]
          })]
        }),
        first: new D.Header({ children: [new D.Paragraph({ children: [] })] }),
      },
      footers: {
        default: new D.Footer({
          children: [
            new D.Paragraph({
              alignment: D.AlignmentType.RIGHT,
              children: [new D.TextRun({ children: [D.PageNumber.CURRENT], font: 'Roboto', size: 20, color: '718096' })]
            }),
          ]
        }),
        first: new D.Footer({ children: [new D.Paragraph({ children: [] })] }),
      },
      children
    }]
  });

  // ── Genereer en download .docx ──
  const blob = await D.Packer.toBlob(doc);
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `omgevingsscan-${now.toISOString().slice(0,10)}.docx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`✅ Document gedownload met ${activeRows.length} variabele${activeRows.length!==1?'n':''}!`);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), TOAST_DURATION);
}

// ── Settings ──
function openSettings() {
  renderSettingsCats();
  renderSettingsScores();
  renderSettingsChecklist();
  document.getElementById('settings-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSettings() {
  document.getElementById('settings-modal').classList.remove('open');
  document.body.style.overflow = '';
  renderCatFilter();
  renderTable();
  renderChecklist();
  saveData();
}
function closeSettingsOnBackdrop(e) {
  if (e.target === document.getElementById('settings-modal')) closeSettings();
}

function renderSettingsCats() {
  const el = document.getElementById('settings-cat-list');
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c, i) => {
    const isDefault = DEFAULT_CATEGORIES.includes(c);
    return `<div class="settings-item${isDefault ? ' settings-item-default' : ''}">
      <span>${escHtml(c)}${isDefault ? ' <small>(standaard)</small>' : ''}</span>
      ${!isDefault ? `<button class="settings-remove-btn" onclick="removeCategory(${i})" title="Verwijderen">✕</button>` : ''}
    </div>`;
  }).join('');
}

function addCategory() {
  const input = document.getElementById('settings-cat-input');
  const name = input.value.trim();
  if (!name) return;
  if (CATEGORIES.includes(name)) { showToast('⚠️ Categorie bestaat al.'); return; }
  CATEGORIES.push(name);
  activeCats.add(name);
  input.value = '';
  renderSettingsCats();
  saveData();
  showToast(`✅ Categorie "${name}" toegevoegd!`);
}

function removeCategory(idx) {
  const name = CATEGORIES[idx];
  if (DEFAULT_CATEGORIES.includes(name)) return;
  if (rows.some(r => r.categorie === name)) {
    if (!confirm(`Er zijn rijen met categorie "${name}". Deze worden verplaatst naar "Algemeen". Doorgaan?`)) return;
    rows.forEach(r => { if (r.categorie === name) r.categorie = 'Algemeen'; });
  }
  CATEGORIES.splice(idx, 1);
  activeCats.delete(name);
  renderSettingsCats();
  saveData();
  showToast(`🗑️ Categorie "${name}" verwijderd.`);
}

function renderSettingsScores() {
  const el = document.getElementById('settings-score-list');
  if (!el) return;
  el.innerHTML = SCORES.map((s, i) => {
    const colorDot = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${s.border};margin-right:6px;vertical-align:middle;"></span>`;
    return `<div class="settings-item">
      <span>${colorDot}${s.emoji || '•'} ${escHtml(s.label)}</span>
      <button class="settings-remove-btn" onclick="removeScore(${i})" title="Verwijderen">✕</button>
    </div>`;
  }).join('');
  // Vul kleur- en emoji-selects
  const colorSel = document.getElementById('settings-score-color');
  if (colorSel) colorSel.innerHTML = SCORE_COLORS.map(c => `<option value="${c.css}">${c.name}</option>`).join('');
  const emojiSel = document.getElementById('settings-score-emoji');
  if (emojiSel) emojiSel.innerHTML = SCORE_EMOJIS.map(e => `<option value="${e}">${e}</option>`).join('');
}

function addScore() {
  const input = document.getElementById('settings-score-label');
  const label = input.value.trim();
  if (!label) return;
  const key = label.replace(/[^a-zA-Z0-9]/g, '').substring(0, 12) || ('S' + Date.now());
  if (SCORES.some(s => s.key === key)) { showToast('⚠️ Score met die key bestaat al.'); return; }
  if (SCORES.some(s => s.label.toLowerCase() === label.toLowerCase())) { showToast('⚠️ Score met dat label bestaat al.'); return; }
  const colorCss = document.getElementById('settings-score-color').value;
  const colorObj = SCORE_COLORS.find(c => c.css === colorCss) || SCORE_COLORS[0];
  const emoji = document.getElementById('settings-score-emoji').value || '•';
  SCORES.push({ key, label, css: colorObj.css, color: colorObj.color, bg: colorObj.bg, border: colorObj.border, emoji });
  rebuildScoreMaps();
  // Voeg tekstveld toe aan bestaande rijen
  rows.forEach(r => { if (!r.teksten[key]) r.teksten[key] = ''; });
  input.value = '';
  renderSettingsScores();
  saveData();
  showToast(`✅ Score "${label}" toegevoegd!`);
}

function removeScore(idx) {
  if (SCORES.length <= 1) { showToast('⚠️ Er moet minimaal 1 score bestaan.'); return; }
  const s = SCORES[idx];
  const affected = rows.filter(r => r.score === s.key);
  if (affected.length > 0) {
    if (!confirm(`Er zijn ${affected.length} rij(en) met score "${s.label}". Hun score wordt gereset. Doorgaan?`)) return;
    affected.forEach(r => { r.score = null; });
  }
  SCORES.splice(idx, 1);
  rebuildScoreMaps();
  // Verwijder tekstveld uit rijen
  rows.forEach(r => { delete r.teksten[s.key]; });
  renderSettingsScores();
  saveData();
  showToast(`🗑️ Score "${s.label}" verwijderd.`);
}

function renderSettingsChecklist() {
  const el = document.getElementById('settings-checklist-list');
  if (!el) return;
  if (checklistItems.length === 0) {
    el.innerHTML = '<div style="color:rgba(255,255,255,0.35);font-size:0.82rem;padding:6px 0;">Nog geen items.</div>';
    return;
  }
  el.innerHTML = checklistItems.map(item => `<div class="settings-item">
    <span>${escHtml(item.text)}${item.done ? ' <small style="color:#27ae60;">✓</small>' : ''}</span>
    <button class="settings-remove-btn" onclick="removeChecklistItem(${item.id})" title="Verwijderen">✕</button>
  </div>`).join('');
}

function addChecklistItem() {
  const input = document.getElementById('settings-checklist-input');
  const text = input.value.trim();
  if (!text) return;
  checklistItems.push({ id: ++checklistCounter, text, done: false });
  input.value = '';
  renderSettingsChecklist();
  renderChecklist();
  saveData();
}

function removeChecklistItem(id) {
  checklistItems = checklistItems.filter(i => i.id !== id);
  renderSettingsChecklist();
  renderChecklist();
  saveData();
}

// ── Checklist (main page) ──
function renderChecklist() {
  const panel = document.getElementById('checklist-panel');
  if (!panel) return;
  if (checklistItems.length === 0) { panel.style.display = 'none'; return; }
  panel.style.display = '';

  const open = checklistItems.filter(i => !i.done);
  const done = checklistItems.filter(i => i.done);

  document.getElementById('checklist-open').innerHTML = open.map(item => `
    <label class="checklist-item">
      <input type="checkbox" onchange="toggleChecklistDone(${item.id}, true)"/>
      ${escHtml(item.text)}
    </label>
  `).join('');

  const toggleBtn = document.getElementById('checklist-done-toggle');
  const doneList = document.getElementById('checklist-done');
  if (done.length === 0) {
    toggleBtn.style.display = 'none';
    doneList.innerHTML = '';
  } else {
    toggleBtn.style.display = '';
    document.getElementById('checklist-done-count').textContent = `Afgeronde items (${done.length})`;
    doneList.innerHTML = done.map(item => `
      <label class="checklist-item done">
        <input type="checkbox" checked onchange="toggleChecklistDone(${item.id}, false)"/>
        ${escHtml(item.text)}
      </label>
    `).join('');
  }
}

function toggleChecklistDone(id, done) {
  const item = checklistItems.find(i => i.id === id);
  if (item) item.done = done;
  renderChecklist();
  debounceSave();
}

function toggleDoneList() {
  const btn = document.getElementById('checklist-done-toggle');
  const list = document.getElementById('checklist-done');
  btn.classList.toggle('open');
  list.classList.toggle('open');
}

/* Library modal functies verwijderd — export/import zit nu in de toolbar */

function exportCurrentScan() {
  const data = buildPayload();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const safeName = (headerTekst || 'scan').replace(/[^a-z0-9\-_\s]/gi, '').trim().replace(/\s+/g, '-');
  const dateStr  = new Date().toISOString().slice(0, 10);
  a.href = url; a.download = `omgevingsscan-${safeName}-${dateStr}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`📥 Scan geëxporteerd als bestand!`);
}

function importScanFromFile() {
  document.getElementById('import-file-input').click();
}

function applyImportedScan(p, fileName) {
  counter        = p.counter        || 0;
  headerTekst    = p.headerTekst    || '';
  docHeaderTekst = p.docHeaderTekst || '';
  docFooterTekst = p.docFooterTekst || '';
  if (p.categories && p.categories.length) CATEGORIES = p.categories;
  activeCats     = new Set(p.activeCats && p.activeCats.length ? p.activeCats : CATEGORIES);
  CATEGORIES.forEach(c => { if (!activeCats.has(c)) activeCats.add(c); });
  if (p.scores && p.scores.length) { SCORES = p.scores.map(s => ({...s})); rebuildScoreMaps(); }
  checklistItems   = p.checklistItems   || [];
  checklistCounter = p.checklistCounter || (checklistItems.length ? Math.max(...checklistItems.map(i=>i.id))+1 : 0);
  rows           = (p.rows || []).map(r => ({ categorie: 'Algemeen', ...r, expanded: false }));
  rows.forEach(r => { SCORES.forEach(s => { if (r.teksten && !(s.key in r.teksten)) r.teksten[s.key] = ''; }); });
  const ht = document.getElementById('header-tekst');
  const dh = document.getElementById('doc-header-tekst');
  const df = document.getElementById('doc-footer-tekst');
  if (ht) ht.value = headerTekst;
  if (dh) dh.value = docHeaderTekst;
  if (df) df.value = docFooterTekst;
  // Sync landing-formulier zodat switchPage('scan') de juiste waarden leest
  const lk = document.getElementById('landing-klant');
  const lh = document.getElementById('landing-header-tekst');
  const lf = document.getElementById('landing-footer-tekst');
  if (lk) lk.value = headerTekst;
  if (lh) lh.value = docHeaderTekst;
  if (lf) lf.value = docFooterTekst;
  renderCatFilter();
  renderTable();
  renderChecklist();
  saveData();
  showToast(`✅ Scan geladen vanuit "${fileName}"!`);
}

function handleImportFile(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const p = JSON.parse(e.target.result);
      if (!p.seedVersion && !p.rows) {
        showToast('⚠️ Ongeldig bestand — geen geldige scan-data gevonden.');
        return;
      }
      if (rows.length > 0 && !confirm('De huidige scan wordt overschreven. Doorgaan?')) return;
      applyImportedScan(p, file.name);
    } catch(err) {
      showToast('⚠️ Fout bij inlezen: ' + err.message);
    }
  };
  reader.readAsText(file);
  input.value = ''; // reset zodat hetzelfde bestand opnieuw geladen kan worden
}

/* exportFromLibrary, deleteFromLibrary, renderLibList verwijderd */

// ── Landing page ──
/* selectedTemplateId verwijderd */

function renderLandingCats() {
  const wrap = document.getElementById('landing-cat-chips');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => {
    const checked = activeCats.has(c);
    return `<label class="cat-chip${checked ? ' checked' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleLandingCat(${JSON.stringify(c)}, this)"/>
      ${escHtml(c)}
    </label>`;
  }).join('');
}

function toggleLandingCat(cat, el) {
  if (el.checked) activeCats.add(cat);
  else            activeCats.delete(cat);
  el.closest('.cat-chip').classList.toggle('checked', el.checked);
  debounceSave();
}

/* renderLandingTemplates en selectTemplate verwijderd — templates niet meer nodig */

function importScanFromLanding() {
  document.getElementById('landing-import-input').click();
}

function handleLandingImport(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const p = JSON.parse(e.target.result);
      if (!p.seedVersion && !p.rows) {
        showToast('⚠️ Ongeldig bestand — geen geldige scan-data gevonden.');
        return;
      }
      applyImportedScan(p, file.name);
      switchPage('scan');
    } catch(err) {
      showToast('⚠️ Fout bij inlezen: ' + err.message);
    }
  };
  reader.readAsText(file);
  input.value = '';
}

function switchPage(tab) {
  // Voer pagina-specifieke logica uit vóór de switch
  if (tab === 'scan') {
    // Lees landing-velden en stel globals in
    const klantVal = document.getElementById('landing-klant').value.trim();
    const headerVal = document.getElementById('landing-header-tekst').value;
    const footerVal = document.getElementById('landing-footer-tekst').value;
    if (!rows.length) { counter = 0; rows = []; }
    headerTekst    = klantVal;
    docHeaderTekst = headerVal;
    docFooterTekst = footerVal;
    const ht = document.getElementById('header-tekst');
    const dh = document.getElementById('doc-header-tekst');
    const df = document.getElementById('doc-footer-tekst');
    if (ht) ht.value = headerTekst;
    if (dh) dh.value = docHeaderTekst;
    if (df) df.value = docFooterTekst;
    renderCatFilter();
    renderTable();
    renderChecklist();
    saveData();
  } else if (tab === 'start') {
    // Sync huidige waarden terug naar landing-velden
    document.getElementById('landing-klant').value = headerTekst;
    document.getElementById('landing-header-tekst').value = docHeaderTekst;
    document.getElementById('landing-footer-tekst').value = docFooterTekst;
    renderLandingCats();
  }

  // Toon de juiste sectie en markeer actieve tab
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('nav-' + tab).classList.add('active');

  ['landing-page', 'todos-page', 'main-page'].forEach(id => {
    document.getElementById(id).classList.add('page-hidden');
  });

  if (tab === 'start') {
    document.getElementById('landing-page').classList.remove('page-hidden');
  } else if (tab === 'todos') {
    document.getElementById('todos-page').classList.remove('page-hidden');
    renderTodosPage();
  } else if (tab === 'scan') {
    document.getElementById('main-page').classList.remove('page-hidden');
  }
  localStorage.setItem('omgevingsscan_tab', tab);
  window.scrollTo(0, 0);
}

function renderTodosPage() {
  const content = document.getElementById('todos-content');
  const empty   = document.getElementById('todos-empty');
  if (!content) return;

  if (checklistItems.length === 0) {
    empty.style.display = '';
    content.innerHTML = '';
    return;
  }
  empty.style.display = 'none';

  const open = checklistItems.filter(i => !i.done);
  const done = checklistItems.filter(i => i.done);

  let html = '';
  if (open.length > 0) {
    html += `<div class="todos-card"><div class="todos-card-title">Open (${open.length})</div>`;
    html += open.map(item => `
      <label class="todos-item">
        <input type="checkbox" onchange="toggleChecklistDone(${item.id}, this.checked); renderTodosPage();">
        ${escHtml(item.text)}
      </label>`).join('');
    html += `</div>`;
  }
  if (done.length > 0) {
    html += `<div class="todos-card"><div class="todos-card-title">Afgerond (${done.length})</div>`;
    html += done.map(item => `
      <label class="todos-item done">
        <input type="checkbox" checked onchange="toggleChecklistDone(${item.id}, this.checked); renderTodosPage();">
        ${escHtml(item.text)}
      </label>`).join('');
    html += `</div>`;
  }
  content.innerHTML = html;
}

function addTodoItem() {
  const input = document.getElementById('todos-add-input');
  const text = input.value.trim();
  if (!text) return;
  checklistItems.push({ id: ++checklistCounter, text, done: false });
  input.value = '';
  renderTodosPage();
  renderChecklist();
  renderSettingsChecklist();
  saveData();
}

function initLanding() {
  // Vul landing met huidige data
  const lk = document.getElementById('landing-klant');
  const lh = document.getElementById('landing-header-tekst');
  const lf = document.getElementById('landing-footer-tekst');
  lk.value = headerTekst;
  lh.value = docHeaderTekst;
  lf.value = docFooterTekst;
  renderLandingCats();

  // Auto-save: sla wijzigingen direct op zonder startknop
  lk.addEventListener('input', () => { headerTekst    = lk.value.trim(); debounceSave(); });
  lh.addEventListener('input', () => { docHeaderTekst = lh.value;        debounceSave(); });
  lf.addEventListener('input', () => { docFooterTekst = lf.value;        debounceSave(); });
}

loadData().then(() => {
  initLanding();
  renderChecklist();
  const savedTab = localStorage.getItem('omgevingsscan_tab') || 'start';
  switchPage(savedTab);
});
