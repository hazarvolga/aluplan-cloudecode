import React from 'react';
import { Icon } from '../../brand/Icon.jsx';

// Training / support entry point. Actions are optional; without them the card is informational only.
export function SupportCard({ icon = 'life-buoy', title, description, actions = [], titleLevel = 3 }) {
  const H = 'h' + titleLevel;
  return (
    <article className="alu-card alu-card--subtle">
      <span className="alu-support-card__icon"><Icon name={icon} size="lg" /></span>
      <H className="alu-heading alu-heading--h4">{title}</H>
      {description ? <p className="alu-text alu-text--body-sm alu-text--secondary">{description}</p> : null}
      {actions.length ? (
        <div className="alu-card__footer">
          {actions.map((a, i) => (
            <a key={a.id || 'action-' + i} className="alu-link alu-link--standalone" href={a.href} target={a.external ? '_blank' : undefined} rel={a.external ? 'noopener noreferrer' : undefined}>
              {a.label}<Icon name={a.external ? 'arrow-up-right' : 'arrow-right'} />
              {a.external ? <span className="alu-visually-hidden"> (yeni sekmede açılır)</span> : null}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
