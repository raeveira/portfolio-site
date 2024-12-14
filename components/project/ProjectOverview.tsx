import React, {useEffect, useState} from 'react';
 import ItemIdentifier from "@/types/ItemIdentifier";

export default function ProjectOverview({Project}: { Project: ItemIdentifier }) {

    const [projectItems, setProjectItems] = useState<ItemIdentifier>();
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
        <section id={projectItems.SidebarItems[1].id}
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
                                {projectItems.Content.overview.role + " "}
                            </span>
                            — {projectItems.Content.overview.tasks}
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
                            {projectItems.Content.overview.team.split(';').map((teamMember, index) => (
                                <React.Fragment key={index}>
                                    <span key={index}>
                                        {teamMember}
                                    </span>
                                {index < projectItems.Content.overview.team.split(';').length - 1 && <br/>}
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
                            {projectItems.Content.overview.timeline + ", "}
                            <span
                                className={'font-normal projectRoleShadow text-[#f2f2f2e6]'}>
                                {projectItems.Content.overview.status}
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
                            {projectItems.Content.overview.overview.split(';').map((text, index) => (
                                <React.Fragment key={index}>
                                    <span key={index}>
                                        {text}
                                    </span>
                                    {index < projectItems.Content.overview.overview.split(';').length - 1 && <><br/><br/></>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
