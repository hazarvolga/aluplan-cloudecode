import * as React from 'react';

/**
 * Horizontal or vertical rule between content groups.
 */
export interface DividerProps {
  orientation?: 'horizontal'|'vertical';
  strong?: boolean;
  decorative?: boolean;
  className?: string;
}

export declare function Divider(props: DividerProps): React.JSX.Element | null;
