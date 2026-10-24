import * as React from 'react';

/**
 * Collapsible sections for FAQs and long secondary detail.
 */
export interface AccordionProps {
  items: { id: string; title: string; content: React.ReactNode }[];
  headingLevel?: 2|3|4;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export declare function Accordion(props: AccordionProps): React.JSX.Element | null;
