import * as React from 'react';

/**
 * Body copy, captions, labels and mono technical labels.
 */
export interface TextProps {
  as?: any;
  variant?: 'body-lg'|'body'|'body-sm'|'caption'|'label'|'mono';
  tone?: 'primary'|'secondary';
  strong?: boolean;
  /** Caps line length at --container-prose (68ch). */
  prose?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export declare function Text(props: TextProps): React.JSX.Element | null;
