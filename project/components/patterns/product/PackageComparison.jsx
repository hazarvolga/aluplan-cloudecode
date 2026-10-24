'use client';
import React from 'react';
import { Icon } from '../../brand/Icon.jsx';

const STATES = {
  included: { icon: 'check', label: 'Dahil' },
  excluded: { icon: 'minus', label: 'Dahil değil' },
  optional: { icon: 'layers', label: 'Ek seçenek' },
  unknown: { icon: 'circle-help', label: 'Bilgi yok' },
};

// Package comparison as a real <table> (row + column headers). On narrow screens the table scrolls
// horizontally inside a focusable, labelled region with a sticky first column; no column is hidden.
// "unknown" means the scope is not confirmed — it must never be rendered as "excluded".
export function PackageComparison({ caption, packages = [], groups = [], cells = {}, states = STATES, scrollHint = 'Tabloyu yatay kaydırarak tüm paketleri görün.', footnote }) {
  const id = React.useId();
  const cell = (pkgId, capId) => {
    const c = cells[pkgId + ':' + capId] || { availability: 'unknown' };
    const s = states[c.availability] || states.unknown;
    return (
      <span className={'alu-avail alu-avail--' + c.availability}>
        <Icon name={s.icon} />
        <span><span className="alu-avail__text">{s.label}</span>{c.note ? <span className="alu-avail__note">{c.note}</span> : null}</span>
      </span>
    );
  };
  return (
    <div className="alu-comparison">
      <p className="alu-comparison__hint" id={id + '-hint'}><Icon name="arrow-right" size="sm" />{scrollHint}</p>
      <div className="alu-comparison__scroll" role="region" aria-labelledby={id + '-cap'} aria-describedby={id + '-hint'} tabIndex={0}>
        <table>
          <caption id={id + '-cap'}>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Yetenek</th>
              {packages.map((p) => <th scope="col" key={p.id}>{p.name}</th>)}
            </tr>
          </thead>
          {groups.map((g) => (
            <tbody key={g.id}>
              <tr className="alu-comparison__group"><th scope="rowgroup" colSpan={packages.length + 1}>{g.label}</th></tr>
              {g.capabilities.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{c.name}</th>
                  {packages.map((p) => <td key={p.id}>{cell(p.id, c.id)}</td>)}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
      <ul className="alu-comparison__legend" aria-label="Gösterge">
        {Object.entries(states).map(([k, s]) => <li key={k} className={'alu-avail alu-avail--' + k}><Icon name={s.icon} /><span className="alu-avail__text">{s.label}</span></li>)}
      </ul>
      {footnote ? <p className="alu-text alu-text--caption alu-text--secondary">{footnote}</p> : null}
    </div>
  );
}
