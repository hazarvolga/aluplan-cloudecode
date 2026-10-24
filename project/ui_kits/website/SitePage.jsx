// Shared page frame. Every screen reads the same fixture (data/demo-content.json) through data/select-content.js.
// Editorial copy comes from content.pages.*, generic labels from data/ui-labels.tr.json (window.UI).
// Prototype runtime only: globals + in-browser Babel. Not a Next.js component (see README "Next.js").
const ALU = window.AluplanDesignSystem_84a18c;
const LOGO_SRC = '../../assets/logo/aluplan-logo-white-filled.svg';
const fmt = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, k) => (v[k] != null ? v[k] : ''));

function SitePage({ content, current, children }) {
  const { SiteHeader, SiteFooter, Alert, Container } = ALU;
  return (
    <div style={{ background: 'var(--surface-page)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <a className="alu-skip-link" href="#main">{UI.skipLink}</a>
      <SiteHeader logoSrc={LOGO_SRC} homeHref="#products" navItems={content.site.nav} currentHref={current}
        actions={content.ctas.map((c) => ({ id: c.id, label: c.label, href: c.href, external: true, variant: 'secondary' }))} />
      <main id="main">
        <Container size="xl" style={{ paddingBlock: 'var(--space-stack-md)' }}>
          <Alert tone="warning" title={UI.demoAlertTitle}>{content.$meta.notice}</Alert>
        </Container>
        {children}
      </main>
      <SiteFooter logoSrc={LOGO_SRC} homeHref="#products" columns={content.site.footer} legal={content.site.legal} />
    </div>
  );
}

function Section({ id, children, tone }) {
  return (
    <section id={id} style={{ paddingBlock: 'var(--space-stack-xl)', background: tone === 'subtle' ? 'var(--surface-subtle)' : undefined }}>
      <ALU.Container size="xl"><ALU.Stack gap="lg">{children}</ALU.Stack></ALU.Container>
    </section>
  );
}

Object.assign(window, { ALU, LOGO_SRC, fmt, SitePage, Section });
