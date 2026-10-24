// Content contract tests (demo data). In-memory only.
//   node scripts/content-tests.mjs
// Also executed in the browser by tests/index.html.

export function runContentTests({ content, selectors, tokens }) {
  const results = [];
  const test = (name, fn) => { try { const r = fn(); results.push({ name, pass: r === true, detail: r === true ? '' : String(r) }); } catch (e) { results.push({ name, pass: false, detail: 'threw: ' + e.message }); } };
  const clone = () => JSON.parse(JSON.stringify(content));
  const q = { productId: 'allplan', marketId: 'tr' };
  const s1 = () => selectors.selectScopeView(content, { ...q, releaseId: 'synthetic-s1' });
  const s2 = () => selectors.selectScopeView(content, { ...q, releaseId: 'synthetic-s2' });

  test('two synthetic releases exist and are labelled synthetic', () => content.releases.filter(r => r.isSynthetic && /Sentetik/.test(r.version)).length === 2 || 'expected 2');
  test('S2 records do not overwrite S1 scope (S1 view identical with and without S2 data)', () => {
    const c = clone(); c.scopeRecords = c.scopeRecords.filter(r => r.releaseId !== 'synthetic-s2');
    const a = JSON.stringify(s1().cells), b = JSON.stringify(selectors.selectScopeView(c, { ...q, releaseId: 'synthetic-s1' }).cells);
    return a === b || 'S1 view changed';
  });
  test('same package × capability differs between S1 and S2 (pkg-a:c-rebar excluded → optional)', () => (s1().cells['pkg-a:c-rebar'].availability === 'excluded' && s2().cells['pkg-a:c-rebar'].availability === 'optional') || 'unexpected');
  test('capability recorded in S1 but not S2 stays unknown in S2 (not carried over, not excluded)', () => (s1().cells['pkg-b:c-rebar'] && !s2().cells['pkg-b:c-rebar']) || JSON.stringify(s2().cells['pkg-b:c-rebar']));
  test('missing records are never returned as "excluded"', () => {
    const v = s2(); const all = v.packages.flatMap(p => v.groups.flatMap(g => g.capabilities.map(c => p.id + ':' + c.id)));
    const missing = all.filter(k => !v.cells[k]);
    return (missing.length > 0 && missing.every(k => v.cells[k] === undefined)) || 'no missing cells to check';
  });
  test('market filter: records of another market are not merged into tr', () => {
    const c = clone(); c.markets.push({ id: 'synthetic-x', label: 'Sentetik pazar X' });
    c.scopeRecords.push({ id: 'x1', packageId: 'pkg-c', releaseId: 'synthetic-s1', marketId: 'synthetic-x', capabilityId: 'c-3d', availability: 'excluded', source: { kind: 'demo' }, verification: 'unverified' });
    const tr = selectors.selectScopeView(c, { ...q, releaseId: 'synthetic-s1' }), x = selectors.selectScopeView(c, { ...q, releaseId: 'synthetic-s1', marketId: 'synthetic-x' });
    return (!tr.cells['pkg-c:c-3d'] && x.cells['pkg-c:c-3d'].availability === 'excluded') || 'leak';
  });
  test('no duplicate scope records per package × release × market × capability', () => [s1(), s2()].every(v => v.duplicates.length === 0) || 'duplicates');
  test('negative: a duplicate record is detected', () => { const c = clone(); c.scopeRecords.push({ ...c.scopeRecords[0], id: 'dup' }); return selectors.selectScopeView(c, { ...q, releaseId: 'synthetic-s1' }).duplicates.length === 1 || 'not detected'; });
  test('referential integrity of scope records', () => {
    const ids = k => new Set(content[k].map(x => x.id)); const P = ids('packages'), R = ids('releases'), M = ids('markets');
    const C = new Set(content.capabilityGroups.flatMap(g => g.capabilities.map(c => c.id)));
    const bad = content.scopeRecords.filter(r => !P.has(r.packageId) || !R.has(r.releaseId) || !M.has(r.marketId) || !C.has(r.capabilityId));
    return bad.length === 0 || bad.map(r => r.id).join(',');
  });
  test('every record has source + verification; demo records are unverified', () => content.scopeRecords.every(r => r.source && r.source.kind && r.verification && (r.source.kind !== 'demo' || r.verification === 'unverified')) || 'missing');
  test('no release claims status "current" in demo data', () => content.releases.every(r => r.status !== 'current') || 'current claimed');
  test('stable ids on nav, footer columns/links, CTAs, roles, FAQ', () => {
    const lists = [content.site.nav, content.site.footer, content.site.footer.flatMap(f => f.links), content.ctas, content.roles, content.pages.productDetail.faq];
    return lists.every(l => l.every(x => x.id) && new Set(l.map(x => x.id)).size === l.length) || 'missing/duplicate id';
  });
  if (tokens) test('tokens.json carries no content (no URLs, product/package/release ids)', () => {
    const s = JSON.stringify(tokens); const ids = [...content.products, ...content.packages, ...content.releases].map(x => x.id);
    return (!/https?:\/\//.test(s) && ids.every(id => !s.includes('"' + id + '"'))) || 'content found in tokens';
  });
  return { results, passed: results.filter(r => r.pass).length, failed: results.filter(r => !r.pass).length };
}

// --- CLI ---
async function main() {
  const fs = await import('node:' + 'fs'); const path = await import('node:' + 'path'); const { createRequire } = await import('node:' + 'module');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
  const selectors = createRequire(path.join(root, 'scripts', 'content-tests.mjs'))(path.join(root, 'data/select-content.js'));
  const r = runContentTests({ content: read('data/demo-content.json'), selectors, tokens: read('tokens/tokens.json') });
  for (const t of r.results) console.log((t.pass ? 'PASS ' : 'FAIL ') + t.name + (t.detail ? ' — ' + t.detail : ''));
  console.log(`${r.passed} passed, ${r.failed} failed`);
  if (r.failed) process.exit(1);
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /content-tests/.test(process.argv[1] || '')) main();
