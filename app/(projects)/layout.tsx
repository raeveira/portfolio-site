'use client';
import Footer from "@/components/Footer";
import ProjectHeader from '@/components/project/ProjectHeader';
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <ProjectHeader/>
            {children}
            <Footer/>
        </>
    );
}
