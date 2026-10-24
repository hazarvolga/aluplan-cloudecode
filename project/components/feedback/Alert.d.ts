import * as React from 'react';

/**
 * Inline message for information, success, warning or error.
 */
export interface AlertProps {
  tone?: 'info'|'success'|'warning'|'danger';
  title?: string;
  /** polite = role=status, assertive = role=alert. Omit for static notices. */
  live?: 'polite'|'assertive';
  className?: string;
  children?: React.ReactNode;
}

export declare function Alert(props: AlertProps): React.JSX.Element | null;
