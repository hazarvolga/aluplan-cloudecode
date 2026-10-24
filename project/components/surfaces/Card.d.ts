import * as React from 'react';

/**
 * Bordered content container; optionally the whole card is one link via its title.
 */
export interface CardProps {
  as?: any;
  variant?: 'default'|'subtle'|'outlined';
  title?: React.ReactNode;
  titleLevel?: 2|3|4;
  href?: string;
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): React.JSX.Element | null;
