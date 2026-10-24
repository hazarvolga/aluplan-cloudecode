'use client';
import React from 'react';

// WAI-ARIA tabs, automatic activation. Arrow keys move + select among ENABLED tabs, Home/End jump.
// Active-tab resolution (same rule for controlled and uncontrolled):
//   requested id (selectedId ?? internal state ?? defaultTabId) if it exists and is enabled,
//   otherwise the first enabled tab, otherwise none.
// Empty list renders nothing. All tabs disabled: tablist renders, no tab is focusable, no panel is shown.
// Controlled mode never calls onChange on its own; it only reports user actions.
export function Tabs({ items = [], defaultTabId, selectedId, onChange, label, className }) {
  const auto = React.useId();
  const [inner, setInner] = React.useState(defaultTabId);
  const refs = React.useRef({});
  const enabled = items.filter((i) => !i.disabled);
  const requested = selectedId !== undefined ? selectedId : inner;
  const active = enabled.some((i) => i.id === requested) ? requested : (enabled[0] ? enabled[0].id : null);
  if (!items.length) return null;
  const select = (id) => { if (selectedId === undefined) setInner(id); if (onChange) onChange(id); };
  const onKey = (e) => {
    if (!enabled.length) return;
    const idx = Math.max(0, enabled.findIndex((i) => i.id === active));
    let next = null;
    if (e.key === 'ArrowRight') next = enabled[(idx + 1) % enabled.length];
    if (e.key === 'ArrowLeft') next = enabled[(idx - 1 + enabled.length) % enabled.length];
    if (e.key === 'Home') next = enabled[0];
    if (e.key === 'End') next = enabled[enabled.length - 1];
    if (next) { e.preventDefault(); select(next.id); if (refs.current[next.id]) refs.current[next.id].focus(); }
  };
  return (
    <div className={['alu-tabs', className].filter(Boolean).join(' ')}>
      <div className="alu-tabs__list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {items.map((it) => (
          <button key={it.id} ref={(el) => (refs.current[it.id] = el)} type="button" role="tab" className="alu-tab"
            id={auto + '-tab-' + it.id} aria-controls={auto + '-panel-' + it.id} aria-selected={it.id === active}
            tabIndex={it.id === active ? 0 : -1} disabled={it.disabled} onClick={() => select(it.id)}>
            {it.label}
          </button>
        ))}
      </div>
      {items.map((it) => (
        <div key={it.id} role="tabpanel" className="alu-tabs__panel" id={auto + '-panel-' + it.id} aria-labelledby={auto + '-tab-' + it.id} tabIndex={0} hidden={it.id !== active}>
          {it.content}
        </div>
      ))}
    </div>
  );
}
