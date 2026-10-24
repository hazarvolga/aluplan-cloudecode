import * as React from 'react';

/**
 * PDF or video resource card with an explicit unavailable state when no file exists.
 */
export interface ResourceCardProps {
  kind?: 'pdf'|'video';
  title: string;
  description?: string;
  href?: string;
  fileSize?: string;
  duration?: string;
  language?: string;
  unavailableText?: string;
  titleLevel?: 2|3|4;
}

export declare function ResourceCard(props: ResourceCardProps): React.JSX.Element | null;
