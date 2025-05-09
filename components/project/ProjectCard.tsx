'use client';
import Link from "next/link";
import React, {useEffect, useState} from "react";
import fetchData from "@/app/actions/fetchData";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import {ExtendedProject as Project} from "@/types/ProjectType";

export default function ProjectCard({ProjectID}: { ProjectID: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [projectItems, setProjectItems] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        const fetchProjectItems = async () => {
            try {
                const data = await fetchData({id: ProjectID});
                if (isMounted && data) {
                    setProjectItems(data);
                }
            } catch (error) {
                console.error("Error fetching project items:", error);
            }
        };

        fetchProjectItems().then(() => setIsLoading(false));

        return () => {
            isMounted = false;
        };
    }, [ProjectID]);

    if (isLoading) {
        return <ProjectCardSkeleton/>;
    }

    if (!projectItems) {
        return <div>Error: Unable to load project data</div>;
    }

    return (
        <div
            className={'outline -outline-offset-1 bg-[#f2f2f20a] rounded-3xl outline-1 outline-[#f2f2f20d] self-stretch p-2 relative shadow-projectCardOutline 1920px:rounded-[36px] 1920px:p-3'}>
            <div
                className={'z-[1] bg-[linear-gradient(to_right,rgba(0,0,0,0)_5%,rgba(255,252,255,1)_35%,rgba(255,255,255,1)_50%,rgba(255,252,255,1)_65%,rgba(0,0,0,0)_95%)]'}/>
            <Link href={projectItems.link}
                  prefetch={true}
                  className={'bg-[#0000] max-w-full overflow-hidden h-[500px] gap-y-14 pt-8 px-5 relative flex transition-[border] duration-400 ease-custom-ease no-underline flex-col rounded-2xl border border-solid border-[#3d3d3d] text-onBackground bg-project-outline-gradient hover:border-[#888] hover:outline-0 max-991px:h-auto max-767px:hover:border-[#3d3d3d] max-479px:gap-y-12 max-479px:pt-[26px] max-479px:px-6 1440px:gap-y-16 1440px:h-[696px] 1440px:pt-9 1440px:px-8 1920px:gap-y-[88px] 1920px:rounded-[24px] 1920px:h-[960px] 1920px:pt-[44px] 1920px:px-[44px]'}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={'z-[1] absolute inset-0/0/auto h-[1px] -mb-[1px] max-479px:bg-gradient-to-r max-479px:from-[#0000] from-15% via-[#fff] via-50% to-[#0000] to-85%'}/>
                <div
                    className={'z-[1] gap-y-2 flex-col items-start flex relative max-767px:gap-y-2 1920px:gap-y-3'}>
                    <div className={'justify-between self-stretch items-center flex'}>
                        <div
                            className={'tracking-normal text-projectcard-title justify-between NeueMontreal text-[24px] font-medium leading-[100%] flex 1920px:text-[32px]'}>{projectItems.text}
                        </div>
                        <img src={'/icons/arrow-right.svg'} alt={'arrow pointing right'}
                             className={`max-w-full inline-block border-0 1920px:h-12 transition-transform duration-300 ${isHovered ? '1920px:translate-x-2' : ''}`}/>
                    </div>
                    <div
                        className={'text-[#f2f2f280] tracking-[.2px] self-stretch pr-8 NeueMontreal text-[14px] font-normal leading-5 max-479px:text-[15px] max-479px:leading-[19px] 1440px:text-[16px] 1920px:text-[18px] 1920px:leading-[26px]'}>
                        <span
                            className={'text-[#f2f2f2cc] font-medium'}>{projectItems.company}, &apos;{projectItems.year} </span>
                        — {projectItems.description}
                    </div>
                </div>
                <img src={projectItems.image} alt={'project thumbnail'}
                     className={`z-[1] self-center max-w-[90%] relative shadow-projectThumbnail max-767px:max-w-full transition-transform duration-300 ${isHovered ? '1920px:-translate-y-[22px]' : ''} rounded-xl rounded-b-none`}></img>
                <div
                    className={`z-0 opacity-0 absolute inset-[0%] max-767px:opacity-100 max-767px:bg-projectCardColour767 transition-opacity duration-300 ${isHovered ? '1920px:!opacity-100' : ''}`}
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 0, ${projectItems.color_from}, ${projectItems.color_to})`
                    }}
                />
            </Link>
        </div>
    )
}