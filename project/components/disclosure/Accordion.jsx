'use client';
import React from 'react';
import { Icon } from '../brand/Icon.jsx';

// Disclosure buttons inside headings (WAI-ARIA accordion). Collapsed panels use `hidden`, so
// in-page find does not reach them; keep critical information (prices, scope limits) outside accordions.
export function Accordion({ items = [], headingLevel = 3, allowMultiple = true, defaultOpen = [], className }) {
  const auto = React.useId();
  const [open, setOpen] = React.useState(defaultOpen);
  const H = 'h' + headingLevel;
  const toggle = (id) => setOpen((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return (
    <div className={['alu-accordion', className].filter(Boolean).join(' ')}>
      {items.map((it) => {
        const isOpen = open.includes(it.id);
        return (
          <div className="alu-accordion__item" key={it.id}>
            <H className="alu-accordion__heading">
              <button type="button" className="alu-accordion__trigger" id={auto + '-h-' + it.id} aria-expanded={isOpen} aria-controls={auto + '-p-' + it.id} onClick={() => toggle(it.id)}>
                <span>{it.title}</span>
                <Icon name="chevron-down" />
              </button>
            </H>
            <div className="alu-accordion__panel" id={auto + '-p-' + it.id} role="region" aria-labelledby={auto + '-h-' + it.id} hidden={!isOpen}>
              {it.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
