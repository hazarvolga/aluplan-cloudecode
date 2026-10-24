# Aluplan Design System (taslak)

Aluplan için Türkçe B2B web tasarım sistemi prototipi. Aluplan, ALLPLAN'ın Türkiye distribütörü / çözüm ortağıdır; yazılım üreticisi değildir ve portföyü yalnız ALLPLAN'dan oluşmaz. Hedef kitle mimar, mühendis, prekast ve altyapı ekipleri. Ton: sakin, güvenilir, teknik ama anlaşılır.

**Durum:** Taslak. Renkler ve fontlar onaylı standart değil, test edilebilir bir öneridir. Yayınlanmadı; org varsayılanı değiştirilmedi.

**Hedef:** CMS'siz Next.js / React / TypeScript. Bu paket backend, CMS, form gönderimi veya schema/JSON-LD içermez.

## Kaynaklar

- `uploads/aluplan-logo-white-.svg` — kullanıcının sağladığı tek varlık. `assets/logo/aluplan-logo-white.svg` olarak bayt bayt kopyalandı (değiştirilmedi). Dosyada dolgu tanımı olmadığı için siyah render ediliyordu; kullanıcı onayıyla türetilen `assets/logo/aluplan-logo-white-filled.svg` yalnız kök `<svg>`'ye `fill="#FFFFFF"` ekler ve koyu marka yüzeylerinde kullanılır.
- Brief içindeki taslak renk/font yönü (Ink, Silver, Teal, Blueprint; Manrope, IBM Plex Sans, IBM Plex Mono).
- Figma, kod tabanı veya mevcut site sağlanmadı. UI kit mevcut bir arayüzün kopyası değil, sistemin kullanım örneğidir.

## Hızlı başlangıç

```html
<html lang="tr" data-theme="aluplan" data-mode="light">
<link rel="stylesheet" href="styles.css">
```

- Token'ları değiştir: `tokens/tokens.json` → `node scripts/build-tokens.mjs` (bağımlılık yok, Node ≥ 20). `--check` yalnız doğrular.
- Tema: `data-theme="aluplan" | "field"`. Mod: `data-mode="light" | "dark"`. İki eksen bağımsızdır; bir kapsamda ikisi birlikte verilir.
- Next.js: aşağıdaki "Next.js uyarlama sınırları" bölümüne bakın.

## Next.js uyarlama sınırları

Bu paket bir Next.js uygulaması değildir; aşağıdakiler taşıma kuralıdır.

