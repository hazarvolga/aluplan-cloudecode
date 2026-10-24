import React from 'react';

export function Stack({ as = 'div', direction = 'column', gap = 'md', align, justify, children, className, style, ...rest }) {
  const Tag = as;
  const cls = ['alu-stack', direction === 'row' ? 'alu-stack--row' : '', gap !== 'md' ? 'alu-stack--gap-' + gap : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} style={{ alignItems: align, justifyContent: justify, ...style }} {...rest}>{children}</Tag>;
}
