/* @ds-bundle: {"format":4,"namespace":"AluplanDesignSystem_84a18c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Link","sourcePath":"components/actions/Link.jsx"},{"name":"BrandLogo","sourcePath":"components/brand/BrandLogo.jsx"},{"name":"ICON_NAMES","sourcePath":"components/brand/Icon.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Container","sourcePath":"components/layout/Container.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Grid","sourcePath":"components/layout/Grid.jsx"},{"name":"Stack","sourcePath":"components/layout/Stack.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"CtaGroup","sourcePath":"components/patterns/engagement/CtaGroup.jsx"},{"name":"ResourceCard","sourcePath":"components/patterns/engagement/ResourceCard.jsx"},{"name":"RoleSelector","sourcePath":"components/patterns/engagement/RoleSelector.jsx"},{"name":"SupportCard","sourcePath":"components/patterns/engagement/SupportCard.jsx"},{"name":"PackageComparison","sourcePath":"components/patterns/product/PackageComparison.jsx"},{"name":"ProductCard","sourcePath":"components/patterns/product/ProductCard.jsx"},{"name":"ReleaseNotes","sourcePath":"components/patterns/product/ReleaseNotes.jsx"},{"name":"ReleaseTag","sourcePath":"components/patterns/product/ReleaseTag.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Heading","sourcePath":"components/typography/Heading.jsx"},{"name":"Text","sourcePath":"components/typography/Text.jsx"},{"name":"GENERATED","sourcePath":"scripts/build-tokens.mjs"}],"sourceHashes":{"catalog/catalog-spec.jsx":"30c5d893630b","components/actions/Button.jsx":"ec2d185212a5","components/actions/IconButton.jsx":"17ad84e22557","components/actions/Link.jsx":"16ddcb2b9e13","components/brand/BrandLogo.jsx":"a64f36234fd7","components/brand/Icon.jsx":"feb0bdaa37ff","components/disclosure/Accordion.jsx":"d3ac31cdaf7f","components/disclosure/Tabs.jsx":"bb05743fda9b","components/feedback/Alert.jsx":"1b4add1fc927","components/feedback/Dialog.jsx":"b4eeb35be3b0","components/forms/Checkbox.jsx":"5f7868ea8447","components/forms/Input.jsx":"0b43da378310","components/forms/Select.jsx":"4f14bce580e0","components/layout/Container.jsx":"b7546b3d51dc","components/layout/Divider.jsx":"c24b9ca6c6ca","components/layout/Grid.jsx":"95792bbfdcc0","components/layout/Stack.jsx":"896e34e9762d","components/navigation/Breadcrumb.jsx":"2e9778e0835e","components/navigation/SiteFooter.jsx":"29bd22608b57","components/navigation/SiteHeader.jsx":"98fbb3d06844","components/patterns/engagement/CtaGroup.jsx":"bf61857afe65","components/patterns/engagement/ResourceCard.jsx":"09481d27f3ec","components/patterns/engagement/RoleSelector.jsx":"fdbc1beaf8b0","components/patterns/engagement/SupportCard.jsx":"a6ca7b19db07","components/patterns/product/PackageComparison.jsx":"e99f724a4b70","components/patterns/product/ProductCard.jsx":"f4bf16a20757","components/patterns/product/ReleaseNotes.jsx":"a5472e4ae342","components/patterns/product/ReleaseTag.jsx":"60573151b0ee","components/surfaces/Badge.jsx":"d3b36e823b1b","components/surfaces/Card.jsx":"c7d712f824f7","components/typography/Heading.jsx":"9b2aa1db8115","components/typography/Text.jsx":"600d38fc8d7d","data/content-model.ts":"bf9c7c7de90c","data/select-content.js":"6a3521383916","scripts/build-tokens.mjs":"2946187476ad","scripts/content-tests.mjs":"bf2c7b27c17b","scripts/token-tests.mjs":"284fbec97838","tests/source-loader.js":"aa861fcf9694","tokens/build/breakpoints.mjs":"b2598679b687","ui_kits/website/ComparisonScreen.jsx":"6d1eb3e72e32","ui_kits/website/PreviewShell.jsx":"5eb71a95ee07","ui_kits/website/ProductDetailScreen.jsx":"e856c4a5c375","ui_kits/website/ProductsScreen.jsx":"f7c444dbc3b4","ui_kits/website/SitePage.jsx":"ef64cb5f2019"},"inlinedExternals":[],"unexposedExports":[{"name":"buildTokens","sourcePath":"scripts/build-tokens.mjs"},{"name":"lintComponentCss","sourcePath":"scripts/build-tokens.mjs"},{"name":"runContentTests","sourcePath":"scripts/content-tests.mjs"},{"name":"runTokenTests","sourcePath":"scripts/token-tests.mjs"}]} */

