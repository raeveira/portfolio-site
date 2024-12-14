import React, {useEffect, useState} from "react";
import ItemIdentifier from "@/types/ItemIdentifier";
import MarkDot from "@/components/MarkDot";
import Description from "@/components/project/Description";
import ContainedPointsItem from "@/components/project/ContainedPointsItem";
import HighlightedBody from "@/components/HighlightedBody";
import Image from "next/image";
import DynamicImages from "@/components/project/DynamicImages";

export default function ProjectProblem({Project}: { Project: ItemIdentifier }) {
    const [projectItems, setProjectItems] = useState<ItemIdentifier>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjectItems = async () => {
            if(Project) setProjectItems(Project);
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
        <section id={projectItems.SidebarItems[4].id}
                 className={'flex py-[120px] items-center justify-start flex-col bg-none 1920px:py-[160px] max-991px:px-[24px] max-767px:px-[24px] max-479px:py-[64px] max-479px:px-[16px] max-479px:bg-none'}>
            <div
                className={'flex w-[882px] flex-col gap-y-[96px] 1920px:w-[1440px] 1920px:gap-y-[144px] 1440px:w-[1044px] 1440px:gap-y-[120px] max-991px:w-full max-479px:gap-y-[80px]'}>
                {/* Section starting block */}
                <div
                    className={'flex items-start flex-col gap-y-[72px] 1920px:gap-y-[128px] 1440px:gap-y-[80px] max-479px:gap-y-[48px]'}>
                    {/* Section title block */}
                    <div
                        className={'flex self-stretch flex-col gap-y-[32px] 1920px:gap-y-[48px] max-479px:gap-y-[24px]'}>
                        <div
                            className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px] max-479px:gap-x-[10px]'}>
                            <MarkDot/>
                            <div
                                className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f226] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px] max-479px:leading-[16px] max-479px:text-[10px] '}>PROBLEM
                            </div>
                        </div>
                        <div
                            className={'leading-[125%] font-medium text-[40px] NeueMontreal shadow-none -tracking-[1px] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>
                            {projectItems.Content.problem.heading}
                        </div>
                    </div>
                    {/* Section content block */}
                    <div
                        className={'grid items-baseline self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px] max-991px:gap-x-[32px] max-767px:grid-cols-[1fr] max-767px:grid-rows-[auto_auto] max-767px:gap-y-[40px]'}>
                        <div
                            className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:leading-[38px] 1920px:text-[32px]'}>
                            {projectItems.Content.problem.subheading}
                            <br/>
                            <br/>
                            <Description content={projectItems.Content.problem.description}/>
                        </div>
                        <div className={'flex flex-col gap-y-[48px] 1920px:gap-y-[64px] max-767px:pt-0'}>

                            <div className="flex flex-col gap-y-[4px]">
                                {projectItems.Content.problem.points.map((item, index) => {
                                    let position;
                                    if (index === 0) position = 'top';
                                    else if (index === projectItems.Content.problem.points.length - 1) position = 'bottom';
                                    else position = 'middle';

                                    return (
                                        <ContainedPointsItem key={index} position={position} imageSrc={item.icon}>
                                            <>
                                                <HighlightedBody content={item.highlightedText}/>
                                                {item.text}
                                            </>
                                        </ContainedPointsItem>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* challenge block */}
                <div
                    className={'shadow-[0_40px_100px_#0006] relative flex p-[32px] pb-[36px] items-center flex-col rounded-[24px] border-none bg-[#f2f2f20a] pt-[36px] self-stretch bg-[radial-gradient(circle_at_50%_0,#ffd60a0d,#0000_60%)] gap-y-[16px] 1440px:py-[44px] 1440px:bg-[radial-gradient(circle_at_50%_0,#ffd60a0d,#0000_70%)] 1440px:gap-y-[24px] 1920px:py-[52px] 1920px:bg-[radial-gradient(circle_at_50%_0,#ffd60a0d,#0000_80%)] 1920px:gap-y-[32px]'}>
                    <div
                        className={'flex items-center justify-center flex-col gap-y-[16px] gap-x-[8px] 1920px:gap-y-[24px]'}>
                        <Image src={'/icons/yellow-warn.svg'} alt={'yellow warn sign'} height={40} width={40}
                               loading={'lazy'}
                               className={'border-0 inline-block max-w-full w-[40px] 1920px:w-[56px]'}/>
                        <div
                            className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px]'}>THE
                            CHALLENGE
                        </div>
                    </div>
                    <div
                        className={'leading-[140%] font-medium text-[24px] NeueMontreal tracking-[.2px] text-center 1920px:text-[40px] 1440px:text-[20px] max-767px:leading-[130%] max-479px:text-[18px] max-479px:text-center'}>
                        {projectItems.Content.problem.challenge}
                    </div>
                    <div
                        className={'-mb-[1px] h-[1px] absolute inset-0/0/auto bg-gradient-to-r from-[#0000] from-5% via-[#ffd60a99] via-50% to-[#0000] to-95%'}/>
                </div>
                {/* Solution block */}
                <div
                    className={'grid items-start self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] max-991px:gap-x-[32px] max-767px:grid-cols-[1fr] max-767px:grid-rows-[auto_auto] max-767px:gap-y-[24px]'}>
                    <div className={'flex flex-col gap-y-[16px]'}>
                        <div
                            className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:leading-[38px] 1920px:text-[32px] max-479px:text-[20px]'}>
                            {projectItems.Content.problem.solutionMethod}
                        </div>
                    </div>
                    <div className={'flex flex-col gap-y-[48px] 1920px:gap-y-[64px] max-767px:pt-0'}>
                        <div
                            className={'flex self-stretch flex-col gap-y-[24px] 1920px:gap-y-[24px] max-767px:gasp-y-[16px]'}>
                            {projectItems.Content.problem.solutionDescription.map((item, index) => (
                                <div key={index} className={'shadow-[0_15px_40px_#0000001a] flex p-[24px] items-start flex-col rounded-[16px] border-[#252525] border border-solid bg-background gap-y-[24px] 1920px:p-[32px] 1920px:rounded-[24px] 1920px:gap-y-[28px] max-479px:px-[20px] max-479px:gap-y-[16px] max-479px:gap-x-[18px]'}>
                                    <div className={'flex items-start self-stretch justify-between'}>
                                        {item.icons && <Image src={item.icons} alt={"Challenge badge"} width={32} height={32} loading={"lazy"} className={'border-0 inline-block max-w-full w-[32px] 1920px:w-[36px]'} />}
                                        <div className={'hidden'}>0{index + 1}</div>
                                    </div>
                                    <div className={'flex pt-[12px] items-start flex-col gap-y-[16px] 1920px:gap-y-[12px] max-767px:pt-[8px] max-767px:gap-y-[12px] max-479px:pt-[10px]'}>
                                        <div className={'leading-[140%] font-medium text-[20px] NeueMontreal tracking-[.2px] text-left 1920px:text-[24px] 1440px:text-[28px] max-767px:leading-[130%] max-479px:text-[18px]'}>
                                            {item.heading}
                                        </div>
                                        <div className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-0 1440px:pr-0 max-991px:w-auto max-767px:text-[15px] max-479px:text-[14px]'}>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DynamicImages images={projectItems.Content.problem.images} number={'2'} points={undefined} additionalPoints={undefined} additionalPoints1={undefined} additionalPoints2={undefined} />
            </div>
        </section>
    )
}