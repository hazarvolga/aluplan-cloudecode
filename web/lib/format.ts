// Pure string helper, safe to import from client components.
export const fmt = (s: string, v: Record<string, string | number>) =>
  String(s).replace(/\{(\w+)\}/g, (_, k: string) => (v[k] != null ? String(v[k]) : ''));
