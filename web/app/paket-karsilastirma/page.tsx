import { SiteShell, Section } from '../SiteShell';
import { Heading } from '../../../project/components/typography/Heading';
import { Text } from '../../../project/components/typography/Text';
import { Stack } from '../../../project/components/layout/Stack';
import { Breadcrumb } from '../../../project/components/navigation/Breadcrumb';
import { CtaGroup } from '../../../project/components/patterns/engagement/CtaGroup';
import { Link } from '../../../project/components/actions/Link';
import { content, selectProduct, selectScopeView, UI } from '../../lib/content';
import type { ComparisonPage } from '../../lib/pages';
import { ComparisonView } from './ComparisonView';

export const metadata = { title: 'Paket karşılaştırması' };

const PRODUCT_ID = 'allplan';

export default function ComparisonPageRoute() {
  const sel = selectProduct(PRODUCT_ID)!;
  const { product, releases } = sel;
  const page = content.pages.comparison as ComparisonPage;
  // Every release x market view is computed on the server; the client only switches between them.
  const views: Record<string, ReturnType<typeof selectScopeView>> = {};
  for (const r of releases) for (const m of content.markets) views[r.id + '|' + m.id] = selectScopeView(PRODUCT_ID, r.id, m.id);
  return (
    <SiteShell current="/paket-karsilastirma">
      <Section id="paketler">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '/urunler' }, { id: 'products', label: UI.products, href: '/urunler' }, { id: product.id, label: product.name, href: '/urunler/allplan' }, { id: 'compare', label: page.titleSuffix }]} />
        <Stack gap="sm">
          <Heading level={1}>{product.name + ' ' + page.titleSuffix}</Heading>
          <Text tone="secondary" prose>{page.intro}</Text>
        </Stack>
        <ComparisonView
          views={views}
          releases={releases.map((r) => ({ id: r.id, version: r.version }))}
          markets={content.markets}
          productName={product.name}
          captionSuffix={page.captionSuffix}
          footnote={page.footnote}
          labels={{ release: UI.releaseSelect, market: UI.marketSelect, summary: UI.scopeSummary }}
        />
        <Text variant="body-sm"><Link href="/urunler/allplan">{product.name + ' ' + UI.backToProduct}</Link></Text>
      </Section>
      <Section id="iletisim" tone="subtle">
        <CtaGroup heading={page.ctaHeading} description={page.ctaText} actions={content.ctas} />
      </Section>
    </SiteShell>
  );
}
