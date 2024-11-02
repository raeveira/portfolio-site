import React, {useEffect, useState} from "react";
import Items from "@/data/projectItems";
import ItemIdentifier from "@/types/ItemIdentifier";
import Image from "next/image";
import {HighlightType} from "@/types/HighlightImages";

export default function ProjectHighlights({ItemIdentifier}: { ItemIdentifier: number }) {
    const [projectItems, setProjectItems] = useState<ItemIdentifier>();

    useEffect(() => {
        const items = Items.find((item) => item.id === ItemIdentifier);
        if (items) {
            setProjectItems(items);
        }
    }, [ItemIdentifier]);

    return (
        <section id="highlights"
                 className={'flex pb-[120px] pt-[40px] items-center flex-col 1920px:pb-[160px] max-991px:px-[48px] max-767px:px-[24px] max-767px:pt-[24px] max-479px:px-[16px] max-479px:pb-[64px]'}>
            <div
                className={'gap-12 bg-[#f2f2f20a] bg-[radial-gradient(circle.closest-corner.at.50%_0,#64d2ff0d,#0000)] rounded-2xl flex flex-col items-center w-[882px] py-12 px-6 relative shadow-[0_40px_100px_#0006] 1920px:px-[32px] 1920px:pt-[64px] 1920px:pb-[32px] 1920px:w-[1440px] 1920px:rounded-[32px] 1920px:bg-[radial-gradient(circle.farthest-side.at.50%_0,#64d2ff0d,#0000_15%)] 1920px:gap-y-[72px] 1440px:px-[24px] 1440px:w-[1044px] 1440px:bg-[radial-gradient(circle.farthest-side.at.50%_0,#64d2ff0d,#0000_12%)] max-991px:px-[24px] max-991px:w-auto max-991px:gap-y-[40px] max-767px:px-[16px] max-767px:pb-[24px] max-767px:w-auto max-767px:gap-y-[40px] max-479px:px-[12px] max-479px:pt-[32px] max-479px:pb-[16px] max-479px:rounded-[24px] max-479px:gap-y-[40px] max-479px:shadow-[inset_0_0_5px_#00000026]'}>
                {/* Project Highlights text content */}
                <div
                    className={'flex px-[32px] items-center flex-col gap-y-[24px] 1920px:px-[48px] 1920px:items-stretch 1920px:gap-y-[32px] max-479px:px-[8px] max-479px:items-center max-479px:gap-y-[16px]'}>
                    <div
                        className={'flex items-center justify-center flex-col gap-y-[16px] gap-x-[8px] 1920px:gap-y-[24px] max-479px:items-center max-479px:gap-y-[8px]'}>
                        <Image src={'/icons/highlight-reel.svg'} alt={'highlight reel icon'} height={40} width={40}
                               loading={"lazy"} className={'inline-block max-w-full w-[40px] 1920px:w-[56px]'}/>
                        <div
                            className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:leading-[16px] 1920px:tracking-[2px] 1920px:text-[12px] 1280px:leading-[18px] max-479px:leading-[16px] max-479px:text-[10px]'}>HIGHLIGHTS
                        </div>
                    </div>
                    <div
                        className={'leading-[140%] font-medium text-[24px] NeueMontreal tracking-[.2px] text-center 1440px:text-[20px] 1920px:text-[40px] max-767px:leading-[130%] max-479px:text-[18px] max-479px:text-center'}>
                        {projectItems?.content.hightlightReel.calloutText}<br/>
                    </div>
                </div>
                {/* Project Highlights image */}
                <div
                    className={'flex self-stretch flex-col gap-y-[32px] 1920px:gap-y-[56px] max-767px:gap-y-[24px]'}>
                    {projectItems?.content.hightlightReel.moneyshots.map((moneyshot, index) => (
                        <React.Fragment key={index}>
                            {moneyshot.type === HighlightType.IMAGE ? (
                                <Image src={moneyshot.src} alt={moneyshot.alt} width={0} height={0} loading={"lazy"}
                                       sizes={"(max-width: 767px) 83vw, (max-width: 991px) 84vw, (max-width: 1439px) 834px, (max-width: 1919px) 996px, 1376px"}
                                       className={'inline-block max-w-full align-middle relative w-full rounded-[16px] border-[1px_solid_#252525] z-[1] max-479px:rounded-[12px]'}/>
                            ) : moneyshot.type === HighlightType.VIDEO ? (
                                <div
                                    className={'overflow-hidden my-0 rounded-[16px] border-[1px_solid_#252525] self-stretch flex-1 object-fill max-991px:relative max-991px:z-0 max-767px:rounded-[12px] max-479px:relative max-479px:z-0 '}>
                                    <div className={'rounded-[8px] max-479px:rounded-[12px]'}>
                                        <div className={'relative p-[62.5%_0_0_0]'}>
                                            <video
                                                src={moneyshot.src}
                                                className={'absolute top-0 left-0 w-full h-full'}
                                                autoPlay
                                                muted
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                            ) : moneyshot.type === HighlightType.LOOPVIDEO ? (
                                <div
                                    className={'overflow-hidden my-0 rounded-[16px] border-[1px_solid_#252525] self-stretch flex-1 object-fill max-991px:relative max-991px:z-0 max-767px:rounded-[12px] max-479px:relative max-479px:z-0 '}>
                                    <div className={'rounded-[8px] max-479px:rounded-[12px]'}>
                                        <div className={'relative p-[62.5%_0_0_0]'}>
                                            <video
                                                src={moneyshot.src}
                                                className={'absolute top-0 left-0 w-full h-full'}
                                                loop
                                                autoPlay
                                                muted
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <div
                                className={'flex pl-[16px] items-center self-stretch justify-end gap-x-[8px] 1920px:pl-[16px] max-479px:pl-[12px] max-479px:self-stretch max-479px:justify-end'}>
                                <div
                                    className={'flex leading-[14px] text-[10px] NeueMontreal items-baseline self-center tracking-[.2px] text-[#f2f2f240] gap-x-[4px] 1920px:leading-[18px] 1920px:text-[14px] 1920px:gap-x-[6px]'}>
                                    <span className={'font-medium text-[#f2f2f266]'}>0.{index + 1}</span>
                                    {moneyshot.caption}
                                </div>
                                <div
                                    className={'flex py-[4px] px-[10px] items-center justify-center rounded-[100px] bg-[#f2f2f20d] 1920px:py-[6px] 1920px:px-[12px] max-479px:pb-[4px]'}>
                                    <div
                                        className={'leading-[14px] text-[10px] JetBrainsMono opacity-40 1920px:leading-[16px] 1920px:text-[12px] max-479px:leading-[13px] max-479px:text-[9px]'}>
                                        {moneyshot.type}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div
                    className={'-mb-[1px] h-[1px] inset-0/0/auto absolute bg-gradient-to-r from-15% from-[#0000] via-50% via-[#64d2ff80] to-95% to-[#0000]'}/>
            </div>
        </section>
    )

}


