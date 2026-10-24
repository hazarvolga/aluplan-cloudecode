import React from 'react';
import { Badge } from '../../surfaces/Badge.jsx';
import { ReleaseTag } from './ReleaseTag.jsx';

// Product summary card. Product ≠ package ≠ release: vendor + name identify the product,
// `release` is an optional annual tag, packages are linked from the detail page, not listed here.
export function ProductCard({ name, vendor, summary, href, roles = [], release, isDemo = false, titleLevel = 3, linkLabel = 'Ürün ayrıntısı' }) {
  const H = 'h' + titleLevel;
  return (
    <article className={['alu-card', href ? 'alu-card--interactive' : ''].filter(Boolean).join(' ')}>
      <div className="alu-product-card__meta">
        {vendor ? <span className="alu-product-card__vendor">{vendor}</span> : null}
        {isDemo ? <Badge tone="demo">Demo içerik</Badge> : null}
      </div>
      <H className="alu-heading alu-heading--h3">
        {href ? <a className="alu-card__link" href={href}>{name}<span className="alu-visually-hidden">, {linkLabel}</span></a> : name}
      </H>
      {summary ? <p className="alu-text alu-text--body-sm alu-text--secondary">{summary}</p> : null}
      {roles.length || release ? (
        <div className="alu-card__footer">
          {release ? <ReleaseTag version={release.version} status={release.status} /> : null}
          {roles.map((r) => <Badge key={r} icon={null}>{r}</Badge>)}
        </div>
      ) : null}
    </article>
  );
}
