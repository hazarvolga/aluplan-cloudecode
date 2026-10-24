import * as React from 'react';

/**
 * The supplied white Aluplan logo, always on a dark brand surface. Use wherever the brand mark appears.
 */
export interface BrandLogoProps {
  /** Path to the unmodified white SVG. Default 'assets/logo/aluplan-logo-white.svg' (relative to page). In Next.js serve it from /public. */
  src?: string;
  size?: 'sm'|'md'|'lg';
  href?: string;
  /** Skip the brand-surface wrapper; only when the parent already paints --surface-brand. */
  bare?: boolean;
  alt?: string;
  className?: string;
}

export declare function BrandLogo(props: BrandLogoProps): React.JSX.Element | null;
