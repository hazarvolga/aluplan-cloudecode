function ProductsScreen({ content }) {
  const { Heading, Text, Grid, RoleSelector, ProductCard, Breadcrumb, Stack } = ALU;
  const page = content.pages.products;
  const [role, setRole] = React.useState('all');
  const roles = [page.allRole, ...content.roles];
  const list = content.products.filter((p) => role === 'all' || p.roles.includes(role));
  return (
    <SitePage content={content} current="#products">
      <Section id="urunler">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '#products' }, { id: 'products', label: UI.products }]} />
        <Stack gap="sm">
          <Heading level={1}>{page.title}</Heading>
          <Text tone="secondary" prose>{page.intro}</Text>
        </Stack>
        <RoleSelector legend={page.roleLegend} roles={roles} value={role} onChange={setRole} />
        <Text variant="body-sm" tone="secondary" aria-live="polite">{fmt(UI.productCount, { count: list.length })}</Text>
        <Grid columns={3}>
          {list.map((p) => {
            const s = AluplanContent.selectProduct(content, p.id);
            return <ProductCard key={p.id} name={p.name} vendor={p.vendor} summary={p.summary} isDemo={p.isDemo} roles={s.roleLabels}
              release={s.latestRelease ? { version: s.latestRelease.version, status: s.latestRelease.status } : undefined} href={p.id === 'allplan' ? '#product' : undefined} />;
          })}
        </Grid>
      </Section>
    </SitePage>
  );
}
window.ProductsScreen = ProductsScreen;
