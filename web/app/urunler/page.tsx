import { SiteShell, Section } from '../SiteShell';
import { Heading } from '../../../project/components/typography/Heading';
import { Text } from '../../../project/components/typography/Text';
import { Stack } from '../../../project/components/layout/Stack';
import { Breadcrumb } from '../../../project/components/navigation/Breadcrumb';
import { content, selectProduct, UI } from '../../lib/content';
import type { ProductsPage } from '../../lib/pages';
import { ProductsView } from './ProductsView';

export const metadata = { title: 'Ürünler' };

export default function ProductsPage() {
  const page = content.pages.products as ProductsPage;
  // Serializable rows only: the client view receives plain data, never the content store.
  const rows = content.products.map((p) => {
    const s = selectProduct(p.id)!;
    return {
      id: p.id, name: p.name, vendor: p.vendor, summary: p.summary, isDemo: p.isDemo, roles: p.roles,
      roleLabels: s.roleLabels,
      release: s.latestRelease ? { version: s.latestRelease.version, status: s.latestRelease.status } : null,
      href: p.id === 'allplan' ? '/urunler/allplan' : null,
    };
  });
  const roles = [{ id: page.allRole.id, label: page.allRole.label, icon: page.allRole.icon, description: page.allRole.description }, ...content.roles];
  return (
    <SiteShell current="/urunler">
      <Section id="urunler">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '/urunler' }, { id: 'products', label: UI.products }]} />
        <Stack gap="sm">
          <Heading level={1}>{page.title}</Heading>
          <Text tone="secondary" prose>{page.intro}</Text>
        </Stack>
        <ProductsView rows={rows} roles={roles} roleLegend={page.roleLegend} countText={UI.productCount} />
      </Section>
    </SiteShell>
  );
}
