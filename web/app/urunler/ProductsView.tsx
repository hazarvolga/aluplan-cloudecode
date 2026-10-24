'use client';
import { useState } from 'react';
import { RoleSelector } from '../../../project/components/patterns/engagement/RoleSelector';
import { ProductCard } from '../../../project/components/patterns/product/ProductCard';
import { Grid } from '../../../project/components/layout/Grid';
import { Text } from '../../../project/components/typography/Text';
import { fmt } from '../../lib/format';

type Row = {
  id: string; name: string; vendor: string; summary: string; isDemo: boolean; roles: string[];
  roleLabels: string[]; release: { version: string; status: 'current' | 'previous' | 'placeholder' | 'unknown' } | null; href: string | null;
};
type Role = { id: string; label: string; icon?: string; description?: string };

export function ProductsView({ rows, roles, roleLegend, countText }: { rows: Row[]; roles: Role[]; roleLegend: string; countText: string }) {
  const [role, setRole] = useState('all');
  const list = rows.filter((p) => role === 'all' || p.roles.includes(role));
  return (
    <>
      <RoleSelector legend={roleLegend} roles={roles} value={role} onChange={setRole} />
      <Text variant="body-sm" tone="secondary" aria-live="polite">{fmt(countText, { count: list.length })}</Text>
      <Grid columns={3}>
        {list.map((p) => (
          <ProductCard key={p.id} name={p.name} vendor={p.vendor} summary={p.summary} isDemo={p.isDemo} roles={p.roleLabels}
            release={p.release ?? undefined} href={p.href ?? undefined} />
        ))}
      </Grid>
    </>
  );
}
