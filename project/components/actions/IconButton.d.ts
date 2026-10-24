import * as React from 'react';

/**
 * Square icon-only button with a required accessible label (menu toggle, dialog close).
 */
export interface IconButtonProps {
  icon: string;
  /** Required accessible name, also used as title. */
  label: string;
  variant?: 'ghost'|'secondary'|'on-brand';
  size?: 'sm'|'md';
  disabled?: boolean;
  type?: 'button'|'submit';
  onClick?: (e: any) => void;
  className?: string;
  [aria: string]: any;
}

export declare function IconButton(props: IconButtonProps): React.JSX.Element | null;
