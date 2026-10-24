import React from 'react';

// Annual release label. A release is not a product and not a package: keep it visually distinct
// (mono outline tag with "Sürüm" prefix). `status` is required in the type contract; when it is
// missing at runtime the tag shows "statü bilinmiyor" instead of claiming "güncel".
const LABELS = { current: 'güncel', previous: 'önceki', placeholder: 'doğrulanmadı', unknown: 'statü bilinmiyor' };

export function ReleaseTag({ version, status, kindLabel = 'Sürüm', statusLabel }) {
  const s = LABELS[status] ? status : 'unknown';
  return (
    <span className={'alu-release-tag alu-release-tag--' + s}>
      <span className="alu-release-tag__kind">{kindLabel}</span>
      <span>{version}</span>
      <span className="alu-release-tag__kind">· {statusLabel || LABELS[s]}</span>
    </span>
  );
}
