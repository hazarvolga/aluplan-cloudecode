import * as React from 'react';

/**
 * Switch between peer views of the same subject (e.g. product overview / packages / resources).
 */
/** Active tab = requested id if enabled, else first enabled tab, else none. Empty items → renders nothing. */
export interface TabsProps {
  items: { id: string; label: string; content: React.ReactNode; disabled?: boolean }[];
  defaultTabId?: string;
  selectedId?: string;
  onChange?: (id: string) => void;
  /** aria-label for the tablist */
  label: string;
  className?: string;
}

export declare function Tabs(props: TabsProps): React.JSX.Element | null;
