import React from 'react';

// Renders the approved filled variant of the supplied logo (assets/logo/aluplan-logo-white-filled.svg:
// original geometry + fill="#FFFFFF" on the root; no filter, no redraw). The original upload is kept untouched.
// The white logo is only legible on a dark surface, so the component always paints --surface-brand
// behind it unless `bare` is set by a parent that already guarantees a brand surface (SiteHeader, SiteFooter).
export function BrandLogo({ src = 'assets/logo/aluplan-logo-white-filled.svg', size = 'md', href, bare = false, alt = 'Aluplan', className }) {
  const cls = ['alu-brand-logo', 'alu-brand-logo--' + size, bare ? 'alu-brand-logo--bare' : 'alu-on-brand', className].filter(Boolean).join(' ');
  const img = <img src={src} alt={href ? alt + ' ana sayfa' : alt} decoding="async" />;
  if (href) return <a className={cls} href={href}>{img}</a>;
  return <span className={cls}>{img}</span>;
}
