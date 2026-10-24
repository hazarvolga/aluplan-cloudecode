import * as React from 'react';

/**
 * One-dimensional flex layout with token gaps (vertical by default, wrapping row optional).
 */
export interface StackProps {
  as?: any;
  direction?: 'column'|'row';
  gap?: 'xs'|'sm'|'md'|'lg'|'xl'|'section';
  align?: string;
  justify?: string;
  className?: string;
  style?: any;
  children?: React.ReactNode;
}

export declare function Stack(props: StackProps): React.JSX.Element | null;
