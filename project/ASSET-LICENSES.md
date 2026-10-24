# Asset licenses

| Varlık | Konum | Kaynak | Lisans / hak | Not |
|---|---|---|---|---|
| Aluplan logosu (orijinal) | `uploads/aluplan-logo-white-.svg`, `assets/logo/aluplan-logo-white.svg` | Kullanıcı yüklemesi | Aluplan'a ait; kullanım hakları Aluplan tarafından belirlenir | İki dosya bayt bayt aynı, değiştirilmedi. `.cls-1` için dolgu tanımı yok → tarayıcıda siyah render ediliyor. |
| Aluplan logosu (dolgulu varyant) | `assets/logo/aluplan-logo-white-filled.svg` | Orijinalden türetildi (kullanıcı onayı, 2026-10-22) | Aluplan'a ait | Tek fark kök `<svg>` üzerindeki `fill="#FFFFFF"`. 33 path, viewBox, oran, transform, stroke, şeffaf arka plan aynı. CSS filter / yeniden çizim yok. Not: kayıt sırasında platform, `<metadata>` içindeki C2PA köken manifestinin bir kimliğini yeniden yazdı (görsel olmayan meta veri); `<metadata>` dışında tek fark dolgu özniteliğidir (doğrulandı). Header, footer ve `BrandLogo` bunu kullanır. Siyah/koyu logo sağlanmadı. |
| Manrope (400–800 variable) | `assets/fonts/Manrope-*.woff2` | Google Fonts (fonts.gstatic.com), 2026-10-21 indirildi | SIL OFL 1.1 — `assets/fonts/licenses/Manrope-OFL.txt` (© 2018 The Manrope Project Authors) | latin + latin-ext |
| IBM Plex Sans (400, 500, 600) | `assets/fonts/IBMPlexSans-*.woff2` | Google Fonts, 2026-10-21 | SIL OFL 1.1 — `assets/fonts/licenses/IBMPlexSans-OFL.txt` (© 2017 IBM Corp., Reserved Font Name "Plex") | latin + latin-ext |
| IBM Plex Mono (400, 500) | `assets/fonts/IBMPlexMono-*.woff2` | Google Fonts, 2026-10-21 | SIL OFL 1.1 — `assets/fonts/licenses/IBMPlexMono-OFL.txt` (© 2017 IBM Corp., RFN "Plex") | latin + latin-ext |
| Source Serif 4 (600–700) | `assets/fonts/SourceSerif4-*.woff2` | Google Fonts, 2026-10-21 | SIL OFL 1.1 — `assets/fonts/licenses/SourceSerif4-OFL.txt` (© 2014 The Source Serif 4 Project Authors) | Yalnız `field` test preset'i |
| Public Sans (400–700) | `assets/fonts/PublicSans-*.woff2` | Google Fonts, 2026-10-21 | SIL OFL 1.1 — `assets/fonts/licenses/PublicSans-OFL.txt` (© 2015 The Public Sans Project Authors) | Yalnız `field` test preset'i |
| Lucide ikonları (31 adet) | `assets/icons/lucide/`, `components/brand/Icon.jsx` | `lucide-static@0.454.0` (unpkg) | ISC (`assets/icons/lucide/LICENSE`) | Geometri değiştirilmedi |
| React 18.3.1, ReactDOM, Babel standalone 7.29.0 | CDN (yalnız önizleme sayfaları) | unpkg | MIT | Üretimde Next.js derlemesi kullanılır; paketlenmez |

OFL metinleri `https://raw.githubusercontent.com/google/fonts/main/ofl/<aile>/OFL.txt` adresinden 2026-10-22'de alındı ve değiştirilmeden eklendi. Font sürüm numaraları Google Fonts CSS API'si tarafından belirlendi ve ayrıca kaydedilmedi (eksik: woff2 başına sürüm kaydı). "Plex" ayrılmış font adıdır; değiştirilmiş türev font dağıtılırsa ad kullanılamaz.

ALLPLAN ve Nemetschek adları yalnız metin olarak, ürün/üretici kimliği için kullanılır. Bu sistemde ALLPLAN/Nemetschek logosu, rengi veya görsel kimliği yoktur.
