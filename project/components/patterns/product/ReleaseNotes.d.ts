import * as React from 'react';

/**
 * "What's new" list for a single release with an honest empty state.
 */
export interface ReleaseNotesProps {
  heading?: string;
  release?: { version: string; status: 'current'|'previous'|'placeholder'|'unknown' };
  items: { id: string; category: string; title: string; body?: string }[];
  emptyText?: string;
  headingLevel?: 2|3;
  sourceNote?: string;
}

export declare function ReleaseNotes(props: ReleaseNotesProps): React.JSX.Element | null;
