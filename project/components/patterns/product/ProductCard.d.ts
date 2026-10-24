import * as React from 'react';

/**
 * Portfolio product summary card linking to its detail page.
 */
export interface ProductCardProps {
  name: string;
  vendor?: string;
  summary?: string;
  href?: string;
  roles?: string[];
  release?: { version: string; status: 'current'|'previous'|'placeholder'|'unknown' };
  isDemo?: boolean;
  titleLevel?: 2|3|4;
  linkLabel?: string;
}

export declare function ProductCard(props: ProductCardProps): React.JSX.Element | null;
