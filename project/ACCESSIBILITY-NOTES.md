# Accessibility notes

Hedef: WCAG 2.2 AA. Bu belge üç kategoriyi ayırır. "Ölçülmeyen kontrol geçti" yazılmaz.

## 1. Ölçülen (otomatik, tekrarlanabilir)

- **Token kontrastı:** `scripts/build-tokens.mjs`, `tokens.json` içindeki 188 çifti (180'i eşikli, 8'i bilgi amaçlı) 4 tema × mod için WCAG göreli parlaklık formülüyle hesaplar. Sonuç: **0 eşik altı**. En düşük metin oranı 4.80 (≥ 4.5), en düşük UI/odak oranı 3.66 (≥ 3). Tablo: `tokens/build/CONTRAST-REPORT.md`.
- Kapsam sınırı: bu ölçüm token çiftleridir; render edilmiş her kombinasyonu (ör. görsel üzerindeki metin, tarayıcı autofill rengi) kanıtlamaz.
- **Logo:** dolgulu varyant (`aluplan-logo-white-filled.svg`) `--surface-brand` üzerinde canvas'a çizildi: 9.359 beyaz piksel (orijinal dosya: 0). Beyaz / Ink 950 oranı 19.00. Orijinal dosya hâlâ siyah render eder ve koyu yüzeyde kullanılmaz.
- **Build lint:** bileşen CSS'inde ham renk/uzunluk, primitive ve tanımsız değişken yok (otomatik).
- **Tarayıcı test düzeneği** (`tests/index.html`, `tests/ui-kit.html`; Firefox 158, 2026-10-22, bileşenler güncel kaynaktan derlendi):
  - Tabs klavye: ←/→ sarmalı, pasif sekmeyi atlama, Home/End, tümü pasif, boş liste, controlled/uncontrolled geri dönüş — 10 test geçti.
  - Dialog: açılışta odak içeri taşınır, kapat düğmesi odağı açan öğeye döndürür — geçti. **Esc** sentetik olay ile tetiklenemez → elle doğrulanmalı (yapılmadı).
  - React key uyarısı: tekrarlanan href/label ile 0 uyarı.
  - Tema değişmezliği: `#product` ve `#compare` için metin, link hedefleri, başlık seviyeleri ve landmark sayısı 4 tema × modda birebir aynı.
  - Reflow: Ürünler / Ürün ayrıntısı / Karşılaştırma × 360/768px × %100/%200 metin × aluplan/field. Sonuçlar `CHANGELOG.md` içinde. Bu, sayfa düzeyinde yatay taşma ölçümüdür; 1.4.10'un tam denetimi (320 CSS px @ 400% zoom) değildir. Karşılaştırma tablosu bilinçli olarak kendi kaydırma alanında taşar.

## 2. Kodda uygulanmış, elle incelenmiş (yardımcı teknolojiyle test edilmedi)

- Klavye: tüm kontroller native öğe; Tabs ←/→/Home/End; Dialog Esc + odak hapsi (native); mobil menü Esc + odak geri dönüşü; RoleSelector native radio ok tuşları.
- Odak: `:focus-visible` 2px (field 3px) outline + offset; marka yüzeyinde ayrı renk; kart ve rol seçeneklerinde `:has()` ile kapsayıcıya taşınır.
- Etiketler: her form kontrolünde görünür `<label>`; IconButton `aria-label` zorunlu; ipucu/hata `aria-describedby`; `aria-invalid`; zorunlu alan * + gizli "(zorunlu)".
- Hata açıklamaları: sorunu ve düzeltmeyi söyleyen metin + ikon + gizli "Hata:" öneki.
- Renk dışı işaretler: durum rozetleri ve tablo hücreleri ikon + metin; seçili sekme kalın alt çizgi + kalın yazı; bağlantılar alt çizgili; hata kalın kenar.
- Dokunma alanı: `--target-min` 44px (aluplan) / 40px (field); en küçük kontrol 32px. Her ikisi de 2.5.8 (24×24) üzerinde; field 2.5.5 AAA (44) altında.
- Reduced motion: tüm süre token'ları 0ms; spinner durur.
- Harici bağlantılar: ikon + "(yeni sekmede açılır)".
- Tablo: caption, `th scope="col|row|rowgroup"`, odaklanabilir etiketli kaydırma alanı.
- Dil: `lang="tr"`; Türkçe karakterler için latin-ext font alt kümeleri yüklü.
- Taşma: katalogdaki "Taşma testleri" bölümü ve önizleme çubuğunun 360px genişlik / %200 metin seçenekleri bu kontrolleri **göstermek** içindir; sonuçları bu sürümde sistematik olarak kaydedilmedi.

## 3. Test edilmedi

- Ekran okuyucular (NVDA, JAWS, VoiceOver, TalkBack).
- Gerçek mobil cihazlar, iOS/Android yakınlaştırma.
- 400% zoom / 320 CSS px reflow (1.4.10) sistematik denetimi.
- Windows yüksek kontrast / `forced-colors` modu.
- Metin aralığı override'ı (1.4.12).
- Otomatik denetim araçları (axe, Lighthouse) — çalıştırılmadı.
- `::backdrop` içinde custom property kalıtımı (eski tarayıcılarda yedek değer kullanılır).
- Dialog'un eski Safari sürümlerinde davranışı.

## Bilinen riskler

- Field preset'inde `--target-min` 40px; dokunma ağırlıklı kullanımda 44px önerilir.
- Paket tablosu dar ekranda yatay kaydırma gerektirir (1.4.10 tablolar için istisnadır), ama kullanılabilirlik testi yapılmadı.
- Akordeon içeriği sayfa içi aramada görünmez (`hidden`).