**Taşınabilir kaynaklar (uygulamaya kopyalanır):** `styles.css` ve import ettiği her şey (`tokens/*.css`, `components/**/*.css`, `components/responsive.generated.css`), `assets/` (→ `public/`), `components/**/*.jsx` + `.d.ts`, `data/content-model.ts`, `data/select-content.js` (saf fonksiyonlar), `scripts/*.mjs` (build/test, CI'da).

**Yalnız prototip çalıştırma kaynakları (taşınmaz):** `ui_kits/website/*.jsx`, `catalog/*`, `tests/*`, `guidelines/*`, `*.card.html`. Bunlar `window.AluplanDesignSystem_*` global'i, `window.UI`/`window.AluplanContent` ve tarayıcı içi Babel ile çalışır; doğrudan Next.js bileşeni değildir. Sayfalar Next.js'te sunucu bileşeni olarak yeniden yazılmalıdır.

**Client boundary:** hook veya tarayıcı API'si kullanan bileşenlerin ilk satırında `'use client'` vardır: Input, Select, Checkbox (useId), Dialog (`<dialog>`, useEffect), Tabs, Accordion, SiteHeader (menü durumu, keydown), RoleSelector, PackageComparison (useId). Diğerleri (Button, Link, IconButton, Heading, Text, Container, Stack, Grid, Divider, Card, Badge, Alert, Breadcrumb, SiteFooter, ProductCard, ReleaseTag, ReleaseNotes, ResourceCard, SupportCard, CtaGroup, BrandLogo, Icon) hook içermez ve sunucu bileşeni olarak render edilebilir.

**Sunucu → client prop sınırı:** client bileşenlere yalnız serileştirilebilir veri geçin (string, number, boolean, düz nesne/dizi). `Tabs.items[].content`, `Accordion.items[].content` ve `Dialog.children` React düğümüdür; sunucu bileşeninden JSX olarak geçirilebilir, ama fonksiyon prop'ları (`onChange`, `onClose`) yalnız başka bir client bileşeninden verilebilir. İçerik (`demo-content.json`) sunucuda okunmalı, `selectScopeView` sunucuda çalıştırılıp sonuç prop olarak verilmelidir.

**Logo yolu:** `BrandLogo` varsayılanı göreli `assets/logo/aluplan-logo-white-filled.svg`; Next.js'te `logoSrc="/assets/logo/aluplan-logo-white-filled.svg"` (public) verin.

**Fontlar:** mevcut fontlar arasında geçiş yalnız token değişikliğidir (`semantic.font.heading` → `primitive.font.family.*`). **Yeni** bir font seçmek ayrıca (1) lisanslı woff2 dosyalarını `assets/fonts/`'a eklemeyi, (2) `tokens/fonts.css`'e `@font-face` kaydı (latin + latin-ext; Türkçe için gerekli), (3) `primitive.font.family` altında yeni aile token'ını, (4) `ASSET-LICENSES.md` ve lisans metnini gerektirir. Yalnız token değiştirmek yeni fontu yüklemez; tarayıcı yedek yığına düşer. Next.js'te `next/font` kullanılacaksa `@font-face` dosyası yerine onun ürettiği CSS değişkeni primitive'e bağlanır.

## Testler

- `node scripts/build-tokens.mjs --check` — doğrulama + lint + drift.
- `node scripts/token-tests.mjs` — 28 token testi. `node scripts/content-tests.mjs` — 13 içerik sözleşmesi testi.
- `tests/index.html` — aynı token/içerik testleri + Tabs/ReleaseTag/Dialog/key/logo davranış testleri (bileşenler güncel kaynaktan derlenir). `tests/ui-kit.html` — tema değişmezliği ve 360/768px × %100/%200 taşma testleri (yavaş).
- Sonuçlar ve hangi motorda çalıştığı: `CHANGELOG.md`.

## Dizin

- `styles.css` — yalnız `@import` satırları.
- `tokens/tokens.json` — **tek kaynak**. `tokens/*.css` ve `tokens/build/*` türetilir (elle düzenlenmez).
- `tokens/build/CONTRAST-REPORT.md` — ölçülen kontrast tablosu (188 çift).
- `tokens/build/breakpoints.json|mjs` — build-time kırılımlar.
- `scripts/build-tokens.mjs` — üretici + doğrulayıcı (kırık referans, döngü, katman kuralı, tema bütünlüğü, kontrast, bileşen CSS lint).
- `components/` — React bileşenleri (`.jsx` + `.d.ts` + `.prompt.md`) ve grup CSS'leri.
- `data/demo-content.json` + `data/content-model.ts` — içerik fixture'ı (editoryal sayfa metinleri `pages.*` dahil) ve tipleri (demo sözleşmesi v2). `data/select-content.js` — saf seçiciler. `data/ui-labels.tr.json` — genel arayüz etiketleri.
- `components/responsive.template.css` → `components/responsive.generated.css` — tüm genişlik media query'leri.
- `catalog/index.html` — tema/mod/genişlik/metin boyutu seçicili çalışır katalog.
- `ui_kits/website/` — aynı fixture ile Ürünler, Ürün ayrıntısı, Paket karşılaştırması.
- `guidelines/` — foundation kartları.
- `assets/` — logo (orijinal + dolgulu varyant), fontlar (woff2) ve OFL metinleri (`assets/fonts/licenses/`), Lucide ikon alt kümesi.
- `tests/` — tarayıcı test düzenekleri. `CHANGELOG.md` — inceleme bulguları ve kanıtlar.
- `TOKEN-CONTRACT.md`, `COMPONENT-GUIDELINES.md`, `ACCESSIBILITY-NOTES.md`, `ASSET-LICENSES.md`, `DECISIONS-AND-OPEN-QUESTIONS.md`, `SKILL.md`.

## Components

Temel: Button, Link, IconButton, Heading, Text (Typography), Container, Stack, Grid, Divider, Card, Badge, Input, Select, Checkbox, Alert, Dialog, Tabs, Accordion, Breadcrumb.

Aluplan kalıpları: SiteHeader (navigasyon + mobil menü), SiteFooter, RoleSelector, ProductCard, PackageComparison, ReleaseTag, ReleaseNotes, ResourceCard, SupportCard, CtaGroup.

Marka: BrandLogo, Icon.

### Intentional additions

- **Icon** — Lucide geometrisini tek yerden sunmak için (stroke `--icon-stroke` token'ından).
- **BrandLogo** — beyaz logoyu her zaman koyu marka yüzeyinde, deformasyonsuz göstermek için.
- **Heading/Text** — "Typography" isteğinin iki parçası: seviye ile görsel boyutu ayırmak için.

## UI kits

- `ui_kits/website/index.html` — `#products`, `#product`, `#compare`. Hepsi `data/demo-content.json` okur.

## CONTENT FUNDAMENTALS

- **Dil:** Türkçe, `lang="tr"`. Hitap "siz" (ör. "Hangi ekiptesiniz?", "Tabloyu yatay kaydırarak tüm paketleri görün."). Birinci çoğul ("biz") yalnız Aluplan'ı temsil ederken.
- **Ton:** sakin, bilgilendirici, iddiasız. Abartı sıfatı, ünlem, aciliyet dili yok.
- **Büyük harf:** cümle düzeni ("Paket karşılaştırması", "Teklif iste"). Ürün adları kaynaktaki gibi (ALLPLAN). Zorunlu büyük harf dönüşümü kullanılmaz; Türkçe i/İ dönüşümü `lang`'a bağlıdır.
- **Emoji:** yok. Unicode simge yerine Lucide ikonları.
- **Kavramlar ayrı:** ürün (ALLPLAN), paket (Paket A), yıllık sürüm (ALLPLAN 20XX) farklı alanlar ve farklı bileşenlerdir.
- **Bilinmeyen ≠ yok:** doğrulanmamış kapsam "Bilgi yok" olarak yazılır, "Dahil değil" yalnız doğrulanmış bilgi içindir.
- **Uydurma yok:** yeni slogan, sayı, müşteri, yorum, ürün ekranı, gelecek sürüm özelliği, ticari vaat veya deneme süresi yazılmaz. Eksik içerik "yer tutucu", örnek içerik "Demo içerik" etiketi taşır.
- **CTA'lar:** "Teklif iste" → `https://forms.office.com/r/hXhnKAG912`; "Deneme veya abonelik seçenekleri" → `https://www.allplan.com/trial-or-subscription`. İkisi de harici, yeni sekmede açılır; hedef alan adı butonun altında gösterilir. Ticari öncelik kesin değil → varsayılan eşit ağırlık.
- **Hata mesajları:** ne olduğunu ve nasıl düzeltileceğini söyler: "Geçerli bir e-posta adresi girin (ör. ad@sirket.com.tr)."

## VISUAL FOUNDATIONS

- **Yön:** sakin mimari berraklık, mühendislik hassasiyeti. Güçlü tipografi, ince çizgiler, bol beyaz alan.
- **Renk:** açık modda beyaz/Silver yüzeyler, Ink metin; Teal (#0F766E) birincil eylem ve vurgu; Blueprint (#2563EB) bağlantı, odak ve bilgi. Koyu modda Ink yüzeyler, Teal #2DD4BF eylem, Blueprint #60A5FA bağlantı/odak. Teal #2DD4BF açık zeminde metin/eylem olarak kullanılmaz (beyaz üzerinde 1.86:1).
- **Marka yüzeyi:** `--surface-brand` (Ink 950) header, footer ve logo kabı; her iki modda koyu kalır çünkü yalnız beyaz logo var.
- **Tipografi:** Manrope başlık (700, -0.01em), IBM Plex Sans gövde (400/500/600), IBM Plex Mono teknik etiket (sentence case). Display/H1/H2 `clamp()` ile akışkan. Başlıklar `text-wrap: balance`, gövde `pretty`.
- **Boşluk:** 4px tabanlı rem skala; semantik inset/stack/inline token'ları; bölüm arası `--space-section`.
- **Arka plan:** düz renk yüzeyler. Gradyan, doku, desen, illüstrasyon, cam efekti, blur yok. Şeffaflık yalnız dialog scrim'inde.
- **Görseller:** sağlanmadı. Ürün ekranı uydurulmaz; görsel alanı gerekirse açık yer tutucu kullanılır.
- **Kenar/çizgi:** 1px çizgiler (`--border-default`); kontrol kenarları ≥ 3:1 (`--border-control`). Sol kenar vurgulu kart kullanılmaz; Alert tam çerçevelidir.
- **Köşe:** aluplan: kontrol 4px, yüzey 6px, rozet 2px, dialog 8px. Checkbox her temada kare kalır (en fazla 0.25rem).
- **Gölge:** aluplan neredeyse düz (`--elevation-raised` = 0 1px 2px), hover'da hafif artış, dialog'da belirgin. Koyu modda gölge zayıflar; ayrım kenar çizgisiyle sağlanır.
- **Kart:** beyaz yüzey + 1px çizgi + çok hafif gölge; tıklanabilir kartta hover'da kenar koyulaşır ve gölge artar, odak halkası kartı çevreler.
- **Hover:** bir ton koyu zemin (birincil), hafif yüzey dolgusu (ikincil/ghost), bağlantıda kalınlaşan alt çizgi. **Basılı:** bir ton daha koyu; küçülme/zıplama yok.
- **Odak:** 2px Blueprint outline, 2px offset; marka yüzeyinde açık ton (`--focus-ring-on-brand`).
- **Hareket:** 150–300ms, `cubic-bezier(0.2,0,0,1)`; yalnız renk/opacity ve dialog'da kısa fade. `prefers-reduced-motion` tüm süreleri 0ms yapar. Bounce, parallax, ağır animasyon yok.
- **Yerleşim:** sticky header (z 100). Container xl 75rem, akışkan gutter. Kırılımlar 30/48/64/80rem (build-time).

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) (ISC), `lucide-static@0.454.0`'dan 31 ikon programatik olarak kopyalandı → `assets/icons/lucide/*.svg` + `assets/icons/lucide-subset.json`; `Icon.jsx` aynı geometriyi gömülü taşır. Aluplan'a ait ikon seti sağlanmadı; Lucide ince çizgili, mimari/teknik tona uygun olduğu için seçildi (**ikame**, onay bekliyor).
- **Stil:** 24px grid, `currentColor` stroke, round cap/join; kalınlık `--icon-stroke` (aluplan 2, field 1.5). Boyutlar 16/20/24.
- **Kullanım:** ikon tek başına anlam taşımaz; metinle birlikte veya `label` ile. Durumlar (Dahil / Dahil değil / Ek seçenek / Bilgi yok) ikon + metin.
- **Emoji / unicode ikon:** kullanılmaz. İkon font yok. Yeni ikon elle çizilmez; Lucide'dan kopyalanır.

## Fontlar

Manrope, IBM Plex Sans, IBM Plex Mono (+ test preset için Source Serif 4, Public Sans) Google Fonts'tan latin + latin-ext (Türkçe için gerekli) woff2 olarak `assets/fonts/` altına alındı. Aluplan'a ait lisanslı font dosyası verilmedi; bunlar brief'teki aday fontlardır.
