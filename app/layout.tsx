import "./globals.css";
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({
  style: 'normal',
  weight: ['400', '700'],
  display: 'swap',
  adjustFontFallback: true,
  fallback: ['Arial', 'sans-serif'],
  preload: true,
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-background text-onBackground flex-col items-center'}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
