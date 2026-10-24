import React from 'react';

// When `href` is given the title becomes the single link and a pseudo-element stretches its hit area over the card.
// Do not nest other interactive elements inside an interactive card except in `footer` (they sit above the overlay).
export function Card({ as = 'article', variant = 'default', title, titleLevel = 3, href, eyebrow, footer, children, className, ...rest }) {
  const Tag = as;
  const H = 'h' + titleLevel;
  const cls = ['alu-card', variant !== 'default' ? 'alu-card--' + variant : '', href ? 'alu-card--interactive' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {eyebrow ? <div>{eyebrow}</div> : null}
      {title ? (
        <H className="alu-heading alu-heading--h3">
          {href ? <a className="alu-card__link" href={href}>{title}</a> : title}
        </H>
      ) : null}
      {children}
      {footer ? <div className="alu-card__footer" style={{ position: 'relative', zIndex: 1 }}>{footer}</div> : null}
    </Tag>
  );
}
