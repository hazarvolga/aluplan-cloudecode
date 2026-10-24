function ProductDetailScreen({ content, productId = 'allplan' }) {
  const { Heading, Text, Stack, Grid, Breadcrumb, ReleaseTag, ReleaseNotes, CtaGroup, ResourceCard, SupportCard, Card, Badge, Button, Accordion, Divider } = ALU;
  const page = content.pages.productDetail;
  const { product, latestRelease: release, packages, resources, roleLabels } = AluplanContent.selectProduct(content, productId);
  return (
    <SitePage content={content} current="#products">
      <Section id="ozet">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '#products' }, { id: 'products', label: UI.products, href: '#products' }, { id: product.id, label: product.name }]} />
        <Stack gap="md">
          <Stack direction="row" gap="sm" align="center">
            <Text variant="mono" tone="secondary">{product.vendor}</Text>
            {product.isDemo ? <Badge tone="demo">{UI.demoBadge}</Badge> : null}
          </Stack>
          <Heading level={1} size="display">{product.name}</Heading>
          {release ? <div><ReleaseTag version={release.version} status={release.status} /></div> : null}
          <Text variant="body-lg" prose>{product.summary}</Text>
          <Stack direction="row" gap="sm">{roleLabels.map((r) => <Badge key={r} icon={null}>{r}</Badge>)}</Stack>
        </Stack>
        <CtaGroup actions={content.ctas} headingLevel={2} />
      </Section>
      <Divider />
      <Section id="paketler">
        <Stack gap="sm">
          <Heading level={2}>{page.packagesHeading}</Heading>
          <Text tone="secondary" prose>{page.packagesIntro}</Text>
        </Stack>
        <Grid columns={3}>
          {packages.map((p) => (
            <Card key={p.id} variant="outlined" title={p.name} titleLevel={3}>
              <Text variant="body-sm" tone="secondary">{page.packageCardText}</Text>
            </Card>
          ))}
        </Grid>
        <div><Button variant="secondary" href="#compare" iconEnd="arrow-right">{UI.compareCta}</Button></div>
      </Section>
      <Section id="yenilikler" tone="subtle">
        {release
          ? <ReleaseNotes heading={page.releaseHeading} release={{ version: release.version, status: release.status }} items={release.items} sourceNote={release.sourceNote} />
          : <ReleaseNotes heading={page.releaseHeading} items={[]} emptyText={page.releaseEmpty} />}
      </Section>
      <Section id="kaynaklar">
        <Heading level={2}>{page.resourcesHeading}</Heading>
        <Grid columns={3}>
          {resources.map((r) => <ResourceCard key={r.id} kind={r.kind} title={r.title} description={r.description} href={r.href || undefined} language={r.language} fileSize={r.fileSize} duration={r.duration} />)}
        </Grid>
      </Section>
      <Section id="egitim" tone="subtle">
        <Heading level={2}>{page.supportHeading}</Heading>
        <Grid columns={2}>
          {content.support.map((s) => <SupportCard key={s.id} icon={s.icon} title={s.title} description={s.description} actions={s.actions} />)}
        </Grid>
      </Section>
      <Section id="sss">
        <Heading level={2}>{page.faqHeading}</Heading>
        <Accordion items={page.faq.map((f) => ({ id: f.id, title: f.question, content: <Text tone="secondary" prose>{f.answer}</Text> }))} />
      </Section>
      <Section id="iletisim">
        <CtaGroup layout="band" heading={page.ctaHeading} description={page.ctaText} actions={content.ctas} />
      </Section>
    </SitePage>
  );
}
window.ProductDetailScreen = ProductDetailScreen;
