'use client';
import React from 'react';
import { Icon } from '../brand/Icon.jsx';

// Native <select> on purpose: keyboard, screen-reader and mobile pickers come for free.
export function Select({ id, label, hint, error, options = [], placeholder, required = false, disabled = false, className, ...rest }) {
  const auto = React.useId();
  const selId = id || 'sel' + auto;
  const hintId = hint ? selId + '-hint' : undefined;
  const errId = error ? selId + '-err' : undefined;
  return (
    <div className={['alu-field', className].filter(Boolean).join(' ')}>
      <label className="alu-label" htmlFor={selId}>
        {label}
        {required ? <><span className="alu-label__req" aria-hidden="true">*</span><span className="alu-visually-hidden"> (zorunlu)</span></> : null}
      </label>
      {hint ? <p className="alu-hint" id={hintId}>{hint}</p> : null}
      <span className="alu-select-wrap">
        <select className="alu-select" id={selId} required={required} disabled={disabled} aria-invalid={error ? true : undefined}
          aria-describedby={[hintId, errId].filter(Boolean).join(' ') || undefined} {...rest}>
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" />
      </span>
      {error ? <p className="alu-msg alu-msg--error" id={errId}><Icon name="circle-alert" /><span><span className="alu-visually-hidden">Hata: </span>{error}</span></p> : null}
    </div>
  );
}
