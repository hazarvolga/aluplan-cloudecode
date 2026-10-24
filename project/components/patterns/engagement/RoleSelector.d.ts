import * as React from 'react';

/**
 * Single-choice audience selector (e.g. Mimar / Mühendis / Prekast) that filters or routes content.
 */
export interface RoleSelectorProps {
  legend: string;
  roles: { id: string; label: string; description?: string; icon?: string }[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  name?: string;
}

export declare function RoleSelector(props: RoleSelectorProps): React.JSX.Element | null;
