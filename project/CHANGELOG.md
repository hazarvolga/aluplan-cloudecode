# CHANGELOG

## reviewed-v3 — 2026-10-22

Kapsam: yerel kaynak incelemesi ve token testlerinden gelen 10 bulgu + logo varyantı onayı. Görsel yön korunmuştur. Next.js uygulaması, CMS, backend, schema/JSON-LD oluşturulmadı; yayınlama veya org varsayılanı değişikliği yapılmadı.

### Test çalıştırma ortamı (dürüst kayıt)

- **Tarayıcı:** `tests/index.html` ve `tests/ui-kit.html`, Firefox 158 (macOS) önizlemesinde çalıştırıldı. Bileşenler `tests/source-loader.js` ile **güncel `components/*.jsx` kaynaklarından** derlendi.
- **Node:** `node scripts/build-tokens.mjs --check`, `node scripts/token-tests.mjs`, `node scripts/content-tests.mjs` **Node ile çalıştırılmadı**. Aynı fonksiyonlar (aynı kaynak dosyalar) tarayıcıda ve izole JS sandbox'ta çalıştırıldı. CLI sarmalayıcıları (dosya okuma/yazma, exit code) çalıştırılmadı; yerelde bir kez çalıştırın.
- **Sonuç:** birim düzeneği 59 kontrol — 58 geçti, 0 kaldı, 1 elle (Dialog Esc). UI kit düzeneği: 2 tema değişmezliği + 24 reflow kontrolü — hepsi geçti (aşağıdaki düzeltmelerden sonra).

