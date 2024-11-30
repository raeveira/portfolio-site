'use client';
import React, {useEffect, useRef, useState} from 'react';
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
import {useParams} from "next/navigation";
import fetchDataByName from "@/app/actions/fetchDataByName";

export default function AnsibleProjectPage() {
    const params = useParams();
    const [projectId, setProjectId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const prevSlugRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        const fetchProjectId = async () => {
            const slug = params.slug?.[0];
            if (slug && slug !== prevSlugRef.current) {
                setLoading(true)
                try {
                    const id = await fetchDataByName({ name: slug });
                    console.log("id", id)
                    if (id) {
                        setProjectId(id);
                        setLoading(false)
                    }
                } catch (error) {
                    console.error('Error fetching project ID:', error);
                }
                prevSlugRef.current = slug;
            }
        };

        fetchProjectId();
    }, [params.slug]);


    if (loading) {
        return <div>Project Loading</div>
    }

    if (!projectId) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <ProjectStructure ItemIdentifier={projectId}/>
            <ProjectSectionBanner ItemIdentifier={projectId}/>
            <main className="min-h-dvh">
                <ProjectOverview ItemIdentifier={projectId}/>
                <ProjectHighlights ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectContext ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectProblem ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectUpdateFlow ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectLayoutPatterns ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectInteractions ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectVisualDesign ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectFinalDesign ItemIdentifier={projectId}/>
                <ProjectDivider/>
                <ProjectRetrospective ItemIdentifier={projectId}/>
                <ProjectDivider/>
                {/* section next project */}
                <section id="hiddenFooter" className={'overflow-hidden relative flex pt-[120px] items-center flex-col 1920px:pt-[160px] max-991px:px-[48px] max-767px:px-[24px] max-767px:pt-[96px] max-479px:px-[16px] max-479px:pt-[64px]'}>
                    <div className={'inset-auto/0/0 absolute h-[60%] bg-gradient-to-b from-transparent to-background to-90% z-[2] pointer-events-none'}/>
                    <div className={'relative flex w-[882px] items-start flex-col gap-y-[48px] z-[1] 1920px:w-[1400px] 1920px:gap-y-[62px] 1440px:w-[1044px] max-991px:w-auto max-991px:gap-y-[40px] max-767px:gap-y-[32px] max-479px:gap-y-[32px]'}>
                        <h3 className={'leading-[125%] font-medium text-[40px] NeueMontreal [text-shadow:none] -tracking-[.1px] text-[#f2f2f240] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>Next project:</h3>
                        <ProjectCard ItemIdentifier={projectId + 1} />
                    </div>
                </section>
            </main>
        </>
    );
}