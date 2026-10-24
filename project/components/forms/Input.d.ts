import * as React from 'react';

/**
 * Labelled single-line text field with hint, error and success messages.
 */
export interface InputProps {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  success?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  [attr: string]: any;
}

export declare function Input(props: InputProps): React.JSX.Element | null;
