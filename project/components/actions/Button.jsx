'use client';
import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Button({ variant = 'primary', size = 'md', href, external = false, loading = false, loadingLabel = 'Yükleniyor', disabled = false, fullWidth = false, iconStart, iconEnd, type = 'button', children, className, onClick, ...rest }) {
  const cls = ['alu-btn', 'alu-btn--' + variant, size !== 'md' ? 'alu-btn--' + size : '', fullWidth ? 'alu-btn--full' : '', className].filter(Boolean).join(' ');
  const inactive = disabled || loading;
  const content = (
    <>
      {loading ? <Icon name="loader-circle" className="alu-spinner" /> : iconStart ? <Icon name={iconStart} /> : null}
      <span className="alu-btn__label">{children}</span>
      {loading ? <span className="alu-visually-hidden">{loadingLabel}</span> : null}
      {!loading && (iconEnd || (href && external)) ? <Icon name={iconEnd || 'arrow-up-right'} /> : null}
      {href && external ? <span className="alu-visually-hidden"> (yeni sekmede açılır)</span> : null}
    </>
  );
  if (href) {
    // Disabled links are rendered without href so they are not focusable or followable.
    return (
      <a className={cls} href={inactive ? undefined : href} aria-disabled={inactive || undefined} aria-busy={loading || undefined}
        target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} onClick={inactive ? undefined : onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} aria-disabled={loading || undefined} aria-busy={loading || undefined}
      onClick={inactive ? (e) => e.preventDefault() : onClick} {...rest}>
      {content}
    </button>
  );
}
