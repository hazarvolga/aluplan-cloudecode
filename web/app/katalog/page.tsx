import { SiteShell, Section } from '../SiteShell';
import { Heading } from '../../../project/components/typography/Heading';
import { Text } from '../../../project/components/typography/Text';
import { Button } from '../../../project/components/actions/Button';
import { IconButton } from '../../../project/components/actions/IconButton';
import { Link } from '../../../project/components/actions/Link';
import { Badge } from '../../../project/components/surfaces/Badge';
import { Card } from '../../../project/components/surfaces/Card';
import { Alert } from '../../../project/components/feedback/Alert';
import { Input } from '../../../project/components/forms/Input';
import { Select } from '../../../project/components/forms/Select';
import { Checkbox } from '../../../project/components/forms/Checkbox';
import { Tabs } from '../../../project/components/disclosure/Tabs';
import { Accordion } from '../../../project/components/disclosure/Accordion';
import { Breadcrumb } from '../../../project/components/navigation/Breadcrumb';
import { Divider } from '../../../project/components/layout/Divider';
import { Grid } from '../../../project/components/layout/Grid';
import { CtaGroup } from '../../../project/components/patterns/engagement/CtaGroup';
import { content, UI } from '../../lib/content';
import { CatalogDialog } from './CatalogDialog';

export const metadata = { title: 'Bileşen kataloğu' };

// Every component family in components/ with its states. Demo labels are generic; no product claims here.
function Entry({ id, name, children }: { id: string; name: string; children: React.ReactNode }) {
  return (
    <section id={id} className="alu-stack alu-stack--gap-md" style={{ paddingBlock: 'var(--space-stack-lg)', borderTop: 'var(--border-width-default) solid var(--border-default)' }}>
      <Heading level={2} size="h3">{name}</Heading>
      {children}
    </section>
  );
}

