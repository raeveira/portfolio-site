import "./globals.css";
import {Inter} from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import React from "react";

const inter = Inter({
    style: 'normal',
    weight: ['400', '700'],
    display: 'swap',
    adjustFontFallback: true,
    fallback: ['Arial', 'sans-serif'],
    preload: true,
    subsets: ['latin'],
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className + ' bg-background text-onBackground flex-col items-center'}>
        {children}
        </body>
        <GoogleAnalytics gaId="G-LBCZB8QVT8" />
        </html>
    );
}