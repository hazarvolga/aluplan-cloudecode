import React from 'react';
import { Button } from '../../actions/Button.jsx';

// Quote + trial call-to-action pair. Commercial priority is not decided yet, so `priority` defaults to "equal"
// (both buttons share one visual weight). Each target domain is shown under its button so the user knows
// they are leaving the site. This component never submits a form.
export function CtaGroup({ heading, description, actions = [], priority = 'equal', layout = 'inline', headingLevel = 2, showDestination = true }) {
  const H = 'h' + headingLevel;
  const variantFor = (a) => priority === 'equal' ? 'primary' : a.kind === priority ? 'primary' : 'secondary';
  const host = (href) => { try { return new URL(href).host; } catch (e) { return href; } };
  return (
    <section className={['alu-cta-group', layout === 'band' ? 'alu-cta-group--band' : ''].filter(Boolean).join(' ')} aria-label={heading ? undefined : 'Teklif ve deneme'}>
      {heading ? <H className="alu-heading alu-heading--h2">{heading}</H> : null}
      {description ? <p className="alu-text alu-text--secondary alu-text--prose">{description}</p> : null}
      <div className="alu-cta-group__actions">
        {actions.map((a, i) => (
          <div className="alu-cta-group__item" key={a.id || 'cta-' + i}>
            <Button variant={variantFor(a)} href={a.href} external={a.external !== false} size="lg">{a.label}</Button>
            {showDestination ? <span className="alu-cta-group__dest">{host(a.href)}</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
