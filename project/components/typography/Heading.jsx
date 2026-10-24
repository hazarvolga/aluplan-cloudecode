import React from 'react';

// `level` sets the semantic element (h1–h6). `size` sets the visual scale. Keep them independent so
// themes and layouts never change document outline.
export function Heading({ level = 2, size, id, children, className, ...rest }) {
  const Tag = 'h' + Math.min(6, Math.max(1, level));
  const visual = size || (level <= 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4');
  return <Tag id={id} className={['alu-heading', 'alu-heading--' + visual, className].filter(Boolean).join(' ')} {...rest}>{children}</Tag>;
}
