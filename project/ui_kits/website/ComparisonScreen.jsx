function ComparisonScreen({ content, productId = 'allplan' }) {
  const { Heading, Text, Stack, Breadcrumb, PackageComparison, CtaGroup, Link, Select } = ALU;
  const page = content.pages.comparison;
  const { product, releases } = AluplanContent.selectProduct(content, productId);
  const [releaseId, setReleaseId] = React.useState(releases[0] && releases[0].id);
  const [marketId, setMarketId] = React.useState(content.markets[0].id);
  const view = AluplanContent.selectScopeView(content, { productId, releaseId, marketId });
  return (
    <SitePage content={content} current="#compare">
      <Section id="paketler">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '#products' }, { id: 'products', label: UI.products, href: '#products' }, { id: product.id, label: product.name, href: '#product' }, { id: 'compare', label: page.titleSuffix }]} />
        <Stack gap="sm">
          <Heading level={1}>{product.name + ' ' + page.titleSuffix}</Heading>
          <Text tone="secondary" prose>{page.intro}</Text>
        </Stack>
        <div style={{ display: 'grid', gap: 'var(--space-inline-md)', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, var(--layout-card-min)), var(--layout-card-min)))' }}>
          <Select label={UI.releaseSelect} value={releaseId} onChange={(e) => setReleaseId(e.target.value)} options={releases.map((r) => ({ value: r.id, label: r.version }))} />
          <Select label={UI.marketSelect} value={marketId} onChange={(e) => setMarketId(e.target.value)} options={content.markets.map((m) => ({ value: m.id, label: m.label }))} />
        </div>
        <Text variant="body-sm" tone="secondary" aria-live="polite">{fmt(UI.scopeSummary, { records: view.counts.records, unverified: view.counts.unverified, sources: view.counts.sources.join(', ') || '—' })}</Text>
        <PackageComparison caption={product.name + ' · ' + (view.release ? view.release.version : '') + ' · ' + (view.market ? view.market.label : '') + ' — ' + page.captionSuffix}
          packages={view.packages} groups={view.groups} cells={view.cells} footnote={page.footnote} />
        <Text variant="body-sm"><Link href="#product">{product.name + ' ' + UI.backToProduct}</Link></Text>
      </Section>
      <Section id="iletisim" tone="subtle">
        <CtaGroup heading={page.ctaHeading} description={page.ctaText} actions={content.ctas} />
      </Section>
    </SitePage>
  );
}
window.ComparisonScreen = ComparisonScreen;
