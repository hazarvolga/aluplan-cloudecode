import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Link({ href, variant = 'inline', external = false, current = false, children, className, ...rest }) {
  const cls = ['alu-link', variant === 'standalone' ? 'alu-link--standalone' : '', className].filter(Boolean).join(' ');
  return (
    <a className={cls} href={href} aria-current={current ? 'page' : undefined}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...rest}>
      {children}
      {external ? <Icon name="arrow-up-right" /> : variant === 'standalone' ? <Icon name="arrow-right" /> : null}
      {external ? <span className="alu-visually-hidden"> (yeni sekmede açılır)</span> : null}
    </a>
  );
}
