import * as React from 'react';

/**
 * Training or support entry point with optional links.
 */
export interface SupportCardProps {
  icon?: string;
  title: string;
  description?: string;
  actions?: { label: string; href: string; external?: boolean }[];
  titleLevel?: 2|3|4;
}

export declare function SupportCard(props: SupportCardProps): React.JSX.Element | null;
