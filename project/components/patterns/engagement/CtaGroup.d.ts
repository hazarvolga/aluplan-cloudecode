import * as React from 'react';

/**
 * Quote + trial call-to-action pair with visible destination domains.
 */
export interface CtaGroupProps {
  heading?: string;
  description?: string;
  actions: { id?: string; kind: 'quote'|'trial'|string; label: string; href: string; external?: boolean }[];
  /** Which action is visually primary. 'equal' until commercial priority is decided. */
  priority?: 'equal'|'quote'|'trial';
  layout?: 'inline'|'band';
  headingLevel?: 2|3;
  showDestination?: boolean;
}

export declare function CtaGroup(props: CtaGroupProps): React.JSX.Element | null;
