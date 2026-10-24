import React from 'react';
import { BrandLogo } from '../brand/BrandLogo.jsx';
import { Icon } from '../brand/Icon.jsx';

// Columns come from content. `legal` is plain text supplied by content owners; nothing is generated here.
export function SiteFooter({ columns = [], logoSrc, homeHref = '/', legal, label = 'Alt bilgi bağlantıları' }) {
  return (
    <footer className="alu-site-footer alu-on-brand">
      <div className="alu-container alu-container--xl">
        <nav aria-label={label}>
          <div className="alu-site-footer__grid">
            {columns.map((c, ci) => (
              <div key={c.id || 'col-' + ci}>
                <h2 className="alu-site-footer__heading">{c.heading}</h2>
                <ul className="alu-site-footer__list">
                  {c.links.map((l, li) => (
                    <li key={l.id || 'link-' + li}>
                      <a href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}>
                        {l.label}{l.external ? <><Icon name="arrow-up-right" size="sm" /><span className="alu-visually-hidden"> (yeni sekmede açılır)</span></> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        <div className="alu-site-footer__bottom">
          <BrandLogo src={logoSrc} href={homeHref} bare size="sm" />
          {legal ? <p>{legal}</p> : null}
        </div>
      </div>
    </footer>
  );
}
