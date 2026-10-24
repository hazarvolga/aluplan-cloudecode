# Token contract

## Katmanlar

| Katman | CSS adı | Kaynak yolu | Referans verebilir |
|---|---|---|---|
| Primitive | `--ref-*` (ör. `--ref-color-ink-950`) | `primitive.*` | hiçbir şey (yalnız gölgeler alpha renklere) |
| Semantic | `--surface-*`, `--text-*`, `--border-*`, `--action-*`, `--accent-*`, `--status-*`, `--focus-*`, `--font-*`, `--type-*`, `--space-*`, `--control-*`, `--target-*`, `--radius-*`, `--elevation-*`, `--icon-*`, `--motion-*`, `--z-*`, `--container-*`, `--grid-*`, `--logo-*`, `--layout-*` (ölçü sınırları) | `semantic.*` (renk dışı varsayılanlar), `themes.<t>.base` (renk dışı override), `themes.<t>.modes.<m>` (renkler) | yalnız primitive |
| Component alias | `--button-*`, `--input-*`, `--card-*`, `--badge-*`, `--dialog-*`, `--site-header-*`, `--site-footer-*`, `--comparison-*`, `--grid-min-item`, `--tabs-*`, `--role-selector-*`, `--release-notes-*`, `--cta-group-*`, `--checkbox-*` | `component.*` | yalnız semantic |

