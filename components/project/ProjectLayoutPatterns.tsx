import React, {useEffect, useState} from "react";
import Items from "@/data/projectItems";
import ItemIdentifier from "@/types/ItemIdentifier";
import MarkDot from "@/components/MarkDot";
import Description from "@/components/project/Description";
import DynamicImages from "@/components/project/DynamicImages";

export default function ProjectLayoutPatterns({ItemIdentifier}: { ItemIdentifier: number }) {
    const [projectItems, setProjectItems] = useState<ItemIdentifier>();

    useEffect(() => {
        const items = Items.find((item) => item.id === ItemIdentifier);
        if (items) {
            setProjectItems(items);
        }
    }, [ItemIdentifier]);

    return (
        <section id="layoutPatterns"
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
                                className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f226] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px] max-479px:leading-[16px] max-479px:text-[10px] '}>LAYOUT
                                PATTERNS
                            </div>
                        </div>
                        <div
                            className={'leading-[125%] font-medium text-[40px] NeueMontreal shadow-none -tracking-[1px] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>
                            {projectItems?.content.LayoutPatterns.heading}
                        </div>
                    </div>
                    {/* Section content block */}
                    {projectItems?.content.LayoutPatterns.information.map((value, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={'grid items-baseline self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px] max-991px:gap-x-[32px] max-767px:grid-cols-[1fr] max-767px:grid-rows-[auto_auto] max-767px:gap-y-[40px]'}>
                                <div
                                    className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:leading-[38px] 1920px:text-[32px]'}>
                                    {value.subheading}
                                </div>
                                <Description content={value.description}/>
                            </div>

                            <DynamicImages images={value.image} number={"3"} points={value.points} additionalPoints={value.additionalPoints}></DynamicImages>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}