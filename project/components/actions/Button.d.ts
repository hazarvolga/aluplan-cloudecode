import * as React from 'react';

/**
 * Primary interaction trigger (button or link-styled-as-button). Use for the one main action per region.
 */
export interface ButtonProps {
  variant?: 'primary'|'secondary'|'ghost';
  size?: 'sm'|'md'|'lg';
  /** Renders <a>. Disabled/loading links lose href. */
  href?: string;
  /** Opens in new tab, adds arrow icon + "(yeni sekmede açılır)" for screen readers. */
  external?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  iconStart?: string;
  iconEnd?: string;
  type?: 'button'|'submit'|'reset';
  onClick?: (e: any) => void;
  className?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.JSX.Element | null;
