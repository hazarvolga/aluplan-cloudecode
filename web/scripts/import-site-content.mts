// One-off importer: builds project/data/site-content.json from the public Aluplan site source repo.
// Usage (Node >= 22.6):  node --experimental-strip-types web/scripts/import-site-content.mts <path-to-aluplan-2026-clone>
// Rules: package x capability availability comes from the comparison matrix. A feature a package does not list is
// written as "excluded" (the matrix is complete); each record is marked unverified with its source. Nothing is invented.
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const repo = process.argv[2];
if (!repo) throw new Error('usage: import-site-content.mts <clone-dir>');
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', '..', 'project', 'data', 'site-content.json');
const SOURCE = 'aluplan.com.tr · data/PackageComparisonData.ts (V2026 paket karşılaştırma)';
const RETRIEVED = '2026-10-24';

const cmp = await import(pathToFileURL(path.join(repo, 'data', 'PackageComparisonData.ts')).href);
const productsSrc = readFileSync(path.join(repo, 'components', 'sections', 'Products.tsx'), 'utf8');
const cards = {};
for (const m of productsSrc.matchAll(/\{ title: "([^"]+)", href: "([^"]+)", image: \w+, description: "([^"]+)" \}/g)) {
  cards[m[1]] = { href: m[2], description: m[3] };
}
// Edition card on the site -> comparison package id.
const CARD_FOR_PACKAGE = { basic: 'ALLPLAN Basic', concept: 'ALLPLAN Concept', professional: 'ALLPLAN Professional', ultimate: 'ALLPLAN Ultimate', civil: 'CIVIL', precast: 'PRECAST' };

const productId = 'allplan';
const releaseId = 'allplan-2026';
const marketId = 'tr';

const packages = cmp.packages.map((p) => ({
  id: p.id, productId, name: p.name, tagline: p.tagline,
  description: cards[CARD_FOR_PACKAGE[p.id]]?.description ?? p.description,
}));

const capabilityGroups = [];
const seen = new Set();
const capabilityByCategory = {};
for (const cat of cmp.categories) {
  const caps = cat.features.map((f) => {
    let id = f.id;
    if (seen.has(id)) id = cat.id + '-' + f.id;
    if (seen.has(id)) throw new Error('duplicate capability id ' + id);
    seen.add(id);
    return { id, name: f.name, category: cat.id, purchasable: cat.id === 'purchasable', packages: f.packages };
  });
  capabilityByCategory[cat.id] = caps;
  capabilityGroups.push({ id: cat.id, label: cat.name, capabilities: caps.map(({ id, name }) => ({ id, name })) });
}

const source = { kind: 'official-document', ref: SOURCE, retrievedAt: RETRIEVED };
const scopeRecords = [];
let n = 0;
for (const cat of cmp.categories) for (const cap of capabilityByCategory[cat.id]) for (const p of packages) {
  const listed = cap.packages.includes(p.id);
  const availability = !listed ? 'excluded' : cap.purchasable ? 'optional' : 'included';
  scopeRecords.push({ id: 'sr-' + (++n), packageId: p.id, releaseId, marketId, capabilityId: cap.id, availability, source, verification: 'unverified' });
}

// Sanity: every package x capability has exactly one record.
const keys = new Set(scopeRecords.map((r) => r.packageId + ':' + r.capabilityId));
if (keys.size !== scopeRecords.length || scopeRecords.length !== packages.length * capabilityGroups.reduce((a, g) => a + g.capabilities.length, 0)) throw new Error('scope matrix incomplete');

const demo = JSON.parse(readFileSync(path.join(here, '..', '..', 'project', 'data', 'demo-content.json'), 'utf8'));
const content = {
  ...demo,
  $meta: {
    status: 'demo',
    contract: 'Site-sourced content v1 (aluplan.com.tr + aluplan-2026 repo). Not approved; verification pending.',
    notice: 'Kaynak: aluplan.com.tr ve aluplan-2026 veri dosyaları (' + RETRIEVED + '). Paket kapsamı ve sürüm durumu henüz onaylanmadı; doğrulanmamış bilgi olarak gösterilir.',
    locale: 'tr-TR',
  },
  site: {
    ...demo.site,
    nav: [
      { id: 'nav-products', label: 'Ürünler', href: '#products' },
      { id: 'nav-compare', label: 'Paket karşılaştırması', href: '#compare' },
      { id: 'nav-announcements', label: 'Duyurular', href: 'https://aluplan.com.tr/onemli-bilgiler-baglantilar/' },
      { id: 'nav-learn', label: 'Eğitim', href: 'https://learnnow.allplan.com/course/search.php' },
      { id: 'nav-support', label: 'Teknik destek', href: 'https://teams.microsoft.com/meet/39783115346098?p=wIo7WWYLZwqoHtjq3Y' },
    ],
  },
  roles: [],
  markets: [{ id: marketId, label: 'Türkiye' }],
  products: [{
    id: productId, name: 'ALLPLAN', vendor: 'ALLPLAN Türkiye (Aluplan)',
    summary: 'Yenilikçi AEC iş akışları, otomasyon ve bulut tabanlı iş birliği ile daha başarılı projeler.',
    roles: [], isDemo: false,
  }],
  releases: [{
    id: releaseId, productId, version: 'ALLPLAN 2026', sequence: 2026, status: 'placeholder',
    sourceNote: 'Kaynak: aluplan.com.tr ana sayfasında "ALLPLAN 2026" ve "ÇIKTI" bağlantısı. Güncel sürüm onayı yapılmadı; yenilik listesi kaynakta madde madde yok.',
    items: [],
  }],
  packages,
  capabilityGroups,
  scopeRecords,
  resources: [],
  support: [],
};
delete content.pages.productDetail.packageCardText;
content.pages.products.intro = 'ALLPLAN ürün ailesi ve paketleri. Paket ayrıntıları ve kapsam bilgisi ayrı sayfalarda gösterilir.';
content.pages.comparison.captionSuffix = 'paket kapsamı (kaynak: V2026 paket karşılaştırması)';
content.pages.comparison.footnote = 'Kaynak tablo: aluplan.com.tr paket karşılaştırması. Tabloda listelenmeyen paket-özellik çiftleri "Dahil değil" olarak işaretlenir; kaynak onayı yapılmadı.';

writeFileSync(out, JSON.stringify(content, null, 1) + '\n');
console.log('wrote', out, { packages: packages.length, groups: capabilityGroups.length, capabilities: seen.size, records: scopeRecords.length });
