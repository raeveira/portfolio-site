'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import SidebarItem from "@/types/SidebarItem";
import ItemIdentifier from "@/types/ItemIdentifier";

export default function ProjectStructure({ Project }: { Project: ItemIdentifier }) {
    const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [sectionsLoaded, setSectionsLoaded] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (Project && Project.SidebarItems) {
                setSidebarItems(Project.SidebarItems);
            }
            console.log("CLIENT PROJECT", Project);
        }

        fetchData().then(() => setLoading(false));
    }, [Project]);

    useEffect(() => {
        if (!sectionsLoaded) return;

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                    console.log("ACTIVE ID", entry.target.id);
                }
            });
        }, {
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.5
        });

        return () => observerRef.current?.disconnect();
    }, [sectionsLoaded]);

    useEffect(() => {
        if (!observerRef.current || !sectionsLoaded) return;

        const sections = sidebarItems
            .map(item => document.getElementById(item.id))
            .filter((section): section is HTMLElement => section !== null);

        console.log("Sections to observe:", sections);

        if (sections.length === sidebarItems.length) {
            sections.forEach(section => observerRef.current!.observe(section));
        } else {
            console.warn("Not all sections are loaded yet");
            return;
        }

        return () => sections.forEach(section => observerRef.current!.unobserve(section));
    }, [sidebarItems, sectionsLoaded]);

    useEffect(() => {
        if (!loading && sidebarItems.length > 0) {
            const checkSections = () => {
                const allSectionsLoaded = sidebarItems.every(item =>
                    document.getElementById(item.id) !== null
                );
                if (allSectionsLoaded) {
                    setSectionsLoaded(true);
                } else {
                    requestAnimationFrame(checkSections);
                }
            };
            checkSections();
        }
    }, [loading, sidebarItems]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Project || !Project.SidebarItems) {
        return <div>Error: Invalid project data</div>;
    }

    return (
        <div className={'pointer-events-none hidden 1280px:z-[8] 1280px:justify-center 1280px:flex 1280px:fixed 1280px:inset-[0%]'}>
            <div className={'1920px:pt-[144px] 1920px:pl-[72px] 1440px:pt-[120px] 1440px:pl-[56px] 1280px:flex-1 1280px:self-start 1280px:p-0 1280px:pt-[104px] 1280px:pl-[48px]'} />
            <div className={'1920px:w-[1440px] 1440px:w-[1044px] 1280px:relative 1280px:pr-0 1280px:pb-0 1280px:w-[882px]'} />
            <div className={'1920px:pt-[144px] 1920px:pl-[72px] 1440px:pt-[120px] 1440px:pl-[56px] 1280px:flex-1 1280px:self-start 1280px:p-0 1280px:pt-[104px] 1280px:pl-[48px]'}>
                <nav className={'pointer-events-auto opacity-100 inset-0/auto/0/0 fix hidden pl-[40px] items-start justify-center flex-col gap-y-[24px] z-[8] 1280px:relative 1280px:flex 1280px:pl-0 1280px:flex-col 1280px:gap-y-[16px] 1920px:gap-y-[24px] '}>
                    <div className={'leading-[18px] font-medium text-[10px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:tracking-[2px] 1920px:text-[14px] 1920px:leading-[10px]'}>
                        CONTENTS
                    </div>
                    <div className={'flex items-start flex-col gap-y-[16px] 1280px:relative 1280px:items-start 1280px:self-start 1280px:gap-y-[12px] 1920px:gap-y-[16px]'}>
                        {sidebarItems.map((item) => (
                            item.text !== "hidden" && (
                                <Link href={`#${item.id}`} key={item.id}
                                      className={`hover:opacity-60 bg-[#0000] inline-block max-w-full no-underline leading-[16px] text-[12px] NeueMontreal -tracking-[.25px] text-onBackground 1280px:transition-all 1280px:duration-200 1280px:ease-linear 1280px:leading-[17px] 1280px:font-light 1280px:text-[11px] 1280px:py-[4px] 1280px:self-stretch 1280px:tracking-[.4px] 1280px:opacity-25 1920px:leading-[18px] 1920px:text-[12px] ${activeId === item.id ? "activeLinkClass" : ""}`}>
                                    <div>{item.text}</div>
                                </Link>
                            )
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}
