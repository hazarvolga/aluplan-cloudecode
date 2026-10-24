import * as React from 'react';

/**
 * Responsive grid: fixed 2/3/4 columns by breakpoint, or intrinsic auto-fill.
 */
export interface GridProps {
  as?: any;
  columns?: 2|3|4;
  /** Used when columns is not set. Defaults to the --grid-min-item token. */
  minItemWidth?: string;
  className?: string;
  style?: any;
  children?: React.ReactNode;
}

export declare function Grid(props: GridProps): React.JSX.Element | null;
