import highlightImages, {HighlightType} from "@/types/HighlightImages";
import Image from "next/image";
import React from "react";

export default function DynamicImages({ images, number }: { images: highlightImages[] | undefined, number: string }) {
    return (
        <>
            {/* Project Context image */}
                    {images?.map((image, index) => (
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
                                    <span className={'font-medium text-[#f2f2f266]'}>{number}.{index}</span>
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
        </>
    );

};