import * as React from 'react';

/**
 * Location trail on detail pages.
 */
export interface BreadcrumbProps {
  items: { id?: string; label: string; href?: string }[];
  label?: string;
  className?: string;
}

export declare function Breadcrumb(props: BreadcrumbProps): React.JSX.Element | null;
