import React from 'react';

// Either fixed responsive columns (2/3/4: 1 col → 2 at md → n at lg) or intrinsic auto-fill.
// Auto-fill minimum defaults to --grid-min-item (token); minItemWidth overrides it per instance.
export function Grid({ as = 'div', columns, minItemWidth, children, className, style, ...rest }) {
  const Tag = as;
  const cls = ['alu-grid', columns ? 'alu-grid--cols-' + columns : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} style={columns || !minItemWidth ? style : { '--alu-grid-min': minItemWidth, ...style }} {...rest}>{children}</Tag>;
}
