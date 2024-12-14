import ContainedPointsItem from "@/components/project/ContainedPointsItem";
import highlightImages, {HighlightType} from "@/types/HighlightImages";
import {PointsItem} from "@/types/ItemIdentifier";
import HighlightedBody from "@/components/HighlightedBody";
import Image from "next/image";
import React, {useState} from "react";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";

export default function DynamicImages({
                                          images,
                                          number,
                                          points,
                                          additionalPoints,
                                          additionalPoints1,
                                          additionalPoints2
                                      }: {
    images: highlightImages[] | undefined,
    number: string,
    points: PointsItem[] | undefined,
    additionalPoints: PointsItem[] | undefined,
    additionalPoints1: PointsItem[] | undefined,
    additionalPoints2: PointsItem[] | undefined
}) {
    const isSingleImage = images && images.length === 1;
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <div
            className={`grid w-full ${additionalPoints && images?.length || 0 > 1 ? '1440px:grid-cols-2' : '1440px:grid-cols-1'}
                        1920px:gap-x-6 1920px:gap-y-14 1440px:gap-x-5 1440px:gap-y-12 1280px:gap-y-10 991px:gap-y-14
                        max-767px:grid-cols-1`}>
            {images?.map((image, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`flex flex-col space-y-2 ${isSingleImage ? '1920px:col-span-2' : ''}
                                    max-479px:space-y-2`}>
                        {image.type === HighlightType.IMAGE ? (
                            <Image src={image.src} alt={image.alt} width={0} height={0} loading={"lazy"}
                                   sizes={"(max-width: 767px) 83vw, (max-width: 991px) 84vw, (max-width: 1439px) 834px, (max-width: 1919px) 996px, 1376px"}
                                   className={'inline-block max-w-full align-middle relative w-full rounded-4 border border-[#252525] z-[1] 1920px:rounded-[16px] 1440px:rounded-[14px] max-479px:rounded-[12px]'}/>
                        ) : image.type === HighlightType.VIDEO || image.type === HighlightType.LOOPVIDEO ? (
                            <div
                                className={'overflow-hidden rounded-4 border border-[#252525] flex-1 max-767px:rounded-[12px]'}>
                                <div className={'rounded-2 max-479px:rounded-[12px]'}>
                                    <div className={'relative p-[62.5%_0_0_0]'}>
                                        <video src={image.src} className={'absolute top-0 left-0 w-full h-full'}
                                               autoPlay={image.type === HighlightType.VIDEO} muted
                                               loop={image.type === HighlightType.LOOPVIDEO}></video>
                                    </div>
                                </div>
                            </div>
                        ) : image.type === HighlightType.INTERACTIVE ? (
                            <>
                                <div className={'w-full mb-[12px] 1920px:mb-[16px]'}>
                                    <div className={'flex items-center justify-end'}>
                                        <div
                                            className={'flex items-center justify-end p-[10px] pl-[20px] self-end flex-row rounded-[100px] bg-[#f2f2f20d] gap-x-[12px] 1920px:gap-x-[12px] 1920px:p-[16px] 1920px:pl-[28px] max-767px:p-[8px] max-767px:pl-[24px]'}>
                                            <Label htmlFor="interactiveMode"
                                                   className={'leading-[100%] font-medium text-[16px] NeueMontreal tracking-[.2px] 1920px:text-[18px] max-767px:text-[15px]'}>{!isInteractive ? 'Show' : 'Hide'} {image.interactiveText}</Label>
                                            <Switch id="interactiveMode"
                                                    onClick={() => setIsInteractive(!isInteractive)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={0}
                                        height={0}
                                        loading="lazy"
                                        sizes="(max-width: 767px) 83vw, (max-width: 991px) 84vw, (max-width: 1439px) 834px, (max-width: 1919px) 996px, 1376px"
                                        className={`
                                          inline-block max-w-full align-middle w-full
                                          rounded-4 border border-[#252525] z-[1]
                                          1920px:rounded-[16px] 1440px:rounded-[14px] max-479px:rounded-[12px]
                                          transition-opacity duration-300 ease-in-out
                                        `}
                                    />
                                    {image.interactiveSrc && (
                                        <Image
                                            src={image.interactiveSrc}
                                            alt={image.interactiveAlt || ''}
                                            width={0}
                                            height={0}
                                            loading="lazy"
                                            sizes="(max-width: 767px) 83vw, (max-width: 991px) 84vw, (max-width: 1439px) 834px, (max-width: 1919px) 996px, 1376px"
                                            className={`
                                                absolute top-0 left-0
                                                inline-block max-w-full align-middle w-full
                                                rounded-4 border border-[#252525] z-[2]
                                                1920px:rounded-[16px] 1440px:rounded-[14px] max-479px:rounded-[12px]
                                                transition-opacity duration-300 ease-in-out
                                                ${isInteractive ? 'opacity-100' : 'opacity-0'}
                                            `}
                                        />
                                    )}
                                </div>
                            </>
                        ) : null}
                        <div className={'flex items-center justify-end space-x-2 px-4 max-479px:px-3'}>
                            <div
                                className={'flex text-xs NeueMontreal tracking-widest text-[#f2f2f240] space-x-1 1920px:text-base 1440px:text-sm'}>
                                <span className={'font-medium text-[#f2f2f266] mr-2'}>
                                    {image.number ? image.number : `${number}.${index}`}
                                </span>
                                {image.caption}
                            </div>
                            <div
                                className={'flex items-center justify-center rounded-full bg-[#f2f2f20d] py-1 px-3 1920px:px-4 max-479px:py-[4px]'}>
                                <div className={'text-xs JetBrainsMono opacity-40 1920px:text-sm max-479px:text-[9px]'}>
                                    {image.type}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Render points and additionalPoints below the single image or on specific indices for multiple images */}
                    {index === 0 && points && points.length > 0 && (
                        <div className={'flex flex-col space-y-12 max-767px:pt-0 max-991px:pb-10'}>
                            <div className={'flex flex-col space-y-1'}>
                                {points.map((item, i) => {
                                    const position = points.length === 1 ? 'single' : i === 0 ? 'top' : i === points.length - 1 ? 'bottom' : 'middle';
                                    return (
                                        <ContainedPointsItem key={i} position={position} imageSrc={item.icon}>
                                            <>
                                                <HighlightedBody content={item.highlightedText}/>
                                                {item.text}
                                            </>
                                        </ContainedPointsItem>
                                    );
                                })}
                                {additionalPoints1?.map((item, i) => {
                                    const position = additionalPoints1.length === 1 ? 'single' : i === 0 ? 'top' : i === additionalPoints1.length - 1 ? 'bottom' : 'middle';
                                    return (
                                        <ContainedPointsItem key={i} position={position} imageSrc={item.icon}>
                                            <>
                                                <HighlightedBody content={item.highlightedText}/>
                                                {item.text}
                                            </>
                                        </ContainedPointsItem>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {(isSingleImage || index === 1) && additionalPoints && additionalPoints.length > 0 && (
                        <div className={'flex flex-col space-y-12 max-767px:pt-0'}>
                            <div className={'flex flex-col space-y-1'}>
                                {additionalPoints.map((item, i) => {
                                    const position = additionalPoints.length === 1 ? 'single' : i === 0 ? 'top' : i === additionalPoints.length - 1 ? 'bottom' : 'middle';
                                    return (
                                        <ContainedPointsItem key={i} position={position} imageSrc={item.icon}>
                                            <>
                                                <HighlightedBody content={item.highlightedText}/>
                                                {item.text}
                                            </>
                                        </ContainedPointsItem>
                                    );
                                })}
                                {additionalPoints2?.map((item, i) => {
                                    const position = additionalPoints2.length === 1 ? 'single' : i === 0 ? 'top' : i === additionalPoints2.length - 1 ? 'bottom' : 'middle';
                                    return (
                                        <ContainedPointsItem key={i} position={position} imageSrc={item.icon}>
                                            <>
                                                <HighlightedBody content={item.highlightedText}/>
                                                {item.text}
                                            </>
                                        </ContainedPointsItem>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};