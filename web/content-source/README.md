# Kaynak içerik (aluplan-2026)

Bu klasör `hazarvolga/aluplan-2026` reposunun `content/` ve `data/` dizinlerinin birebir kopyasıdır (commit `a958c9d`). Kaynak repo değiştirilmedi.

- `content/*.txt`: aluplan.com.tr sayfa metinleri ve yapısal çıktılar (ham içerik).
- `content/addons/*.tsx`: kaynak sitenin add-on bileşenleri. Bu sitenin derlemesine dahil değildir (`tsconfig` hariç tutar).
- `data/PackageComparisonData.ts`: paket karşılaştırma verisi; `web/scripts/import-site-content.mts` bunu `project/data/site-content.json`'a dönüştürür.
- `data/solutionsMenu.ts`, `data/searchIndex.ts`, `data/auto-search-index.json`: kaynak sitenin menü ve arama verisi; bu sitede henüz kullanılmıyor.

Bu dosyalar ham kaynaktır; onaylı içerik değildir.
