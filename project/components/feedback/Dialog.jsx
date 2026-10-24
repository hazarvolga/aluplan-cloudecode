'use client';
import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';

// Built on native <dialog>.showModal(): focus containment, Esc to close, inert background and top-layer stacking
// are provided by the browser. Focus returns to the previously focused element on close.
export function Dialog({ open, onClose, title, description, children, footer, closeLabel = 'Kapat', className }) {
  const ref = React.useRef(null);
  const ids = React.useId();
  const lastFocus = React.useRef(null);
  React.useEffect(() => {
    const d = ref.current; if (!d) return;
    if (open && !d.open) {
      lastFocus.current = document.activeElement; d.showModal();
      // Deterministic initial focus (browsers differ when the document itself is not focused).
      const target = d.querySelector('[autofocus]') || d.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (target && document.activeElement !== target && !d.contains(document.activeElement)) target.focus();
    }
    if (!open && d.open) { d.close(); }
  }, [open]);
  React.useEffect(() => {
    const d = ref.current; if (!d) return;
    const handle = () => { onClose && onClose(); if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus(); };
    d.addEventListener('close', handle);
    return () => d.removeEventListener('close', handle);
  }, [onClose]);
  return (
    <dialog ref={ref} className={['alu-dialog', className].filter(Boolean).join(' ')} aria-labelledby={'dt' + ids} aria-describedby={description ? 'dd' + ids : undefined}
      onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}>
      <div className="alu-dialog__inner">
        <div className="alu-dialog__header">
          <h2 className="alu-heading alu-heading--h3" id={'dt' + ids}>{title}</h2>
          <IconButton icon="x" label={closeLabel} onClick={() => ref.current.close()} />
        </div>
        {description ? <p className="alu-text alu-text--secondary" id={'dd' + ids}>{description}</p> : null}
        {children}
        {footer ? <div className="alu-dialog__footer">{footer}</div> : null}
      </div>
    </dialog>
  );
}
