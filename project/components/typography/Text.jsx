import React from 'react';

const VARIANT_CLASS = { 'body-lg': 'alu-text--body-lg', body: '', 'body-sm': 'alu-text--body-sm', caption: 'alu-text--caption', label: 'alu-text--label', mono: 'alu-text--mono' };

export function Text({ as = 'p', variant = 'body', tone = 'primary', strong = false, prose = false, children, className, ...rest }) {
  const Tag = as;
  const cls = ['alu-text', VARIANT_CLASS[variant], tone === 'secondary' ? 'alu-text--secondary' : '', strong ? 'alu-text--strong' : '', prose ? 'alu-text--prose' : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
