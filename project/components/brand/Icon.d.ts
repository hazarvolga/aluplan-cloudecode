import * as React from 'react';

/**
 * Lucide-sourced line icon (copied geometry, never hand-drawn). Decorative unless `label` is given.
 */
export interface IconProps {
  name: 'arrow-right'|'arrow-up-right'|'external-link'|'chevron-down'|'chevron-right'|'chevron-left'|'menu'|'x'|'check'|'minus'|'info'|'file-text'|'graduation-cap'|'life-buoy'|'download'|'search'|'building-2'|'ruler'|'boxes'|'circle-help'|'sun'|'moon'|'mail'|'phone'|'triangle-alert'|'circle-alert'|'circle-check'|'circle-play'|'loader-circle'|'circle-x'|'layers';
  /** sm 16 / md 20 / lg 24 (from --icon-size-*) */
  size?: 'sm'|'md'|'lg';
  /** Accessible name. Omit for decorative icons (aria-hidden). */
  label?: string;
  className?: string;
}

export declare function Icon(props: IconProps): React.JSX.Element | null;
