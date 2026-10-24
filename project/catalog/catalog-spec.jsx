// Catalog entries: purpose, variants, token dependencies, accessible behavior, states, live demo.
// Demo data is inline and labelled; product content lives in data/demo-content.json.
const C = window.AluplanDesignSystem_84a18c;
const CAT_LOGO = '../assets/logo/aluplan-logo-white-filled.svg';
const QUOTE = 'https://forms.office.com/r/hXhnKAG912';
const TRIAL = 'https://www.allplan.com/trial-or-subscription';

function LoadingDemo() {
  const [busy, setBusy] = React.useState(false);
  return <C.Button loading={busy} onClick={() => { setBusy(true); setTimeout(() => setBusy(false), 1600); }}>{busy ? 'Kaydediliyor' : 'Tıkla: yükleniyor durumu'}</C.Button>;
}
function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <C.Button variant="secondary" onClick={() => setOpen(true)}>Diyaloğu aç</C.Button>
      <C.Dialog open={open} onClose={() => setOpen(false)} title="Harici sayfaya gidiyorsunuz" description="Teklif formu forms.office.com üzerinde yeni sekmede açılır. Bu site form göndermez."
        footer={<><C.Button variant="ghost" onClick={() => setOpen(false)}>Vazgeç</C.Button><C.Button href={QUOTE} external>Forma git</C.Button></>} />
    </>
  );
}
function FormDemo() {
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  return (
    <div style={{ display: 'grid', gap: 'var(--space-stack-md)', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))' }}>
      <C.Input label="E-posta" type="email" required hint="Alandan çıkınca doğrulanır." value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouched(true)}
        error={touched && !valid ? 'Geçerli bir e-posta adresi girin (ör. ad@sirket.com.tr).' : undefined} success={touched && valid ? 'Biçim doğru.' : undefined} />
      <C.Input label="Pasif alan" disabled defaultValue="Düzenlenemez" />
      <C.Select label="Rol" placeholder="Seçin" options={[{ value: 'a', label: 'Mimar' }, { value: 'e', label: 'Mühendis' }, { value: 'p', label: 'Prekast' }]} />
      <C.Select label="Paket" placeholder="Seçin" error="Bir paket seçin." options={[{ value: 'a', label: 'Paket A (demo)' }]} />
      <C.Checkbox label="Bülten almak istiyorum" description="İstediğiniz zaman ayrılabilirsiniz." />
      <C.Checkbox label="Aydınlatma metnini okudum" error="Devam etmek için onay gerekli." />
      <C.Checkbox label="Pasif seçenek" disabled defaultChecked />
    </div>
  );
}