(() => {

const __ds_ns = (window.AluplanDesignSystem_84a18c = window.AluplanDesignSystem_84a18c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// catalog/catalog-spec.jsx
try { (() => {
// Catalog entries: purpose, variants, token dependencies, accessible behavior, states, live demo.
// Demo data is inline and labelled; product content lives in data/demo-content.json.
const C = window.AluplanDesignSystem_84a18c;
const CAT_LOGO = '../assets/logo/aluplan-logo-white-filled.svg';
const QUOTE = 'https://forms.office.com/r/hXhnKAG912';
const TRIAL = 'https://www.allplan.com/trial-or-subscription';
function LoadingDemo() {
  const [busy, setBusy] = React.useState(false);
  return /*#__PURE__*/React.createElement(C.Button, {
    loading: busy,
    onClick: () => {
      setBusy(true);
      setTimeout(() => setBusy(false), 1600);
    }
  }, busy ? 'Kaydediliyor' : 'Tıkla: yükleniyor durumu');
}
function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(C.Button, {
    variant: "secondary",
    onClick: () => setOpen(true)
  }, "Diyalo\u011Fu a\xE7"), /*#__PURE__*/React.createElement(C.Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Harici sayfaya gidiyorsunuz",
    description: "Teklif formu forms.office.com \xFCzerinde yeni sekmede a\xE7\u0131l\u0131r. Bu site form g\xF6ndermez.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(C.Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Vazge\xE7"), /*#__PURE__*/React.createElement(C.Button, {
      href: QUOTE,
      external: true
    }, "Forma git"))
  }));
}
function FormDemo() {
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-stack-md)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))'
    }
  }, /*#__PURE__*/React.createElement(C.Input, {
    label: "E-posta",
    type: "email",
    required: true,
    hint: "Alandan \xE7\u0131k\u0131nca do\u011Frulan\u0131r.",
    value: email,
    onChange: e => setEmail(e.target.value),
    onBlur: () => setTouched(true),
    error: touched && !valid ? 'Geçerli bir e-posta adresi girin (ör. ad@sirket.com.tr).' : undefined,
    success: touched && valid ? 'Biçim doğru.' : undefined
  }), /*#__PURE__*/React.createElement(C.Input, {
    label: "Pasif alan",
    disabled: true,
    defaultValue: "D\xFCzenlenemez"
  }), /*#__PURE__*/React.createElement(C.Select, {
    label: "Rol",
    placeholder: "Se\xE7in",
    options: [{
      value: 'a',
      label: 'Mimar'
    }, {
      value: 'e',
      label: 'Mühendis'
    }, {
      value: 'p',
      label: 'Prekast'
    }]
  }), /*#__PURE__*/React.createElement(C.Select, {
    label: "Paket",
    placeholder: "Se\xE7in",
    error: "Bir paket se\xE7in.",
    options: [{
      value: 'a',
      label: 'Paket A (demo)'
    }]
  }), /*#__PURE__*/React.createElement(C.Checkbox, {
    label: "B\xFClten almak istiyorum",
    description: "\u0130stedi\u011Finiz zaman ayr\u0131labilirsiniz."
  }), /*#__PURE__*/React.createElement(C.Checkbox, {
    label: "Ayd\u0131nlatma metnini okudum",
    error: "Devam etmek i\xE7in onay gerekli."
  }), /*#__PURE__*/React.createElement(C.Checkbox, {
    label: "Pasif se\xE7enek",
    disabled: true,
    defaultChecked: true
  }));
}
const CATALOG = [{
  group: 'Temel',
  name: 'Button',
  purpose: 'Bir bölgedeki ana eylem. Bağlantı gibi davranan buton için href.',
  variants: 'primary · secondary · ghost; sm · md · lg; fullWidth; iconStart/iconEnd; external',
  tokens: '--button-* → --action-*, --control-height-*, --radius-control, --font-weight-strong',
  a11y: 'Native <button>/<a>. loading: aria-busy + gizli "Yükleniyor". disabled link href kaybeder. Harici: ok ikonu + "(yeni sekmede açılır)". Etiket kırılır, kesilmez.',
  states: 'default, hover, focus-visible, active, disabled, loading',
  demo: () => /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement(C.Button, null, "Kaydet"), /*#__PURE__*/React.createElement(C.Button, {
    variant: "secondary",
    iconEnd: "arrow-right"
  }, "Paketleri kar\u015F\u0131la\u015Ft\u0131r"), /*#__PURE__*/React.createElement(C.Button, {
    variant: "ghost"
  }, "Vazge\xE7"), /*#__PURE__*/React.createElement(C.Button, {
    disabled: true
  }, "Pasif"), /*#__PURE__*/React.createElement(LoadingDemo, null), /*#__PURE__*/React.createElement(C.Button, {
    href: QUOTE,
    external: true
  }, "Teklif iste"))
}, {
  group: 'Temel',
  name: 'Link',
  purpose: 'Metin içi veya tek başına gezinme bağlantısı.',
  variants: 'inline · standalone; external; current',
  tokens: '--text-link, --text-link-hover, --border-width-*',
  a11y: 'Her zaman alt çizgili (renk tek işaret değil). Harici bağlantılarda yeni sekme bildirimi.',
  states: 'default, hover, focus-visible, visited (tarayıcı)',
  demo: () => /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement(C.Text, null, "Ayr\u0131nt\u0131lar i\xE7in ", /*#__PURE__*/React.createElement(C.Link, {
    href: "#"
  }, "e\u011Fitim takvimine"), " bak\u0131n."), /*#__PURE__*/React.createElement(C.Link, {
    href: "#",
    variant: "standalone"
  }, "T\xFCm paketler"), /*#__PURE__*/React.createElement(C.Link, {
    href: TRIAL,
    external: true
  }, "Deneme sayfas\u0131"))
}, {
  group: 'Temel',
  name: 'IconButton',
  purpose: 'Yalnız ikonlu kontrol (menü, kapat).',
  variants: 'ghost · secondary · on-brand; sm · md',
  tokens: '--target-min, --button-ghost-*, --action-on-brand-*',
  a11y: 'label zorunlu (aria-label + title). md = 44px (aluplan) / 40px (field) hedef.',
  states: 'default, hover, focus-visible, active, disabled',
  demo: () => /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement(C.IconButton, {
    icon: "menu",
    label: "Men\xFCy\xFC a\xE7",
    variant: "secondary"
  }), /*#__PURE__*/React.createElement(C.IconButton, {
    icon: "x",
    label: "Kapat"
  }), /*#__PURE__*/React.createElement(C.IconButton, {
    icon: "search",
    label: "Ara",
    disabled: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "alu-on-brand",
    style: {
      background: 'var(--surface-brand)',
      padding: 8,
      borderRadius: 'var(--radius-control)'
    }
  }, /*#__PURE__*/React.createElement(C.IconButton, {
    icon: "menu",
    label: "Men\xFCy\xFC a\xE7",
    variant: "on-brand"
  })))
}, {
  group: 'Temel',
  name: 'Typography (Heading, Text)',
  purpose: 'Başlık seviyesi (h1–h6) ile görsel boyut ayrı; gövde, altyazı, etiket, mono.',
  variants: 'Heading size: display · h1–h4; Text: body-lg · body · body-sm · caption · label · mono; tone secondary',
  tokens: '--font-heading/body/mono, --type-*-size/line-height, --font-weight-*',
  a11y: 'Tema doküman hiyerarşisini değiştirmez. Mono zorunlu büyük harf kullanmaz (Türkçe i/İ).',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(C.Heading, {
    level: 3,
    size: "display"
  }, "Mimari berrakl\u0131k"), /*#__PURE__*/React.createElement(C.Heading, {
    level: 3,
    size: "h2"
  }, "h3 \xF6\u011Fesi, h2 g\xF6r\xFCn\xFCm\xFCnde"), /*#__PURE__*/React.createElement(C.Text, {
    variant: "body-lg",
    prose: true
  }, "\u0130 \u0131 \u011E \u011F \u015E \u015F \xC7 \xE7 \xD6 \xF6 \xDC \xFC \u2014 \u0130stanbul, I\u011Fd\u0131r, \xC7e\u015Fme, \xDCsk\xFCdar."), /*#__PURE__*/React.createElement(C.Text, {
    variant: "mono",
    tone: "secondary"
  }, "IFC \xB7 DWG \xB7 teknik etiket"))
}, {
  group: 'Yerleşim',
  name: 'Container',
  purpose: 'Ortalanmış maksimum genişlik ve akışkan kenar boşluğu.',
  variants: 'sm · md · lg · xl · prose',
  tokens: '--container-*, --container-gutter',
  a11y: 'Görsel yalnız.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Container, {
    size: "sm",
    style: {
      background: 'var(--surface-subtle)',
      paddingBlock: 12
    }
  }, /*#__PURE__*/React.createElement(C.Text, {
    variant: "mono"
  }, "Container size=\"sm\" (40rem)"))
}, {
  group: 'Yerleşim',
  name: 'Stack / Grid',
  purpose: 'Tek eksenli boşluk düzeni ve duyarlı ızgara.',
  variants: 'Stack: column · row, gap xs–section; Grid: columns 2/3/4 veya minItemWidth',
  tokens: '--space-stack-*, --space-inline-*, --grid-gap; kırılımlar build-time (48rem, 64rem)',
  a11y: 'DOM sırası = okuma sırası; görsel yeniden sıralama yok.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Grid, {
    columns: 3
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-subtle)',
      border: '1px dashed var(--border-strong)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(C.Text, {
    variant: "mono"
  }, "h\xFCcre ", i))))
}, {
  group: 'Yerleşim',
  name: 'Divider',
  purpose: 'İçerik grupları arasında çizgi.',
  variants: 'horizontal · vertical; strong; decorative',
  tokens: '--border-default, --border-strong',
  a11y: 'Varsayılan dekoratif (aria-hidden); anlamsal ayrım için <hr>.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(C.Divider, null), /*#__PURE__*/React.createElement(C.Divider, {
    strong: true
  }))
}, {
  group: 'Yüzey',
  name: 'Card',
  purpose: 'Çerçeveli içerik kabı; başlığı tek bağlantı olan tıklanabilir kart.',
  variants: 'default · subtle · outlined; href',
  tokens: '--card-* → --surface-default, --border-default, --radius-surface, --elevation-*',
  a11y: 'Tek bağlantı + genişletilmiş tıklama alanı; odak halkası kartı çevreler. İç içe bağlantı yok.',
  states: 'default, hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.Grid, {
    columns: 3
  }, /*#__PURE__*/React.createElement(C.Card, {
    title: "Ba\u011Flant\u0131l\u0131 kart",
    href: "#"
  }, "T\xFCm alan t\u0131klan\u0131r."), /*#__PURE__*/React.createElement(C.Card, {
    variant: "subtle",
    title: "Sade kart"
  }, "\u0130kincil y\xFCzey."), /*#__PURE__*/React.createElement(C.Card, {
    variant: "outlined",
    title: "\xC7er\xE7eveli kart"
  }, "G\xF6lgesiz."))
}, {
  group: 'Yüzey',
  name: 'Badge',
  purpose: 'Kısa durum/kategori etiketi.',
  variants: 'neutral · accent · info · success · warning · danger · demo',
  tokens: '--badge-*, --status-*, --accent-*',
  a11y: 'Durum tonları ikonsuz kullanılmaz; demo kesik çizgi + metin.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement(C.Badge, null, "N\xF6tr"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "accent"
  }, "Vurgu"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "info"
  }, "Bilgi"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "success"
  }, "Dahil"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "warning"
  }, "Do\u011Frulanmad\u0131"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "danger"
  }, "Hata"), /*#__PURE__*/React.createElement(C.Badge, {
    tone: "demo"
  }, "Demo i\xE7erik"))
}, {
  group: 'Form',
  name: 'Input · Select · Checkbox',
  purpose: 'Etiketli form kontrolleri. Bu sistem form göndermez.',
  variants: 'hint, error, success, required, disabled',
  tokens: '--input-*, --border-control(-hover), --status-danger-*, --status-success-*',
  a11y: 'Görünür <label>; ipucu ve hata aria-describedby ile bağlı; aria-invalid; hata = ikon + metin + kalın kenar; zorunlu = * + gizli "(zorunlu)".',
  states: 'default, hover, focus-visible, disabled, error, success',
  demo: () => /*#__PURE__*/React.createElement(FormDemo, null)
}, {
  group: 'Geri bildirim',
  name: 'Alert',
  purpose: 'Sayfa içi bilgi, başarı, uyarı, hata mesajı.',
  variants: 'info · success · warning · danger; live polite/assertive',
  tokens: '--status-*-bg/fg/border, --radius-surface',
  a11y: 'İkon + gizli önek ("Uyarı:"). Eylem sonrası mesajlar role=status; engelleyici hata role=alert.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(C.Alert, {
    title: "Bilgi"
  }, "Paket kapsam\u0131 s\xFCr\xFCme g\xF6re de\u011Fi\u015Febilir."), /*#__PURE__*/React.createElement(C.Alert, {
    tone: "success",
    title: "Ba\u015Far\u0131l\u0131"
  }, "\xD6rnek ba\u015Far\u0131."), /*#__PURE__*/React.createElement(C.Alert, {
    tone: "warning",
    title: "Demo veri"
  }, "Do\u011Frulanmam\u0131\u015F i\xE7erik."), /*#__PURE__*/React.createElement(C.Alert, {
    tone: "danger",
    title: "Hata"
  }, "E-posta alan\u0131n\u0131 kontrol edin."))
}, {
  group: 'Geri bildirim',
  name: 'Dialog',
  purpose: 'Kısa onay veya bilgi için modal. Seyrek kullanılır.',
  variants: 'title, description, footer',
  tokens: '--dialog-*, --surface-scrim, --z-dialog, --motion-*',
  a11y: 'Native <dialog> showModal: odak hapsi, Esc, arka plan inert; kapanınca odak geri döner.',
  states: 'open, closed',
  demo: () => /*#__PURE__*/React.createElement(DialogDemo, null)
}, {
  group: 'Açılır',
  name: 'Tabs',
  purpose: 'Aynı konunun eş görünümleri arasında geçiş.',
  variants: 'controlled / uncontrolled; disabled tab',
  tokens: '--accent-border, --text-secondary, --target-min',
  a11y: 'WAI-ARIA tabs: ←/→, Home/End; seçili = kalın alt çizgi + kalın yazı. Dar ekranda yatay kaydırma, etiket kesilmez.',
  states: 'default, hover, focus-visible, selected, disabled',
  demo: () => /*#__PURE__*/React.createElement(C.Tabs, {
    label: "\xD6rnek sekmeler",
    items: [{
      id: 'a',
      label: 'Özet',
      content: /*#__PURE__*/React.createElement(C.Text, null, "\xD6zet paneli.")
    }, {
      id: 'b',
      label: 'Paketler',
      content: /*#__PURE__*/React.createElement(C.Text, null, "Paket paneli.")
    }, {
      id: 'c',
      label: 'Kaynaklar ve çok uzun sekme etiketi',
      content: /*#__PURE__*/React.createElement(C.Text, null, "Kaynak paneli.")
    }, {
      id: 'd',
      label: 'Pasif',
      disabled: true,
      content: null
    }]
  })
}, {
  group: 'Açılır',
  name: 'Accordion',
  purpose: 'SSS ve ikincil uzun ayrıntı.',
  variants: 'allowMultiple, defaultOpen, headingLevel',
  tokens: '--border-default, --type-h4-*, --motion-*',
  a11y: 'Başlık içinde button + aria-expanded/controls. Kritik bilgi akordeona saklanmaz.',
  states: 'collapsed, expanded, hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.Accordion, {
    items: [{
      id: '1',
      title: 'Ürün, paket ve sürüm farkı',
      content: /*#__PURE__*/React.createElement(C.Text, {
        tone: "secondary"
      }, "\xDCr\xFCn yaz\u0131l\u0131md\u0131r; paket kapsam setidir; s\xFCr\xFCm y\u0131ll\u0131k yay\u0131nd\u0131r.")
    }, {
      id: '2',
      title: '“Bilgi yok” ne demek?',
      content: /*#__PURE__*/React.createElement(C.Text, {
        tone: "secondary"
      }, "Do\u011Frulanmad\u0131 demektir; yok demek de\u011Fildir.")
    }]
  })
}, {
  group: 'Gezinme',
  name: 'Breadcrumb',
  purpose: 'Ayrıntı sayfalarında konum.',
  variants: '—',
  tokens: '--text-link, --text-secondary',
  a11y: 'nav + ol; son öğe aria-current="page". Dar ekranda satır kırar.',
  states: 'default, hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.Breadcrumb, {
    items: [{
      label: 'Ana sayfa',
      href: '#'
    }, {
      label: 'Ürünler',
      href: '#'
    }, {
      label: 'Örnek Portföy Ürünü: Çok Uzun Ürün Adı Taşma Testi'
    }]
  })
}, {
  group: 'Aluplan',
  name: 'SiteHeader (navigasyon + mobil menü)',
  purpose: 'Marka yüzeyinde logo, ana menü ve CTA; 64rem altında açılır menü.',
  variants: 'navItems, actions, currentHref',
  tokens: '--site-header-*, --surface-brand, --z-sticky, --focus-ring-on-brand',
  a11y: 'Menü düğmesi aria-expanded/controls; Esc kapatır ve odak düğmeye döner. Mobilde içerik gizlenmez, menüye taşınır.',
  states: 'menu closed/open, link current, hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.SiteHeader, {
    logoSrc: CAT_LOGO,
    homeHref: "#",
    currentHref: "#u",
    navItems: [{
      label: 'Ürünler',
      href: '#u'
    }, {
      label: 'Çözümler',
      href: '#c'
    }, {
      label: 'Eğitim',
      href: '#e'
    }, {
      label: 'Destek',
      href: '#d'
    }],
    actions: [{
      label: 'Teklif iste',
      href: QUOTE,
      external: true
    }]
  })
}, {
  group: 'Aluplan',
  name: 'RoleSelector (Mimar / Mühendis / Prekast)',
  purpose: 'Hedef ekibe göre içerik filtreleme/yönlendirme.',
  variants: 'controlled / uncontrolled; roller içerikten gelir',
  tokens: '--accent-*, --border-control, --action-primary-*',
  a11y: 'fieldset + legend + native radio; ok tuşları; seçili = vurgu kenarı + dolu onay ikonu.',
  states: 'default, hover, focus-visible, checked',
  demo: () => /*#__PURE__*/React.createElement(C.RoleSelector, {
    legend: "Hangi ekiptesiniz?",
    defaultValue: "architect",
    roles: [{
      id: 'architect',
      label: 'Mimar',
      icon: 'building-2',
      description: 'Tasarım ve paftalama.'
    }, {
      id: 'engineer',
      label: 'Mühendis',
      icon: 'ruler',
      description: 'Yapı ve altyapı.'
    }, {
      id: 'precast',
      label: 'Prekast',
      icon: 'boxes',
      description: 'Prekast eleman tasarımı.'
    }]
  })
}, {
  group: 'Aluplan',
  name: 'ProductCard',
  purpose: 'Portföy ürün özeti; ayrıntı sayfasına bağlanır.',
  variants: 'release, roles, isDemo',
  tokens: '--card-*, --font-mono',
  a11y: 'Tek bağlantı (ad); uzun adlar kırılır.',
  states: 'default, hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.Grid, {
    columns: 2
  }, /*#__PURE__*/React.createElement(C.ProductCard, {
    isDemo: true,
    vendor: "ALLPLAN (Nemetschek Group)",
    name: "ALLPLAN",
    summary: "[Demo \xF6zet]",
    href: "#",
    roles: ['Mimar', 'Mühendis'],
    release: {
      version: 'ALLPLAN 20XX',
      status: 'placeholder'
    }
  }), /*#__PURE__*/React.createElement(C.ProductCard, {
    isDemo: true,
    vendor: "Yer tutucu \xFCretici",
    name: "\xD6rnek Portf\xF6y \xDCr\xFCn\xFC: \u015Eantiye ve Prekast \xDCretim Planlama \u0130\xE7in \xC7ok Uzun \xDCr\xFCn Ad\u0131",
    href: "#",
    roles: ['Prekast']
  }))
}, {
  group: 'Aluplan',
  name: 'PackageComparison',
  purpose: 'Paket kapsamı karşılaştırması.',
  variants: 'included · excluded · optional · unknown; note',
  tokens: '--comparison-*, --surface-subtle, --border-*',
  a11y: 'Gerçek <table>, caption, th scope; mobilde odaklanabilir etiketli kaydırma alanı + yapışkan ilk sütun; durum = ikon + metin. Eksik hücre = "Bilgi yok".',
  states: 'scroll region focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.PackageComparison, {
    caption: "Paket kapsam\u0131 (demo)",
    packages: [{
      id: 'a',
      name: 'Paket A (demo)'
    }, {
      id: 'b',
      name: 'Paket B (demo)'
    }, {
      id: 'c',
      name: 'Paket C (demo)'
    }],
    groups: [{
      id: 'g',
      label: 'Modelleme',
      capabilities: [{
        id: 'x',
        name: '2B çizim'
      }, {
        id: 'y',
        name: '3B BIM modelleme'
      }]
    }],
    cells: {
      'a:x': {
        availability: 'included'
      },
      'a:y': {
        availability: 'excluded'
      },
      'b:x': {
        availability: 'included'
      },
      'b:y': {
        availability: 'optional'
      }
    }
  })
}, {
  group: 'Aluplan',
  name: 'ReleaseTag · ReleaseNotes',
  purpose: 'Yıllık sürüm etiketi ve yenilik listesi; ürün ve paketten görsel olarak ayrı.',
  variants: 'current · previous · placeholder; boş durum',
  tokens: '--accent-*, --status-warning-border, --font-mono',
  a11y: 'Durum metinle yazılır ("doğrulanmadı"). Boş liste açık mesaj gösterir.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Stack, {
    gap: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement(C.ReleaseTag, {
    version: "ALLPLAN 20XX",
    status: "placeholder"
  }), /*#__PURE__*/React.createElement(C.ReleaseTag, {
    version: "\xD6rnek 2.0",
    status: "current"
  }), /*#__PURE__*/React.createElement(C.ReleaseTag, {
    version: "\xD6rnek 1.0",
    status: "previous"
  })), /*#__PURE__*/React.createElement(C.ReleaseNotes, {
    headingLevel: 3,
    heading: "Yenilikler (bo\u015F durum)",
    items: []
  }))
}, {
  group: 'Aluplan',
  name: 'ResourceCard (PDF / video)',
  purpose: 'Doküman ve video kaynakları.',
  variants: 'pdf · video; href yoksa "henüz eklenmedi"',
  tokens: '--card-*, --accent-fg, --font-mono',
  a11y: 'Sahte indirme bağlantısı yok; mevcut değilse bağlantı üretilmez.',
  states: 'available (hover, focus-visible), unavailable',
  demo: () => /*#__PURE__*/React.createElement(C.Grid, {
    columns: 2
  }, /*#__PURE__*/React.createElement(C.ResourceCard, {
    kind: "pdf",
    title: "\xDCr\xFCn bro\u015F\xFCr\xFC",
    description: "Onayl\u0131 dosya bekleniyor."
  }), /*#__PURE__*/React.createElement(C.ResourceCard, {
    kind: "video",
    title: "Video (ba\u011Flant\u0131 \xF6rne\u011Fi)",
    href: "#",
    language: "T\xFCrk\xE7e"
  }))
}, {
  group: 'Aluplan',
  name: 'SupportCard (eğitim / destek)',
  purpose: 'Eğitim ve destek giriş noktası.',
  variants: 'icon, actions',
  tokens: '--surface-subtle, --accent-*',
  a11y: 'Başlık seviyesi yapılandırılabilir.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Grid, {
    columns: 2
  }, /*#__PURE__*/React.createElement(C.SupportCard, {
    icon: "graduation-cap",
    title: "E\u011Fitim",
    description: "Program bilgisi yer tutucudur."
  }), /*#__PURE__*/React.createElement(C.SupportCard, {
    icon: "life-buoy",
    title: "Teknik destek",
    description: "Kanal bilgisi yer tutucudur.",
    actions: [{
      label: 'İletişim',
      href: '#'
    }]
  }))
}, {
  group: 'Aluplan',
  name: 'CtaGroup (teklif / deneme)',
  purpose: 'Teklif ve deneme bağlantıları; hedef alan adı görünür.',
  variants: 'priority equal · quote · trial; inline · band',
  tokens: '--button-*, --surface-subtle',
  a11y: 'Harici + yeni sekme bildirimi; form göndermez; deneme süresi yazılmaz.',
  states: 'Button durumları',
  demo: () => /*#__PURE__*/React.createElement(C.CtaGroup, {
    layout: "band",
    heading: "Teklif veya deneme",
    actions: [{
      kind: 'quote',
      label: 'Teklif iste',
      href: QUOTE
    }, {
      kind: 'trial',
      label: 'Deneme veya abonelik seçenekleri',
      href: TRIAL
    }]
  })
}, {
  group: 'Aluplan',
  name: 'SiteFooter',
  purpose: 'Marka yüzeyinde alt bilgi bağlantıları.',
  variants: 'columns, legal',
  tokens: '--site-footer-*',
  a11y: 'nav + başlıklı listeler; harici bağlantı bildirimi.',
  states: 'hover, focus-visible',
  demo: () => /*#__PURE__*/React.createElement(C.SiteFooter, {
    logoSrc: CAT_LOGO,
    homeHref: "#",
    legal: "\xA9 Aluplan. Yasal metin yer tutucudur.",
    columns: [{
      heading: 'Portföy',
      links: [{
        label: 'Ürünler',
        href: '#'
      }]
    }, {
      heading: 'Hizmetler',
      links: [{
        label: 'Eğitim',
        href: '#'
      }, {
        label: 'Destek',
        href: '#'
      }]
    }]
  })
}, {
  group: 'Taşma testleri',
  name: 'Uzun metin, çok satırlı buton, Türkçe karakter',
  purpose: 'Dar ekran (araç çubuğu: 360), metin %200 ve field teması ile birlikte inceleyin.',
  variants: '—',
  tokens: 'min-height (height değil), overflow-wrap, text-wrap',
  a11y: 'İçerik gizlenmez veya kesilmez.',
  states: '—',
  demo: () => /*#__PURE__*/React.createElement(C.Stack, {
    gap: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement(C.Button, {
    fullWidth: true
  }, "\xC7ok uzun buton etiketi: Prekast \xFCretim planlamas\u0131 i\xE7in teklif talebi olu\u015Ftur")), /*#__PURE__*/React.createElement(C.Heading, {
    level: 3
  }, "\u015E\u0130\u015EL\u0130 \xC7A\u011ELAYAN \u0130\u011ENEADA \xD6\u011ERETMENL\u0130K \xDCN\u0130VERS\u0130TES\u0130 \u2014 \u0131\u011F\xFC\u015F\xF6\xE7"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(C.Badge, {
    tone: "warning"
  }, "Do\u011Frulanmam\u0131\u015F \xE7ok uzun bir durum etiketi \xF6rne\u011Fi")), /*#__PURE__*/React.createElement(C.Text, null, "Uzun kelime: M\xFChendislik\xE7ilerimizdenmi\u015Fsinizcesine-yap\u0131yeterlilikbelgelendirilmesi."))
}];
Object.assign(window, {
  CATALOG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "catalog/catalog-spec.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandLogo.jsx
try { (() => {
// Renders the approved filled variant of the supplied logo (assets/logo/aluplan-logo-white-filled.svg:
// original geometry + fill="#FFFFFF" on the root; no filter, no redraw). The original upload is kept untouched.
// The white logo is only legible on a dark surface, so the component always paints --surface-brand
// behind it unless `bare` is set by a parent that already guarantees a brand surface (SiteHeader, SiteFooter).
function BrandLogo({
  src = 'assets/logo/aluplan-logo-white-filled.svg',
  size = 'md',
  href,
  bare = false,
  alt = 'Aluplan',
  className
}) {
  const cls = ['alu-brand-logo', 'alu-brand-logo--' + size, bare ? 'alu-brand-logo--bare' : 'alu-on-brand', className].filter(Boolean).join(' ');
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: href ? alt + ' ana sayfa' : alt,
    decoding: "async"
  });
  if (href) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href
  }, img);
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, img);
}
Object.assign(__ds_scope, { BrandLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandLogo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Icon geometry copied verbatim from lucide-static@0.454.0 (ISC). See assets/icons/lucide/ and ASSET-LICENSES.md.
// Regenerate this map from assets/icons/lucide-subset.json; do not hand-draw icons.
const ICON_DATA = {
  "arrow-right": "<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />",
  "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />",
  "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" />",
  "life-buoy": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m4.93 4.93 4.24 4.24\" /> <path d=\"m14.83 9.17 4.24-4.24\" /> <path d=\"m14.83 14.83 4.24 4.24\" /> <path d=\"m9.17 14.83-4.24 4.24\" /> <circle cx=\"12\" cy=\"12\" r=\"4\" />",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />",
  "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" />",
  "ruler": "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" /> <path d=\"m14.5 12.5 2-2\" /> <path d=\"m11.5 9.5 2-2\" /> <path d=\"m8.5 6.5 2-2\" /> <path d=\"m17.5 15.5 2-2\" />",
  "boxes": "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\" /> <path d=\"m7 16.5-4.74-2.85\" /> <path d=\"m7 16.5 5-3\" /> <path d=\"M7 16.5v5.17\" /> <path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\" /> <path d=\"m17 16.5-5-3\" /> <path d=\"m17 16.5 4.74-2.85\" /> <path d=\"M17 16.5v5.17\" /> <path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\" /> <path d=\"M12 8 7.26 5.15\" /> <path d=\"m12 8 4.74-2.85\" /> <path d=\"M12 13.5V8\" />",
  "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /> <path d=\"M12 17h.01\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />",
  "circle-play": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <polygon points=\"10 8 16 12 10 16 10 8\" />",
  "loader-circle": "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />",
  "circle-x": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m15 9-6 6\" /> <path d=\"m9 9 6 6\" />",
  "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /> <path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /> <path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />"
};
const ICON_NAMES = Object.keys(ICON_DATA);
function Icon({
  name,
  size = 'md',
  label,
  className,
  ...rest
}) {
  const inner = ICON_DATA[name];
  if (!inner) return null;
  const cls = ['alu-icon', size !== 'md' ? 'alu-icon--' + size : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: cls,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    focusable: "false",
    role: label ? 'img' : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : true,
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  loading = false,
  loadingLabel = 'Yükleniyor',
  disabled = false,
  fullWidth = false,
  iconStart,
  iconEnd,
  type = 'button',
  children,
  className,
  onClick,
  ...rest
}) {
  const cls = ['alu-btn', 'alu-btn--' + variant, size !== 'md' ? 'alu-btn--' + size : '', fullWidth ? 'alu-btn--full' : '', className].filter(Boolean).join(' ');
  const inactive = disabled || loading;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    className: "alu-spinner"
  }) : iconStart ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "alu-btn__label"
  }, children), loading ? /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, loadingLabel) : null, !loading && (iconEnd || href && external) ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd || 'arrow-up-right'
  }) : null, href && external ? /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (yeni sekmede a\xE7\u0131l\u0131r)") : null);
  if (href) {
    // Disabled links are rendered without href so they are not focusable or followable.
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: inactive ? undefined : href,
      "aria-disabled": inactive || undefined,
      "aria-busy": loading || undefined,
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined,
      onClick: inactive ? undefined : onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-disabled": loading || undefined,
    "aria-busy": loading || undefined,
    onClick: inactive ? e => e.preventDefault() : onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// `label` is required: it is the accessible name (aria-label) and the tooltip text.
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  type = 'button',
  className,
  ...rest
}) {
  const cls = ['alu-icon-btn', variant !== 'ghost' ? 'alu-icon-btn--' + variant : '', size === 'sm' ? 'alu-icon-btn--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Link({
  href,
  variant = 'inline',
  external = false,
  current = false,
  children,
  className,
  ...rest
}) {
  const cls = ['alu-link', variant === 'standalone' ? 'alu-link--standalone' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-current": current ? 'page' : undefined,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, rest), children, external ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right"
  }) : variant === 'standalone' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right"
  }) : null, external ? /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (yeni sekmede a\xE7\u0131l\u0131r)") : null);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Link.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
