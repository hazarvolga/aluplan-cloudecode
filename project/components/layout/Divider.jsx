import React from 'react';

// Decorative by default (hidden from AT). Pass decorative={false} when the rule separates content groups semantically.
export function Divider({ orientation = 'horizontal', strong = false, decorative = true, className }) {
  const cls = ['alu-divider', orientation === 'vertical' ? 'alu-divider--vertical' : '', strong ? 'alu-divider--strong' : '', className].filter(Boolean).join(' ');
  if (decorative) return <div className={cls} aria-hidden="true" />;
  return <hr className={cls} aria-orientation={orientation === 'vertical' ? 'vertical' : undefined} />;
}
