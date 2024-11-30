'use client';
import React from 'react';
import ProjectStructure from "@/components/project/ProjectStructure";
import ProjectSectionBanner from "@/components/project/ProjectSectionBanner";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectDivider from "@/components/project/ProjectDivider";
import ProjectContext from "@/components/project/ProjectContext";
import ProjectProblem from "@/components/project/ProjectProblem";
import ProjectUpdateFlow from "@/components/project/ProjectUpdateFlow";
import ProjectLayoutPatterns from "@/components/project/ProjectLayoutPatterns";
import ProjectInteractions from "@/components/project/ProjectInteractions";
import ProjectVisualDesign from "@/components/project/ProjectVisualDesign";
import ProjectFinalDesign from "@/components/project/ProjectFinalDesign";
import ProjectRetrospective from "@/components/project/ProjectRetrospective";
import ProjectCard from "@/components/project/ProjectCard";

export default function AnsibleProjectPage() {
    const ItemIdentifier = 1;

    return (
        <>
            <ProjectStructure ItemIdentifier={ItemIdentifier}/>
            <ProjectSectionBanner ItemIdentifier={ItemIdentifier}/>
            <main className="min-h-dvh">
                <ProjectOverview ItemIdentifier={ItemIdentifier}/>
                <ProjectHighlights ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectContext ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectProblem ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectUpdateFlow ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectLayoutPatterns ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectInteractions ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectVisualDesign ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectFinalDesign ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectRetrospective ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                {/* section next project */}
                <section id="hiddenFooter" className={'overflow-hidden relative flex pt-[120px] items-center flex-col 1920px:pt-[160px] max-991px:px-[48px] max-767px:px-[24px] max-767px:pt-[96px] max-479px:px-[16px] max-479px:pt-[64px]'}>
                    <div className={'inset-auto/0/0 absolute h-[60%] bg-gradient-to-b from-transparent to-background to-90% z-[2] pointer-events-none'}/>
                    <div className={'relative flex w-[882px] items-start flex-col gap-y-[48px] z-[1] 1920px:w-[1400px] 1920px:gap-y-[62px] 1440px:w-[1044px] max-991px:w-auto max-991px:gap-y-[40px] max-767px:gap-y-[32px] max-479px:gap-y-[32px]'}>
                        <h3 className={'leading-[125%] font-medium text-[40px] NeueMontreal [text-shadow:none] -tracking-[.1px] text-[#f2f2f240] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>Next project:</h3>
                        <ProjectCard ItemIdentifier={ItemIdentifier + 1} />
                    </div>
                </section>
            </main>
        </>
    );
}