export default function CatalogPage() {
  const tabs = [
    { id: 'a', label: 'Birinci', content: <Text prose>Birinci sekmenin içeriği.</Text> },
    { id: 'b', label: 'İkinci', content: <Text prose>İkinci sekmenin içeriği.</Text> },
    { id: 'c', label: 'Pasif', disabled: true, content: <Text prose>Bu sekme pasif.</Text> },
  ];
  return (
    <SiteShell current="/katalog">
      <Section id="katalog">
        <Breadcrumb items={[{ id: 'home', label: UI.home, href: '/urunler' }, { id: 'catalog', label: 'Bileşen kataloğu' }]} />
        <Heading level={1}>Bileşen kataloğu</Heading>
        <Text tone="secondary" prose>Her bileşenin durumları bu sayfada gösterilir. Yalnız tasarım sistemi örnekleridir; ürün içeriği değildir.</Text>

        <Entry id="button" name="Button">
          <div className="alu-cta-group__actions">
            <Button variant="primary">Birincil</Button>
            <Button variant="secondary">İkincil</Button>
            <Button variant="ghost">Hayalet</Button>
            <Button variant="primary" disabled>Pasif</Button>
            <Button variant="primary" loading loadingLabel="Kaydediliyor">Yükleniyor</Button>
            <Button variant="secondary" href="https://forms.office.com/r/hXhnKAG912" external>Harici bağlantı</Button>
          </div>
        </Entry>

        <Entry id="link" name="Link">
          <Text>Metin içinde <Link href="#katalog">bağlantı</Link>, <Link href="#katalog" variant="standalone">bağımsız bağlantı</Link>.</Text>
        </Entry>

        <Entry id="icon-button" name="IconButton">
          <div className="alu-cta-group__actions">
            <IconButton icon="search" label="Ara" />
            <IconButton icon="download" label="İndir" variant="secondary" />
            <IconButton icon="x" label="Kapat" disabled />
          </div>
        </Entry>

        <Entry id="typography" name="Typography">
          <Heading level={2} size="h2">Başlık H2 · Türkçe İ ı Ğ ğ Ş ş Ç ç Ö ö Ü ü</Heading>
          <Text variant="body-lg">Gövde metni, büyük. Uzun satırlar okunabilir kalır.</Text>
          <Text variant="body-sm" tone="secondary">İkincil küçük gövde metni.</Text>
          <Text variant="mono" tone="secondary">IBM PLEX MONO · TEKNİK ETİKET</Text>
        </Entry>

        <Entry id="layout" name="Container, Stack, Grid, Divider">
          <Grid columns={3}>
            <Card title="Kart 1" titleLevel={3}><Text variant="body-sm" tone="secondary">Grid, üç sütun.</Text></Card>
            <Card title="Kart 2" titleLevel={3}><Text variant="body-sm" tone="secondary">Ekran dar olunca tek sütuna düşer.</Text></Card>
            <Card title="Kart 3" titleLevel={3}><Text variant="body-sm" tone="secondary">Bu kart örnek.</Text></Card>
          </Grid>
          <Divider />
        </Entry>

        <Entry id="card" name="Card">
          <Card variant="outlined" title="Varsayılan kart" titleLevel={3} footer={<Button variant="secondary" size="sm">Eylem</Button>}>
            <Text variant="body-sm" tone="secondary">Kart içeriği.</Text>
          </Card>
          <Card variant="subtle" title="Sakin kart" titleLevel={3}><Text variant="body-sm" tone="secondary">Yüzey tonu farklı.</Text></Card>
        </Entry>

        <Entry id="badge" name="Badge">
          <div className="alu-cta-group__actions">
            <Badge>Nötr</Badge>
            <Badge tone="success">Başarılı</Badge>
            <Badge tone="warning">Uyarı</Badge>
            <Badge tone="danger">Hata</Badge>
            <Badge tone="info">Bilgi</Badge>
            <Badge tone="demo">Demo içerik</Badge>
          </div>
        </Entry>

        <Entry id="forms" name="Input, Select, Checkbox">
          <Grid columns={2}>
            <Input label="E-posta" type="email" required hint="Örnek: ad@sirket.com.tr" />
            <Input label="Hatalı alan" defaultValue="x" error="Geçerli bir e-posta adresi girin (ör. ad@sirket.com.tr)." />
            <Select label="Sürüm" placeholder="Seçin" options={[{ value: 'a', label: 'ALLPLAN 2026' }]} />
            <Input label="Pasif alan" disabled defaultValue="Düzenlenemez" />
          </Grid>
          <Checkbox label="Bilgilendirme almak istiyorum" description="İstediğiniz zaman ayrılabilirsiniz." />
          <Checkbox label="Onay gerekli" error="Devam etmek için onay gerekli." />
        </Entry>

        <Entry id="alert" name="Alert">
          <Alert tone="info" title="Bilgi">Sayfa notu.</Alert>
          <Alert tone="success" title="Başarılı">İşlem tamamlandı.</Alert>
          <Alert tone="warning" title="Uyarı">Dikkat gerektiren durum.</Alert>
          <Alert tone="danger" title="Hata">Bir sorun oluştu.</Alert>
        </Entry>

        <Entry id="tabs" name="Tabs">
          <Tabs label="Örnek sekmeler" items={tabs} defaultTabId="a" />
        </Entry>

        <Entry id="accordion" name="Accordion">
          <Accordion items={[{ id: 'x', title: 'Birinci soru', content: <Text prose>Birinci cevap.</Text> }, { id: 'y', title: 'İkinci soru', content: <Text prose>İkinci cevap.</Text> }]} />
        </Entry>

        <Entry id="dialog" name="Dialog">
          <CatalogDialog />
        </Entry>

        <Entry id="breadcrumb" name="Breadcrumb">
          <Breadcrumb items={[{ id: 'a', label: 'Ana sayfa', href: '/urunler' }, { id: 'b', label: 'Katalog' }]} />
        </Entry>

        <Entry id="cta" name="CtaGroup">
          <CtaGroup heading="Teklif ve deneme" actions={content.ctas} />
        </Entry>
      </Section>
    </SiteShell>
  );
}
