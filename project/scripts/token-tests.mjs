// Token system test suite. Positive + negative cases on IN-MEMORY clones; never mutates tokens.json on disk.
//   node scripts/token-tests.mjs
// The same runTokenTests() is executed by tests/index.html in the browser.
import { buildTokens, lintComponentCss, GENERATED } from './build-tokens.mjs';

export function runTokenTests({ build = buildTokens, lint = lintComponentCss, T, template, cssFiles, onDisk, generatedList = GENERATED }) {
  const results = [];
  const clone = () => JSON.parse(JSON.stringify(T));
  const test = (name, fn) => { try { const r = fn(); results.push({ name, pass: r === true, detail: r === true ? '' : String(r) }); } catch (e) { results.push({ name, pass: false, detail: 'threw: ' + e.message }); } };
  const run = (t, tpl = template) => build(t, { responsiveTemplate: tpl });
  const has = (arr, re) => arr.some(e => re.test(e));

  const base = run(T);
  test('baseline: tokens.json builds with 0 errors', () => base.errors.length === 0 || base.errors.join(' | '));
  test('baseline: 0 contrast failures', () => base.stats.contrastFails === 0 || base.stats.contrastFails + ' fails');
  test('baseline: component CSS lint clean', () => { const l = lint(cssFiles, base.definedVars); return l.errors.length === 0 || l.errors.join(' | '); });

  test('breakpoint lg 64rem -> 70rem is reflected in generated media queries', () => {
    const t = clone(); t.buildTime.breakpoint.lg.$value = '70rem';
    const r = run(t); const css = r.files['components/responsive.generated.css'];
    if (r.errors.length) return r.errors.join(' | ');
    if (!css.includes('@media (min-width: 70rem)')) return 'missing 70rem';
    if (css.includes('@media (min-width: 64rem)')) return 'stale 64rem still present';
    if (JSON.parse(r.files['tokens/build/breakpoints.json']).breakpoint.lg !== '70rem') return 'breakpoints.json not updated';
    return true;
  });
  test('breakpoint change did not mutate the shipped token object', () => T.buildTime.breakpoint.lg.$value === '64rem' || 'shipped value changed to ' + T.buildTime.breakpoint.lg.$value);
  test('breakpoint md change only affects md rules', () => {
    const t = clone(); t.buildTime.breakpoint.md.$value = '50rem';
    const css = run(t).files['components/responsive.generated.css'];
    return (css.includes('(min-width: 50rem)') && css.includes('(min-width: 64rem)') && !css.includes('(min-width: 48rem)')) || css;
  });
  test('negative: unknown custom media in template is an error', () => has(run(T, template + '\n@media (--huge){.x{display:none}}').errors, /unknown custom media --huge/) || 'not detected');
  test('negative: literal width media query in template is an error', () => has(run(T, template + '\n@media (min-width: 40rem){.x{display:none}}').errors, /literal min\/max-width/) || 'not detected');

  test('negative: broken component alias', () => { const t = clone(); t.component.button.primary.bg.$value = '{semantic.action.primary.doesNotExist}'; return has(run(t).errors, /broken reference: semantic\.action\.primary\.doesNotExist/) || run(t).errors.join(' | '); });
  test('negative: broken semantic -> primitive reference', () => { const t = clone(); t.semantic.space.section.$value = '{primitive.space.999}'; return has(run(t).errors, /broken reference/) || 'not detected'; });
  test('negative: alias cycle is detected', () => { const t = clone(); t.component.cycle = { a: { $value: '{component.cycle.b}' }, b: { $value: '{component.cycle.a}' } }; return has(run(t).errors, /^Cycle: /) || run(t).errors.join(' | '); });
  test('negative: semantic referencing semantic violates layering', () => { const t = clone(); t.semantic.grid.gap.$value = '{semantic.space.section}'; return has(run(t).errors, /semantic tokens may only reference primitives/) || 'not detected'; });
  test('negative: missing theme key (field/dark text.link)', () => { const t = clone(); delete t.themes.field.modes.dark.text.link; return has(run(t).errors, /field\.dark: color token set differs\. Missing: semantic\.text\.link/) || run(t).errors.join(' | '); });
  test('negative: theme adding a non-existent semantic token', () => { const t = clone(); t.themes.field.base.space.extra = { $value: '{primitive.space.4}' }; return has(run(t).errors, /may only override existing/) || 'not detected'; });
  test('negative: contrast failure is an error', () => { const t = clone(); t.themes.aluplan.modes.light.text.secondary.$value = '{primitive.color.silver.300}'; return has(run(t).errors, /Contrast FAIL \[aluplan\/light\] text\.secondary/) || 'not detected'; });
  test('contrast decision uses unrounded ratio (4.4969 displays 4.50 but fails)', () => {
    const t = clone(); t.primitive.color.testEdge = { $value: '#647A86' }; t.themes.aluplan.modes.light.text.secondary.$value = '{primitive.color.testEdge}';
    const r = run(t); const c = r.contrast.find(c => c.theme === 'aluplan' && c.mode === 'light' && c.fg === 'text.secondary' && c.bg === 'surface.page');
    return (c && c.display === '4.50' && c.pass === false && has(r.errors, /text\.secondary on surface\.page: 4\.4969/)) || JSON.stringify(c);
  });

  test('logo size change does not affect icon sizes', () => {
    const t = clone(); t.semantic.logo.height.sm.$value = '{primitive.size.12}';
    const a = base.resolved.aluplan.light, b = run(t).resolved.aluplan.light;
    const icon = ['--icon-size-sm', '--icon-size-md', '--icon-size-lg'].every(k => a[k] === b[k]);
    return (icon && a['--logo-height-sm'] !== b['--logo-height-sm']) || 'coupled';
  });
  test('icon size change does not affect logo sizes', () => {
    const t = clone(); t.semantic.icon.size.lg.$value = '{primitive.size.8}';
    const a = base.resolved.aluplan.light, b = run(t).resolved.aluplan.light;
    return (['--logo-height-sm', '--logo-height-md', '--logo-height-lg'].every(k => a[k] === b[k]) && a['--icon-size-lg'] !== b['--icon-size-lg']) || 'coupled';
  });
  test('base.css: .alu-icon* uses only --icon-* sizes, .alu-brand-logo* img only --logo-* sizes', () => {
    const css = cssFiles['components/base.css'] || '';
    const bad = [];
    for (const m of css.matchAll(/(\.[\w-]+[^{]*)\{([^}]*)\}/g)) {
      const sel = m[1], body = m[2];
      const sizes = [...body.matchAll(/(?:^|;)\s*(width|height)\s*:\s*var\((--[\w-]+)\)/g)].map(x => x[2]);
      if (/^\.alu-icon/.test(sel.trim())) sizes.forEach(v => { if (!v.startsWith('--icon-size-')) bad.push(sel + ' -> ' + v); });
      if (/\.alu-brand-logo[^{]*img/.test(sel)) sizes.forEach(v => { if (!v.startsWith('--logo-height-')) bad.push(sel + ' -> ' + v); });
    }
    return bad.length === 0 || bad.join(' | ');
  });

  test('lint: min-width declaration is NOT classified as a media query', () => { const l = lint({ 'x.css': '.a{min-width:var(--layout-table-min)}' }, base.definedVars); return l.errors.length === 0 || l.errors.join(' | '); });
  test('lint: width media query in component CSS is an error', () => has(lint({ 'x.css': '@media (min-width:48rem){.a{display:none}}' }, base.definedVars).errors, /width media query/) || 'not detected');
  test('lint: prefers-reduced-motion media query is allowed', () => lint({ 'x.css': '@media (prefers-reduced-motion: reduce){.a{transition:none}}' }, base.definedVars).errors.length === 0 || 'false positive');
  test('lint: undefined variable is an error', () => has(lint({ 'x.css': '.a{color:var(--text-nope)}' }, base.definedVars).errors, /undefined variable --text-nope/) || 'not detected');
  test('lint: raw hex / rgba / rem / stroke-width are errors', () => {
    const e = lint({ 'x.css': '.a{color:#fff}.b{background:rgba(0,0,0,.5)}.c{width:16rem}.d{stroke-width:3}' }, base.definedVars).errors;
    return (e.length === 4) || e.join(' | ');
  });
  test('lint: raw-ok marker and em units are allowed', () => lint({ 'x.css': '.a{width:1px; /* raw-ok: a11y */\n}.b{width:1.25em;text-underline-offset:0.2em}' }, base.definedVars).errors.length === 0 || 'false positive');
  test('lint: --ref-* primitive use in component CSS is an error', () => has(lint({ 'x.css': '.a{color:var(--ref-color-ink-950)}' }, base.definedVars).errors, /primitive --ref-/) || 'not detected');

  if (onDisk) {
    test('drift: every generated file on disk equals fresh build output', () => {
      const diff = generatedList.filter(p => onDisk[p] !== base.files[p]);
      return diff.length === 0 || 'drift in ' + diff.join(', ');
    });
    test('negative: drift is detected when a generated file is edited by hand', () => {
      const tampered = { ...onDisk, 'tokens/semantic.css': (onDisk['tokens/semantic.css'] || '') + '\n/* hand edit */' };
      return generatedList.some(p => tampered[p] !== base.files[p]) || 'not detected';
    });
  }
  return { results, passed: results.filter(r => r.pass).length, failed: results.filter(r => !r.pass).length };
}

// --- CLI ---
async function main() {
  const fs = await import('node:' + 'fs'); const path = await import('node:' + 'path');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => fs.readFileSync(path.join(root, p), 'utf8');
  const cssFiles = {};
  for (const f of fs.readdirSync(path.join(root, 'components'), { recursive: true }).map(String).filter(f => f.endsWith('.css'))) cssFiles['components/' + f.replace(/\\/g, '/')] = read('components/' + f);
  const onDisk = {}; for (const p of GENERATED) { try { onDisk[p] = read(p); } catch (e) { onDisk[p] = null; } }
  const r = runTokenTests({ T: JSON.parse(read('tokens/tokens.json')), template: read('components/responsive.template.css'), cssFiles, onDisk });
  for (const t of r.results) console.log((t.pass ? 'PASS ' : 'FAIL ') + t.name + (t.detail ? ' — ' + t.detail : ''));
  console.log(`${r.passed} passed, ${r.failed} failed`);
  if (r.failed) process.exit(1);
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /token-tests/.test(process.argv[1] || '')) main();
