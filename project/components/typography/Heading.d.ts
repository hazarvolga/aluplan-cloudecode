import * as React from 'react';

/**
 * Section heading where semantic level (h1–h6) and visual size are set independently.
 */
export interface HeadingProps {
  level?: 1|2|3|4|5|6;
  size?: 'display'|'h1'|'h2'|'h3'|'h4';
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export declare function Heading(props: HeadingProps): React.JSX.Element | null;