'use client';

// Disclosure buttons inside headings (WAI-ARIA accordion). Collapsed panels use `hidden`, so
// in-page find does not reach them; keep critical information (prices, scope limits) outside accordions.
function Accordion({
  items = [],
  headingLevel = 3,
  allowMultiple = true,
  defaultOpen = [],
  className
}) {
  const auto = React.useId();
  const [open, setOpen] = React.useState(defaultOpen);
  const H = 'h' + headingLevel;
  const toggle = id => setOpen(cur => cur.includes(id) ? cur.filter(x => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['alu-accordion', className].filter(Boolean).join(' ')
  }, items.map(it => {
    const isOpen = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "alu-accordion__item",
      key: it.id
    }, /*#__PURE__*/React.createElement(H, {
      className: "alu-accordion__heading"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "alu-accordion__trigger",
      id: auto + '-h-' + it.id,
      "aria-expanded": isOpen,
      "aria-controls": auto + '-p-' + it.id,
      onClick: () => toggle(it.id)
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "alu-accordion__panel",
      id: auto + '-p-' + it.id,
      role: "region",
      "aria-labelledby": auto + '-h-' + it.id,
      hidden: !isOpen
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Tabs.jsx
try { (() => {
'use client';

// WAI-ARIA tabs, automatic activation. Arrow keys move + select among ENABLED tabs, Home/End jump.
// Active-tab resolution (same rule for controlled and uncontrolled):
//   requested id (selectedId ?? internal state ?? defaultTabId) if it exists and is enabled,
//   otherwise the first enabled tab, otherwise none.
// Empty list renders nothing. All tabs disabled: tablist renders, no tab is focusable, no panel is shown.
// Controlled mode never calls onChange on its own; it only reports user actions.
function Tabs({
  items = [],
  defaultTabId,
  selectedId,
  onChange,
  label,
  className
}) {
  const auto = React.useId();
  const [inner, setInner] = React.useState(defaultTabId);
  const refs = React.useRef({});
  const enabled = items.filter(i => !i.disabled);
  const requested = selectedId !== undefined ? selectedId : inner;
  const active = enabled.some(i => i.id === requested) ? requested : enabled[0] ? enabled[0].id : null;
  if (!items.length) return null;
  const select = id => {
    if (selectedId === undefined) setInner(id);
    if (onChange) onChange(id);
  };
  const onKey = e => {
    if (!enabled.length) return;
    const idx = Math.max(0, enabled.findIndex(i => i.id === active));
    let next = null;
    if (e.key === 'ArrowRight') next = enabled[(idx + 1) % enabled.length];
    if (e.key === 'ArrowLeft') next = enabled[(idx - 1 + enabled.length) % enabled.length];
    if (e.key === 'Home') next = enabled[0];
    if (e.key === 'End') next = enabled[enabled.length - 1];
    if (next) {
      e.preventDefault();
      select(next.id);
      if (refs.current[next.id]) refs.current[next.id].focus();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['alu-tabs', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-tabs__list",
    role: "tablist",
    "aria-label": label,
    onKeyDown: onKey
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    ref: el => refs.current[it.id] = el,
    type: "button",
    role: "tab",
    className: "alu-tab",
    id: auto + '-tab-' + it.id,
    "aria-controls": auto + '-panel-' + it.id,
    "aria-selected": it.id === active,
    tabIndex: it.id === active ? 0 : -1,
    disabled: it.disabled,
    onClick: () => select(it.id)
  }, it.label))), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    role: "tabpanel",
    className: "alu-tabs__panel",
    id: auto + '-panel-' + it.id,
    "aria-labelledby": auto + '-tab-' + it.id,
    tabIndex: 0,
    hidden: it.id !== active
  }, it.content)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert'
};
const PREFIX = {
  info: 'Bilgi',
  success: 'Başarılı',
  warning: 'Uyarı',
  danger: 'Hata'
};

// `live`: 'polite' for messages that appear after an action (role=status), 'assertive' only for blocking errors (role=alert).
// Static page notices should keep the default (no live region).
function Alert({
  tone = 'info',
  title,
  live,
  children,
  className,
  ...rest
}) {
  const role = live === 'assertive' ? 'alert' : live === 'polite' ? 'status' : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['alu-alert', tone !== 'info' ? 'alu-alert--' + tone : '', className].filter(Boolean).join(' '),
    role: role
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICON[tone]
  }), /*#__PURE__*/React.createElement("div", {
    className: "alu-alert__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "alu-alert__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, PREFIX[tone], ": "), title) : /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, PREFIX[tone]), children ? /*#__PURE__*/React.createElement("div", {
    className: "alu-alert__content"
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
'use client';

// Built on native <dialog>.showModal(): focus containment, Esc to close, inert background and top-layer stacking
// are provided by the browser. Focus returns to the previously focused element on close.
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  closeLabel = 'Kapat',
  className
}) {
  const ref = React.useRef(null);
  const ids = React.useId();
  const lastFocus = React.useRef(null);
  React.useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      lastFocus.current = document.activeElement;
      d.showModal();
      // Deterministic initial focus (browsers differ when the document itself is not focused).
      const target = d.querySelector('[autofocus]') || d.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (target && document.activeElement !== target && !d.contains(document.activeElement)) target.focus();
    }
    if (!open && d.open) {
      d.close();
    }
  }, [open]);
  React.useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handle = () => {
      onClose && onClose();
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    };
    d.addEventListener('close', handle);
    return () => d.removeEventListener('close', handle);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("dialog", {
    ref: ref,
    className: ['alu-dialog', className].filter(Boolean).join(' '),
    "aria-labelledby": 'dt' + ids,
    "aria-describedby": description ? 'dd' + ids : undefined,
    onClick: e => {
      if (e.target === ref.current) ref.current.close();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-dialog__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-dialog__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "alu-heading alu-heading--h3",
    id: 'dt' + ids
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: closeLabel,
    onClick: () => ref.current.close()
  })), description ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--secondary",
    id: 'dd' + ids
  }, description) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "alu-dialog__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  id,
  label,
  description,
  error,
  disabled = false,
  className,
  ...rest
}) {
  const auto = React.useId();
  const cbId = id || 'cb' + auto;
  const descId = description ? cbId + '-desc' : undefined;
  const errId = error ? cbId + '-err' : undefined;
  return /*#__PURE__*/React.createElement("label", {
    className: ['alu-checkbox', disabled ? 'alu-checkbox--disabled' : '', className].filter(Boolean).join(' '),
    htmlFor: cbId
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-checkbox__control"
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "alu-checkbox__input",
    type: "checkbox",
    id: cbId,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": [descId, errId].filter(Boolean).join(' ') || undefined
  }, rest)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    className: "alu-checkbox__mark"
  })), /*#__PURE__*/React.createElement("span", {
    className: "alu-checkbox__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-checkbox__label"
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "alu-hint",
    id: descId
  }, description) : null), error ? /*#__PURE__*/React.createElement("span", {
    className: "alu-msg alu-msg--error",
    id: errId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, "Hata: "), error)) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  id,
  label,
  hint,
  error,
  success,
  required = false,
  disabled = false,
  type = 'text',
  className,
  ...rest
}) {
  const auto = React.useId();
  const inputId = id || 'in' + auto;
  const hintId = hint ? inputId + '-hint' : undefined;
  const msgId = error || success ? inputId + '-msg' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: ['alu-field', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("label", {
    className: "alu-label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "alu-label__req",
    "aria-hidden": "true"
  }, "*"), /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (zorunlu)")) : null), hint ? /*#__PURE__*/React.createElement("p", {
    className: "alu-hint",
    id: hintId
  }, hint) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "alu-input",
    id: inputId,
    type: type,
    required: required,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "data-valid": success && !error ? true : undefined,
    "aria-describedby": [hintId, msgId].filter(Boolean).join(' ') || undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("p", {
    className: "alu-msg alu-msg--error",
    id: msgId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, "Hata: "), error)) : null, !error && success ? /*#__PURE__*/React.createElement("p", {
    className: "alu-msg alu-msg--success",
    id: msgId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check"
  }), /*#__PURE__*/React.createElement("span", null, success)) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Native <select> on purpose: keyboard, screen-reader and mobile pickers come for free.
