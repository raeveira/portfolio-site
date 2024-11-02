import React, {useEffect, useState} from "react";
import Items from "@/data/projectItems";
import ItemIdentifier from "@/types/ItemIdentifier";
import {HighlightType} from "@/types/HighlightImages";
import Image from "next/image";

export default function ProjectContext({ItemIdentifier}: { ItemIdentifier: number }) {
    const [projectItems, setProjectItems] = useState<ItemIdentifier>();

    useEffect(() => {
        const items = Items.find((item) => item.id === ItemIdentifier);
        if (items) {
            setProjectItems(items);
        }
    }, [ItemIdentifier]);

    return (
        <section id={'context'}
                 className={'flex py-[120px] items-center justify-start flex-col bg-none 1920px:py-[160px] max-991px:px-[24px] max-767px:px-[24px] max-479px:py-[64px] max-479px:px-[16px] max-479px:bg-none'}>
            <div
                className={'flex w-[882px] flex-col gap-y-[96px] 1920px:w-[1440px] 1920px:gap-y-[144px] 1440px:w-[1044px] 1440px:gap-y-[120px] max-991px:w-full max-479px:gap-y-[80px]'}>
                <div
                    className={'flex items-start flex-col gap-y-[72px] 1920px:gap-y-[128px] 1440px:gap-y-[80px] max-479px:gap-y-[48px]'}>
                    <div
                        className={'flex items-stretch flex-col gap-y-[80px] 1920px:gap-y-[120px] max-767px:gap-y-[48px] max-479px:gap-y-[48px] max-479px:gap-x-[48px]'}>
                        <div
                            className={'flex self-stretch flex-col gap-y-[32px] 1920px:gap-y-[48px] max-479px:gap-y-[24px]'}>
                            <div
                                className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px] max-479px:gap-x-[10px]'}>
                                <div
                                    className={'shadow-[0_0_20px_#fff] h-[10px] w-[10px] rounded-[50%] bg-onBackground'}/>
                                <div
                                    className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f226] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px] max-479px:leading-[16px] max-479px:text-[10px] '}>CONTEXT
                                </div>
                            </div>
                            <div
                                className={'leading-[125%] font-medium text-[40px] NeueMontreal shadow-none -tracking-[1px] 1920px:leading-[62px] 1920px:text-[56px] max-767px:text-[32px] max-479px:leading-[120%]'}>
                                {projectItems?.content.context.heading}
                            </div>
                        </div>
                        <div
                            className={'grid items-baseline self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px] max-991px:gap-x-[32px] max-767px:grid-cols-[1fr] max-767px:grid-rows-[auto_auto] max-767px:gap-y-[24px]'}>
                            <div
                                className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:text-[32px] 1920px:leading-[38px] max-479px:text-[20px]'}>
                                {projectItems?.content.context.subheading}
                            </div>
                            <div className={'flex flex-col gap-y-[48px] 1920px:gap-y-[64px] max-767px:pt-0'}>
                                <div
                                    className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                                    {projectItems?.content.context.description.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item.highlight ? (
                                                <span className={'font-normal highlighted-text text-[#f2f2f2e6]'}>{item.text}</span>
                                            ) : (item.text + " ")}
                                        </React.Fragment>
                                    ))}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project Context image */}
                    {projectItems?.content.context.images.map((image, index) => (
                        <div key={index} className={'flex items-stretch self-stretch flex-col gap-y-[8px] 1920px:gap-y-[16px] 1440px:gap-y-[12px] max-767px:gap-y-[10px] max-479px:gap-y-[8px]'}>
                            {image.type === HighlightType.IMAGE ? (
                                <Image src={image.src} alt={image.alt} width={0} height={0} loading={"lazy"}
                                       sizes={"(max-width: 767px) 83vw, (max-width: 991px) 84vw, (max-width: 1439px) 834px, (max-width: 1919px) 996px, 1376px"}
                                       className={'inline-block max-w-full align-middle relative w-full rounded-[16px] border-[1px_solid_#252525] z-[1] max-479px:rounded-[12px]'}/>
                            ) : image.type === HighlightType.VIDEO ? (
                                <div
                                    className={'overflow-hidden my-0 rounded-[16px] border-[1px_solid_#252525] self-stretch flex-1 object-fill max-991px:relative max-991px:z-0 max-767px:rounded-[12px] max-479px:relative max-479px:z-0 '}>
                                    <div className={'rounded-[8px] max-479px:rounded-[12px]'}>
                                        <div className={'relative p-[62.5%_0_0_0]'}>
                                            <video
                                                src={image.src}
                                                className={'absolute top-0 left-0 w-full h-full'}
                                                autoPlay
                                                muted
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                            ) : image.type === HighlightType.LOOPVIDEO ? (
                                <div
                                    className={'overflow-hidden my-0 rounded-[16px] border-[1px_solid_#252525] self-stretch flex-1 object-fill max-991px:relative max-991px:z-0 max-767px:rounded-[12px] max-479px:relative max-479px:z-0 '}>
                                    <div className={'rounded-[8px] max-479px:rounded-[12px]'}>
                                        <div className={'relative p-[62.5%_0_0_0]'}>
                                            <video
                                                src={image.src}
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
                                    <span className={'font-medium text-[#f2f2f266]'}>1.{index}</span>
                                    {image.caption}
                                </div>
                                <div
                                    className={'flex py-[4px] px-[10px] items-center justify-center rounded-[100px] bg-[#f2f2f20d] 1920px:py-[6px] 1920px:px-[12px] max-479px:pb-[4px]'}>
                                    <div
                                        className={'leading-[14px] text-[10px] JetBrainsMono opacity-40 1920px:leading-[16px] 1920px:text-[12px] max-479px:leading-[13px] max-479px:text-[9px]'}>
                                        {image.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}