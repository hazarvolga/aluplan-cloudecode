// Editorial copy shape for content.pages.* (demo-content.json). Presentation reads these; it never writes them.
export interface ProductsPage { title: string; intro: string; roleLegend: string; allRole: { id: string; label: string; icon: string; description: string } }
export interface ProductDetailPage {
  packagesHeading: string; packagesIntro: string; packageCardText: string;
  releaseHeading: string; releaseEmpty: string; resourcesHeading: string; supportHeading: string;
  faqHeading: string; faq: { id: string; question: string; answer: string }[]; ctaHeading: string; ctaText: string;
}
export interface ComparisonPage { titleSuffix: string; intro: string; captionSuffix: string; footnote: string; ctaHeading: string; ctaText: string }
