import type { Metadata } from 'next';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/shared/components/layout/theme-provider';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NoCountry Dashboard',
  description: 'Dashboard for NoCountry teams',
  generator: 'v0.dev',
  icons: {
    icon: '/svgs/frogIco.svg',
    shortcut: '/svgs/frogIco.svg',
    apple: '/svgs/frogIco.svg',
    other: {
      rel: 'icon',
      url: '/svgs/frogIco.svg'
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
