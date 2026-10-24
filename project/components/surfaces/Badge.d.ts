import * as React from 'react';

/**
 * Short status or category label. Status tones always include an icon.
 */
export interface BadgeProps {
  tone?: 'neutral'|'accent'|'info'|'success'|'warning'|'danger'|'demo';
  /** Override icon; null removes it (neutral/accent only). */
  icon?: string|null;
  className?: string;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.JSX.Element | null;