function Select({
  id,
  label,
  hint,
  error,
  options = [],
  placeholder,
  required = false,
  disabled = false,
  className,
  ...rest
}) {
  const auto = React.useId();
  const selId = id || 'sel' + auto;
  const hintId = hint ? selId + '-hint' : undefined;
  const errId = error ? selId + '-err' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: ['alu-field', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("label", {
    className: "alu-label",
    htmlFor: selId
  }, label, required ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "alu-label__req",
    "aria-hidden": "true"
  }, "*"), /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (zorunlu)")) : null), hint ? /*#__PURE__*/React.createElement("p", {
    className: "alu-hint",
    id: hintId
  }, hint) : null, /*#__PURE__*/React.createElement("span", {
    className: "alu-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "alu-select",
    id: selId,
    required: required,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": [hintId, errId].filter(Boolean).join(' ') || undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down"
  })), error ? /*#__PURE__*/React.createElement("p", {
    className: "alu-msg alu-msg--error",
    id: errId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, "Hata: "), error)) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Container.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Container({
  as = 'div',
  size = 'lg',
  children,
  className,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['alu-container', size !== 'lg' ? 'alu-container--' + size : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Container.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
// Decorative by default (hidden from AT). Pass decorative={false} when the rule separates content groups semantically.
function Divider({
  orientation = 'horizontal',
  strong = false,
  decorative = true,
  className
}) {
  const cls = ['alu-divider', orientation === 'vertical' ? 'alu-divider--vertical' : '', strong ? 'alu-divider--strong' : '', className].filter(Boolean).join(' ');
  if (decorative) return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "aria-hidden": "true"
  });
  return /*#__PURE__*/React.createElement("hr", {
    className: cls,
    "aria-orientation": orientation === 'vertical' ? 'vertical' : undefined
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/Grid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Either fixed responsive columns (2/3/4: 1 col → 2 at md → n at lg) or intrinsic auto-fill.
// Auto-fill minimum defaults to --grid-min-item (token); minItemWidth overrides it per instance.
function Grid({
  as = 'div',
  columns,
  minItemWidth,
  children,
  className,
  style,
  ...rest
}) {
  const Tag = as;
  const cls = ['alu-grid', columns ? 'alu-grid--cols-' + columns : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: columns || !minItemWidth ? style : {
      '--alu-grid-min': minItemWidth,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Grid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Grid.jsx", error: String((e && e.message) || e) }); }

// components/layout/Stack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stack({
  as = 'div',
  direction = 'column',
  gap = 'md',
  align,
  justify,
  children,
  className,
  style,
  ...rest
}) {
  const Tag = as;
  const cls = ['alu-stack', direction === 'row' ? 'alu-stack--row' : '', gap !== 'md' ? 'alu-stack--gap-' + gap : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: {
      alignItems: align,
      justifyContent: justify,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Stack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Stack.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
// Last item is the current page (aria-current, not a link). Wraps on narrow screens instead of truncating.
function Breadcrumb({
  items = [],
  label = 'Sayfa konumu',
  className
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ['alu-breadcrumb', className].filter(Boolean).join(' '),
    "aria-label": label
  }, /*#__PURE__*/React.createElement("ol", null, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id || 'crumb-' + i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href
    }, it.label), !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: "sm"
    }) : null);
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
// Columns come from content. `legal` is plain text supplied by content owners; nothing is generated here.
function SiteFooter({
  columns = [],
  logoSrc,
  homeHref = '/',
  legal,
  label = 'Alt bilgi bağlantıları'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "alu-site-footer alu-on-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-container alu-container--xl"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-site-footer__grid"
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: c.id || 'col-' + ci
  }, /*#__PURE__*/React.createElement("h2", {
    className: "alu-site-footer__heading"
  }, c.heading), /*#__PURE__*/React.createElement("ul", {
    className: "alu-site-footer__list"
  }, c.links.map((l, li) => /*#__PURE__*/React.createElement("li", {
    key: l.id || 'link-' + li
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    target: l.external ? '_blank' : undefined,
    rel: l.external ? 'noopener noreferrer' : undefined
  }, l.label, l.external ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (yeni sekmede a\xE7\u0131l\u0131r)")) : null)))))))), /*#__PURE__*/React.createElement("div", {
    className: "alu-site-footer__bottom"
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandLogo, {
    src: logoSrc,
    href: homeHref,
    bare: true,
    size: "sm"
  }), legal ? /*#__PURE__*/React.createElement("p", null, legal) : null)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
'use client';

// Below the lg breakpoint (64rem) the nav and actions move into a disclosure menu; nothing is dropped.
// Esc closes the menu and returns focus to the toggle.
function SiteHeader({
  navItems = [],
  currentHref,
  actions = [],
  logoSrc,
  homeHref = '/',
  label = 'Ana menü'
}) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const menuId = React.useId() + '-menu';
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        setOpen(false);
        const b = toggleRef.current && toggleRef.current.querySelector('button');
        b && b.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const links = /*#__PURE__*/React.createElement("ul", {
    className: "alu-site-header__list"
  }, navItems.map((n, i) => /*#__PURE__*/React.createElement("li", {
    key: n.id || 'nav-' + i
  }, /*#__PURE__*/React.createElement("a", {
    className: "alu-nav-link",
    href: n.href,
    "aria-current": n.href === currentHref ? 'page' : undefined
  }, n.label))));
  const btns = full => actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.id || 'action-' + i,
    variant: a.variant || 'secondary',
    size: "sm",
    href: a.href,
    external: a.external,
    fullWidth: full
  }, a.label));
  return /*#__PURE__*/React.createElement("header", {
    className: "alu-site-header alu-on-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-container alu-container--xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-site-header__bar"
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandLogo, {
    src: logoSrc,
    href: homeHref,
    bare: true,
    size: "sm",
    className: "alu-site-header__brand"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "alu-site-header__nav",
    "aria-label": label
  }, links), actions.length ? /*#__PURE__*/React.createElement("div", {
    className: "alu-site-header__actions"
  }, btns(false)) : null, /*#__PURE__*/React.createElement("span", {
    className: "alu-site-header__toggle",
    ref: toggleRef
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: open ? 'x' : 'menu',
    label: open ? 'Menüyü kapat' : 'Menüyü aç',
    variant: "on-brand",
    "aria-expanded": open,
    "aria-controls": menuId,
    onClick: () => setOpen(!open)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "alu-site-header__menu",
    id: menuId,
    hidden: !open
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": label + ' (mobil)'
  }, links), actions.length ? /*#__PURE__*/React.createElement("div", {
    className: "alu-site-header__menu-actions"
  }, btns(true)) : null)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/patterns/engagement/CtaGroup.jsx
try { (() => {
// Quote + trial call-to-action pair. Commercial priority is not decided yet, so `priority` defaults to "equal"
// (both buttons share one visual weight). Each target domain is shown under its button so the user knows
// they are leaving the site. This component never submits a form.
function CtaGroup({
  heading,
  description,
  actions = [],
  priority = 'equal',
  layout = 'inline',
  headingLevel = 2,
  showDestination = true
}) {
  const H = 'h' + headingLevel;
  const variantFor = a => priority === 'equal' ? 'primary' : a.kind === priority ? 'primary' : 'secondary';
  const host = href => {
    try {
      return new URL(href).host;
    } catch (e) {
      return href;
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: ['alu-cta-group', layout === 'band' ? 'alu-cta-group--band' : ''].filter(Boolean).join(' '),
    "aria-label": heading ? undefined : 'Teklif ve deneme'
  }, heading ? /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h2"
  }, heading) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--secondary alu-text--prose"
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    className: "alu-cta-group__actions"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "alu-cta-group__item",
    key: a.id || 'cta-' + i
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variantFor(a),
    href: a.href,
    external: a.external !== false,
    size: "lg"
  }, a.label), showDestination ? /*#__PURE__*/React.createElement("span", {
    className: "alu-cta-group__dest"
  }, host(a.href)) : null))));
}
Object.assign(__ds_scope, { CtaGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/engagement/CtaGroup.jsx", error: String((e && e.message) || e) }); }

// components/patterns/engagement/ResourceCard.jsx
try { (() => {
// PDF / video resource. If `href` is missing the card renders an explicit "not yet available" state
// instead of a fake link. File size, duration and language are shown only when supplied.
function ResourceCard({
  kind = 'pdf',
  title,
  description,
  href,
  fileSize,
  duration,
  language,
  unavailableText = 'Dosya henüz eklenmedi',
  titleLevel = 3
}) {
  const H = 'h' + titleLevel;
  const kindLabel = kind === 'video' ? 'Video' : 'PDF';
  const action = kind === 'video' ? 'Videoyu izle' : 'PDF’i aç';
  const meta = [fileSize && ['Boyut', fileSize], duration && ['Süre', duration], language && ['Dil', language]].filter(Boolean);
  return /*#__PURE__*/React.createElement("article", {
    className: ['alu-card', 'alu-card--outlined', href ? 'alu-card--interactive' : 'alu-resource-card--unavailable'].join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-resource-card__kind"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === 'video' ? 'circle-play' : 'file-text'
  }), kindLabel), /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h4"
  }, href ? /*#__PURE__*/React.createElement("a", {
    className: "alu-card__link",
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, title, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, ", ", action, " (yeni sekmede a\xE7\u0131l\u0131r)")) : title), description ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--body-sm alu-text--secondary"
  }, description) : null, meta.length ? /*#__PURE__*/React.createElement("dl", {
    className: "alu-resource-card__meta"
  }, meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("dt", null, k, ":"), /*#__PURE__*/React.createElement("dd", null, v)))) : null, /*#__PURE__*/React.createElement("div", {
    className: "alu-card__footer"
  }, href ? /*#__PURE__*/React.createElement("span", {
    className: "alu-link alu-link--standalone",
    "aria-hidden": "true"
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "alu-resource-card__unavailable"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-help",
    size: "sm"
  }), unavailableText)));
}
Object.assign(__ds_scope, { ResourceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/engagement/ResourceCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/engagement/RoleSelector.jsx
try { (() => {
'use client';

// Single-choice role filter (native radio group in a fieldset). Arrow keys move between options natively.
// Roles come from content; the component does not hard-code Mimar/Mühendis/Prekast.
function RoleSelector({
  legend,
  roles = [],
  value,
  defaultValue,
  onChange,
  name
}) {
  const auto = React.useId();
  const [inner, setInner] = React.useState(defaultValue);
  const current = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "alu-role-selector"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "alu-role-selector__legend"
  }, legend), /*#__PURE__*/React.createElement("div", {
    className: "alu-role-selector__options"
  }, roles.map(r => /*#__PURE__*/React.createElement("label", {
    key: r.id,
    className: "alu-role"
  }, /*#__PURE__*/React.createElement("input", {
    className: "alu-role__input",
    type: "radio",
    name: name || 'role' + auto,
    value: r.id,
    checked: current === r.id,
    onChange: () => {
      if (value === undefined) setInner(r.id);
      onChange && onChange(r.id);
    }
  }), r.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: "lg",
    className: "alu-role__icon"
  }) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "alu-role__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-role__title"
  }, r.label), r.description ? /*#__PURE__*/React.createElement("span", {
    className: "alu-role__desc"
  }, r.description) : null), /*#__PURE__*/React.createElement("span", {
    className: "alu-role__check",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check"
  }))))));
}
Object.assign(__ds_scope, { RoleSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/engagement/RoleSelector.jsx", error: String((e && e.message) || e) }); }

// components/patterns/engagement/SupportCard.jsx
try { (() => {
// Training / support entry point. Actions are optional; without them the card is informational only.
function SupportCard({
  icon = 'life-buoy',
  title,
  description,
  actions = [],
  titleLevel = 3
}) {
  const H = 'h' + titleLevel;
  return /*#__PURE__*/React.createElement("article", {
    className: "alu-card alu-card--subtle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-support-card__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "lg"
  })), /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h4"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--body-sm alu-text--secondary"
  }, description) : null, actions.length ? /*#__PURE__*/React.createElement("div", {
    className: "alu-card__footer"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: a.id || 'action-' + i,
    className: "alu-link alu-link--standalone",
    href: a.href,
    target: a.external ? '_blank' : undefined,
    rel: a.external ? 'noopener noreferrer' : undefined
  }, a.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.external ? 'arrow-up-right' : 'arrow-right'
  }), a.external ? /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, " (yeni sekmede a\xE7\u0131l\u0131r)") : null))) : null);
}
Object.assign(__ds_scope, { SupportCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/engagement/SupportCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/product/PackageComparison.jsx
try { (() => {
'use client';

const STATES = {
  included: {
    icon: 'check',
    label: 'Dahil'
  },
  excluded: {
    icon: 'minus',
    label: 'Dahil değil'
  },
  optional: {
    icon: 'layers',
    label: 'Ek seçenek'
  },
  unknown: {
    icon: 'circle-help',
    label: 'Bilgi yok'
  }
};

// Package comparison as a real <table> (row + column headers). On narrow screens the table scrolls
// horizontally inside a focusable, labelled region with a sticky first column; no column is hidden.
// "unknown" means the scope is not confirmed — it must never be rendered as "excluded".
function PackageComparison({
  caption,
  packages = [],
  groups = [],
  cells = {},
  states = STATES,
  scrollHint = 'Tabloyu yatay kaydırarak tüm paketleri görün.',
  footnote
}) {
  const id = React.useId();
  const cell = (pkgId, capId) => {
    const c = cells[pkgId + ':' + capId] || {
      availability: 'unknown'
    };
    const s = states[c.availability] || states.unknown;
    return /*#__PURE__*/React.createElement("span", {
      className: 'alu-avail alu-avail--' + c.availability
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "alu-avail__text"
    }, s.label), c.note ? /*#__PURE__*/React.createElement("span", {
      className: "alu-avail__note"
    }, c.note) : null));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "alu-comparison"
  }, /*#__PURE__*/React.createElement("p", {
    className: "alu-comparison__hint",
    id: id + '-hint'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: "sm"
  }), scrollHint), /*#__PURE__*/React.createElement("div", {
    className: "alu-comparison__scroll",
    role: "region",
    "aria-labelledby": id + '-cap',
    "aria-describedby": id + '-hint',
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("caption", {
    id: id + '-cap'
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Yetenek"), packages.map(p => /*#__PURE__*/React.createElement("th", {
    scope: "col",
    key: p.id
  }, p.name)))), groups.map(g => /*#__PURE__*/React.createElement("tbody", {
    key: g.id
  }, /*#__PURE__*/React.createElement("tr", {
    className: "alu-comparison__group"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "rowgroup",
    colSpan: packages.length + 1
  }, g.label)), g.capabilities.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.id
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, c.name), packages.map(p => /*#__PURE__*/React.createElement("td", {
    key: p.id
  }, cell(p.id, c.id))))))))), /*#__PURE__*/React.createElement("ul", {
    className: "alu-comparison__legend",
    "aria-label": "G\xF6sterge"
  }, Object.entries(states).map(([k, s]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    className: 'alu-avail alu-avail--' + k
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "alu-avail__text"
  }, s.label)))), footnote ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--caption alu-text--secondary"
  }, footnote) : null);
}
Object.assign(__ds_scope, { PackageComparison });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/product/PackageComparison.jsx", error: String((e && e.message) || e) }); }

