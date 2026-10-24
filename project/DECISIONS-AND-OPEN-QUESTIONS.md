# Decisions and open questions

## Kararlar (gerekçeli)

1. **Tek kaynak `tokens.json`, sıfır bağımlılıklı build.** Style Dictionary gibi araçlar yerine ~200 satırlık Node betiği: tek geliştirici için düşük bakım; doğrulama (kırık referans, döngü, kontrast, lint) aynı yerde.
2. **CSS sınıfları + React, CSS-in-JS yok.** Next.js'te ek bağımlılık gerektirmez; pseudo-state ve media query'ler CSS'te kalır.
3. **Tema ve mod ayrı öznitelikler.** `data-theme` × `data-mode`; dört kombinasyon aynı anahtar kümesiyle zorunlu.
4. **Taslak renklerde yapılan değişiklikler:**
   - Teal #2DD4BF yalnız koyu modda eylem/vurgu. Açık zeminde 1.86:1 olduğu için açık modda #0F766E (beyaz metinle 5.47:1).
   - Blueprint #2563EB açık modda bağlantı ve odak (beyaz üzerinde 5.17:1). Koyu zeminde 3.68:1 olduğundan koyu modda #60A5FA (Ink 900 üzerinde 6.68:1).
   - Silver #566073 ikincil metin (beyaz 6.33, #F5F7FA 5.90, #E6EAF0 5.24). #E6EAF0 metin için değil, `surface-muted` / `border-subtle` için.
   - Eksik tonlar eklendi (Ink 850–600, Silver 200–700, Teal 50/400/800/900/950, Blueprint 50/300/700/800) çünkü hover/active, kenar ve durum yüzeyleri için iki-üç değer yetmiyordu.
   - Kontrol kenarı Silver 500 (#6B7588, beyaz üzerinde 4.64) — 3:1 kontrol sınırı için; Silver 200/300 yalnız dekoratif çizgi.
   - Koyu modda hover tonu **açılır** (Teal 300 → 400), açık modda koyulur.
   - Durum renkleri (kırmızı/amber/yeşil) brief'te yoktu; nötr, düşük doygunluklu tonlar seçildi ve ölçüldü.
5. **İkinci preset `field`:** taş/yosun/pas paleti, Source Serif 4 + Public Sans, kompakt yoğunluk, pill/16px radius, belirgin gölge, 1.5 ikon stroke, 3px odak. Amaç tema mekanizmasını sınamak; marka önerisi değil.
6. **Mono etiketlerde büyük harf dönüşümü yok** — Türkçe i/İ dönüşümü `lang`'a bağlı ve hataya açık.
7. **CTA önceliği eşit (`priority="equal"`).** Ticari öncelik belirlenince tek prop ile değişir.
8. **Paket tablosu mobilde kart listesine dönüşmez**, yatay kaydırma + yapışkan ilk sütun. Tablo semantiği korunur, içerik gizlenmez.
9. **"Bilgi yok" ayrı durum.** Eksik hücre asla "Dahil değil" gösterilmez.
10. **Kaynak dosyası yoksa bağlantı yok.** ResourceCard açık "henüz eklenmedi" durumu gösterir.
11. **Demo içerik ürün adlarında gerçek ALLPLAN adını kullanır**, paket adları kurgusaldır ("Paket A (demo)") çünkü gerçek paket kapsamı doğrulanmadı.
12. **Marka yüzeyi her modda koyu.** Yalnız beyaz logo olduğu için header/footer açık modda da Ink 950.
13. **Startingpoint yerine katalog + UI kit.** Bileşenler ayrıca kart olarak Design System sekmesinde.
14. **Dolgulu logo varyantı (kullanıcı onayı, 2026-10-22).** Orijinal korunur; `aluplan-logo-white-filled.svg` yalnız kök `fill="#FFFFFF"` ekler. Kök özniteliği seçildi çünkü `<defs>` içine eklenen `<style>` kayıt sırasında platform tarafından siliniyordu (ölçüldü). Koyu yüzeyde render: canvas örneklemesinde 9.359 beyaz piksel (önceki: 0).
15. **Responsive kurallar tek şablonda.** `components/responsive.template.css` + build; ikinci kırılım kaynağı yok. `gridColumns` kaldırıldı (tüketici yoktu).
16. **Kapsam = paket × sürüm × pazar × yetenek.** Kayıt bazında kaynak ve doğrulama durumu. Demo sözleşmesi; üretim modeli onayı değildir.
17. **ReleaseTag varsayılanı "bilinmiyor".** Eksik veri asla "güncel" göstermez.
18. **Liste anahtarları içerik id'sinden.** İndis yalnız id olmayan içerik için yedek; kalıcı kimlik çözümü değildir. Fixture'daki tüm listelere id eklendi.

## Açık sorular

1. **Onaylı logo:** dolgulu varyant geçici çözümdür. Aluplan'ın resmî beyaz logo dosyası (ve varsa koyu zemin için sürümü) gelince değiştirilmeli.
2. Açık zemin için siyah/koyu logo var mı?
3. CTA ticari önceliği: teklif mi, deneme mi, eşit mi?
4. Gerçek ürün listesi, paket adları ve kapsam matrisi hangi onaylı kaynaktan gelecek?
5. Sürüm adlandırma (ör. "ALLPLAN 2026") ve hangi sürümün "güncel" sayılacağı kim tarafından onaylanır?
6. Rol seçiminde "Altyapı" ayrı rol olmalı mı? (Brief kitlede altyapıyı sayıyor, rol seçiminde üç rol istiyor.)
7. Fontlar onaylı mı? Self-host (mevcut woff2) mi, `next/font` mu? (OFL metinleri eklendi.)
8. Lucide ikon seti onaylı mı, yoksa Aluplan'ın kendi seti var mı?
9. Navigasyon etiketleri ("Ürünler, Çözümler, Eğitim, Destek, İletişim") ve footer yasal metni yer tutucudur.
10. Eğitim/destek kanalları (e-posta, telefon, portal) ve kaynak dosyaları (broşür, video) sağlanacak mı?
11. Field preset'inin dokunma hedefi 40px; korunmalı mı?
12. Gerçek pazar listesi (yalnız Türkiye mi?) ve kapsam kayıtlarının kaynağı/onaylayıcısı kim olacak?
