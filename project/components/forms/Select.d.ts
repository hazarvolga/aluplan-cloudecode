import * as React from 'react';

/**
 * Labelled native select.
 */
export interface SelectProps {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}

export declare function Select(props: SelectProps): React.JSX.Element | null;
