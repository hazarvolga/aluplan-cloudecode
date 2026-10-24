import * as React from 'react';

/**
 * Modal dialog on native <dialog>. Use sparingly (confirmations, short forms).
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  closeLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): React.JSX.Element | null;
