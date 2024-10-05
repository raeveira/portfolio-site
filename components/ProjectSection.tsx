'use client';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectSection() {
    return (
        <section className={'relative flex pb-[200px] pt-6 items-center flex-col gap-y-20 1920px:pt-16 max-991px:items-stretch max-991px:px-12 max-767px:px-6 max-767px:pt-12 max-479px:gap-y-10 max-479px:pt-0 max-479px:px-4 max-479px:pb-20'}>
            <div className={'relative flex w-[882px] items-stretch flex-col gap-y-10 1920px:gap-y-20 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto max-479px:gap-y-10'}>
                <ProjectCard />
            </div>
        </section>
    )
}