import React from 'react';
import { Icon } from '../../brand/Icon.jsx';

// PDF / video resource. If `href` is missing the card renders an explicit "not yet available" state
// instead of a fake link. File size, duration and language are shown only when supplied.
export function ResourceCard({ kind = 'pdf', title, description, href, fileSize, duration, language, unavailableText = 'Dosya henüz eklenmedi', titleLevel = 3 }) {
  const H = 'h' + titleLevel;
  const kindLabel = kind === 'video' ? 'Video' : 'PDF';
  const action = kind === 'video' ? 'Videoyu izle' : 'PDF’i aç';
  const meta = [fileSize && ['Boyut', fileSize], duration && ['Süre', duration], language && ['Dil', language]].filter(Boolean);
  return (
    <article className={['alu-card', 'alu-card--outlined', href ? 'alu-card--interactive' : 'alu-resource-card--unavailable'].join(' ')}>
      <span className="alu-resource-card__kind"><Icon name={kind === 'video' ? 'circle-play' : 'file-text'} />{kindLabel}</span>
      <H className="alu-heading alu-heading--h4">
        {href ? <a className="alu-card__link" href={href} target="_blank" rel="noopener noreferrer">{title}<span className="alu-visually-hidden">, {action} (yeni sekmede açılır)</span></a> : title}
      </H>
      {description ? <p className="alu-text alu-text--body-sm alu-text--secondary">{description}</p> : null}
      {meta.length ? <dl className="alu-resource-card__meta">{meta.map(([k, v]) => <div key={k}><dt>{k}:</dt><dd>{v}</dd></div>)}</dl> : null}
      <div className="alu-card__footer">
        {href
          ? <span className="alu-link alu-link--standalone" aria-hidden="true">{action}<Icon name="arrow-up-right" /></span>
          : <span className="alu-resource-card__unavailable"><Icon name="circle-help" size="sm" />{unavailableText}</span>}
      </div>
    </article>
  );
}