**Bileşen CSS'i `--ref-*`, ham renk (hex/rgb/hsl/oklch), ham uzunluk (px/rem/vw/vh/ch) ve ham `stroke-width`/`font-weight`/`z-index`/`line-height` kullanamaz** (build lint'i hata verir). Tanımsız `var(--x)` da hatadır; yalnız bileşen-yerel `--alu-*` özellikleri serbesttir (ör. `--alu-grid-min`, JSX'ten örnek bazında verilir).

## Adlandırma

- İngilizce, kararlı, yıl/sayfa bağımsız. JSON yolu kebab-case'e çevrilir: `semantic.action.primary.bgHover` → `--action-primary-bg-hover`.
- Ad rolü anlatır, değeri değil: `--text-secondary`, `--surface-brand` (asla `--teal-button`).
- Yeni token önce semantic katmanda düşünülür; component alias yalnız bir bileşen semantic token'dan farklı davranması gerekebilecekse eklenir.

## Tema ve mod

- İki bağımsız eksen: `data-theme` (`aluplan`, `field`) ve `data-mode` (`light`, `dark`).
- `:root` = `aluplan` + `light`.
- Her `[data-theme]` bloğu tüm renk dışı semantic seti, her `[data-theme][data-mode]` bloğu tüm renk setini yeniden bildirir. Böylece iç içe kapsamlar çalışır.
- **Kural:** bir kapsamı temalandırırken iki özniteliği birlikte verin (`<div data-theme="field" data-mode="dark">`). Yalnız `data-mode` verilirse renk blokları eşleşmez.
- Component alias'lar `:root` ve `[data-theme],[data-mode]` üzerinde tekrar bildirilir; böylece `var()` iç kapsamda yeniden çözülür.
- Her tema × mod aynı renk anahtar kümesini tanımlamak zorundadır (build doğrular). Tema yeni token ekleyemez, yalnız var olanı değiştirir.
- `field` bir **test preset**'idir: renk, font (Source Serif 4 + Public Sans), yoğunluk (inset/stack/control height), radius (pill/16px) ve gölgeyi (belirgin) değiştirir. Marka önerisi değildir.

## Build-time ve runtime

- **Runtime (CSS custom property):** renk, font, boşluk, boyut, radius, gölge, hareket, z-index, container, akışkan tip (`clamp`). Reduced-motion override'ı da runtime'dır (`@media (prefers-reduced-motion)` içinde süre = 0ms).
- **Build-time:** kırılımlar (`sm 30rem, md 48rem, lg 64rem, xl 80rem`). Media query `var()` okuyamaz. Bu yüzden genişliğe bağlı tüm kurallar tek bir kaynakta, `components/responsive.template.css` içinde `@media (--md)` / `(--lg)` adlarıyla yazılır; build bunları `tokens.json` değerleriyle `components/responsive.generated.css` dosyasına çevirir (`styles.css` en son import eder). Bileşen CSS'inde genişlik media query'si lint hatasıdır, şablonda literal `min-width` de hatadır; ikinci bir kırılım kaynağı yoktur. JS tüketimi için `tokens/build/breakpoints.json|mjs`.
- **gridColumns kaldırıldı:** 4/8/12 sütunlu bir yerleşim ızgarasını tüketen bileşen yoktu; sözleşmede tutmak yanıltıcıydı. `Grid` içerik sütunu sayısı (1 → 2 @md → n @lg) veya `--grid-min-item` ile auto-fill kullanır.

## Doğrulama (`node scripts/build-tokens.mjs --check`)

- Kırık referans, döngü (yığın izli), katman kuralı ihlali.
- Tema bütünlüğü (eksik/fazla renk anahtarı), renk token'ı tek primitive referansı olmalı.
- Kontrast: `$contrastChecks` listesi her tema × mod için hesaplanır; geçme/kalma **yuvarlanmamış** orana göre verilir, raporda 2 basamak gösterilir (4.4969 → "4.50" görünür ama kalır).
- CSS ad çakışması (katmanlar arası aynı `--` adı).
- Bileşen CSS lint: yukarıdaki ham değer kuralları, tanımsız değişken, genişlik media query'si (yalnız `@media` başlığı incelenir; `min-width:` bildirimleri media query sayılmaz).
- Drift: `--check`, diskteki üretilmiş dosyaları yeni build çıktısıyla karşılaştırır; fark = hata.
- Test paketi: `node scripts/token-tests.mjs` (28 pozitif/negatif test, bellekte klon fixture; diskteki `tokens.json` değişmez). Aynı paket `tests/index.html` ile tarayıcıda da çalışır.

## Token'ların değiştiremeyeceği yapısal davranışlar

Tema değişimi aşağıdakileri **değiştirmez ve değiştirmemelidir**:

- Metin, ürün kimliği, paket kapsamı, sürüm, URL, CTA hedefi ve sırası.
- Semantik HTML: başlık seviyeleri, landmark'lar, tablo yapısı, form etiketleri, ARIA ilişkileri, DOM sırası.
- Etkileşim modeli: klavye davranışı (tabs ok tuşları, Esc), odak yönetimi, açılır menü mantığı.
- Kırılım değerleri ve hangi kırılımda menünün katlandığı (build-time; tema başına farklı olamaz).
- Bileşen anatomisi: hangi öğelerin var olduğu (ör. durum ikonu, gizli önekler, "yeni sekmede açılır" bildirimi).
- Checkbox'ın kare kalması (`--checkbox-radius` = `min(--radius-control, --radius-checkbox-max)`) — radio ile karışmaması için yapısal.
- Logo dosyası ve logonun her zaman koyu marka yüzeyinde durması.
- Durumların renk dışı işaretleri (ikon, metin, alt çizgi, kalınlık).

## Bilinçli istisnalar (tokenlaştırılmayan değerler)

| Değer | Yer | Gerekçe |
|---|---|---|
| `0`, `100%`, `70%`, `-50%`, `-200%` | çeşitli | Yapısal oran/sıfır; görsel tema değeri değil. |
| `1px`, `-1px` | `.alu-visually-hidden` | Erişilebilirlik sabiti; `/* raw-ok */` ile işaretli. |
| `z-index:1` | tablo yapışkan sütunu | Tablo içi yerel istifleme, sayfa katmanı değil; `/* raw-ok */`. |
| `em` birimleri (0.05–1.25em) | ikon hizası, alt çizgi ofseti | Metne göreli; font değişince birlikte ölçeklenmesi istenir. |
| `100dvh` | dialog yüksekliği | Görünüm alanına bağlı yapısal sınır. |
| `::backdrop` yedek rengi | — | Kaldırıldı. Eski motorlar UA varsayılan backdrop'unu gösterir. |
| Önizleme araç çubuğu, katalog/demolar, `guidelines/` kartları | prototip araçları | Ürün UI'ı değil; lint kapsamı dışında. |

## Yeni token ekleme

1. `tokens/tokens.json` içinde doğru katmana ekleyin (renkse dört tema × modun hepsine).
2. Gerekiyorsa `$contrastChecks` listesine çift ekleyin.
3. `node scripts/build-tokens.mjs` çalıştırın; hata yoksa üretilen CSS commit edilir.
4. `node scripts/build-tokens.mjs --check` ve `node scripts/token-tests.mjs` CI'da çalıştırılmalıdır.