const CATALOG = [
  { group: 'Temel', name: 'Button', purpose: 'Bir bölgedeki ana eylem. Bağlantı gibi davranan buton için href.', variants: 'primary · secondary · ghost; sm · md · lg; fullWidth; iconStart/iconEnd; external', tokens: '--button-* → --action-*, --control-height-*, --radius-control, --font-weight-strong', a11y: 'Native <button>/<a>. loading: aria-busy + gizli "Yükleniyor". disabled link href kaybeder. Harici: ok ikonu + "(yeni sekmede açılır)". Etiket kırılır, kesilmez.', states: 'default, hover, focus-visible, active, disabled, loading',
    demo: () => <div className="cat-row"><C.Button>Kaydet</C.Button><C.Button variant="secondary" iconEnd="arrow-right">Paketleri karşılaştır</C.Button><C.Button variant="ghost">Vazgeç</C.Button><C.Button disabled>Pasif</C.Button><LoadingDemo /><C.Button href={QUOTE} external>Teklif iste</C.Button></div> },
  { group: 'Temel', name: 'Link', purpose: 'Metin içi veya tek başına gezinme bağlantısı.', variants: 'inline · standalone; external; current', tokens: '--text-link, --text-link-hover, --border-width-*', a11y: 'Her zaman alt çizgili (renk tek işaret değil). Harici bağlantılarda yeni sekme bildirimi.', states: 'default, hover, focus-visible, visited (tarayıcı)',
    demo: () => <div className="cat-row"><C.Text>Ayrıntılar için <C.Link href="#">eğitim takvimine</C.Link> bakın.</C.Text><C.Link href="#" variant="standalone">Tüm paketler</C.Link><C.Link href={TRIAL} external>Deneme sayfası</C.Link></div> },
  { group: 'Temel', name: 'IconButton', purpose: 'Yalnız ikonlu kontrol (menü, kapat).', variants: 'ghost · secondary · on-brand; sm · md', tokens: '--target-min, --button-ghost-*, --action-on-brand-*', a11y: 'label zorunlu (aria-label + title). md = 44px (aluplan) / 40px (field) hedef.', states: 'default, hover, focus-visible, active, disabled',
    demo: () => <div className="cat-row"><C.IconButton icon="menu" label="Menüyü aç" variant="secondary" /><C.IconButton icon="x" label="Kapat" /><C.IconButton icon="search" label="Ara" disabled /><span className="alu-on-brand" style={{ background: 'var(--surface-brand)', padding: 8, borderRadius: 'var(--radius-control)' }}><C.IconButton icon="menu" label="Menüyü aç" variant="on-brand" /></span></div> },
  { group: 'Temel', name: 'Typography (Heading, Text)', purpose: 'Başlık seviyesi (h1–h6) ile görsel boyut ayrı; gövde, altyazı, etiket, mono.', variants: 'Heading size: display · h1–h4; Text: body-lg · body · body-sm · caption · label · mono; tone secondary', tokens: '--font-heading/body/mono, --type-*-size/line-height, --font-weight-*', a11y: 'Tema doküman hiyerarşisini değiştirmez. Mono zorunlu büyük harf kullanmaz (Türkçe i/İ).', states: '—',
    demo: () => <C.Stack gap="sm"><C.Heading level={3} size="display">Mimari berraklık</C.Heading><C.Heading level={3} size="h2">h3 öğesi, h2 görünümünde</C.Heading><C.Text variant="body-lg" prose>İ ı Ğ ğ Ş ş Ç ç Ö ö Ü ü — İstanbul, Iğdır, Çeşme, Üsküdar.</C.Text><C.Text variant="mono" tone="secondary">IFC · DWG · teknik etiket</C.Text></C.Stack> },
  { group: 'Yerleşim', name: 'Container', purpose: 'Ortalanmış maksimum genişlik ve akışkan kenar boşluğu.', variants: 'sm · md · lg · xl · prose', tokens: '--container-*, --container-gutter', a11y: 'Görsel yalnız.', states: '—',
    demo: () => <C.Container size="sm" style={{ background: 'var(--surface-subtle)', paddingBlock: 12 }}><C.Text variant="mono">Container size="sm" (40rem)</C.Text></C.Container> },
  { group: 'Yerleşim', name: 'Stack / Grid', purpose: 'Tek eksenli boşluk düzeni ve duyarlı ızgara.', variants: 'Stack: column · row, gap xs–section; Grid: columns 2/3/4 veya minItemWidth', tokens: '--space-stack-*, --space-inline-*, --grid-gap; kırılımlar build-time (48rem, 64rem)', a11y: 'DOM sırası = okuma sırası; görsel yeniden sıralama yok.', states: '—',
    demo: () => <C.Grid columns={3}>{[1, 2, 3].map((i) => <div key={i} style={{ background: 'var(--surface-subtle)', border: '1px dashed var(--border-strong)', padding: 16 }}><C.Text variant="mono">hücre {i}</C.Text></div>)}</C.Grid> },
  { group: 'Yerleşim', name: 'Divider', purpose: 'İçerik grupları arasında çizgi.', variants: 'horizontal · vertical; strong; decorative', tokens: '--border-default, --border-strong', a11y: 'Varsayılan dekoratif (aria-hidden); anlamsal ayrım için <hr>.', states: '—',
    demo: () => <C.Stack gap="sm"><C.Divider /><C.Divider strong /></C.Stack> },
  { group: 'Yüzey', name: 'Card', purpose: 'Çerçeveli içerik kabı; başlığı tek bağlantı olan tıklanabilir kart.', variants: 'default · subtle · outlined; href', tokens: '--card-* → --surface-default, --border-default, --radius-surface, --elevation-*', a11y: 'Tek bağlantı + genişletilmiş tıklama alanı; odak halkası kartı çevreler. İç içe bağlantı yok.', states: 'default, hover, focus-visible',
    demo: () => <C.Grid columns={3}><C.Card title="Bağlantılı kart" href="#">Tüm alan tıklanır.</C.Card><C.Card variant="subtle" title="Sade kart">İkincil yüzey.</C.Card><C.Card variant="outlined" title="Çerçeveli kart">Gölgesiz.</C.Card></C.Grid> },
  { group: 'Yüzey', name: 'Badge', purpose: 'Kısa durum/kategori etiketi.', variants: 'neutral · accent · info · success · warning · danger · demo', tokens: '--badge-*, --status-*, --accent-*', a11y: 'Durum tonları ikonsuz kullanılmaz; demo kesik çizgi + metin.', states: '—',
    demo: () => <div className="cat-row"><C.Badge>Nötr</C.Badge><C.Badge tone="accent">Vurgu</C.Badge><C.Badge tone="info">Bilgi</C.Badge><C.Badge tone="success">Dahil</C.Badge><C.Badge tone="warning">Doğrulanmadı</C.Badge><C.Badge tone="danger">Hata</C.Badge><C.Badge tone="demo">Demo içerik</C.Badge></div> },
  { group: 'Form', name: 'Input · Select · Checkbox', purpose: 'Etiketli form kontrolleri. Bu sistem form göndermez.', variants: 'hint, error, success, required, disabled', tokens: '--input-*, --border-control(-hover), --status-danger-*, --status-success-*', a11y: 'Görünür <label>; ipucu ve hata aria-describedby ile bağlı; aria-invalid; hata = ikon + metin + kalın kenar; zorunlu = * + gizli "(zorunlu)".', states: 'default, hover, focus-visible, disabled, error, success',
    demo: () => <FormDemo /> },
  { group: 'Geri bildirim', name: 'Alert', purpose: 'Sayfa içi bilgi, başarı, uyarı, hata mesajı.', variants: 'info · success · warning · danger; live polite/assertive', tokens: '--status-*-bg/fg/border, --radius-surface', a11y: 'İkon + gizli önek ("Uyarı:"). Eylem sonrası mesajlar role=status; engelleyici hata role=alert.', states: '—',
    demo: () => <C.Stack gap="sm"><C.Alert title="Bilgi">Paket kapsamı sürüme göre değişebilir.</C.Alert><C.Alert tone="success" title="Başarılı">Örnek başarı.</C.Alert><C.Alert tone="warning" title="Demo veri">Doğrulanmamış içerik.</C.Alert><C.Alert tone="danger" title="Hata">E-posta alanını kontrol edin.</C.Alert></C.Stack> },
  { group: 'Geri bildirim', name: 'Dialog', purpose: 'Kısa onay veya bilgi için modal. Seyrek kullanılır.', variants: 'title, description, footer', tokens: '--dialog-*, --surface-scrim, --z-dialog, --motion-*', a11y: 'Native <dialog> showModal: odak hapsi, Esc, arka plan inert; kapanınca odak geri döner.', states: 'open, closed',
    demo: () => <DialogDemo /> },
  { group: 'Açılır', name: 'Tabs', purpose: 'Aynı konunun eş görünümleri arasında geçiş.', variants: 'controlled / uncontrolled; disabled tab', tokens: '--accent-border, --text-secondary, --target-min', a11y: 'WAI-ARIA tabs: ←/→, Home/End; seçili = kalın alt çizgi + kalın yazı. Dar ekranda yatay kaydırma, etiket kesilmez.', states: 'default, hover, focus-visible, selected, disabled',
    demo: () => <C.Tabs label="Örnek sekmeler" items={[{ id: 'a', label: 'Özet', content: <C.Text>Özet paneli.</C.Text> }, { id: 'b', label: 'Paketler', content: <C.Text>Paket paneli.</C.Text> }, { id: 'c', label: 'Kaynaklar ve çok uzun sekme etiketi', content: <C.Text>Kaynak paneli.</C.Text> }, { id: 'd', label: 'Pasif', disabled: true, content: null }]} /> },
  { group: 'Açılır', name: 'Accordion', purpose: 'SSS ve ikincil uzun ayrıntı.', variants: 'allowMultiple, defaultOpen, headingLevel', tokens: '--border-default, --type-h4-*, --motion-*', a11y: 'Başlık içinde button + aria-expanded/controls. Kritik bilgi akordeona saklanmaz.', states: 'collapsed, expanded, hover, focus-visible',
    demo: () => <C.Accordion items={[{ id: '1', title: 'Ürün, paket ve sürüm farkı', content: <C.Text tone="secondary">Ürün yazılımdır; paket kapsam setidir; sürüm yıllık yayındır.</C.Text> }, { id: '2', title: '“Bilgi yok” ne demek?', content: <C.Text tone="secondary">Doğrulanmadı demektir; yok demek değildir.</C.Text> }]} /> },
  { group: 'Gezinme', name: 'Breadcrumb', purpose: 'Ayrıntı sayfalarında konum.', variants: '—', tokens: '--text-link, --text-secondary', a11y: 'nav + ol; son öğe aria-current="page". Dar ekranda satır kırar.', states: 'default, hover, focus-visible',
    demo: () => <C.Breadcrumb items={[{ label: 'Ana sayfa', href: '#' }, { label: 'Ürünler', href: '#' }, { label: 'Örnek Portföy Ürünü: Çok Uzun Ürün Adı Taşma Testi' }]} /> },
  { group: 'Aluplan', name: 'SiteHeader (navigasyon + mobil menü)', purpose: 'Marka yüzeyinde logo, ana menü ve CTA; 64rem altında açılır menü.', variants: 'navItems, actions, currentHref', tokens: '--site-header-*, --surface-brand, --z-sticky, --focus-ring-on-brand', a11y: 'Menü düğmesi aria-expanded/controls; Esc kapatır ve odak düğmeye döner. Mobilde içerik gizlenmez, menüye taşınır.', states: 'menu closed/open, link current, hover, focus-visible',
    demo: () => <C.SiteHeader logoSrc={CAT_LOGO} homeHref="#" currentHref="#u" navItems={[{ label: 'Ürünler', href: '#u' }, { label: 'Çözümler', href: '#c' }, { label: 'Eğitim', href: '#e' }, { label: 'Destek', href: '#d' }]} actions={[{ label: 'Teklif iste', href: QUOTE, external: true }]} /> },
  { group: 'Aluplan', name: 'RoleSelector (Mimar / Mühendis / Prekast)', purpose: 'Hedef ekibe göre içerik filtreleme/yönlendirme.', variants: 'controlled / uncontrolled; roller içerikten gelir', tokens: '--accent-*, --border-control, --action-primary-*', a11y: 'fieldset + legend + native radio; ok tuşları; seçili = vurgu kenarı + dolu onay ikonu.', states: 'default, hover, focus-visible, checked',
    demo: () => <C.RoleSelector legend="Hangi ekiptesiniz?" defaultValue="architect" roles={[{ id: 'architect', label: 'Mimar', icon: 'building-2', description: 'Tasarım ve paftalama.' }, { id: 'engineer', label: 'Mühendis', icon: 'ruler', description: 'Yapı ve altyapı.' }, { id: 'precast', label: 'Prekast', icon: 'boxes', description: 'Prekast eleman tasarımı.' }]} /> },
  { group: 'Aluplan', name: 'ProductCard', purpose: 'Portföy ürün özeti; ayrıntı sayfasına bağlanır.', variants: 'release, roles, isDemo', tokens: '--card-*, --font-mono', a11y: 'Tek bağlantı (ad); uzun adlar kırılır.', states: 'default, hover, focus-visible',
    demo: () => <C.Grid columns={2}><C.ProductCard isDemo vendor="ALLPLAN (Nemetschek Group)" name="ALLPLAN" summary="[Demo özet]" href="#" roles={['Mimar', 'Mühendis']} release={{ version: 'ALLPLAN 20XX', status: 'placeholder' }} /><C.ProductCard isDemo vendor="Yer tutucu üretici" name="Örnek Portföy Ürünü: Şantiye ve Prekast Üretim Planlama İçin Çok Uzun Ürün Adı" href="#" roles={['Prekast']} /></C.Grid> },
  { group: 'Aluplan', name: 'PackageComparison', purpose: 'Paket kapsamı karşılaştırması.', variants: 'included · excluded · optional · unknown; note', tokens: '--comparison-*, --surface-subtle, --border-*', a11y: 'Gerçek <table>, caption, th scope; mobilde odaklanabilir etiketli kaydırma alanı + yapışkan ilk sütun; durum = ikon + metin. Eksik hücre = "Bilgi yok".', states: 'scroll region focus-visible',
    demo: () => <C.PackageComparison caption="Paket kapsamı (demo)" packages={[{ id: 'a', name: 'Paket A (demo)' }, { id: 'b', name: 'Paket B (demo)' }, { id: 'c', name: 'Paket C (demo)' }]} groups={[{ id: 'g', label: 'Modelleme', capabilities: [{ id: 'x', name: '2B çizim' }, { id: 'y', name: '3B BIM modelleme' }] }]} cells={{ 'a:x': { availability: 'included' }, 'a:y': { availability: 'excluded' }, 'b:x': { availability: 'included' }, 'b:y': { availability: 'optional' } }} /> },
  { group: 'Aluplan', name: 'ReleaseTag · ReleaseNotes', purpose: 'Yıllık sürüm etiketi ve yenilik listesi; ürün ve paketten görsel olarak ayrı.', variants: 'current · previous · placeholder; boş durum', tokens: '--accent-*, --status-warning-border, --font-mono', a11y: 'Durum metinle yazılır ("doğrulanmadı"). Boş liste açık mesaj gösterir.', states: '—',
    demo: () => <C.Stack gap="md"><div className="cat-row"><C.ReleaseTag version="ALLPLAN 20XX" status="placeholder" /><C.ReleaseTag version="Örnek 2.0" status="current" /><C.ReleaseTag version="Örnek 1.0" status="previous" /></div><C.ReleaseNotes headingLevel={3} heading="Yenilikler (boş durum)" items={[]} /></C.Stack> },
  { group: 'Aluplan', name: 'ResourceCard (PDF / video)', purpose: 'Doküman ve video kaynakları.', variants: 'pdf · video; href yoksa "henüz eklenmedi"', tokens: '--card-*, --accent-fg, --font-mono', a11y: 'Sahte indirme bağlantısı yok; mevcut değilse bağlantı üretilmez.', states: 'available (hover, focus-visible), unavailable',
    demo: () => <C.Grid columns={2}><C.ResourceCard kind="pdf" title="Ürün broşürü" description="Onaylı dosya bekleniyor." /><C.ResourceCard kind="video" title="Video (bağlantı örneği)" href="#" language="Türkçe" /></C.Grid> },
  { group: 'Aluplan', name: 'SupportCard (eğitim / destek)', purpose: 'Eğitim ve destek giriş noktası.', variants: 'icon, actions', tokens: '--surface-subtle, --accent-*', a11y: 'Başlık seviyesi yapılandırılabilir.', states: '—',
    demo: () => <C.Grid columns={2}><C.SupportCard icon="graduation-cap" title="Eğitim" description="Program bilgisi yer tutucudur." /><C.SupportCard icon="life-buoy" title="Teknik destek" description="Kanal bilgisi yer tutucudur." actions={[{ label: 'İletişim', href: '#' }]} /></C.Grid> },
  { group: 'Aluplan', name: 'CtaGroup (teklif / deneme)', purpose: 'Teklif ve deneme bağlantıları; hedef alan adı görünür.', variants: 'priority equal · quote · trial; inline · band', tokens: '--button-*, --surface-subtle', a11y: 'Harici + yeni sekme bildirimi; form göndermez; deneme süresi yazılmaz.', states: 'Button durumları',
    demo: () => <C.CtaGroup layout="band" heading="Teklif veya deneme" actions={[{ kind: 'quote', label: 'Teklif iste', href: QUOTE }, { kind: 'trial', label: 'Deneme veya abonelik seçenekleri', href: TRIAL }]} /> },
  { group: 'Aluplan', name: 'SiteFooter', purpose: 'Marka yüzeyinde alt bilgi bağlantıları.', variants: 'columns, legal', tokens: '--site-footer-*', a11y: 'nav + başlıklı listeler; harici bağlantı bildirimi.', states: 'hover, focus-visible',
    demo: () => <C.SiteFooter logoSrc={CAT_LOGO} homeHref="#" legal="© Aluplan. Yasal metin yer tutucudur." columns={[{ heading: 'Portföy', links: [{ label: 'Ürünler', href: '#' }] }, { heading: 'Hizmetler', links: [{ label: 'Eğitim', href: '#' }, { label: 'Destek', href: '#' }] }]} /> },
  { group: 'Taşma testleri', name: 'Uzun metin, çok satırlı buton, Türkçe karakter', purpose: 'Dar ekran (araç çubuğu: 360), metin %200 ve field teması ile birlikte inceleyin.', variants: '—', tokens: 'min-height (height değil), overflow-wrap, text-wrap', a11y: 'İçerik gizlenmez veya kesilmez.', states: '—',
    demo: () => <C.Stack gap="md"><div style={{ maxWidth: 260 }}><C.Button fullWidth>Çok uzun buton etiketi: Prekast üretim planlaması için teklif talebi oluştur</C.Button></div><C.Heading level={3}>ŞİŞLİ ÇAĞLAYAN İĞNEADA ÖĞRETMENLİK ÜNİVERSİTESİ — ığüşöç</C.Heading><div style={{ maxWidth: 300 }}><C.Badge tone="warning">Doğrulanmamış çok uzun bir durum etiketi örneği</C.Badge></div><C.Text>Uzun kelime: Mühendislikçilerimizdenmişsinizcesine-yapıyeterlilikbelgelendirilmesi.</C.Text></C.Stack> },
];
Object.assign(window, { CATALOG });
