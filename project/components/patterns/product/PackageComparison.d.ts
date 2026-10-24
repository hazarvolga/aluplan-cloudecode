import * as React from 'react';

/**
 * Package scope comparison table with included / excluded / optional / unknown states.
 */
export interface PackageComparisonProps {
  caption: string;
  packages: { id: string; name: string }[];
  groups: { id: string; label: string; capabilities: { id: string; name: string }[] }[];
  /** key = packageId + ':' + capabilityId */
  cells: Record<string, { availability: 'included'|'excluded'|'optional'|'unknown'; note?: string }>;
  states?: Record<string, { icon: string; label: string }>;
  scrollHint?: string;
  footnote?: string;
}

export declare function PackageComparison(props: PackageComparisonProps): React.JSX.Element | null;
