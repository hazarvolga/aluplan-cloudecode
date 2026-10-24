// Typed port of data/select-content.js (the handoff keeps the JS for the browser tests).
// Keep the two in step; scripts/content-tests.mjs covers the JS version.
import demo from '../../project/data/demo-content.json';
import uiLabels from '../../project/data/ui-labels.tr.json';
import type { DemoContent, Release, ScopeView, ScopeSource, Market, Package, ScopeRecord } from '../../project/data/content-model';

export const content = demo as unknown as DemoContent;
const { $meta: _meta, ...labels } = uiLabels;
export const UI = labels as Record<string, string>;

export { fmt } from './format';

export function releasesFor(productId: string): Release[] {
  return content.releases.filter((r) => r.productId === productId).sort((a, b) => b.sequence - a.sequence);
}

export function selectProduct(productId: string) {
  const product = content.products.find((p) => p.id === productId);
  if (!product) return null;
  const releases = releasesFor(productId);
  return {
    product,
    releases,
    latestRelease: releases[0] ?? null,
    packages: content.packages.filter((p) => p.productId === productId),
    resources: content.resources.filter((r) => r.productId === productId),
    roleLabels: product.roles
      .map((id) => content.roles.find((r) => r.id === id)?.label)
      .filter((l): l is string => Boolean(l)),
  };
}

// Records of other releases/markets are never merged in. Missing records are not "excluded": the UI shows "unknown".
export function selectScopeView(productId: string, releaseId: string, marketId: string): ScopeView {
  const packages: Package[] = content.packages.filter((p) => p.productId === productId);
  const pkgIds = new Set(packages.map((p) => p.id));
  const records = content.scopeRecords.filter(
    (r: ScopeRecord) => pkgIds.has(r.packageId) && r.releaseId === releaseId && r.marketId === marketId,
  );
  const cells: ScopeView['cells'] = {};
  const duplicates: string[] = [];
  for (const r of records) {
    const key = r.packageId + ':' + r.capabilityId;
    if (cells[key]) duplicates.push(key);
    cells[key] = { availability: r.availability, note: r.note, verification: r.verification, source: r.source };
  }
  const sources = [...new Set(records.map((r) => r.source?.kind).filter(Boolean))] as ScopeSource['kind'][];
  return {
    release: content.releases.find((r) => r.id === releaseId) ?? null,
    market: (content.markets.find((m: Market) => m.id === marketId) ?? null),
    packages,
    groups: content.capabilityGroups,
    cells,
    duplicates,
    counts: {
      records: records.length,
      unverified: records.filter((r) => r.verification !== 'verified' && r.verification !== 'approved').length,
      sources,
    },
  };
}

// Content hrefs are hash anchors from the prototype. Map the routed ones; others stay as-is (placeholders).
const ROUTES: Record<string, string> = { '#products': '/urunler', '#compare': '/paket-karsilastirma', '#product': '/urunler/allplan' };
export const routeFor = (href: string) => ROUTES[href] ?? href;

