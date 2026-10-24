import React from 'react';
import { Icon } from '../brand/Icon.jsx';

// Last item is the current page (aria-current, not a link). Wraps on narrow screens instead of truncating.
export function Breadcrumb({ items = [], label = 'Sayfa konumu', className }) {
  return (
    <nav className={['alu-breadcrumb', className].filter(Boolean).join(' ')} aria-label={label}>
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.id || 'crumb-' + i}>
              {last ? <span aria-current="page">{it.label}</span> : <a href={it.href}>{it.label}</a>}
              {!last ? <Icon name="chevron-right" size="sm" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
