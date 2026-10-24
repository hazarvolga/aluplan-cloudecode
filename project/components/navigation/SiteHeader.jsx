'use client';
import React from 'react';
import { BrandLogo } from '../brand/BrandLogo.jsx';
import { IconButton } from '../actions/IconButton.jsx';
import { Button } from '../actions/Button.jsx';

// Below the lg breakpoint (64rem) the nav and actions move into a disclosure menu; nothing is dropped.
// Esc closes the menu and returns focus to the toggle.
export function SiteHeader({ navItems = [], currentHref, actions = [], logoSrc, homeHref = '/', label = 'Ana menü' }) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const menuId = React.useId() + '-menu';
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); const b = toggleRef.current && toggleRef.current.querySelector('button'); b && b.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const links = (
    <ul className="alu-site-header__list">
      {navItems.map((n, i) => (
        <li key={n.id || 'nav-' + i}><a className="alu-nav-link" href={n.href} aria-current={n.href === currentHref ? 'page' : undefined}>{n.label}</a></li>
      ))}
    </ul>
  );
  const btns = (full) => actions.map((a, i) => (
    <Button key={a.id || 'action-' + i} variant={a.variant || 'secondary'} size="sm" href={a.href} external={a.external} fullWidth={full}>{a.label}</Button>
  ));
  return (
    <header className="alu-site-header alu-on-brand">
      <div className="alu-container alu-container--xl">
        <div className="alu-site-header__bar">
          <BrandLogo src={logoSrc} href={homeHref} bare size="sm" className="alu-site-header__brand" />
          <nav className="alu-site-header__nav" aria-label={label}>{links}</nav>
          {actions.length ? <div className="alu-site-header__actions">{btns(false)}</div> : null}
          <span className="alu-site-header__toggle" ref={toggleRef}>
            <IconButton icon={open ? 'x' : 'menu'} label={open ? 'Menüyü kapat' : 'Menüyü aç'} variant="on-brand" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(!open)} />
          </span>
        </div>
        <div className="alu-site-header__menu" id={menuId} hidden={!open}>
          <nav aria-label={label + ' (mobil)'}>{links}</nav>
          {actions.length ? <div className="alu-site-header__menu-actions">{btns(true)}</div> : null}
        </div>
      </div>
    </header>
  );
}
