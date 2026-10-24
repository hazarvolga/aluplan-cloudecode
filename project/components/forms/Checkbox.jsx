'use client';
import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Checkbox({ id, label, description, error, disabled = false, className, ...rest }) {
  const auto = React.useId();
  const cbId = id || 'cb' + auto;
  const descId = description ? cbId + '-desc' : undefined;
  const errId = error ? cbId + '-err' : undefined;
  return (
    <label className={['alu-checkbox', disabled ? 'alu-checkbox--disabled' : '', className].filter(Boolean).join(' ')} htmlFor={cbId}>
      <span className="alu-checkbox__control">
        <input className="alu-checkbox__input" type="checkbox" id={cbId} disabled={disabled} aria-invalid={error ? true : undefined}
          aria-describedby={[descId, errId].filter(Boolean).join(' ') || undefined} {...rest} />
        <Icon name="check" className="alu-checkbox__mark" />
      </span>
      <span className="alu-checkbox__text">
        <span className="alu-checkbox__label">{label}</span>
        {description ? <span className="alu-hint" id={descId}>{description}</span> : null}
      </span>
      {error ? <span className="alu-msg alu-msg--error" id={errId}><Icon name="circle-alert" /><span><span className="alu-visually-hidden">Hata: </span>{error}</span></span> : null}
    </label>
  );
}
