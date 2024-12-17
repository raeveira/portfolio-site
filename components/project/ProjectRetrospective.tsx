import React, {useEffect, useState} from "react";
import MarkDot from "@/components/MarkDot";
import Description from "@/components/project/Description";
import DynamicImages from "@/components/project/DynamicImages";
import {Discovery} from "@/components/project/Discovery";
import {CardList} from "@/components/project/CardList";
import {ExtendedProject as Project} from "@/types/ProjectType";

export default function ProjectRetrospective({Project}: { Project: Project }) {
    const [projectItems, setProjectItems] = useState<Project>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjectItems = async () => {
            if (Project) setProjectItems(Project);
        }
        fetchProjectItems().then(() => setLoading(false));
    }, [Project]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if(!projectItems) {
        return <div>Error: Unable to load project data</div>;
    }

    return (
        <section id={projectItems.SidebarItems[10].id}
                 className={'flex py-[120px] items-center justify-start flex-col bg-none 1920px:py-[160px] max-991px:px-[24px] max-767px:px-[24px] max-479px:py-[64px] max-479px:px-[16px] max-479px:bg-none'}>
            <div
                className={'flex w-[882px] flex-col gap-y-[96px] 1920px:w-[1440px] 1920px:gap-y-[144px] 1440px:w-[1044px] 1440px:gap-y-[120px] max-991px:w-full max-479px:gap-y-[80px]'}>
                {/* associated-content-block */}
                <div
                    className={'flex items-start flex-col gap-y-[72px] 1920px:gap-y-[128px] 1440px:gap-y-[80px] max-479px:gap-y-[48px]'}>
                    {/* section-starting-block */}
                    <div
                        className={'flex items-stretch flex-col gap-y-[80px] 1920px:gap-y-[120px] max-767px:gap-y-[48px] max-479px:gap-y-[48px] max-479px:gap-x-[48px]'}>
                        {/* overline-heading-block */}
                        <div
                            className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px] max-479px:gap-x-[10px]'}>
                            <MarkDot/>
                            <div
                                className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f226] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px] max-479px:leading-[16px] max-479px:text-[10px] '}>RETROSPECTIVE
                            </div>
                        </div>
                        <div
                            className={'leading-[125%] font-medium text-[40px] NeueMontreal shadow-none -tracking-[1px] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>
                            {projectItems.Content.retrospective?.heading}
                        </div>
                    </div>
                    {/* Section content block */}
                    {projectItems.Content.retrospective?.information.map((value, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={'grid items-baseline self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px] max-991px:gap-x-[32px] max-767px:grid-cols-[1fr] max-767px:grid-rows-[auto_auto] max-767px:gap-y-[40px]'}>
                                <div
                                    className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:leading-[38px] 1920px:text-[32px]'}>
                                    {value.subHeading}
                                </div>
                                <Description content={value.description}/>
                            </div>
                            {value.discovery && <Discovery discoveryItem={value.discovery}/>}
                            {value.image && <DynamicImages images={value.image} number={"3"} points={value.points}
                                                           additionalPoints={value.additionalPoints}
                                                           additionalPoints1={value.additionalPoints1}
                                                           additionalPoints2={value.additionalPoints2}></DynamicImages>
                            }
                            {value.cards && <CardList cards={value.cards}/>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}