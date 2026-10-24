'use client';
import React from 'react';
import { Icon } from '../../brand/Icon.jsx';

// Single-choice role filter (native radio group in a fieldset). Arrow keys move between options natively.
// Roles come from content; the component does not hard-code Mimar/Mühendis/Prekast.
export function RoleSelector({ legend, roles = [], value, defaultValue, onChange, name }) {
  const auto = React.useId();
  const [inner, setInner] = React.useState(defaultValue);
  const current = value !== undefined ? value : inner;
  return (
    <fieldset className="alu-role-selector">
      <legend className="alu-role-selector__legend">{legend}</legend>
      <div className="alu-role-selector__options">
        {roles.map((r) => (
          <label key={r.id} className="alu-role">
            <input className="alu-role__input" type="radio" name={name || 'role' + auto} value={r.id} checked={current === r.id}
              onChange={() => { if (value === undefined) setInner(r.id); onChange && onChange(r.id); }} />
            {r.icon ? <Icon name={r.icon} size="lg" className="alu-role__icon" /> : <span />}
            <span className="alu-role__text">
              <span className="alu-role__title">{r.label}</span>
              {r.description ? <span className="alu-role__desc">{r.description}</span> : null}
            </span>
            <span className="alu-role__check" aria-hidden="true"><Icon name="check" /></span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
