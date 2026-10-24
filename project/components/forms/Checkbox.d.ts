import * as React from 'react';

/**
 * Labelled checkbox with optional description and error.
 */
export interface CheckboxProps {
  id?: string;
  label: React.ReactNode;
  description?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}

export declare function Checkbox(props: CheckboxProps): React.JSX.Element | null;
