import * as React from 'react';

/**
 * Centered max-width page column with fluid gutters.
 */
export interface ContainerProps {
  as?: any;
  size?: 'sm'|'md'|'lg'|'xl'|'prose';
  className?: string;
  children?: React.ReactNode;
}

export declare function Container(props: ContainerProps): React.JSX.Element | null;
