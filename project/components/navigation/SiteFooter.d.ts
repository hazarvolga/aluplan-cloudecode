import * as React from 'react';

/**
 * Site footer on the brand surface with link columns and legal line.
 */
export interface SiteFooterProps {
  columns: { id?: string; heading: string; links: { id?: string; label: string; href: string; external?: boolean }[] }[];
  logoSrc?: string;
  homeHref?: string;
  legal?: string;
  label?: string;
}

export declare function SiteFooter(props: SiteFooterProps): React.JSX.Element | null;
