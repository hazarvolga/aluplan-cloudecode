import * as React from 'react';

/**
 * Text link. `inline` inside prose, `standalone` for "more" links outside text.
 */
export interface LinkProps {
  href: string;
  variant?: 'inline'|'standalone';
  external?: boolean;
  current?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export declare function Link(props: LinkProps): React.JSX.Element | null;
