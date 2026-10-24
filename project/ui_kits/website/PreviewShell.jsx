// Preview-only tooling (not part of the product DOM): theme / mode / width / text-size switcher.
// It only sets data-theme, data-mode and the root font-size; content and markup stay identical.
// Narrow widths render the same page inside an iframe so real media queries apply.
const ALU_PREVIEW_KEY = 'alu-preview-v1';
function readPreview() {
  const q = new URLSearchParams(location.search);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(ALU_PREVIEW_KEY) || '{}'); } catch (e) {}
  const pick = (allowed, ...vals) => vals.find((v) => allowed.includes(v)) || allowed[0];
  return {
    theme: pick(['aluplan', 'field'], q.get('theme'), saved.theme),
    mode: pick(['light', 'dark'], q.get('mode'), saved.mode),
    width: q.get('embed') ? 'full' : pick(['full', '768', '360'], saved.width),
    scale: pick(['100', '150', '200'], q.get('scale'), saved.scale),
    embed: q.get('embed') === '1',
  };
}
function applyPreview(p) {
  const el = document.documentElement;
  el.setAttribute('data-theme', p.theme);
  el.setAttribute('data-mode', p.mode);
  el.style.fontSize = p.scale === '100' ? '' : p.scale + '%';
}
function usePreview() {
  const [p, setP] = React.useState(readPreview);
  React.useEffect(() => {
    applyPreview(p);
    if (!p.embed) localStorage.setItem(ALU_PREVIEW_KEY, JSON.stringify({ theme: p.theme, mode: p.mode, width: p.width, scale: p.scale }));
  }, [p]);
  return [p, (patch) => setP((cur) => ({ ...cur, ...patch }))];
}
const toolbarStyles = {
  bar: { position: 'sticky', top: 0, zIndex: 1000, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', padding: '8px 16px', background: '#1d1d1f', color: '#f5f5f7', fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12 },
  group: { display: 'flex', gap: 4, alignItems: 'center' },
  btn: (on) => ({ font: 'inherit', padding: '4px 10px', minHeight: 28, borderRadius: 4, border: '1px solid ' + (on ? '#f5f5f7' : '#555'), background: on ? '#f5f5f7' : 'transparent', color: on ? '#1d1d1f' : '#f5f5f7', cursor: 'pointer' }),
  label: { opacity: 0.75, marginRight: 4 },
};
function Seg({ label, value, options, onChange }) {
  return (
    <div style={toolbarStyles.group} role="group" aria-label={label}>
      <span style={toolbarStyles.label}>{label}</span>
      {options.map(([v, l]) => <button key={v} type="button" aria-pressed={value === v} style={toolbarStyles.btn(value === v)} onClick={() => onChange(v)}>{l}</button>)}
    </div>
  );
}
function PreviewShell({ children, title }) {
  const [p, set] = usePreview();
  if (p.embed) return children;
  const narrow = p.width !== 'full';
  const src = location.pathname + (location.search ? location.search + '&' : '?') + 'embed=1&theme=' + p.theme + '&mode=' + p.mode + '&scale=' + p.scale + location.hash;
  return (
    <>
      <div style={toolbarStyles.bar} aria-label="Önizleme ayarları (ürün arayüzünün parçası değil)">
        <strong style={{ marginRight: 8 }}>{title}</strong>
        <Seg label="Tema" value={p.theme} options={[['aluplan', 'aluplan'], ['field', 'field (test)']]} onChange={(theme) => set({ theme })} />
        <Seg label="Mod" value={p.mode} options={[['light', 'açık'], ['dark', 'koyu']]} onChange={(mode) => set({ mode })} />
        <Seg label="Genişlik" value={p.width} options={[['full', 'tam'], ['768', '768'], ['360', '360']]} onChange={(width) => set({ width })} />
        <Seg label="Metin" value={p.scale} options={[['100', '100%'], ['150', '150%'], ['200', '200%']]} onChange={(scale) => set({ scale })} />
      </div>
      {narrow
        ? <div style={{ background: '#8a8a8e', padding: 24, minHeight: 'calc(100vh - 44px)' }}><iframe key={src} title="Dar ekran önizleme" src={src} style={{ display: 'block', margin: '0 auto', width: Number(p.width), height: 'calc(100vh - 92px)', border: 0, background: 'white' }} /></div>
        : children}
    </>
  );
}
Object.assign(window, { PreviewShell, usePreview });
