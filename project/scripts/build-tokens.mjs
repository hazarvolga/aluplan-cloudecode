// Aluplan token build + validator. Zero dependencies. Node >= 20.
//   node scripts/build-tokens.mjs           write generated files
//   node scripts/build-tokens.mjs --check   validate + lint + drift check (writes nothing, exit 1 on error)
//   node scripts/token-tests.mjs            positive/negative test suite (in-memory fixtures)
// Source of truth: tokens/tokens.json and components/responsive.template.css. Generated files must not be edited.

export const GENERATED = ['tokens/primitives.css', 'tokens/semantic.css', 'tokens/component-aliases.css', 'components/responsive.generated.css', 'tokens/build/breakpoints.json', 'tokens/build/breakpoints.mjs', 'tokens/build/tokens.resolved.json', 'tokens/build/contrast-report.json', 'tokens/build/CONTRAST-REPORT.md'];

export function buildTokens(T, opts = {}) {
  const errors = [], warnings = [];
  const kebab = s => String(s).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const isLeaf = o => o && typeof o === 'object' && '$value' in o;
  const flatten = (obj, prefix, out = {}) => {
    for (const [k, val] of Object.entries(obj || {})) {
      if (k.startsWith('$')) continue;
      const p = [...prefix, k];
      if (isLeaf(val)) out[p.join('.')] = { value: String(val.$value), path: p, kind: val.$kind };
      else if (val && typeof val === 'object') flatten(val, p, out);
      else errors.push(`Non-token value at ${p.join('.')}`);
    }
    return out;
  };
  const varName = key => { const [layer, ...rest] = key.split('.'); const n = rest.map(kebab).join('-'); return layer === 'primitive' ? `--ref-${n}` : `--${n}`; };
  const REF = /\{([^}]+)\}/g;
  const refs = s => [...String(s).matchAll(REF)].map(m => m[1]);
  const toCss = s => String(s).replace(REF, (_, p) => `var(${varName(p)})`);

  const meta = T.$meta;
  const prim = flatten(T.primitive, ['primitive']);
  const semBase = flatten(T.semantic, ['semantic']);
  const comp = flatten(T.component, ['component']);

  // Layer rules
  for (const [k, t] of Object.entries(prim)) {
    const r = refs(t.value);
    if (r.length && !(k.startsWith('primitive.shadow') && r.every(x => x.startsWith('primitive.color.alpha')))) errors.push(`Primitive ${k} may not reference other tokens (only shadows may reference alpha colors)`);
  }
  const checkSem = (map, where) => { for (const [k, t] of Object.entries(map)) for (const r of refs(t.value)) { if (!r.startsWith('primitive.')) errors.push(`${where} ${k} -> ${r}: semantic tokens may only reference primitives`); else if (!prim[r]) errors.push(`${where} ${k} -> ${r}: broken reference`); } };
  checkSem(semBase, 'semantic');
  for (const [k, t] of Object.entries(comp)) {
    if (!refs(t.value).length) errors.push(`component ${k}: raw value; component aliases must reference semantic tokens`);
    for (const r of refs(t.value)) if (!r.startsWith('semantic.')) errors.push(`component ${k} -> ${r}: component aliases may only reference semantic tokens`);
  }

  // Theme x mode matrix
  const matrix = {}; let colorKeys = null;
  for (const theme of meta.themes) {
    const th = T.themes[theme]; if (!th) { errors.push(`Theme ${theme} missing`); continue; }
    const base = flatten(th.base, ['semantic']);
    checkSem(base, `themes.${theme}.base`);
    for (const k of Object.keys(base)) if (!semBase[k]) errors.push(`themes.${theme}.base.${k}: theme may only override existing semantic tokens`);
    matrix[theme] = { base: { ...semBase, ...base }, modes: {} };
    for (const mode of meta.modes) {
      const colors = flatten(th.modes?.[mode], ['semantic']);
      checkSem(colors, `themes.${theme}.${mode}`);
      for (const [k, t] of Object.entries(colors)) if (refs(t.value).length !== 1 || t.value !== `{${refs(t.value)[0]}}`) errors.push(`themes.${theme}.${mode}.${k}: color tokens must be a single primitive reference`);
      for (const k of Object.keys(colors)) if (semBase[k]) errors.push(`${k}: color token collides with non-color semantic token`);
      const keys = Object.keys(colors).sort().join('|');
      if (colorKeys === null) colorKeys = keys; else if (keys !== colorKeys) {
        const a = new Set(colorKeys.split('|')), b = new Set(keys.split('|'));
        errors.push(`themes.${theme}.${mode}: color token set differs. Missing: ${[...a].filter(x => !b.has(x)).join(', ') || '-'}; extra: ${[...b].filter(x => !a.has(x)).join(', ') || '-'}`);
      }
      matrix[theme].modes[mode] = colors;
    }
  }

  // CSS variable name collisions across layers
  const seen = {};
  for (const k of [...Object.keys(prim), ...Object.keys(semBase), ...(colorKeys ? colorKeys.split('|') : []), ...Object.keys(comp)]) {
    const n = varName(k); if (seen[n] && seen[n] !== k) errors.push(`CSS name collision ${n}: ${seen[n]} vs ${k}`); seen[n] = k;
  }

  // Resolution (cycle + broken ref detection) per theme/mode
  const resolved = {};
  for (const theme of Object.keys(matrix)) {
    resolved[theme] = {};
    for (const mode of meta.modes) {
      const sem = { ...matrix[theme].base, ...matrix[theme].modes[mode] };
      const all = { ...prim, ...sem, ...comp };
      const cache = {};
      const resolve = (key, stack = []) => {
        if (cache[key] !== undefined) return cache[key];
        if (stack.includes(key)) { errors.push(`Cycle: ${[...stack, key].join(' -> ')}`); return ''; }
        const t = all[key]; if (!t) { errors.push(`[${theme}/${mode}] broken reference: ${key}${stack.length ? ' (from ' + stack[stack.length - 1] + ')' : ''}`); return ''; }
        return (cache[key] = t.value.replace(REF, (_, p) => resolve(p, [...stack, key])));
      };
      const out = {};
      for (const k of [...Object.keys(sem), ...Object.keys(comp)]) out[varName(k)] = resolve(k);
      resolved[theme][mode] = { values: out, get: k => resolve(k) };
    }
  }

  // Contrast: decision uses the unrounded ratio; only the report display is rounded.
  const parse = c => {
    c = String(c).trim(); let m;
    if ((m = c.match(/^#([0-9a-f]{6})$/i))) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16), 1];
    if ((m = c.match(/^rgba?\(([^)]+)\)$/i))) { const p = m[1].split(',').map(Number); return [p[0], p[1], p[2], p[3] ?? 1]; }
    return null;
  };
  const over = (fg, bg) => [0, 1, 2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const lum = rgb => { const [r, g, b] = rgb.map(x => { x /= 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const ratio = (a, b) => { const [h, l] = [lum(a), lum(b)].sort((x, y) => y - x); return (h + 0.05) / (l + 0.05); };
  const contrast = [];
  for (const theme of Object.keys(resolved)) for (const mode of meta.modes) {
    const R = resolved[theme][mode];
    for (const [fgK, bgK, min, note] of T.$contrastChecks || []) {
      const fgRaw = R.get('semantic.' + fgK), bgRaw = R.get('semantic.' + bgK);
      const fg = parse(fgRaw), bg = parse(bgRaw);
      if (!fg || !bg) { errors.push(`Contrast check ${fgK}/${bgK} [${theme}/${mode}]: unparseable color`); continue; }
      const raw = ratio(over(fg, bg), bg.slice(0, 3));
      contrast.push({ theme, mode, fg: fgK, bg: bgK, fgValue: fgRaw, bgValue: bgRaw, ratio: raw, display: raw.toFixed(2), min, pass: min ? raw >= min : null, note: note || '' });
    }
  }
  for (const c of contrast) if (c.pass === false) errors.push(`Contrast FAIL [${c.theme}/${c.mode}] ${c.fg} on ${c.bg}: ${c.ratio.toFixed(4)} < ${c.min}`);

  // Build-time breakpoints -> responsive CSS
  const bt = T.buildTime || {};
  const bp = Object.fromEntries(Object.entries(bt.breakpoint || {}).filter(([k]) => !k.startsWith('$')).map(([k, t]) => [k, t.$value]));
  let responsive = '';
  if (opts.responsiveTemplate != null) {
    const body = opts.responsiveTemplate.replace(/@media\s*\(\s*--([a-z0-9-]+)\s*\)/gi, (m, name) => {
      if (!bp[name]) { errors.push(`responsive.template.css: unknown custom media --${name} (known: ${Object.keys(bp).join(', ')})`); return m; }
      return `@media (min-width: ${bp[name]})`;
    });
    if (/@media[^{]*\b(min|max)-width\s*:\s*[\d.]/.test(opts.responsiveTemplate)) errors.push('responsive.template.css: literal min/max-width media query; use (--sm|--md|--lg|--xl)');
    responsive = `/* GENERATED by scripts/build-tokens.mjs from components/responsive.template.css + tokens.json buildTime.breakpoint (${Object.entries(bp).map(([k, v]) => k + '=' + v).join(', ')}). Do not edit. */\n` + body;
  } else warnings.push('No responsive template supplied; components/responsive.generated.css not produced');

  // CSS emission
  const block = (sel, map, extra = '') => `${sel}{\n${Object.entries(map).map(([k, t]) => `  ${varName(k)}: ${toCss(t.value)};${t.kind ? ` /* @kind ${t.kind} */` : ''}`).join('\n')}${extra}\n}\n`;
  const head = '/* GENERATED by scripts/build-tokens.mjs from tokens/tokens.json. Do not edit. */\n';
  const files = {};
  files['tokens/primitives.css'] = head + '/* Layer 1: primitives (--ref-*). Components must NOT use these directly. */\n' + block(':root', prim);
  const dT = meta.defaultTheme, dM = meta.defaultMode;
  let sem = head + '/* Layer 2: semantic tokens. :root = default theme + mode. Each [data-theme] block re-declares the full set so nested scopes work. */\n';
  sem += block(':root', { ...matrix[dT].base, ...matrix[dT].modes[dM] }, `\n  color-scheme: ${dM};`);
  for (const theme of Object.keys(matrix)) {
    sem += block(`[data-theme="${theme}"]`, matrix[theme].base);
    for (const mode of meta.modes) sem += block(`[data-theme="${theme}"][data-mode="${mode}"]`, matrix[theme].modes[mode], `\n  color-scheme: ${mode};`);
  }
  const motionKeys = Object.keys(semBase).filter(k => k.startsWith('semantic.motion.duration'));
  sem += `/* Runtime: reduced motion collapses all durations. */\n@media (prefers-reduced-motion: reduce){\n  :root,[data-theme]{\n${motionKeys.map(k => `    ${varName(k)}: 0ms; /* @kind other */`).join('\n')}\n  }\n}\n`;
  files['tokens/semantic.css'] = sem;
  files['tokens/component-aliases.css'] = head + '/* Layer 3: component aliases (reference semantic only). Re-declared on theme scopes so var() re-resolves inside nested themes. */\n' + block(':root', comp) + block('[data-theme],[data-mode]', comp);
  if (opts.responsiveTemplate != null) files['components/responsive.generated.css'] = responsive;
  files['tokens/build/breakpoints.json'] = JSON.stringify({ breakpoint: bp }, null, 2) + '\n';
  files['tokens/build/breakpoints.mjs'] = `// GENERATED. Build-time only: media queries cannot read CSS variables.\nexport const breakpoint = ${JSON.stringify(bp)};\nexport const mq = Object.fromEntries(Object.entries(breakpoint).map(([k, v]) => [k, \`(min-width: \${v})\`]));\n`;
  const res = {}; for (const t of Object.keys(resolved)) { res[t] = {}; for (const m of meta.modes) res[t][m] = resolved[t][m].values; }
  files['tokens/build/tokens.resolved.json'] = JSON.stringify(res, null, 1) + '\n';
  files['tokens/build/contrast-report.json'] = JSON.stringify(contrast.map(c => ({ ...c, ratio: Math.round(c.ratio * 10000) / 10000 })), null, 1) + '\n';
  let md = '# Contrast report (GENERATED, measured)\n\nComputed from tokens/tokens.json with the WCAG 2.x relative-luminance formula. Alpha colors are composited over their background. Pass/fail uses the unrounded ratio; the table shows 2 decimals. This measures token pairs only; it does not prove every rendered combination.\n\n';
  for (const t of Object.keys(resolved)) for (const m of meta.modes) {
    md += `## ${t} / ${m}\n\n| Foreground | Background | Values | Ratio | Min | Result |\n|---|---|---|---|---|---|\n`;
    for (const c of contrast.filter(c => c.theme === t && c.mode === m)) md += `| ${c.fg} | ${c.bg} | ${c.fgValue} / ${c.bgValue} | ${c.display} | ${c.min || '—'} | ${c.pass === null ? 'info: ' + c.note : c.pass ? 'pass (measured)' : '**FAIL**'} |\n`;
    md += '\n';
  }
  files['tokens/build/CONTRAST-REPORT.md'] = md;
  const definedVars = new Set(Object.keys(seen));
  return { files, errors, warnings, definedVars, breakpoints: bp, resolved: res, contrast, stats: { primitives: Object.keys(prim).length, semantic: Object.keys(semBase).length + (colorKeys ? colorKeys.split('|').length : 0), component: Object.keys(comp).length, contrastChecks: contrast.length, contrastFails: contrast.filter(c => c.pass === false).length } };
}

// Lint hand-written component CSS. `files` = { path: source }. Generated files are skipped.
// Rules: no --ref-* primitives; no raw colors; no px/rem/vw/vh/ch lengths or raw stroke-width/font-weight/z-index/line-height
// unless the declaration is followed by /* raw-ok: reason */; every var(--x) must be a defined token or a component-local --alu-* property;
// no width media queries (they belong in components/responsive.template.css). em units are allowed (text-relative).
export function lintComponentCss(files, definedVars) {
  const errors = [], warnings = [];
  for (const [path, srcRaw] of Object.entries(files)) {
    if (path.endsWith('.generated.css') || path.endsWith('.template.css')) continue;
    const src = srcRaw.replace(/\/\*(?!\s*raw-ok)[\s\S]*?\*\//g, '');
    for (const m of src.matchAll(/@media\s*([^{]+)\{/g)) {
      if (/\b(min|max)-width\b/.test(m[1])) errors.push(`${path}: width media query "${m[1].trim()}" — move it to components/responsive.template.css`);
    }
    if (/--ref-/.test(src)) errors.push(`${path}: uses primitive --ref-* token`);
    for (const m of src.matchAll(/var\(\s*(--[\w-]+)/g)) if (!definedVars.has(m[1]) && !m[1].startsWith('--alu-')) errors.push(`${path}: undefined variable ${m[1]}`);
    const body = src.replace(/@media[^{]+\{/g, '').replace(/@keyframes[^{]+\{/g, '');
    for (const m of body.matchAll(/([a-z-]+)\s*:\s*([^;{}]+)(?:;|(?=\}))(\s*\/\*\s*raw-ok:[^*]*\*\/)?/gi)) {
      const [, prop, val, ok] = m; if (ok || prop.startsWith('--')) continue;
      const v = val.replace(/var\([^)]*\)/g, '');
      if (/#[0-9a-f]{3,8}\b|\b(rgba?|hsla?|oklch)\(/i.test(v)) errors.push(`${path}: raw color in "${prop}: ${val.trim()}"`);
      else if (/(^|[\s(,*/+-])\d*\.?\d+(px|rem|vw|vh|ch)\b/.test(v)) errors.push(`${path}: raw length in "${prop}: ${val.trim()}" (tokenize or mark /* raw-ok: reason */)`);
      else if (/^(stroke-width|font-weight|z-index|line-height)$/.test(prop) && /^\s*[\d.]+\s*$/.test(v) && v.trim() !== '0') errors.push(`${path}: raw ${prop} "${val.trim()}"`);
    }
  }
  return { errors, warnings };
}

// --- CLI ---
// Node-only. Dynamically imported so browser bundlers that scan this file never execute it.
async function main() {
  const fs = await import('node:' + 'fs'); const path = await import('node:' + 'path');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => fs.readFileSync(path.join(root, p), 'utf8');
  const T = JSON.parse(read('tokens/tokens.json'));
  const out = buildTokens(T, { responsiveTemplate: read('components/responsive.template.css') });
  const cssFiles = {};
  for (const f of fs.readdirSync(path.join(root, 'components'), { recursive: true }).map(String).filter(f => f.endsWith('.css'))) cssFiles['components/' + f.replace(/\\/g, '/')] = read('components/' + f);
  const lint = lintComponentCss(cssFiles, out.definedVars);
  const errors = [...out.errors, ...lint.errors], warnings = [...out.warnings, ...lint.warnings];
  const check = process.argv.includes('--check');
  if (check) for (const [p, c] of Object.entries(out.files)) { let disk = null; try { disk = read(p); } catch (e) {} if (disk !== c) errors.push(`Drift: ${p} differs from what tokens.json would generate (run the build)`); }
  console.log(out.stats); warnings.forEach(w => console.warn('warn:', w)); errors.forEach(e => console.error('error:', e));
  if (errors.length) process.exit(1);
  if (!check) for (const [p, c] of Object.entries(out.files)) { fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true }); fs.writeFileSync(path.join(root, p), c); }
  console.log(check ? 'check: OK (0 errors)' : 'build: wrote ' + Object.keys(out.files).length + ' files');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /build-tokens/.test(process.argv[1] || '')) main();
