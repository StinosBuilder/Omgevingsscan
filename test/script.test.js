'use strict';

/**
 * Jest-tests voor script.js
 * Getest: buildPayload, applyImportedScan, getCatOrder, escHtml, scoreHTML
 *
 * Strategie: script.js is een pure browser-module zonder exports.
 * We laden hem via vm.runInContext met een gesimuleerde browser-omgeving,
 * zodat functies beschikbaar zijn als properties van de context.
 */

const vm   = require('vm');
const fs   = require('fs');
const path = require('path');

// ── Mock DOM-element factory ──────────────────────────────────────────────────
function makeMockEl() {
  return {
    innerHTML:   '',
    value:       '',
    textContent: '',
    disabled:    false,
    style:       {},
    checked:     false,
    classList: {
      add()              {},
      remove()           {},
      toggle()           {},
      contains()         { return false; },
    },
    querySelectorAll() { return []; },
    querySelector()    { return null; },
    addEventListener() {},
  };
}

// ── VM-context: gesimuleerde browser-globals ──────────────────────────────────
const store = {};

const ctx = vm.createContext({
  document: {
    getElementById()     { return makeMockEl(); },
    body:                Object.assign(makeMockEl(), { appendChild() {} }),
    createElement()      { return makeMockEl(); },
    querySelectorAll()   { return []; },
    addEventListener()   {},
  },
  window:        { scrollTo() {} },
  localStorage: {
    getItem:   k      => store[k] || null,
    setItem:   (k, v) => { store[k] = v; },
    removeItem: k     => { delete store[k]; },
  },
  fetch:        () => Promise.reject(new Error('fetch niet beschikbaar in tests')),
  setTimeout()   {},
  clearTimeout() {},
  FileReader:   class { readAsText() {} },
  confirm:      () => true,
  alert:        () => {},
  console,
  // ECMAScript builtins
  Promise, JSON, String, Number, Boolean,
  Array, Object, Math, Set, Map, Error, Date,
  parseInt, parseFloat, isNaN, isFinite,
  encodeURIComponent, decodeURIComponent,
  Blob: typeof Blob !== 'undefined' ? Blob : class Blob {},
});

// ── Script laden in de geïsoleerde context ────────────────────────────────────
const scriptCode = fs.readFileSync(
  path.join(__dirname, '..', 'script.js'),
  'utf8'
);
vm.runInContext(scriptCode, ctx);

// Functies uit de context halen (function-declaraties worden ctx-properties)
const {
  buildPayload,
  applyImportedScan,
  getCatOrder,
  escHtml,
  scoreHTML,
} = ctx;

// Helpers om interne state te lezen via buildPayload()
const state = {
  scores:     () => buildPayload().scores,
  categories: () => buildPayload().categories,
};

// ═══════════════════════════════════════════════════════════════════════════════
// escHtml
// ═══════════════════════════════════════════════════════════════════════════════
describe('escHtml', () => {
  test('escapeert &',          () => expect(escHtml('a & b')).toBe('a &amp; b'));
  test('escapeert <',          () => expect(escHtml('<b>')).toBe('&lt;b&gt;'));
  test('escapeert >',          () => expect(escHtml('a > b')).toBe('a &gt; b'));
  test('escapeert "',          () => expect(escHtml('"hi"')).toBe('&quot;hi&quot;'));
  test('laat gewone tekst ongemoeid', () => expect(escHtml('hello')).toBe('hello'));
  test('converteert getal naar string', () => expect(escHtml(42)).toBe('42'));
  test('meerdere specials in één string', () =>
    expect(escHtml('<a href="x">test & meer</a>')).toBe(
      '&lt;a href=&quot;x&quot;&gt;test &amp; meer&lt;/a&gt;'
    )
  );
});

