// Pure content selectors (no React, no DOM). Used by the UI kit (browser global AluplanContent)
// and by scripts/content-tests.mjs (CommonJS export). Themes never read or change this data.
(function (g) {
  function releasesFor(content, productId) {
    return content.releases.filter((r) => r.productId === productId).sort((a, b) => b.sequence - a.sequence);
  }
  function selectProduct(content, productId) {
    const product = content.products.find((p) => p.id === productId);
    if (!product) return null;
    const releases = releasesFor(content, productId);
    return {
      product,
      releases,
      latestRelease: releases[0] || null,
      packages: content.packages.filter((p) => p.productId === productId),
      resources: content.resources.filter((r) => r.productId === productId),
      roleLabels: product.roles.map((id) => (content.roles.find((r) => r.id === id) || {}).label).filter(Boolean),
    };
  }
  // Scope view for ONE product + release + market. Records of other releases/markets are never merged in.
  // Missing records are NOT returned as "excluded"; the UI renders them as "unknown".
  function selectScopeView(content, { productId, releaseId, marketId }) {
    const packages = content.packages.filter((p) => p.productId === productId);
    const pkgIds = new Set(packages.map((p) => p.id));
    const records = content.scopeRecords.filter((r) => pkgIds.has(r.packageId) && r.releaseId === releaseId && r.marketId === marketId);
    const cells = {}; const duplicates = [];
    for (const r of records) {
      const key = r.packageId + ':' + r.capabilityId;
      if (cells[key]) duplicates.push(key);
      cells[key] = { availability: r.availability, note: r.note, verification: r.verification, source: r.source };
    }
    const sources = [...new Set(records.map((r) => r.source && r.source.kind).filter(Boolean))];
    return {
      release: content.releases.find((r) => r.id === releaseId) || null,
      market: content.markets.find((m) => m.id === marketId) || null,
      packages, groups: content.capabilityGroups, cells, duplicates,
      counts: { records: records.length, unverified: records.filter((r) => r.verification !== 'verified' && r.verification !== 'approved').length, sources },
    };
  }
  const api = { releasesFor, selectProduct, selectScopeView };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  g.AluplanContent = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
