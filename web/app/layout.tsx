import type { Metadata } from 'next';
import '../../project/styles.css';

export const metadata: Metadata = {
  title: { default: 'Aluplan', template: '%s · Aluplan' },
  description: 'Aluplan ürün, paket ve sürüm bilgileri. Demo içerik.',
};

// Light/dark follows the system setting before first paint. The theme is fixed to "aluplan".
const modeScript = `(function(){var m=window.matchMedia('(prefers-color-scheme: dark)');function a(){document.documentElement.setAttribute('data-mode',m.matches?'dark':'light')}a();m.addEventListener&&m.addEventListener('change',a)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-theme="aluplan" data-mode="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body style={{ margin: 0, background: 'var(--surface-page)', color: 'var(--text-primary)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
