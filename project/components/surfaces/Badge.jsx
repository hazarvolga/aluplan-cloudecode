import React from 'react';
import { Icon } from '../brand/Icon.jsx';

// Status meaning must never rely on color alone: success/warning/danger/info get an icon by default, demo gets a dashed outline + text.
const DEFAULT_ICON = { success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert', info: 'info', demo: 'circle-help' };

export function Badge({ tone = 'neutral', icon, children, className, ...rest }) {
  const glyph = icon === null ? null : icon || DEFAULT_ICON[tone];
  return (
    <span className={['alu-badge', tone !== 'neutral' ? 'alu-badge--' + tone : '', className].filter(Boolean).join(' ')} {...rest}>
      {glyph ? <Icon name={glyph} /> : null}
      <span>{children}</span>
    </span>
  );
}