// ═══════════════════════════════════════════════════════════════════════════════
// getCatOrder
// ═══════════════════════════════════════════════════════════════════════════════
describe('getCatOrder', () => {
  test('geeft standaard-categorieën terug bij lege rijen', () => {
    expect(getCatOrder([])).toEqual(state.categories());
  });

  test('voegt extra categorie toe achter de standaardvolgorde', () => {
    const order = getCatOrder([{ categorie: 'Overig' }]);
    const cats  = state.categories();
    expect(order).toContain('Overig');
    expect(order.indexOf('Overig')).toBeGreaterThanOrEqual(cats.length);
  });

  test('dupliceert bestaande categorieën niet', () => {
    const first = state.categories()[0];
    const order = getCatOrder([{ categorie: first }, { categorie: 'Nieuw' }]);
    expect(order.filter(c => c === first)).toHaveLength(1);
  });

  test('dedupliceert extra categorieën', () => {
    const order = getCatOrder([{ categorie: 'X' }, { categorie: 'X' }]);
    expect(order.filter(c => c === 'X')).toHaveLength(1);
  });

  test('meerdere extra categorieën in volgorde van eerste verschijning', () => {
    const order = getCatOrder([
      { categorie: 'Beta' },
      { categorie: 'Alfa' },
      { categorie: 'Beta' },
    ]);
    const betaIdx = order.indexOf('Beta');
    const alfaIdx = order.indexOf('Alfa');
    expect(betaIdx).toBeLessThan(alfaIdx);
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// scoreHTML
// ═══════════════════════════════════════════════════════════════════════════════
describe('scoreHTML', () => {
  const baseRow = {
    id: 1, score: null, naam: 'Test',
    teksten: {}, categorie: 'Algemeen', quickwin: false, afbeeldingen: [],
  };

  test('geeft een string terug', () =>
    expect(typeof scoreHTML(baseRow)).toBe('string')
  );

  test('bevat een score-pill per score', () => {
    const html   = scoreHTML(baseRow);
    const count  = (html.match(/score-pill/g) || []).length;
    expect(count).toBe(state.scores().length);
  });

  test('markeert het actieve score als selected', () => {
    const activeKey = state.scores()[0].key;
    const html      = scoreHTML({ ...baseRow, score: activeKey });
    expect(html).toContain('selected');
  });

  test('geen selected-class als score null is', () =>
    expect(scoreHTML(baseRow)).not.toContain('selected')
  );

  test('bevat het label van elk score', () => {
    const html = scoreHTML(baseRow);
    state.scores().forEach(s => expect(html).toContain(s.label));
  });

  test('onclick bevat het juiste score-key', () => {
    const key  = state.scores()[1].key;
    const html = scoreHTML({ ...baseRow, score: key });
    expect(html).toContain(JSON.stringify(key));
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// buildPayload
// ═══════════════════════════════════════════════════════════════════════════════
describe('buildPayload', () => {
  test('seedVersion is 1', () =>
    expect(buildPayload().seedVersion).toBe(1)
  );

  test('activeCats is een array', () =>
    expect(Array.isArray(buildPayload().activeCats)).toBe(true)
  );

  test('categories is een array', () =>
    expect(Array.isArray(buildPayload().categories)).toBe(true)
  );

  test('scores is een array', () =>
    expect(Array.isArray(buildPayload().scores)).toBe(true)
  );

  test('rows is een array', () =>
    expect(Array.isArray(buildPayload().rows)).toBe(true)
  );

  test('alle rows hebben expanded=false', () => {
    buildPayload().rows.forEach(r => expect(r.expanded).toBe(false));
  });

  test('payload is JSON-serialiseerbaar', () =>
    expect(() => JSON.stringify(buildPayload())).not.toThrow()
  );

  test('bevat checklistItems en checklistCounter', () => {
    const p = buildPayload();
    expect(Array.isArray(p.checklistItems)).toBe(true);
    expect(typeof p.checklistCounter).toBe('number');
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// applyImportedScan
// ═══════════════════════════════════════════════════════════════════════════════
describe('applyImportedScan', () => {
  const sample = {
    seedVersion:    1,
    counter:        7,
    headerTekst:    'TestBedrijf',
    docHeaderTekst: 'Intro tekst',
    docFooterTekst: 'Outro tekst',
    categories:     ['Algemeen', 'CRM', 'HRM'],
    activeCats:     ['Algemeen', 'CRM'],
    scores: [
      { key: 'Goed', label: 'Goed in gebruik', css: 'goed',
        color: '#276749', bg: '#f0fff4', border: '#68d391', emoji: '✅' },
    ],
    checklistItems:   [{ id: 1, text: 'Item 1', done: false }],
    checklistCounter: 2,
    rows: [
      { id: 10, naam: 'Rij 1', categorie: 'Algemeen', score: 'Goed',
        teksten: { Goed: 'Tekst hier' }, quickwin: true, afbeeldingen: [], expanded: true },
    ],
  };

  test('past headerTekst toe', () => {
    applyImportedScan(sample, 'import.json');
    expect(buildPayload().headerTekst).toBe('TestBedrijf');
  });

  test('past counter toe', () => {
    applyImportedScan(sample, 'import.json');
    expect(buildPayload().counter).toBe(7);
  });

  test('past docHeaderTekst en docFooterTekst toe', () => {
    applyImportedScan(sample, 'import.json');
    const p = buildPayload();
    expect(p.docHeaderTekst).toBe('Intro tekst');
    expect(p.docFooterTekst).toBe('Outro tekst');
  });

  test('importeert rows met expanded=false', () => {
    applyImportedScan(sample, 'import.json');
    const p = buildPayload();
    expect(p.rows).toHaveLength(1);
    expect(p.rows[0].expanded).toBe(false);
  });

  test('importeert categories', () => {
    applyImportedScan(sample, 'import.json');
    expect(buildPayload().categories).toEqual(['Algemeen', 'CRM', 'HRM']);
  });

  test('importeert scores', () => {
    applyImportedScan(sample, 'import.json');
    const scores = buildPayload().scores;
    expect(scores).toHaveLength(1);
    expect(scores[0].key).toBe('Goed');
  });

  test('importeert checklistItems', () => {
    applyImportedScan(sample, 'import.json');
    expect(buildPayload().checklistItems).toHaveLength(1);
  });

  test('fallback op lege waarden bij ontbrekende velden', () => {
    applyImportedScan({ seedVersion: 1 }, 'leeg.json');
    const p = buildPayload();
    expect(p.counter).toBe(0);
    expect(p.headerTekst).toBe('');
    expect(Array.isArray(p.rows)).toBe(true);
    expect(p.rows).toHaveLength(0);
  });
});