| # | Bulgu | Düzeltme | Kanıt | Kalan sınır |
|---|---|---|---|---|
| 1 | lg 64→70rem değişince yalnız breakpoints.json değişiyordu; CSS media query'leri elle tutuluyordu | Tüm genişlik kuralları `components/responsive.template.css` içinde `@media (--md|--lg)` ile; build → `components/responsive.generated.css`. Bileşen CSS'inde genişlik media query'si lint hatası. `gridColumns` kaldırıldı (tüketici yoktu) | token-tests: "lg 64→70 yansır", "md yalnız md kurallarını etkiler", "sevkiyat değeri değişmedi" (bellekte klon) | Sadece min-width (mobile-first) desteklenir |
| 2 | Token dışı görsel değerler (32rem, 16rem, 12rem, 13/36/11/16rem, stroke-width 3, rgba fallback) | `semantic.layout.*`, `radius.checkboxMax`, `icon.strokeEmphasis` + component alias'lar; backdrop yedek rengi kaldırıldı | lint: bileşen CSS'inde ham uzunluk/renk/stroke-width 0 | İstisnalar TOKEN-CONTRACT "Bilinçli istisnalar" tablosunda |
| 3 | `.alu-icon--lg` → `--logo-height-sm`, `.alu-brand-logo--sm img` → `--icon-size-lg` | Doğru aileye bağlandı | token-tests: logo↔ikon bağımsızlığı (2 yön) + base.css kural eşlemesi | — |
| 4 | Validator `min-width:` bildirimlerini media query sanıyordu; son bildirim lint dışıydı; kontrast yuvarlanmış oranla karar veriyordu | Yalnız `@media` başlığı incelenir; son bildirim dahil; tanımsız değişken + ham değer lint; kontrast ham oran (4.4969 kalır, "4.50" görünür); CSS ad çakışması; `--check` drift kontrolü | token-tests 28/28 (12 negatif test dahil) | Node CLI çalıştırılmadı |
| 5 | Kapsam yalnız paket:yetenek anahtarlıydı | `scopeRecords`: paket × sürüm × pazar × yetenek + `source` + `verification`; `selectScopeView`; iki sentetik sürüm (S1/S2); karşılaştırma ekranında sürüm/pazar seçici | content-tests 13/13: S2, S1'i ezmez; eksik ≠ dahil değil; pazar sızıntısı yok; mükerrer kayıt tespiti | Demo sözleşmesi; gerçek ALLPLAN kapsamı yok |
| 6 | ProductDetail'de gömülü editoryal metin | `content.pages.*` (sayfa metinleri, SSS) + `data/ui-labels.tr.json` (genel etiketler) | Tema değişmezliği: #product ve #compare'de metin/link/başlık/landmark 4 kombinasyonda aynı | — |
| 7a | Tabs: ilk öğe pasifse items[0] seçiliydi | İlk etkin sekme; silinme/pasifleşme geri dönüşü; boş liste; tümü pasif; controlled kendiliğinden onChange çağırmaz | 10 Tabs testi geçti (klavye dahil) | — |
| 7b | ReleaseTag varsayılanı "current" | `status` zorunlu; eksik/geçersiz → "statü bilinmiyor" | 2 test geçti | — |
| 7c | Key'ler | İçerik id'si öncelikli (fixture'daki tüm listelere id eklendi); indis yalnız yedek | Tekrarlanan href/label ile 0 React key uyarısı (console yakalandı) | id'siz içerikte indis yedeği kalıcı kimlik değildir |
| 8 | Next.js yönlendirmesi eksikti | README "Next.js uyarlama sınırları": taşınabilir/prototip ayrımı, `'use client'` listesi (dosyalara da eklendi), sunucu→client prop sınırı, yeni font süreci | — | Next.js'te derlenmedi |
| 9 | OFL metinleri yoktu | 5 ailenin OFL.txt'si `assets/fonts/licenses/` (google/fonts deposu) | ASSET-LICENSES'ta copyright satırları | woff2 başına sürüm kaydı eksik |
| 10 | Logo dolgusuz (siyah render) | Orijinal korundu; kullanıcı onayıyla `aluplan-logo-white-filled.svg`: kök `<svg>`'ye yalnız `fill="#FFFFFF"` | `uploads/…` = `assets/logo/aluplan-logo-white.svg` (bayt bayt). Varyantta `<metadata>` dışında tek fark dolgu özniteliği; 33 path ve viewBox aynı. Canvas: koyu yüzeyde 9.359 beyaz piksel | Kayıt sırasında platform C2PA manifest kimliğini yeniden yazdı (görsel değil). `<defs><style>` yaklaşımı platform tarafından silindiği için kök özniteliği kullanıldı |

### Testlerin bulduğu ek hatalar (bu turda düzeltildi)

- 360px + %200 metin: header'da logo + menü düğmesi taşıyordu (scrollWidth 425) → logo küçülebilir (`object-fit: contain`, oran korunur), bar sarılabilir.
- 360px + %200: `ReleaseTag` parçaları sarılmıyordu (466) → `flex-wrap`. Aynısı Badge'e uygulandı.
- 360px + %200: demo Alert metni taşıyordu (368) → `overflow-wrap`; body'ye genel `overflow-wrap: break-word`.
- Dialog açılış odağı belge odakta değilken tutarsızdı → açılışta ilk odaklanabilir öğeye belirleyici odak.
- PreviewShell geçersiz localStorage değerlerini kabul ediyordu → beyaz liste.
- Önizleme iframe URL'si host sorgu parametrelerini düşürüyordu → korunuyor.

### Yapılmayan testler

Ekran okuyucu (NVDA/JAWS/VoiceOver/TalkBack), gerçek mobil cihaz, Chrome/Safari, 400% zoom / 320 CSS px tam 1.4.10 denetimi, forced-colors, 1.4.12 metin aralığı, axe/Lighthouse, Dialog Esc (elle), Node CLI çalıştırması, Next.js derlemesi. Bu paket "WCAG uyumlu" iddiası taşımaz.

### Bundle notu

`_ds_bundle.js` platform tarafından tur sonunda kaynaklardan yeniden derlenir. ZIP yenileme turunda (2026-10-22) bundle yeniden doğrulandı:
- Kaynakta export edilen 31 bileşenin tamamı bundle'da var.
- Bu turun değişiklikleri bundle'da mevcut: Tabs geri dönüşü, ReleaseTag "statü bilinmiyor", Dialog odak düzeltmesi, id-key'ler, dolgulu logo varsayılanı, Grid token varsayılanı.
- `tests/bundle-parity.html` (bundle'ın kendisiyle, kaynak modu olmadan): 10/10 geçti — Tabs ×4, ReleaseTag, key uyarısı, Dialog odak ×2, BrandLogo varsayılanı. Firefox 158.
- Bu sayfadaki tek konsol kaydı beklenen bir durum: `BrandLogo` varsayılan `src`'i sayfaya göreli olduğu için `tests/` altından 404 verdi (README → Next.js: `logoSrc` verin).
