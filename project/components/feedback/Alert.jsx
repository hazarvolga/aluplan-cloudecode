import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const ICON = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };
const PREFIX = { info: 'Bilgi', success: 'Başarılı', warning: 'Uyarı', danger: 'Hata' };

// `live`: 'polite' for messages that appear after an action (role=status), 'assertive' only for blocking errors (role=alert).
// Static page notices should keep the default (no live region).
export function Alert({ tone = 'info', title, live, children, className, ...rest }) {
  const role = live === 'assertive' ? 'alert' : live === 'polite' ? 'status' : undefined;
  return (
    <div className={['alu-alert', tone !== 'info' ? 'alu-alert--' + tone : '', className].filter(Boolean).join(' ')} role={role} {...rest}>
      <Icon name={ICON[tone]} />
      <div className="alu-alert__body">
        {title ? <p className="alu-alert__title"><span className="alu-visually-hidden">{PREFIX[tone]}: </span>{title}</p> : <span className="alu-visually-hidden">{PREFIX[tone]}</span>}
        {children ? <div className="alu-alert__content">{children}</div> : null}
      </div>
    </div>
  );
}
