import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navigation/>
            {children}
            <Footer/>
        </>
    );
}
