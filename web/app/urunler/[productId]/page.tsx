import { notFound } from 'next/navigation';
import { SiteShell, Section } from '../../SiteShell';
import { Heading } from '../../../../project/components/typography/Heading';
import { Text } from '../../../../project/components/typography/Text';
import { Stack } from '../../../../project/components/layout/Stack';
import { Grid } from '../../../../project/components/layout/Grid';
import { Divider } from '../../../../project/components/layout/Divider';
import { Breadcrumb } from '../../../../project/components/navigation/Breadcrumb';
import { ReleaseTag } from '../../../../project/components/patterns/product/ReleaseTag';
import { ReleaseNotes } from '../../../../project/components/patterns/product/ReleaseNotes';
import { CtaGroup } from '../../../../project/components/patterns/engagement/CtaGroup';
import { ResourceCard } from '../../../../project/components/patterns/engagement/ResourceCard';
import { SupportCard } from '../../../../project/components/patterns/engagement/SupportCard';
import { Card } from '../../../../project/components/surfaces/Card';
import { Badge } from '../../../../project/components/surfaces/Badge';
import { Button } from '../../../../project/components/actions/Button';
import { Accordion } from '../../../../project/components/disclosure/Accordion';
import { content, selectProduct, UI } from '../../../lib/content';
import type { ProductDetailPage } from '../../../lib/pages';

export function generateStaticParams() {
  return content.products.map((p) => ({ productId: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return { title: selectProduct(productId)?.product.name ?? 'Ürün' };
}

export default async function ProductDetailPageRoute({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const sel = selectProduct(productId);
  if (!sel) notFound();
  const { product, latestRelease: release, packages, resources, roleLabels } = sel;
  const page = content.pages.productDetail as ProductDetailPage;
  return (
    <SiteShell current="/urunler">
      <Section id="ozet">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '/urunler' }, { id: 'products', label: UI.products, href: '/urunler' }, { id: product.id, label: product.name }]} />
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
        <CtaGroup actions={content.ctas.map((c) => ({ ...c }))} headingLevel={2} />
      </Section>
      <Divider />
      <Section id="paketler">
        <Stack gap="sm">
          <Heading level={2}>{page.packagesHeading}</Heading>
          <Text tone="secondary" prose>{page.packagesIntro}</Text>
        </Stack>
        <Grid columns={3}>
          {packages.map((p) => (
            <Card key={p.id} variant="outlined" title={p.name} titleLevel={3} eyebrow={p.tagline ? <Text variant="mono" tone="secondary">{p.tagline}</Text> : undefined}>
              {p.description ? <Text variant="body-sm" tone="secondary">{p.description}</Text> : null}
            </Card>
          ))}
        </Grid>
        <div><Button variant="secondary" href="/paket-karsilastirma" iconEnd="arrow-right">{UI.compareCta}</Button></div>
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
    </SiteShell>
  );
}
