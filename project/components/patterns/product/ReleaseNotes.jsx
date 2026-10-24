import React from 'react';
import { ReleaseTag } from './ReleaseTag.jsx';

// "What's new" list for one release. Empty `items` renders an explicit empty state; never pad with invented items.
export function ReleaseNotes({ heading = 'Yenilikler', release, items = [], emptyText = 'Bu sürüm için yenilik listesi henüz eklenmedi.', headingLevel = 2, sourceNote }) {
  const H = 'h' + headingLevel;
  return (
    <section className="alu-release-notes">
      <div className="alu-stack alu-stack--gap-sm">
        <H className="alu-heading alu-heading--h2">{heading}</H>
        {release ? <div><ReleaseTag version={release.version} status={release.status} /></div> : null}
        {sourceNote ? <p className="alu-text alu-text--body-sm alu-text--secondary">{sourceNote}</p> : null}
      </div>
      {items.length ? (
        <ul className="alu-release-notes__list">
          {items.map((it) => (
            <li className="alu-release-notes__item" key={it.id}>
              <span className="alu-release-notes__cat">{it.category}</span>
              <div className="alu-stack alu-stack--gap-xs">
                <p className="alu-text alu-text--strong">{it.title}</p>
                {it.body ? <p className="alu-text alu-text--body-sm alu-text--secondary">{it.body}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      ) : <p className="alu-text alu-text--secondary">{emptyText}</p>}
    </section>
  );
}