// components/patterns/product/ReleaseTag.jsx
try { (() => {
// Annual release label. A release is not a product and not a package: keep it visually distinct
// (mono outline tag with "Sürüm" prefix). `status` is required in the type contract; when it is
// missing at runtime the tag shows "statü bilinmiyor" instead of claiming "güncel".
const LABELS = {
  current: 'güncel',
  previous: 'önceki',
  placeholder: 'doğrulanmadı',
  unknown: 'statü bilinmiyor'
};
function ReleaseTag({
  version,
  status,
  kindLabel = 'Sürüm',
  statusLabel
}) {
  const s = LABELS[status] ? status : 'unknown';
  return /*#__PURE__*/React.createElement("span", {
    className: 'alu-release-tag alu-release-tag--' + s
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-release-tag__kind"
  }, kindLabel), /*#__PURE__*/React.createElement("span", null, version), /*#__PURE__*/React.createElement("span", {
    className: "alu-release-tag__kind"
  }, "\xB7 ", statusLabel || LABELS[s]));
}
Object.assign(__ds_scope, { ReleaseTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/product/ReleaseTag.jsx", error: String((e && e.message) || e) }); }

// components/patterns/product/ReleaseNotes.jsx
try { (() => {
// "What's new" list for one release. Empty `items` renders an explicit empty state; never pad with invented items.
function ReleaseNotes({
  heading = 'Yenilikler',
  release,
  items = [],
  emptyText = 'Bu sürüm için yenilik listesi henüz eklenmedi.',
  headingLevel = 2,
  sourceNote
}) {
  const H = 'h' + headingLevel;
  return /*#__PURE__*/React.createElement("section", {
    className: "alu-release-notes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-stack alu-stack--gap-sm"
  }, /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h2"
  }, heading), release ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.ReleaseTag, {
    version: release.version,
    status: release.status
  })) : null, sourceNote ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--body-sm alu-text--secondary"
  }, sourceNote) : null), items.length ? /*#__PURE__*/React.createElement("ul", {
    className: "alu-release-notes__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    className: "alu-release-notes__item",
    key: it.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "alu-release-notes__cat"
  }, it.category), /*#__PURE__*/React.createElement("div", {
    className: "alu-stack alu-stack--gap-xs"
  }, /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--strong"
  }, it.title), it.body ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--body-sm alu-text--secondary"
  }, it.body) : null)))) : /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--secondary"
  }, emptyText));
}
Object.assign(__ds_scope, { ReleaseNotes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/product/ReleaseNotes.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Status meaning must never rely on color alone: success/warning/danger/info get an icon by default, demo gets a dashed outline + text.
const DEFAULT_ICON = {
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert',
  info: 'info',
  demo: 'circle-help'
};
function Badge({
  tone = 'neutral',
  icon,
  children,
  className,
  ...rest
}) {
  const glyph = icon === null ? null : icon || DEFAULT_ICON[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['alu-badge', tone !== 'neutral' ? 'alu-badge--' + tone : '', className].filter(Boolean).join(' ')
  }, rest), glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/patterns/product/ProductCard.jsx
try { (() => {
// Product summary card. Product ≠ package ≠ release: vendor + name identify the product,
// `release` is an optional annual tag, packages are linked from the detail page, not listed here.
function ProductCard({
  name,
  vendor,
  summary,
  href,
  roles = [],
  release,
  isDemo = false,
  titleLevel = 3,
  linkLabel = 'Ürün ayrıntısı'
}) {
  const H = 'h' + titleLevel;
  return /*#__PURE__*/React.createElement("article", {
    className: ['alu-card', href ? 'alu-card--interactive' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "alu-product-card__meta"
  }, vendor ? /*#__PURE__*/React.createElement("span", {
    className: "alu-product-card__vendor"
  }, vendor) : null, isDemo ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "demo"
  }, "Demo i\xE7erik") : null), /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h3"
  }, href ? /*#__PURE__*/React.createElement("a", {
    className: "alu-card__link",
    href: href
  }, name, /*#__PURE__*/React.createElement("span", {
    className: "alu-visually-hidden"
  }, ", ", linkLabel)) : name), summary ? /*#__PURE__*/React.createElement("p", {
    className: "alu-text alu-text--body-sm alu-text--secondary"
  }, summary) : null, roles.length || release ? /*#__PURE__*/React.createElement("div", {
    className: "alu-card__footer"
  }, release ? /*#__PURE__*/React.createElement(__ds_scope.ReleaseTag, {
    version: release.version,
    status: release.status
  }) : null, roles.map(r => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: r,
    icon: null
  }, r))) : null);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// When `href` is given the title becomes the single link and a pseudo-element stretches its hit area over the card.
// Do not nest other interactive elements inside an interactive card except in `footer` (they sit above the overlay).
function Card({
  as = 'article',
  variant = 'default',
  title,
  titleLevel = 3,
  href,
  eyebrow,
  footer,
  children,
  className,
  ...rest
}) {
  const Tag = as;
  const H = 'h' + titleLevel;
  const cls = ['alu-card', variant !== 'default' ? 'alu-card--' + variant : '', href ? 'alu-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", null, eyebrow) : null, title ? /*#__PURE__*/React.createElement(H, {
    className: "alu-heading alu-heading--h3"
  }, href ? /*#__PURE__*/React.createElement("a", {
    className: "alu-card__link",
    href: href
  }, title) : title) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "alu-card__footer",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/typography/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// `level` sets the semantic element (h1–h6). `size` sets the visual scale. Keep them independent so
