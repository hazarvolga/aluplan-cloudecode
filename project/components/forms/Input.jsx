'use client';
import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Input({ id, label, hint, error, success, required = false, disabled = false, type = 'text', className, ...rest }) {
  const auto = React.useId();
  const inputId = id || 'in' + auto;
  const hintId = hint ? inputId + '-hint' : undefined;
  const msgId = error || success ? inputId + '-msg' : undefined;
  return (
    <div className={['alu-field', className].filter(Boolean).join(' ')}>
      <label className="alu-label" htmlFor={inputId}>
        {label}
        {required ? <><span className="alu-label__req" aria-hidden="true">*</span><span className="alu-visually-hidden"> (zorunlu)</span></> : null}
      </label>
      {hint ? <p className="alu-hint" id={hintId}>{hint}</p> : null}
      <input className="alu-input" id={inputId} type={type} required={required} disabled={disabled}
        aria-invalid={error ? true : undefined} data-valid={success && !error ? true : undefined}
        aria-describedby={[hintId, msgId].filter(Boolean).join(' ') || undefined} {...rest} />
      {error ? <p className="alu-msg alu-msg--error" id={msgId}><Icon name="circle-alert" /><span><span className="alu-visually-hidden">Hata: </span>{error}</span></p> : null}
      {!error && success ? <p className="alu-msg alu-msg--success" id={msgId}><Icon name="circle-check" /><span>{success}</span></p> : null}
    </div>
  );
}
