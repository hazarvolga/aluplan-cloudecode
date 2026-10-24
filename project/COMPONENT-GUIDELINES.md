# Component guidelines

Genel kurallar:

- **Liste anahtarları:** içerikte kararlı `id` varsa React key odur (nav, footer, CTA, rol, SSS, kapsam kayıtları). İndis yalnız id'siz içerik için yedektir; kalıcı kimlik çözümü değildir — içerik modeline id ekleyin.
- **Client boundary:** hook kullanan dosyalar `'use client'` ile başlar (README → Next.js).

- Bileşenler yalnız semantic veya component alias token kullanır. Ham palet, sabit renk ve sabit gölge yok.
- İçerik prop/fixture'dan gelir; bileşen metin uydurmaz (yalnız erişilebilirlik metinleri ve boş durum varsayılanları; hepsi prop ile değiştirilebilir).
- Yükseklik yerine `min-height`; metin kırılır, kesilmez. Mobilde içerik gizlenmez, yeniden düzenlenir.
- Varyant yalnız gerçek bir kullanım varsa eklenir. Şu an olmayanlar bilerek yok: danger buton, toast, tooltip, radio, switch.
- Durumlar renk dışında da işaretlenir (ikon, metin, kenar kalınlığı, alt çizgi).

Her bileşenin ayrıntılı listesi canlı olarak `catalog/index.html` içinde (amaç, varyant, token, erişilebilir davranış, durumlar). Özet:

## Temel

**Button** — Bir bölgenin ana eylemi. primary/secondary/ghost; sm/md/lg; href ile `<a>`. Durumlar: default, hover, focus-visible, active, disabled, loading (`aria-busy`, spinner, gizli "Yükleniyor"). Harici bağlantı: ok ikonu + "(yeni sekmede açılır)". Token: `--button-*`.

**Link** — inline (prose içinde, her zaman alt çizgili) ve standalone (ok ikonlu). Token: `--text-link*`.

**IconButton** — `label` zorunlu. md boyutu `--target-min` (44 / 40px). on-brand varyantı header için.

**Heading / Text** — seviye ve görsel boyut ayrı. Text: body-lg, body, body-sm, caption, label, mono; tone secondary; prose (68ch).

**Container / Stack / Grid / Divider** — yerleşim. Grid sütunları build-time kırılımlarla (1 → 2 @48rem → n @64rem) ya da `minItemWidth` auto-fill.

**Card** — default/subtle/outlined. `href` verilirse başlık tek bağlantıdır ve tıklama alanı kartı kaplar; gövdede başka bağlantı olmaz (footer hariç).

**Badge** — neutral, accent, info, success, warning, danger, demo. Durum tonları varsayılan ikon taşır; `demo` kesik çizgili.

**Input / Select / Checkbox** — görünür etiket, ipucu, hata, başarı, zorunlu, pasif. `aria-describedby`, `aria-invalid`. Hata = ikon + metin + kalın kenar. Select native.

**Alert** — info/success/warning/danger; ikon + gizli önek; `live` yalnız eylem sonrası mesajlarda.

**Dialog** — native `<dialog>` + `showModal()`; açılışta ilk odaklanabilir öğeye (veya `[autofocus]`) belirleyici odak, Esc, odak hapsi, odak geri dönüşü, backdrop tıklamasıyla kapanma. Kısa onaylar için; harici CTA'ları dialog arkasına saklamayın.

**Tabs** — WAI-ARIA, otomatik aktivasyon, ←/→/Home/End (yalnız etkin sekmeler arasında, sarmalı), roving tabindex. Seçili = kalın alt çizgi + kalın yazı. Aktif sekme kuralı (controlled ve uncontrolled aynı): istenen id (selectedId ?? iç durum ?? defaultTabId) varsa ve etkinse o; değilse ilk etkin sekme; yoksa hiçbiri. Boş liste → hiçbir şey render edilmez. Tümü pasif → tablist görünür, odaklanabilir sekme ve görünür panel yok. Controlled modda bileşen kendiliğinden onChange çağırmaz. (tests/index.html: 10 test)

**Accordion** — başlık içinde button, `aria-expanded`. Kritik bilgi (kapsam sınırı, fiyat) akordeona konmaz.

**Breadcrumb** — `nav > ol`, son öğe `aria-current="page"`, sarılır.

## Aluplan kalıpları

**SiteHeader** — marka yüzeyi, logo (bare BrandLogo), ana menü, CTA'lar. 64rem altında menü ve CTA'lar açılır panele taşınır; `aria-expanded`, Esc ile kapanır, odak düğmeye döner. Skip link sayfa tarafından sağlanır (`.alu-skip-link`).

**RoleSelector** — fieldset + native radio. Roller içerikten gelir (Mimar/Mühendis/Prekast fixture'da). Seçili = vurgu kenarı + dolu onay ikonu.

**ProductCard** — üretici (mono), ad (uzun adlar kırılır), özet, sürüm etiketi, rol rozetleri, demo rozeti. Paket listelemez.

**PackageComparison** — veriyi `selectScopeView(content, { productId, releaseId, marketId })` çıktısından alır (paket × sürüm × pazar). Gerçek `<table>`; caption, `th scope`. Durumlar: Dahil (check), Dahil değil (minus), Ek seçenek (layers), Bilgi yok (circle-help). Eksik hücre otomatik "Bilgi yok". Dar ekranda: odaklanabilir, etiketli yatay kaydırma alanı + yapışkan ilk sütun + görünür ipucu. Sütun gizlenmez.

**ReleaseTag** — "Sürüm" önekli mono etiket; current/previous/placeholder/unknown. `status` tip sözleşmesinde zorunlu; eksik/geçersizse "statü bilinmiyor" gösterir, asla "güncel" varsaymaz. Ürün adı ve paket rozetinden görsel olarak ayrı.

**ReleaseNotes** — tek sürümün yenilik listesi; boşsa açık boş durum. Madde uydurulmaz.

**ResourceCard** — PDF/video. `href` yoksa "Dosya henüz eklenmedi" durumu, bağlantı üretilmez. Boyut/süre/dil yalnız verilirse.

**SupportCard** — eğitim/destek; eylemler opsiyonel.

**CtaGroup** — teklif + deneme. `priority="equal"` varsayılan. Hedef alan adı görünür. Form göndermez; deneme süresi yazılmaz.

**SiteFooter** — marka yüzeyi, başlıklı bağlantı sütunları, yasal satır (içerikten).

## Marka

**BrandLogo** — sağlanan SVG'yi değiştirmeden `<img>` ile gösterir; `object-fit: contain` ile oran korunur; her zaman `--surface-brand` üzerinde (`bare` yalnız ebeveyn marka yüzeyiyse).

**Icon** — Lucide alt kümesi; `label` yoksa dekoratif.

## Durum matrisi (uygulanan)

| Bileşen | hover | focus-visible | active | disabled | loading | error | success |
|---|---|---|---|---|---|---|---|
| Button | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| IconButton | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Link | ✓ | ✓ | — | — | — | — | — |
| Input | ✓ | ✓ | — | ✓ | — | ✓ | ✓ |
| Select | ✓ | ✓ | — | ✓ | — | ✓ | — |
| Checkbox | ✓ | ✓ | — | ✓ | — | ✓ | — |
| Card (href) | ✓ | ✓ | — | — | — | — | — |
| Tabs | ✓ | ✓ | — | ✓ | — | — | — |
| Accordion | ✓ | ✓ | — | — | — | — | — |
| RoleSelector | ✓ | ✓ | — | — | — | — | — |
| ResourceCard | ✓ | ✓ | — | unavailable | — | — | — |