// themes and layouts never change document outline.
function Heading({
  level = 2,
  size,
  id,
  children,
  className,
  ...rest
}) {
  const Tag = 'h' + Math.min(6, Math.max(1, level));
  const visual = size || (level <= 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    className: ['alu-heading', 'alu-heading--' + visual, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Heading.jsx", error: String((e && e.message) || e) }); }

// components/typography/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT_CLASS = {
  'body-lg': 'alu-text--body-lg',
  body: '',
  'body-sm': 'alu-text--body-sm',
  caption: 'alu-text--caption',
  label: 'alu-text--label',
  mono: 'alu-text--mono'
};
function Text({
  as = 'p',
  variant = 'body',
  tone = 'primary',
  strong = false,
  prose = false,
  children,
  className,
  ...rest
}) {
  const Tag = as;
  const cls = ['alu-text', VARIANT_CLASS[variant], tone === 'secondary' ? 'alu-text--secondary' : '', strong ? 'alu-text--strong' : '', prose ? 'alu-text--prose' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Text.jsx", error: String((e && e.message) || e) }); }

// data/select-content.js
try { (() => {
// Pure content selectors (no React, no DOM). Used by the UI kit (browser global AluplanContent)
// and by scripts/content-tests.mjs (CommonJS export). Themes never read or change this data.
(function (g) {
  function releasesFor(content, productId) {
    return content.releases.filter(r => r.productId === productId).sort((a, b) => b.sequence - a.sequence);
  }
  function selectProduct(content, productId) {
    const product = content.products.find(p => p.id === productId);
    if (!product) return null;
    const releases = releasesFor(content, productId);
    return {
      product,
      releases,
      latestRelease: releases[0] || null,
      packages: content.packages.filter(p => p.productId === productId),
      resources: content.resources.filter(r => r.productId === productId),
      roleLabels: product.roles.map(id => (content.roles.find(r => r.id === id) || {}).label).filter(Boolean)
    };
  }
  // Scope view for ONE product + release + market. Records of other releases/markets are never merged in.
  // Missing records are NOT returned as "excluded"; the UI renders them as "unknown".
  function selectScopeView(content, {
    productId,
    releaseId,
    marketId
  }) {
    const packages = content.packages.filter(p => p.productId === productId);
    const pkgIds = new Set(packages.map(p => p.id));
    const records = content.scopeRecords.filter(r => pkgIds.has(r.packageId) && r.releaseId === releaseId && r.marketId === marketId);
    const cells = {};
    const duplicates = [];
    for (const r of records) {
      const key = r.packageId + ':' + r.capabilityId;
      if (cells[key]) duplicates.push(key);
      cells[key] = {
        availability: r.availability,
        note: r.note,
        verification: r.verification,
        source: r.source
      };
    }
    const sources = [...new Set(records.map(r => r.source && r.source.kind).filter(Boolean))];
    return {
      release: content.releases.find(r => r.id === releaseId) || null,
      market: content.markets.find(m => m.id === marketId) || null,
      packages,
      groups: content.capabilityGroups,
      cells,
      duplicates,
      counts: {
        records: records.length,
        unverified: records.filter(r => r.verification !== 'verified' && r.verification !== 'approved').length,
        sources
      }
    };
  }
  const api = {
    releasesFor,
    selectProduct,
    selectScopeView
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  g.AluplanContent = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/select-content.js", error: String((e && e.message) || e) }); }

// scripts/build-tokens.mjs
try { (() => {
// Aluplan token build + validator. Zero dependencies. Node >= 20.
//   node scripts/build-tokens.mjs           write generated files
//   node scripts/build-tokens.mjs --check   validate + lint + drift check (writes nothing, exit 1 on error)
//   node scripts/token-tests.mjs            positive/negative test suite (in-memory fixtures)
// Source of truth: tokens/tokens.json and components/responsive.template.css. Generated files must not be edited.

const GENERATED = ['tokens/primitives.css', 'tokens/semantic.css', 'tokens/component-aliases.css', 'components/responsive.generated.css', 'tokens/build/breakpoints.json', 'tokens/build/breakpoints.mjs', 'tokens/build/tokens.resolved.json', 'tokens/build/contrast-report.json', 'tokens/build/CONTRAST-REPORT.md'];
function buildTokens(T, opts = {}) {
  const errors = [],
    warnings = [];
  const kebab = s => String(s).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const isLeaf = o => o && typeof o === 'object' && '$value' in o;
  const flatten = (obj, prefix, out = {}) => {
    for (const [k, val] of Object.entries(obj || {})) {
      if (k.startsWith('$')) continue;
      const p = [...prefix, k];
      if (isLeaf(val)) out[p.join('.')] = {
        value: String(val.$value),
        path: p,
        kind: val.$kind
      };else if (val && typeof val === 'object') flatten(val, p, out);else errors.push(`Non-token value at ${p.join('.')}`);
    }
    return out;
  };
  const varName = key => {
    const [layer, ...rest] = key.split('.');
    const n = rest.map(kebab).join('-');
    return layer === 'primitive' ? `--ref-${n}` : `--${n}`;
  };
  const REF = /\{([^}]+)\}/g;
  const refs = s => [...String(s).matchAll(REF)].map(m => m[1]);
  const toCss = s => String(s).replace(REF, (_, p) => `var(${varName(p)})`);
  const meta = T.$meta;
  const prim = flatten(T.primitive, ['primitive']);
  const semBase = flatten(T.semantic, ['semantic']);
  const comp = flatten(T.component, ['component']);

  // Layer rules
  for (const [k, t] of Object.entries(prim)) {
    const r = refs(t.value);
    if (r.length && !(k.startsWith('primitive.shadow') && r.every(x => x.startsWith('primitive.color.alpha')))) errors.push(`Primitive ${k} may not reference other tokens (only shadows may reference alpha colors)`);
  }
  const checkSem = (map, where) => {
    for (const [k, t] of Object.entries(map)) for (const r of refs(t.value)) {
      if (!r.startsWith('primitive.')) errors.push(`${where} ${k} -> ${r}: semantic tokens may only reference primitives`);else if (!prim[r]) errors.push(`${where} ${k} -> ${r}: broken reference`);
    }
  };
  checkSem(semBase, 'semantic');
  for (const [k, t] of Object.entries(comp)) {
    if (!refs(t.value).length) errors.push(`component ${k}: raw value; component aliases must reference semantic tokens`);
    for (const r of refs(t.value)) if (!r.startsWith('semantic.')) errors.push(`component ${k} -> ${r}: component aliases may only reference semantic tokens`);
  }

  // Theme x mode matrix
  const matrix = {};
  let colorKeys = null;
  for (const theme of meta.themes) {
    const th = T.themes[theme];
    if (!th) {
      errors.push(`Theme ${theme} missing`);
      continue;
    }
    const base = flatten(th.base, ['semantic']);
    checkSem(base, `themes.${theme}.base`);
    for (const k of Object.keys(base)) if (!semBase[k]) errors.push(`themes.${theme}.base.${k}: theme may only override existing semantic tokens`);
    matrix[theme] = {
      base: {
        ...semBase,
        ...base
      },
      modes: {}
    };
    for (const mode of meta.modes) {
      const colors = flatten(th.modes?.[mode], ['semantic']);
      checkSem(colors, `themes.${theme}.${mode}`);
      for (const [k, t] of Object.entries(colors)) if (refs(t.value).length !== 1 || t.value !== `{${refs(t.value)[0]}}`) errors.push(`themes.${theme}.${mode}.${k}: color tokens must be a single primitive reference`);
      for (const k of Object.keys(colors)) if (semBase[k]) errors.push(`${k}: color token collides with non-color semantic token`);
      const keys = Object.keys(colors).sort().join('|');
      if (colorKeys === null) colorKeys = keys;else if (keys !== colorKeys) {
        const a = new Set(colorKeys.split('|')),
          b = new Set(keys.split('|'));
        errors.push(`themes.${theme}.${mode}: color token set differs. Missing: ${[...a].filter(x => !b.has(x)).join(', ') || '-'}; extra: ${[...b].filter(x => !a.has(x)).join(', ') || '-'}`);
      }
      matrix[theme].modes[mode] = colors;
    }
  }

  // CSS variable name collisions across layers
  const seen = {};
  for (const k of [...Object.keys(prim), ...Object.keys(semBase), ...(colorKeys ? colorKeys.split('|') : []), ...Object.keys(comp)]) {
    const n = varName(k);
    if (seen[n] && seen[n] !== k) errors.push(`CSS name collision ${n}: ${seen[n]} vs ${k}`);
    seen[n] = k;
  }

  // Resolution (cycle + broken ref detection) per theme/mode
  const resolved = {};
  for (const theme of Object.keys(matrix)) {
    resolved[theme] = {};
    for (const mode of meta.modes) {
      const sem = {
        ...matrix[theme].base,
        ...matrix[theme].modes[mode]
      };
      const all = {
        ...prim,
        ...sem,
        ...comp
      };
      const cache = {};
      const resolve = (key, stack = []) => {
        if (cache[key] !== undefined) return cache[key];
        if (stack.includes(key)) {
          errors.push(`Cycle: ${[...stack, key].join(' -> ')}`);
          return '';
        }
        const t = all[key];
        if (!t) {
          errors.push(`[${theme}/${mode}] broken reference: ${key}${stack.length ? ' (from ' + stack[stack.length - 1] + ')' : ''}`);
          return '';
        }
        return cache[key] = t.value.replace(REF, (_, p) => resolve(p, [...stack, key]));
      };
      const out = {};
      for (const k of [...Object.keys(sem), ...Object.keys(comp)]) out[varName(k)] = resolve(k);
      resolved[theme][mode] = {
        values: out,
        get: k => resolve(k)
      };
    }
  }

  // Contrast: decision uses the unrounded ratio; only the report display is rounded.
  const parse = c => {
    c = String(c).trim();
    let m;
    if (m = c.match(/^#([0-9a-f]{6})$/i)) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16), 1];
    if (m = c.match(/^rgba?\(([^)]+)\)$/i)) {
      const p = m[1].split(',').map(Number);
      return [p[0], p[1], p[2], p[3] ?? 1];
    }
    return null;
  };
  const over = (fg, bg) => [0, 1, 2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const lum = rgb => {
    const [r, g, b] = rgb.map(x => {
      x /= 255;
      return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const ratio = (a, b) => {
    const [h, l] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (h + 0.05) / (l + 0.05);
  };
  const contrast = [];
  for (const theme of Object.keys(resolved)) for (const mode of meta.modes) {
    const R = resolved[theme][mode];
    for (const [fgK, bgK, min, note] of T.$contrastChecks || []) {
      const fgRaw = R.get('semantic.' + fgK),
        bgRaw = R.get('semantic.' + bgK);
      const fg = parse(fgRaw),
        bg = parse(bgRaw);
      if (!fg || !bg) {
        errors.push(`Contrast check ${fgK}/${bgK} [${theme}/${mode}]: unparseable color`);
        continue;
      }
      const raw = ratio(over(fg, bg), bg.slice(0, 3));
      contrast.push({
        theme,
        mode,
        fg: fgK,
        bg: bgK,
        fgValue: fgRaw,
        bgValue: bgRaw,
        ratio: raw,
        display: raw.toFixed(2),
        min,
        pass: min ? raw >= min : null,
        note: note || ''
      });
    }
  }
  for (const c of contrast) if (c.pass === false) errors.push(`Contrast FAIL [${c.theme}/${c.mode}] ${c.fg} on ${c.bg}: ${c.ratio.toFixed(4)} < ${c.min}`);

  // Build-time breakpoints -> responsive CSS
  const bt = T.buildTime || {};
  const bp = Object.fromEntries(Object.entries(bt.breakpoint || {}).filter(([k]) => !k.startsWith('$')).map(([k, t]) => [k, t.$value]));
  let responsive = '';
  if (opts.responsiveTemplate != null) {
    const body = opts.responsiveTemplate.replace(/@media\s*\(\s*--([a-z0-9-]+)\s*\)/gi, (m, name) => {
      if (!bp[name]) {
        errors.push(`responsive.template.css: unknown custom media --${name} (known: ${Object.keys(bp).join(', ')})`);
        return m;
      }
      return `@media (min-width: ${bp[name]})`;
    });
    if (/@media[^{]*\b(min|max)-width\s*:\s*[\d.]/.test(opts.responsiveTemplate)) errors.push('responsive.template.css: literal min/max-width media query; use (--sm|--md|--lg|--xl)');
    responsive = `/* GENERATED by scripts/build-tokens.mjs from components/responsive.template.css + tokens.json buildTime.breakpoint (${Object.entries(bp).map(([k, v]) => k + '=' + v).join(', ')}). Do not edit. */\n` + body;
  } else warnings.push('No responsive template supplied; components/responsive.generated.css not produced');

  // CSS emission
  const block = (sel, map, extra = '') => `${sel}{\n${Object.entries(map).map(([k, t]) => `  ${varName(k)}: ${toCss(t.value)};${t.kind ? ` /* @kind ${t.kind} */` : ''}`).join('\n')}${extra}\n}\n`;
  const head = '/* GENERATED by scripts/build-tokens.mjs from tokens/tokens.json. Do not edit. */\n';
  const files = {};
  files['tokens/primitives.css'] = head + '/* Layer 1: primitives (--ref-*). Components must NOT use these directly. */\n' + block(':root', prim);
  const dT = meta.defaultTheme,
    dM = meta.defaultMode;
  let sem = head + '/* Layer 2: semantic tokens. :root = default theme + mode. Each [data-theme] block re-declares the full set so nested scopes work. */\n';
  sem += block(':root', {
    ...matrix[dT].base,
    ...matrix[dT].modes[dM]
  }, `\n  color-scheme: ${dM};`);
  for (const theme of Object.keys(matrix)) {
    sem += block(`[data-theme="${theme}"]`, matrix[theme].base);
    for (const mode of meta.modes) sem += block(`[data-theme="${theme}"][data-mode="${mode}"]`, matrix[theme].modes[mode], `\n  color-scheme: ${mode};`);
  }
  const motionKeys = Object.keys(semBase).filter(k => k.startsWith('semantic.motion.duration'));
  sem += `/* Runtime: reduced motion collapses all durations. */\n@media (prefers-reduced-motion: reduce){\n  :root,[data-theme]{\n${motionKeys.map(k => `    ${varName(k)}: 0ms; /* @kind other */`).join('\n')}\n  }\n}\n`;
  files['tokens/semantic.css'] = sem;
  files['tokens/component-aliases.css'] = head + '/* Layer 3: component aliases (reference semantic only). Re-declared on theme scopes so var() re-resolves inside nested themes. */\n' + block(':root', comp) + block('[data-theme],[data-mode]', comp);
  if (opts.responsiveTemplate != null) files['components/responsive.generated.css'] = responsive;
  files['tokens/build/breakpoints.json'] = JSON.stringify({
    breakpoint: bp
  }, null, 2) + '\n';
  files['tokens/build/breakpoints.mjs'] = `// GENERATED. Build-time only: media queries cannot read CSS variables.\nexport const breakpoint = ${JSON.stringify(bp)};\nexport const mq = Object.fromEntries(Object.entries(breakpoint).map(([k, v]) => [k, \`(min-width: \${v})\`]));\n`;
  const res = {};
  for (const t of Object.keys(resolved)) {
    res[t] = {};
    for (const m of meta.modes) res[t][m] = resolved[t][m].values;
  }
  files['tokens/build/tokens.resolved.json'] = JSON.stringify(res, null, 1) + '\n';
  files['tokens/build/contrast-report.json'] = JSON.stringify(contrast.map(c => ({
    ...c,
    ratio: Math.round(c.ratio * 10000) / 10000
  })), null, 1) + '\n';
  let md = '# Contrast report (GENERATED, measured)\n\nComputed from tokens/tokens.json with the WCAG 2.x relative-luminance formula. Alpha colors are composited over their background. Pass/fail uses the unrounded ratio; the table shows 2 decimals. This measures token pairs only; it does not prove every rendered combination.\n\n';
  for (const t of Object.keys(resolved)) for (const m of meta.modes) {
    md += `## ${t} / ${m}\n\n| Foreground | Background | Values | Ratio | Min | Result |\n|---|---|---|---|---|---|\n`;
    for (const c of contrast.filter(c => c.theme === t && c.mode === m)) md += `| ${c.fg} | ${c.bg} | ${c.fgValue} / ${c.bgValue} | ${c.display} | ${c.min || '—'} | ${c.pass === null ? 'info: ' + c.note : c.pass ? 'pass (measured)' : '**FAIL**'} |\n`;
    md += '\n';
  }
  files['tokens/build/CONTRAST-REPORT.md'] = md;
  const definedVars = new Set(Object.keys(seen));
  return {
    files,
    errors,
    warnings,
    definedVars,
    breakpoints: bp,
    resolved: res,
    contrast,
    stats: {
      primitives: Object.keys(prim).length,
      semantic: Object.keys(semBase).length + (colorKeys ? colorKeys.split('|').length : 0),
      component: Object.keys(comp).length,
      contrastChecks: contrast.length,
      contrastFails: contrast.filter(c => c.pass === false).length
    }
  };
}

// Lint hand-written component CSS. `files` = { path: source }. Generated files are skipped.
// Rules: no --ref-* primitives; no raw colors; no px/rem/vw/vh/ch lengths or raw stroke-width/font-weight/z-index/line-height
// unless the declaration is followed by /* raw-ok: reason */; every var(--x) must be a defined token or a component-local --alu-* property;
// no width media queries (they belong in components/responsive.template.css). em units are allowed (text-relative).
function lintComponentCss(files, definedVars) {
  const errors = [],
    warnings = [];
  for (const [path, srcRaw] of Object.entries(files)) {
    if (path.endsWith('.generated.css') || path.endsWith('.template.css')) continue;
    const src = srcRaw.replace(/\/\*(?!\s*raw-ok)[\s\S]*?\*\//g, '');
    for (const m of src.matchAll(/@media\s*([^{]+)\{/g)) {
      if (/\b(min|max)-width\b/.test(m[1])) errors.push(`${path}: width media query "${m[1].trim()}" — move it to components/responsive.template.css`);
    }
    if (/--ref-/.test(src)) errors.push(`${path}: uses primitive --ref-* token`);
    for (const m of src.matchAll(/var\(\s*(--[\w-]+)/g)) if (!definedVars.has(m[1]) && !m[1].startsWith('--alu-')) errors.push(`${path}: undefined variable ${m[1]}`);
    const body = src.replace(/@media[^{]+\{/g, '').replace(/@keyframes[^{]+\{/g, '');
    for (const m of body.matchAll(/([a-z-]+)\s*:\s*([^;{}]+)(?:;|(?=\}))(\s*\/\*\s*raw-ok:[^*]*\*\/)?/gi)) {
      const [, prop, val, ok] = m;
      if (ok || prop.startsWith('--')) continue;
      const v = val.replace(/var\([^)]*\)/g, '');
      if (/#[0-9a-f]{3,8}\b|\b(rgba?|hsla?|oklch)\(/i.test(v)) errors.push(`${path}: raw color in "${prop}: ${val.trim()}"`);else if (/(^|[\s(,*/+-])\d*\.?\d+(px|rem|vw|vh|ch)\b/.test(v)) errors.push(`${path}: raw length in "${prop}: ${val.trim()}" (tokenize or mark /* raw-ok: reason */)`);else if (/^(stroke-width|font-weight|z-index|line-height)$/.test(prop) && /^\s*[\d.]+\s*$/.test(v) && v.trim() !== '0') errors.push(`${path}: raw ${prop} "${val.trim()}"`);
    }
  }
  return {
    errors,
    warnings
  };
}

// --- CLI ---
// Node-only. Dynamically imported so browser bundlers that scan this file never execute it.
async function main() {
  const fs = await import('node:' + 'fs');
  const path = await import('node:' + 'path');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => fs.readFileSync(path.join(root, p), 'utf8');
  const T = JSON.parse(read('tokens/tokens.json'));
  const out = buildTokens(T, {
    responsiveTemplate: read('components/responsive.template.css')
  });
  const cssFiles = {};
  for (const f of fs.readdirSync(path.join(root, 'components'), {
    recursive: true
  }).map(String).filter(f => f.endsWith('.css'))) cssFiles['components/' + f.replace(/\\/g, '/')] = read('components/' + f);
  const lint = lintComponentCss(cssFiles, out.definedVars);
  const errors = [...out.errors, ...lint.errors],
    warnings = [...out.warnings, ...lint.warnings];
  const check = process.argv.includes('--check');
  if (check) for (const [p, c] of Object.entries(out.files)) {
    let disk = null;
    try {
      disk = read(p);
    } catch (e) {}
    if (disk !== c) errors.push(`Drift: ${p} differs from what tokens.json would generate (run the build)`);
  }
  console.log(out.stats);
  warnings.forEach(w => console.warn('warn:', w));
  errors.forEach(e => console.error('error:', e));
  if (errors.length) process.exit(1);
  if (!check) for (const [p, c] of Object.entries(out.files)) {
    fs.mkdirSync(path.dirname(path.join(root, p)), {
      recursive: true
    });
    fs.writeFileSync(path.join(root, p), c);
  }
  console.log(check ? 'check: OK (0 errors)' : 'build: wrote ' + Object.keys(out.files).length + ' files');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /build-tokens/.test(process.argv[1] || '')) main();
Object.assign(__ds_scope, { GENERATED, buildTokens, lintComponentCss });
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/build-tokens.mjs", error: String((e && e.message) || e) }); }

// scripts/content-tests.mjs
try { (() => {
// Content contract tests (demo data). In-memory only.
//   node scripts/content-tests.mjs
// Also executed in the browser by tests/index.html.

function runContentTests({
  content,
  selectors,
  tokens
}) {
  const results = [];
  const test = (name, fn) => {
    try {
      const r = fn();
      results.push({
        name,
        pass: r === true,
        detail: r === true ? '' : String(r)
      });
    } catch (e) {
      results.push({
        name,
        pass: false,
        detail: 'threw: ' + e.message
      });
    }
  };
  const clone = () => JSON.parse(JSON.stringify(content));
  const q = {
    productId: 'allplan',
    marketId: 'tr'
  };
  const s1 = () => selectors.selectScopeView(content, {
    ...q,
    releaseId: 'synthetic-s1'
  });
  const s2 = () => selectors.selectScopeView(content, {
    ...q,
    releaseId: 'synthetic-s2'
  });
  test('two synthetic releases exist and are labelled synthetic', () => content.releases.filter(r => r.isSynthetic && /Sentetik/.test(r.version)).length === 2 || 'expected 2');
  test('S2 records do not overwrite S1 scope (S1 view identical with and without S2 data)', () => {
    const c = clone();
    c.scopeRecords = c.scopeRecords.filter(r => r.releaseId !== 'synthetic-s2');
    const a = JSON.stringify(s1().cells),
      b = JSON.stringify(selectors.selectScopeView(c, {
        ...q,
        releaseId: 'synthetic-s1'
      }).cells);
    return a === b || 'S1 view changed';
  });
  test('same package × capability differs between S1 and S2 (pkg-a:c-rebar excluded → optional)', () => s1().cells['pkg-a:c-rebar'].availability === 'excluded' && s2().cells['pkg-a:c-rebar'].availability === 'optional' || 'unexpected');
  test('capability recorded in S1 but not S2 stays unknown in S2 (not carried over, not excluded)', () => s1().cells['pkg-b:c-rebar'] && !s2().cells['pkg-b:c-rebar'] || JSON.stringify(s2().cells['pkg-b:c-rebar']));
  test('missing records are never returned as "excluded"', () => {
    const v = s2();
    const all = v.packages.flatMap(p => v.groups.flatMap(g => g.capabilities.map(c => p.id + ':' + c.id)));
    const missing = all.filter(k => !v.cells[k]);
    return missing.length > 0 && missing.every(k => v.cells[k] === undefined) || 'no missing cells to check';
  });
  test('market filter: records of another market are not merged into tr', () => {
    const c = clone();
    c.markets.push({
      id: 'synthetic-x',
      label: 'Sentetik pazar X'
    });
    c.scopeRecords.push({
      id: 'x1',
      packageId: 'pkg-c',
      releaseId: 'synthetic-s1',
      marketId: 'synthetic-x',
      capabilityId: 'c-3d',
      availability: 'excluded',
      source: {
        kind: 'demo'
      },
      verification: 'unverified'
    });
    const tr = selectors.selectScopeView(c, {
        ...q,
        releaseId: 'synthetic-s1'
      }),
      x = selectors.selectScopeView(c, {
        ...q,
        releaseId: 'synthetic-s1',
        marketId: 'synthetic-x'
      });
    return !tr.cells['pkg-c:c-3d'] && x.cells['pkg-c:c-3d'].availability === 'excluded' || 'leak';
  });
  test('no duplicate scope records per package × release × market × capability', () => [s1(), s2()].every(v => v.duplicates.length === 0) || 'duplicates');
  test('negative: a duplicate record is detected', () => {
    const c = clone();
    c.scopeRecords.push({
      ...c.scopeRecords[0],
      id: 'dup'
    });
    return selectors.selectScopeView(c, {
      ...q,
      releaseId: 'synthetic-s1'
    }).duplicates.length === 1 || 'not detected';
  });
  test('referential integrity of scope records', () => {
    const ids = k => new Set(content[k].map(x => x.id));
    const P = ids('packages'),
      R = ids('releases'),
      M = ids('markets');
    const C = new Set(content.capabilityGroups.flatMap(g => g.capabilities.map(c => c.id)));
    const bad = content.scopeRecords.filter(r => !P.has(r.packageId) || !R.has(r.releaseId) || !M.has(r.marketId) || !C.has(r.capabilityId));
    return bad.length === 0 || bad.map(r => r.id).join(',');
  });
  test('every record has source + verification; demo records are unverified', () => content.scopeRecords.every(r => r.source && r.source.kind && r.verification && (r.source.kind !== 'demo' || r.verification === 'unverified')) || 'missing');
  test('no release claims status "current" in demo data', () => content.releases.every(r => r.status !== 'current') || 'current claimed');
  test('stable ids on nav, footer columns/links, CTAs, roles, FAQ', () => {
    const lists = [content.site.nav, content.site.footer, content.site.footer.flatMap(f => f.links), content.ctas, content.roles, content.pages.productDetail.faq];
    return lists.every(l => l.every(x => x.id) && new Set(l.map(x => x.id)).size === l.length) || 'missing/duplicate id';
  });
  if (tokens) test('tokens.json carries no content (no URLs, product/package/release ids)', () => {
    const s = JSON.stringify(tokens);
    const ids = [...content.products, ...content.packages, ...content.releases].map(x => x.id);
    return !/https?:\/\//.test(s) && ids.every(id => !s.includes('"' + id + '"')) || 'content found in tokens';
  });
  return {
    results,
    passed: results.filter(r => r.pass).length,
    failed: results.filter(r => !r.pass).length
  };
}

// --- CLI ---
async function main() {
  const fs = await import('node:' + 'fs');
  const path = await import('node:' + 'path');
  const {
    createRequire
  } = await import('node:' + 'module');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
  const selectors = createRequire(path.join(root, 'scripts', 'content-tests.mjs'))(path.join(root, 'data/select-content.js'));
  const r = runContentTests({
    content: read('data/demo-content.json'),
    selectors,
    tokens: read('tokens/tokens.json')
  });
  for (const t of r.results) console.log((t.pass ? 'PASS ' : 'FAIL ') + t.name + (t.detail ? ' — ' + t.detail : ''));
  console.log(`${r.passed} passed, ${r.failed} failed`);
  if (r.failed) process.exit(1);
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /content-tests/.test(process.argv[1] || '')) main();
Object.assign(__ds_scope, { runContentTests });
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/content-tests.mjs", error: String((e && e.message) || e) }); }

// scripts/token-tests.mjs
try { (() => {
// Token system test suite. Positive + negative cases on IN-MEMORY clones; never mutates tokens.json on disk.
//   node scripts/token-tests.mjs
// The same runTokenTests() is executed by tests/index.html in the browser.

function runTokenTests({
  build = __ds_scope.buildTokens,
  lint = __ds_scope.lintComponentCss,
  T,
  template,
  cssFiles,
  onDisk,
  generatedList = __ds_scope.GENERATED
}) {
  const results = [];
  const clone = () => JSON.parse(JSON.stringify(T));
  const test = (name, fn) => {
    try {
      const r = fn();
      results.push({
        name,
        pass: r === true,
        detail: r === true ? '' : String(r)
      });
    } catch (e) {
      results.push({
        name,
        pass: false,
        detail: 'threw: ' + e.message
      });
    }
  };
  const run = (t, tpl = template) => build(t, {
    responsiveTemplate: tpl
  });
  const has = (arr, re) => arr.some(e => re.test(e));
  const base = run(T);
  test('baseline: tokens.json builds with 0 errors', () => base.errors.length === 0 || base.errors.join(' | '));
  test('baseline: 0 contrast failures', () => base.stats.contrastFails === 0 || base.stats.contrastFails + ' fails');
  test('baseline: component CSS lint clean', () => {
    const l = lint(cssFiles, base.definedVars);
    return l.errors.length === 0 || l.errors.join(' | ');
  });
  test('breakpoint lg 64rem -> 70rem is reflected in generated media queries', () => {
    const t = clone();
    t.buildTime.breakpoint.lg.$value = '70rem';
    const r = run(t);
    const css = r.files['components/responsive.generated.css'];
    if (r.errors.length) return r.errors.join(' | ');
    if (!css.includes('@media (min-width: 70rem)')) return 'missing 70rem';
    if (css.includes('@media (min-width: 64rem)')) return 'stale 64rem still present';
    if (JSON.parse(r.files['tokens/build/breakpoints.json']).breakpoint.lg !== '70rem') return 'breakpoints.json not updated';
    return true;
  });
  test('breakpoint change did not mutate the shipped token object', () => T.buildTime.breakpoint.lg.$value === '64rem' || 'shipped value changed to ' + T.buildTime.breakpoint.lg.$value);
  test('breakpoint md change only affects md rules', () => {
    const t = clone();
    t.buildTime.breakpoint.md.$value = '50rem';
    const css = run(t).files['components/responsive.generated.css'];
    return css.includes('(min-width: 50rem)') && css.includes('(min-width: 64rem)') && !css.includes('(min-width: 48rem)') || css;
  });
  test('negative: unknown custom media in template is an error', () => has(run(T, template + '\n@media (--huge){.x{display:none}}').errors, /unknown custom media --huge/) || 'not detected');
  test('negative: literal width media query in template is an error', () => has(run(T, template + '\n@media (min-width: 40rem){.x{display:none}}').errors, /literal min\/max-width/) || 'not detected');
  test('negative: broken component alias', () => {
    const t = clone();
    t.component.button.primary.bg.$value = '{semantic.action.primary.doesNotExist}';
    return has(run(t).errors, /broken reference: semantic\.action\.primary\.doesNotExist/) || run(t).errors.join(' | ');
  });
  test('negative: broken semantic -> primitive reference', () => {
    const t = clone();
    t.semantic.space.section.$value = '{primitive.space.999}';
    return has(run(t).errors, /broken reference/) || 'not detected';
  });
  test('negative: alias cycle is detected', () => {
    const t = clone();
    t.component.cycle = {
      a: {
        $value: '{component.cycle.b}'
      },
      b: {
        $value: '{component.cycle.a}'
      }
    };
    return has(run(t).errors, /^Cycle: /) || run(t).errors.join(' | ');
  });
  test('negative: semantic referencing semantic violates layering', () => {
    const t = clone();
    t.semantic.grid.gap.$value = '{semantic.space.section}';
    return has(run(t).errors, /semantic tokens may only reference primitives/) || 'not detected';
  });
  test('negative: missing theme key (field/dark text.link)', () => {
    const t = clone();
    delete t.themes.field.modes.dark.text.link;
    return has(run(t).errors, /field\.dark: color token set differs\. Missing: semantic\.text\.link/) || run(t).errors.join(' | ');
  });
  test('negative: theme adding a non-existent semantic token', () => {
    const t = clone();
    t.themes.field.base.space.extra = {
      $value: '{primitive.space.4}'
    };
    return has(run(t).errors, /may only override existing/) || 'not detected';
  });
  test('negative: contrast failure is an error', () => {
    const t = clone();
    t.themes.aluplan.modes.light.text.secondary.$value = '{primitive.color.silver.300}';
    return has(run(t).errors, /Contrast FAIL \[aluplan\/light\] text\.secondary/) || 'not detected';
  });
  test('contrast decision uses unrounded ratio (4.4969 displays 4.50 but fails)', () => {
    const t = clone();
    t.primitive.color.testEdge = {
      $value: '#647A86'
    };
    t.themes.aluplan.modes.light.text.secondary.$value = '{primitive.color.testEdge}';
    const r = run(t);
    const c = r.contrast.find(c => c.theme === 'aluplan' && c.mode === 'light' && c.fg === 'text.secondary' && c.bg === 'surface.page');
    return c && c.display === '4.50' && c.pass === false && has(r.errors, /text\.secondary on surface\.page: 4\.4969/) || JSON.stringify(c);
  });
  test('logo size change does not affect icon sizes', () => {
    const t = clone();
    t.semantic.logo.height.sm.$value = '{primitive.size.12}';
    const a = base.resolved.aluplan.light,
      b = run(t).resolved.aluplan.light;
    const icon = ['--icon-size-sm', '--icon-size-md', '--icon-size-lg'].every(k => a[k] === b[k]);
    return icon && a['--logo-height-sm'] !== b['--logo-height-sm'] || 'coupled';
  });
  test('icon size change does not affect logo sizes', () => {
    const t = clone();
    t.semantic.icon.size.lg.$value = '{primitive.size.8}';
    const a = base.resolved.aluplan.light,
      b = run(t).resolved.aluplan.light;
    return ['--logo-height-sm', '--logo-height-md', '--logo-height-lg'].every(k => a[k] === b[k]) && a['--icon-size-lg'] !== b['--icon-size-lg'] || 'coupled';
  });
  test('base.css: .alu-icon* uses only --icon-* sizes, .alu-brand-logo* img only --logo-* sizes', () => {
    const css = cssFiles['components/base.css'] || '';
    const bad = [];
    for (const m of css.matchAll(/(\.[\w-]+[^{]*)\{([^}]*)\}/g)) {
      const sel = m[1],
        body = m[2];
      const sizes = [...body.matchAll(/(?:^|;)\s*(width|height)\s*:\s*var\((--[\w-]+)\)/g)].map(x => x[2]);
      if (/^\.alu-icon/.test(sel.trim())) sizes.forEach(v => {
        if (!v.startsWith('--icon-size-')) bad.push(sel + ' -> ' + v);
      });
      if (/\.alu-brand-logo[^{]*img/.test(sel)) sizes.forEach(v => {
        if (!v.startsWith('--logo-height-')) bad.push(sel + ' -> ' + v);
      });
    }
    return bad.length === 0 || bad.join(' | ');
  });
  test('lint: min-width declaration is NOT classified as a media query', () => {
    const l = lint({
      'x.css': '.a{min-width:var(--layout-table-min)}'
    }, base.definedVars);
    return l.errors.length === 0 || l.errors.join(' | ');
  });
  test('lint: width media query in component CSS is an error', () => has(lint({
    'x.css': '@media (min-width:48rem){.a{display:none}}'
  }, base.definedVars).errors, /width media query/) || 'not detected');
  test('lint: prefers-reduced-motion media query is allowed', () => lint({
    'x.css': '@media (prefers-reduced-motion: reduce){.a{transition:none}}'
  }, base.definedVars).errors.length === 0 || 'false positive');
  test('lint: undefined variable is an error', () => has(lint({
    'x.css': '.a{color:var(--text-nope)}'
  }, base.definedVars).errors, /undefined variable --text-nope/) || 'not detected');
  test('lint: raw hex / rgba / rem / stroke-width are errors', () => {
    const e = lint({
      'x.css': '.a{color:#fff}.b{background:rgba(0,0,0,.5)}.c{width:16rem}.d{stroke-width:3}'
    }, base.definedVars).errors;
    return e.length === 4 || e.join(' | ');
  });
  test('lint: raw-ok marker and em units are allowed', () => lint({
    'x.css': '.a{width:1px; /* raw-ok: a11y */\n}.b{width:1.25em;text-underline-offset:0.2em}'
  }, base.definedVars).errors.length === 0 || 'false positive');
  test('lint: --ref-* primitive use in component CSS is an error', () => has(lint({
    'x.css': '.a{color:var(--ref-color-ink-950)}'
  }, base.definedVars).errors, /primitive --ref-/) || 'not detected');
  if (onDisk) {
    test('drift: every generated file on disk equals fresh build output', () => {
      const diff = generatedList.filter(p => onDisk[p] !== base.files[p]);
      return diff.length === 0 || 'drift in ' + diff.join(', ');
    });
    test('negative: drift is detected when a generated file is edited by hand', () => {
      const tampered = {
        ...onDisk,
        'tokens/semantic.css': (onDisk['tokens/semantic.css'] || '') + '\n/* hand edit */'
      };
      return generatedList.some(p => tampered[p] !== base.files[p]) || 'not detected';
    });
  }
  return {
    results,
    passed: results.filter(r => r.pass).length,
    failed: results.filter(r => !r.pass).length
  };
}

// --- CLI ---
async function main() {
  const fs = await import('node:' + 'fs');
  const path = await import('node:' + 'path');
  const root = path.resolve(path.dirname(process.argv[1]), '..');
  const read = p => fs.readFileSync(path.join(root, p), 'utf8');
  const cssFiles = {};
  for (const f of fs.readdirSync(path.join(root, 'components'), {
    recursive: true
  }).map(String).filter(f => f.endsWith('.css'))) cssFiles['components/' + f.replace(/\\/g, '/')] = read('components/' + f);
  const onDisk = {};
  for (const p of __ds_scope.GENERATED) {
    try {
      onDisk[p] = read(p);
    } catch (e) {
      onDisk[p] = null;
    }
  }
  const r = runTokenTests({
    T: JSON.parse(read('tokens/tokens.json')),
    template: read('components/responsive.template.css'),
    cssFiles,
    onDisk
  });
  for (const t of r.results) console.log((t.pass ? 'PASS ' : 'FAIL ') + t.name + (t.detail ? ' — ' + t.detail : ''));
  console.log(`${r.passed} passed, ${r.failed} failed`);
  if (r.failed) process.exit(1);
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && /token-tests/.test(process.argv[1] || '')) main();
Object.assign(__ds_scope, { runTokenTests });
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/token-tests.mjs", error: String((e && e.message) || e) }); }

// tests/source-loader.js
try { (() => {
// TEST/PREVIEW TOOLING ONLY. With ?source=1 in the page URL, this replaces window.AluplanDesignSystem_84a18c
// with components compiled in the browser from the current components/*.jsx sources (instead of the compiled
// _ds_bundle.js, which is regenerated only at the end of an editing session). Requires React + Babel loaded first.
(function () {
  var cs = document.currentScript;
  if (!/[?&]source=1\b/.test(location.search) && !(cs && cs.dataset.force === '1')) return;
  var root = document.currentScript && document.currentScript.dataset.root || '../';
  var files = ['brand/Icon', 'brand/BrandLogo', 'actions/IconButton', 'actions/Button', 'actions/Link', 'typography/Heading', 'typography/Text', 'layout/Container', 'layout/Stack', 'layout/Grid', 'layout/Divider', 'surfaces/Badge', 'surfaces/Card', 'forms/Input', 'forms/Select', 'forms/Checkbox', 'feedback/Alert', 'feedback/Dialog', 'disclosure/Tabs', 'disclosure/Accordion', 'navigation/Breadcrumb', 'navigation/SiteHeader', 'navigation/SiteFooter', 'patterns/engagement/RoleSelector', 'patterns/engagement/ResourceCard', 'patterns/engagement/SupportCard', 'patterns/engagement/CtaGroup', 'patterns/product/ReleaseTag', 'patterns/product/ReleaseNotes', 'patterns/product/ProductCard', 'patterns/product/PackageComparison'];
  var code = 'var __ns = {};\n';
  files.forEach(function (f) {
    var x = new XMLHttpRequest();
    x.open('GET', root + 'components/' + f + '.jsx', false);
    x.send();
    if (x.status !== 200) throw new Error('source-loader: cannot load ' + f + ' (' + x.status + ')');
    var src = x.responseText.replace(/^'use client';?/m, '');
    var imports = [];
    src = src.replace(/^import\s+\{([^}]+)\}\s+from\s+'[^']+';?\s*$/mg, function (_, names) {
      imports = imports.concat(names.split(',').map(function (n) {
        return n.trim();
      }));
      return '';
    });
    src = src.replace(/^import .*$/mg, '');
    var exported = [];
    src = src.replace(/export\s+(function|const)\s+(\w+)/g, function (_, kw, name) {
      exported.push(name);
      return kw + ' ' + name;
    });
    code += '(function(){\n' + (imports.length ? 'var ' + imports.map(function (n) {
      return n + ' = __ns.' + n;
    }).join(', ') + ';\n' : '') + src + '\nObject.assign(__ns, {' + exported.join(',') + '});\n})();\n';
  });
  var out = Babel.transform(code + 'return __ns;', {
    presets: ['react'],
    parserOpts: {
      allowReturnOutsideFunction: true
    }
  }).code;
  window.AluplanDesignSystem_84a18c = new Function('React', out)(React);
  window.__ALU_SOURCE_MODE = true;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "tests/source-loader.js", error: String((e && e.message) || e) }); }

// tokens/build/breakpoints.mjs
try { (() => {
// GENERATED. Build-time only: media queries cannot read CSS variables.
const breakpoint = {
  "sm": "30rem",
  "md": "48rem",
  "lg": "64rem",
  "xl": "80rem"
};
const mq = Object.fromEntries(Object.entries(breakpoint).map(([k, v]) => [k, `(min-width: ${v})`]));
})(); } catch (e) { __ds_ns.__errors.push({ path: "tokens/build/breakpoints.mjs", error: String((e && e.message) || e) }); }

// ui_kits/website/ComparisonScreen.jsx
try { (() => {
function ComparisonScreen({
  content,
  productId = 'allplan'
}) {
  const {
    Heading,
    Text,
    Stack,
    Breadcrumb,
    PackageComparison,
    CtaGroup,
    Link,
    Select
  } = ALU;
  const page = content.pages.comparison;
  const {
    product,
    releases
  } = AluplanContent.selectProduct(content, productId);
  const [releaseId, setReleaseId] = React.useState(releases[0] && releases[0].id);
  const [marketId, setMarketId] = React.useState(content.markets[0].id);
  const view = AluplanContent.selectScopeView(content, {
    productId,
    releaseId,
    marketId
  });
  return /*#__PURE__*/React.createElement(SitePage, {
    content: content,
    current: "#compare"
  }, /*#__PURE__*/React.createElement(Section, {
    id: "paketler"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      id: 'home',
      label: UI.home,
      href: '#products'
    }, {
      id: 'products',
      label: UI.products,
      href: '#products'
    }, {
      id: product.id,
      label: product.name,
      href: '#product'
    }, {
      id: 'compare',
      label: page.titleSuffix
    }]
  }), /*#__PURE__*/React.createElement(Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, product.name + ' ' + page.titleSuffix), /*#__PURE__*/React.createElement(Text, {
    tone: "secondary",
    prose: true
  }, page.intro)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-inline-md)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, var(--layout-card-min)), var(--layout-card-min)))'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: UI.releaseSelect,
    value: releaseId,
    onChange: e => setReleaseId(e.target.value),
    options: releases.map(r => ({
      value: r.id,
      label: r.version
    }))
  }), /*#__PURE__*/React.createElement(Select, {
    label: UI.marketSelect,
    value: marketId,
    onChange: e => setMarketId(e.target.value),
    options: content.markets.map(m => ({
      value: m.id,
      label: m.label
    }))
  })), /*#__PURE__*/React.createElement(Text, {
    variant: "body-sm",
    tone: "secondary",
    "aria-live": "polite"
  }, fmt(UI.scopeSummary, {
    records: view.counts.records,
    unverified: view.counts.unverified,
    sources: view.counts.sources.join(', ') || '—'
  })), /*#__PURE__*/React.createElement(PackageComparison, {
    caption: product.name + ' · ' + (view.release ? view.release.version : '') + ' · ' + (view.market ? view.market.label : '') + ' — ' + page.captionSuffix,
    packages: view.packages,
    groups: view.groups,
    cells: view.cells,
    footnote: page.footnote
  }), /*#__PURE__*/React.createElement(Text, {
    variant: "body-sm"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#product"
  }, product.name + ' ' + UI.backToProduct))), /*#__PURE__*/React.createElement(Section, {
    id: "iletisim",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(CtaGroup, {
    heading: page.ctaHeading,
    description: page.ctaText,
    actions: content.ctas
  })));
}
window.ComparisonScreen = ComparisonScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ComparisonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PreviewShell.jsx
try { (() => {
// Preview-only tooling (not part of the product DOM): theme / mode / width / text-size switcher.
// It only sets data-theme, data-mode and the root font-size; content and markup stay identical.
// Narrow widths render the same page inside an iframe so real media queries apply.
const ALU_PREVIEW_KEY = 'alu-preview-v1';
function readPreview() {
  const q = new URLSearchParams(location.search);
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(ALU_PREVIEW_KEY) || '{}');
  } catch (e) {}
  const pick = (allowed, ...vals) => vals.find(v => allowed.includes(v)) || allowed[0];
  return {
    theme: pick(['aluplan', 'field'], q.get('theme'), saved.theme),
    mode: pick(['light', 'dark'], q.get('mode'), saved.mode),
    width: q.get('embed') ? 'full' : pick(['full', '768', '360'], saved.width),
    scale: pick(['100', '150', '200'], q.get('scale'), saved.scale),
    embed: q.get('embed') === '1'
  };
}
function applyPreview(p) {
  const el = document.documentElement;
  el.setAttribute('data-theme', p.theme);
  el.setAttribute('data-mode', p.mode);
  el.style.fontSize = p.scale === '100' ? '' : p.scale + '%';
}
function usePreview() {
  const [p, setP] = React.useState(readPreview);
  React.useEffect(() => {
    applyPreview(p);
    if (!p.embed) localStorage.setItem(ALU_PREVIEW_KEY, JSON.stringify({
      theme: p.theme,
      mode: p.mode,
      width: p.width,
      scale: p.scale
    }));
  }, [p]);
  return [p, patch => setP(cur => ({
    ...cur,
    ...patch
  }))];
}
const toolbarStyles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'center',
    padding: '8px 16px',
    background: '#1d1d1f',
    color: '#f5f5f7',
    fontFamily: 'ui-monospace, Menlo, monospace',
    fontSize: 12
  },
  group: {
    display: 'flex',
    gap: 4,
    alignItems: 'center'
  },
  btn: on => ({
    font: 'inherit',
    padding: '4px 10px',
    minHeight: 28,
    borderRadius: 4,
    border: '1px solid ' + (on ? '#f5f5f7' : '#555'),
    background: on ? '#f5f5f7' : 'transparent',
    color: on ? '#1d1d1f' : '#f5f5f7',
    cursor: 'pointer'
  }),
  label: {
    opacity: 0.75,
    marginRight: 4
  }
};
function Seg({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: toolbarStyles.group,
    role: "group",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("span", {
    style: toolbarStyles.label
  }, label), options.map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    "aria-pressed": value === v,
    style: toolbarStyles.btn(value === v),
    onClick: () => onChange(v)
  }, l)));
}
function PreviewShell({
  children,
  title
}) {
  const [p, set] = usePreview();
  if (p.embed) return children;
  const narrow = p.width !== 'full';
  const src = location.pathname + (location.search ? location.search + '&' : '?') + 'embed=1&theme=' + p.theme + '&mode=' + p.mode + '&scale=' + p.scale + location.hash;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: toolbarStyles.bar,
    "aria-label": "\xD6nizleme ayarlar\u0131 (\xFCr\xFCn aray\xFCz\xFCn\xFCn par\xE7as\u0131 de\u011Fil)"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      marginRight: 8
    }
  }, title), /*#__PURE__*/React.createElement(Seg, {
    label: "Tema",
    value: p.theme,
    options: [['aluplan', 'aluplan'], ['field', 'field (test)']],
    onChange: theme => set({
      theme
    })
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Mod",
    value: p.mode,
    options: [['light', 'açık'], ['dark', 'koyu']],
    onChange: mode => set({
      mode
    })
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Geni\u015Flik",
    value: p.width,
    options: [['full', 'tam'], ['768', '768'], ['360', '360']],
    onChange: width => set({
      width
    })
  }), /*#__PURE__*/React.createElement(Seg, {
    label: "Metin",
    value: p.scale,
    options: [['100', '100%'], ['150', '150%'], ['200', '200%']],
    onChange: scale => set({
      scale
    })
  })), narrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#8a8a8e',
      padding: 24,
      minHeight: 'calc(100vh - 44px)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    key: src,
    title: "Dar ekran \xF6nizleme",
    src: src,
    style: {
      display: 'block',
      margin: '0 auto',
      width: Number(p.width),
      height: 'calc(100vh - 92px)',
      border: 0,
      background: 'white'
    }
  })) : children);
}
Object.assign(window, {
  PreviewShell,
  usePreview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PreviewShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetailScreen.jsx
try { (() => {
function ProductDetailScreen({
  content,
  productId = 'allplan'
}) {
  const {
    Heading,
    Text,
    Stack,
    Grid,
    Breadcrumb,
    ReleaseTag,
    ReleaseNotes,
    CtaGroup,
    ResourceCard,
    SupportCard,
    Card,
    Badge,
    Button,
    Accordion,
    Divider
  } = ALU;
  const page = content.pages.productDetail;
  const {
    product,
    latestRelease: release,
    packages,
    resources,
    roleLabels
  } = AluplanContent.selectProduct(content, productId);
  return /*#__PURE__*/React.createElement(SitePage, {
    content: content,
    current: "#products"
  }, /*#__PURE__*/React.createElement(Section, {
    id: "ozet"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      id: 'home',
      label: UI.home,
      href: '#products'
    }, {
      id: 'products',
      label: UI.products,
      href: '#products'
    }, {
      id: product.id,
      label: product.name
    }]
  }), /*#__PURE__*/React.createElement(Stack, {
    gap: "md"
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    gap: "sm",
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "mono",
    tone: "secondary"
  }, product.vendor), product.isDemo ? /*#__PURE__*/React.createElement(Badge, {
    tone: "demo"
  }, UI.demoBadge) : null), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    size: "display"
  }, product.name), release ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ReleaseTag, {
    version: release.version,
    status: release.status
  })) : null, /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    prose: true
  }, product.summary), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    gap: "sm"
  }, roleLabels.map(r => /*#__PURE__*/React.createElement(Badge, {
    key: r,
    icon: null
  }, r)))), /*#__PURE__*/React.createElement(CtaGroup, {
    actions: content.ctas,
    headingLevel: 2
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Section, {
    id: "paketler"
  }, /*#__PURE__*/React.createElement(Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, page.packagesHeading), /*#__PURE__*/React.createElement(Text, {
    tone: "secondary",
    prose: true
  }, page.packagesIntro)), /*#__PURE__*/React.createElement(Grid, {
    columns: 3
  }, packages.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    variant: "outlined",
    title: p.name,
    titleLevel: 3
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "body-sm",
    tone: "secondary"
  }, page.packageCardText)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#compare",
    iconEnd: "arrow-right"
  }, UI.compareCta))), /*#__PURE__*/React.createElement(Section, {
    id: "yenilikler",
    tone: "subtle"
  }, release ? /*#__PURE__*/React.createElement(ReleaseNotes, {
    heading: page.releaseHeading,
    release: {
      version: release.version,
      status: release.status
    },
    items: release.items,
    sourceNote: release.sourceNote
  }) : /*#__PURE__*/React.createElement(ReleaseNotes, {
    heading: page.releaseHeading,
    items: [],
    emptyText: page.releaseEmpty
  })), /*#__PURE__*/React.createElement(Section, {
    id: "kaynaklar"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, page.resourcesHeading), /*#__PURE__*/React.createElement(Grid, {
    columns: 3
  }, resources.map(r => /*#__PURE__*/React.createElement(ResourceCard, {
    key: r.id,
    kind: r.kind,
    title: r.title,
    description: r.description,
    href: r.href || undefined,
    language: r.language,
    fileSize: r.fileSize,
    duration: r.duration
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "egitim",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, page.supportHeading), /*#__PURE__*/React.createElement(Grid, {
    columns: 2
  }, content.support.map(s => /*#__PURE__*/React.createElement(SupportCard, {
    key: s.id,
    icon: s.icon,
    title: s.title,
    description: s.description,
    actions: s.actions
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "sss"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, page.faqHeading), /*#__PURE__*/React.createElement(Accordion, {
    items: page.faq.map(f => ({
      id: f.id,
      title: f.question,
      content: /*#__PURE__*/React.createElement(Text, {
        tone: "secondary",
        prose: true
      }, f.answer)
    }))
  })), /*#__PURE__*/React.createElement(Section, {
    id: "iletisim"
  }, /*#__PURE__*/React.createElement(CtaGroup, {
    layout: "band",
    heading: page.ctaHeading,
    description: page.ctaText,
    actions: content.ctas
  })));
}
window.ProductDetailScreen = ProductDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsScreen.jsx
try { (() => {
function ProductsScreen({
  content
}) {
  const {
    Heading,
    Text,
    Grid,
    RoleSelector,
    ProductCard,
    Breadcrumb,
    Stack
  } = ALU;
  const page = content.pages.products;
  const [role, setRole] = React.useState('all');
  const roles = [page.allRole, ...content.roles];
  const list = content.products.filter(p => role === 'all' || p.roles.includes(role));
  return /*#__PURE__*/React.createElement(SitePage, {
    content: content,
    current: "#products"
  }, /*#__PURE__*/React.createElement(Section, {
    id: "urunler"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      id: 'home',
      label: UI.home,
      href: '#products'
    }, {
      id: 'products',
      label: UI.products
    }]
  }), /*#__PURE__*/React.createElement(Stack, {
    gap: "sm"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, page.title), /*#__PURE__*/React.createElement(Text, {
    tone: "secondary",
    prose: true
  }, page.intro)), /*#__PURE__*/React.createElement(RoleSelector, {
    legend: page.roleLegend,
    roles: roles,
    value: role,
    onChange: setRole
  }), /*#__PURE__*/React.createElement(Text, {
    variant: "body-sm",
    tone: "secondary",
    "aria-live": "polite"
  }, fmt(UI.productCount, {
    count: list.length
  })), /*#__PURE__*/React.createElement(Grid, {
    columns: 3
  }, list.map(p => {
    const s = AluplanContent.selectProduct(content, p.id);
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      name: p.name,
      vendor: p.vendor,
      summary: p.summary,
      isDemo: p.isDemo,
      roles: s.roleLabels,
      release: s.latestRelease ? {
        version: s.latestRelease.version,
        status: s.latestRelease.status
      } : undefined,
      href: p.id === 'allplan' ? '#product' : undefined
    });
  }))));
}
window.ProductsScreen = ProductsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SitePage.jsx
try { (() => {
// Shared page frame. Every screen reads the same fixture (data/demo-content.json) through data/select-content.js.
// Editorial copy comes from content.pages.*, generic labels from data/ui-labels.tr.json (window.UI).
// Prototype runtime only: globals + in-browser Babel. Not a Next.js component (see README "Next.js").
const ALU = window.AluplanDesignSystem_84a18c;
const LOGO_SRC = '../../assets/logo/aluplan-logo-white-filled.svg';
const fmt = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, k) => v[k] != null ? v[k] : '');
function SitePage({
  content,
  current,
  children
}) {
  const {
    SiteHeader,
    SiteFooter,
    Alert,
    Container
  } = ALU;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "alu-skip-link",
    href: "#main"
  }, UI.skipLink), /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: LOGO_SRC,
    homeHref: "#products",
    navItems: content.site.nav,
    currentHref: current,
    actions: content.ctas.map(c => ({
      id: c.id,
      label: c.label,
      href: c.href,
      external: true,
      variant: 'secondary'
    }))
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    style: {
      paddingBlock: 'var(--space-stack-md)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: UI.demoAlertTitle
  }, content.$meta.notice)), children), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO_SRC,
    homeHref: "#products",
    columns: content.site.footer,
    legal: content.site.legal
  }));
}
function Section({
  id,
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      paddingBlock: 'var(--space-stack-xl)',
      background: tone === 'subtle' ? 'var(--surface-subtle)' : undefined
    }
  }, /*#__PURE__*/React.createElement(ALU.Container, {
    size: "xl"
  }, /*#__PURE__*/React.createElement(ALU.Stack, {
    gap: "lg"
  }, children)));
}
Object.assign(window, {
  ALU,
  LOGO_SRC,
  fmt,
  SitePage,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SitePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.BrandLogo = __ds_scope.BrandLogo;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Grid = __ds_scope.Grid;

__ds_ns.Stack = __ds_scope.Stack;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.CtaGroup = __ds_scope.CtaGroup;

__ds_ns.ResourceCard = __ds_scope.ResourceCard;

__ds_ns.RoleSelector = __ds_scope.RoleSelector;

__ds_ns.SupportCard = __ds_scope.SupportCard;

__ds_ns.PackageComparison = __ds_scope.PackageComparison;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ReleaseNotes = __ds_scope.ReleaseNotes;

__ds_ns.ReleaseTag = __ds_scope.ReleaseTag;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.GENERATED = __ds_scope.GENERATED;

})();
