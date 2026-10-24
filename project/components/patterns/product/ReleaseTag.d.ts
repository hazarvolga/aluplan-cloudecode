import * as React from 'react';

/**
 * Annual release label, visually distinct from product names and package badges.
 */
export interface ReleaseTagProps {
  version: string;
  /** Required. Missing/invalid at runtime renders "statü bilinmiyor" (never "güncel"). */
  status: 'current'|'previous'|'placeholder'|'unknown';
  kindLabel?: string;
  statusLabel?: string;
}

export declare function ReleaseTag(props: ReleaseTagProps): React.JSX.Element | null;
