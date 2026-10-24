import React from 'react';

export function Container({ as = 'div', size = 'lg', children, className, ...rest }) {
  const Tag = as;
  return <Tag className={['alu-container', size !== 'lg' ? 'alu-container--' + size : '', className].filter(Boolean).join(' ')} {...rest}>{children}</Tag>;
}
