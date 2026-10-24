import { SiteHeader } from '../../project/components/navigation/SiteHeader';
import { SiteFooter } from '../../project/components/navigation/SiteFooter';
import { Alert } from '../../project/components/feedback/Alert';
import { Container } from '../../project/components/layout/Container';
import { content, routeFor, UI } from '../lib/content';

// Server component. Logo path is public-relative; the approved filled variant is copied to public/ by sync-assets.
const LOGO_SRC = '/assets/logo/aluplan-logo-white-filled.svg';

export function SiteShell({ current, children }: { current: string; children: React.ReactNode }) {
  const navItems = content.site.nav.map((n) => ({ ...n, href: routeFor(n.href) }));
  const actions = content.ctas.map((c) => ({ id: c.id, label: c.label, href: c.href, external: true, variant: 'secondary' as const }));
  const footer = content.site.footer.map((col) => ({
    ...col,
    links: col.links.map((l) => ({ ...l, href: routeFor(l.href) })),
  }));
  return (
    <>
      <a className="alu-skip-link" href="#main">{UI.skipLink}</a>
      <SiteHeader logoSrc={LOGO_SRC} homeHref="/urunler" navItems={navItems} currentHref={current} actions={actions} />
      <main id="main">
        <div style={{ paddingBlock: 'var(--space-stack-md)' }}>
          <Container size="xl">
            <Alert tone="warning" title={UI.demoAlertTitle}>{content.$meta.notice}</Alert>
          </Container>
        </div>
        {children}
      </main>
      <SiteFooter logoSrc={LOGO_SRC} homeHref="/urunler" columns={footer} legal={content.site.legal} />
    </>
  );
}

export function Section({ id, children, tone }: { id?: string; children: React.ReactNode; tone?: 'subtle' }) {
  return (
    <section id={id} style={{ paddingBlock: 'var(--space-stack-xl)', background: tone === 'subtle' ? 'var(--surface-subtle)' : undefined }}>
      <Container size="xl"><div className="alu-stack alu-stack--gap-lg">{children}</div></Container>
    </section>
  );
}
