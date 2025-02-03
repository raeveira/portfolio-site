import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import React from "react";
import {NavigationProvider} from "@/context/NavigationContext";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NavigationProvider>
            <Navigation/>
            {children}
            <Footer/>
        </NavigationProvider>
    );
}
