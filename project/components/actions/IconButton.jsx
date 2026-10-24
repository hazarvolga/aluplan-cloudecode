import React from 'react';
import { Icon } from '../brand/Icon.jsx';

// `label` is required: it is the accessible name (aria-label) and the tooltip text.
export function IconButton({ icon, label, variant = 'ghost', size = 'md', disabled = false, type = 'button', className, ...rest }) {
  const cls = ['alu-icon-btn', variant !== 'ghost' ? 'alu-icon-btn--' + variant : '', size === 'sm' ? 'alu-icon-btn--sm' : '', className].filter(Boolean).join(' ');
  return (
    <button className={cls} type={type} aria-label={label} title={label} disabled={disabled} {...rest}>
      <Icon name={icon} />
    </button>
  );
}
