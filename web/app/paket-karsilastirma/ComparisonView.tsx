'use client';
import { useState, type ChangeEvent } from 'react';
import { PackageComparison } from '../../../project/components/patterns/product/PackageComparison';
import { Select } from '../../../project/components/forms/Select';
import { Text } from '../../../project/components/typography/Text';
import { fmt } from '../../lib/format';

type View = {
  release: { version: string } | null; market: { label: string } | null;
  packages: { id: string; name: string }[];
  groups: { id: string; label: string; capabilities: { id: string; name: string }[] }[];
  cells: Record<string, { availability: 'included' | 'excluded' | 'optional' | 'unknown'; note?: string }>;
  counts: { records: number; unverified: number; sources: string[] };
};

export function ComparisonView({ views, releases, markets, productName, captionSuffix, footnote, labels }: {
  views: Record<string, View>; releases: { id: string; version: string }[]; markets: { id: string; label: string }[];
  productName: string; captionSuffix: string; footnote: string;
  labels: { release: string; market: string; summary: string };
}) {
  const [releaseId, setReleaseId] = useState(releases[0]?.id ?? '');
  const [marketId, setMarketId] = useState(markets[0]?.id ?? '');
  const view = views[releaseId + '|' + marketId];
  return (
    <>
      <div style={{ display: 'grid', gap: 'var(--space-inline-md)', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, var(--layout-card-min)), var(--layout-card-min)))' }}>
        <Select label={labels.release} value={releaseId} onChange={(e: ChangeEvent<HTMLSelectElement>) => setReleaseId(e.target.value)} options={releases.map((r) => ({ value: r.id, label: r.version }))} />
        <Select label={labels.market} value={marketId} onChange={(e: ChangeEvent<HTMLSelectElement>) => setMarketId(e.target.value)} options={markets.map((m) => ({ value: m.id, label: m.label }))} />
      </div>
      <Text variant="body-sm" tone="secondary" aria-live="polite">
        {fmt(labels.summary, { records: view.counts.records, unverified: view.counts.unverified, sources: view.counts.sources.join(', ') || '—' })}
      </Text>
      <PackageComparison
        caption={productName + ' · ' + (view.release ? view.release.version : '') + ' · ' + (view.market ? view.market.label : '') + ' — ' + captionSuffix}
        packages={view.packages} groups={view.groups} cells={view.cells} footnote={footnote}
      />
    </>
  );
}
