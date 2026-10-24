import * as React from 'react';

/**
 * Sticky site header on the brand surface with logo, primary nav, CTAs and a mobile disclosure menu.
 */
export interface SiteHeaderProps {
  /** `id` is the React key; supply stable ids from content. */
  navItems: { id?: string; label: string; href: string }[];
  currentHref?: string;
  actions?: { id?: string; label: string; href: string; external?: boolean; variant?: 'primary'|'secondary' }[];
  logoSrc?: string;
  homeHref?: string;
  label?: string;
}

export declare function SiteHeader(props: SiteHeaderProps): React.JSX.Element | null;
