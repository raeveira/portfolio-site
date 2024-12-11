import React, {useEffect, useState} from 'react';
 import ItemIdentifier from "@/types/ItemIdentifier";
import fetchData from "@/app/actions/fetchData";

export default function ProjectOverview({ItemIdentifier}: { ItemIdentifier: number }) {

    const [projectItems, setProjectItems] = useState<ItemIdentifier>();

    useEffect(() => {
        const fetchProjectItems = async () => {
            const data = await fetchData({id: ItemIdentifier});
            if (data) {
                setProjectItems(data);
            }
        }
        fetchProjectItems().then();
    }, [ItemIdentifier]);

    return (
        <section id="overview"
            className={'static flex py-[104px] items-center justify-start flex-col gap-y-[64px] max-991px:px-[40px] max-767px:px-[24px] max-479px:py-[48px] max-479px:px-[16px]'}>
            <div
                className={'grid w-[882px] justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-0 gap-x-[40px] 1920px:gap-x-[72px] 1920px:w-[1440px] 1440px:gap-x-[56px] 1440px:w-[1044px] max-991px:w-auto max-991px:gap-x-[32px] max-767px:flex max-767px:w-auto max-767px:flex-col max-767px:gap-y-[48px] max-479px:flex max-479px:w-auto max-479px:flex-col max-479px:gap-y-[48px] max-479px:gap-x-0'}>
                {/* Project overview left */}
                <div
                    className={'flex items-stretch flex-1 flex-col gap-y-[40px] col-span-1 row-span-1 1920px:gap-y-[48px] max-479px:gap-y-[40px]'}>
                    {/* Project Role */}
                    <div className={'flex flex-col gap-y-[8px] pr-[48px] 1920px:gap-y-[16px]'}>
                        <div
                            className={'leading-[18px] font-medium NeueMontreal tracking-[.2px] 1920px:leading-[24px] 1920px:text-[18px]'}>
                            My Role
                        </div>
                        <div
                            className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                            <span className={'font-normal projectRoleShadow text-[#f2f2f2e6]'}>
                                {projectItems?.content.overview.role + " "}
                            </span>
                            — {projectItems?.content.overview.tasks}
                        </div>
                    </div>
                    {/* Project Team */}
                    <div className={'flex flex-col gap-y-[8px] 1920px:gap-y-[16px]'}>
                        <div
                            className={'leading-[18px] font-medium NeueMontreal tracking-[.2px] 1920px:leading-[24px] 1920px:text-[18px]'}>
                            Team
                        </div>
                        <div
                            className={'leading-[180%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                            {projectItems?.content.overview.team.map((teamMember, index) => (
                                <React.Fragment key={index}>
                                    <span key={index}>
                                        {teamMember}
                                    </span>
                                {index < projectItems.content.overview.team.length - 1 && <br/>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {/* Project Timeline & Status */}
                    <div className={'flex flex-col gap-y-[8px] 1920px:gap-y-[16px]'}>
                        <div
                            className={'leading-[18px] font-medium NeueMontreal tracking-[.2px] 1920px:leading-[24px] 1920px:text-[18px]'}>
                            Timeline & Status
                        </div>
                        <div
                            className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                            {projectItems?.content.overview.timeline + ", "}
                            <span
                                className={'font-normal projectRoleShadow text-[#f2f2f2e6]'}>
                                {projectItems?.content.overview.status}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Project overview right */}
                <div
                    className={'flex items-stretch flex-col gap-y-[40px] row-span-1 col-span-1 1920px:gap-y-[48px] max-991px:w-full max-767px:w-auto max-479px:gap-y-[40px] max-479px:w-auto'}>
                    {/* Project Overview */}
                    <div className={'flex flex-col gap-y-[8px] 1920px:gap-y-[16px]'}>
                        <div
                            className={'leading-[18px] font-medium NeueMontreal tracking-[.2px] 1920px:leading-[24px] 1920px:text-[18px]'}>
                            Overview
                        </div>
                        <div
                            className={'leading-[180%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                            {projectItems?.content.overview.overview.map((text, index) => (
                                <React.Fragment key={index}>
                                    <span key={index}>
                                        {text}
                                    </span>
                                    {index < projectItems.content.overview.overview.length - 1 && <><br/><br/></>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
