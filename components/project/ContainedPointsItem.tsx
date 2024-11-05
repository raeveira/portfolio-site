import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function ContainedPointsItem({position, imageSrc, children}: { position: string, imageSrc: string, children: React.ReactNode }) {

    const [styling, setStyling] = useState<string>("");

    useEffect(() => {
        switch (position) {
            case 'top':
                setStyling("pb-[24px] pt-[26px] items-stretch rounded-[24px_24px_6px_6px] 1920px:pt-[30px] 1920px:pb-[28px] max-767px:pt-[24px] max-767px:pb-[22px]");
                break;
            case 'middle':
                setStyling("pb-[24px] items-stretch rounded-[6px] 1920px:pt-[28px] 1920px:pb-[28px] max-767px:pb-[22px] max-767px:pt-[22px]");
                break;
            case 'bottom':
                setStyling("pt-[26px] items-stretch rounded-[6px_6px_24px_24px] 1920px:pt-[28px] 1920px:pb-[30px] max-767px:pt-[22px] max-767px:pb-[24px]");
                break;
            default:
                setStyling("");
                break;
        }
    }, [position]);


    return (
        <div
            className={'flex p-[24px] pb-[28px] items-start flex-col rounded-[24px] bg-[#f2f2f20a] gap-y-[24px] 1920px:gap-y-[32px] 1920px:p-[32px] max-767px:pb-[24px]' + styling}>
            <div className={'flex items-start gap-x-[16px] 1920px:gap-x-[24px] 1440px:gap-x-[16px] max-991px:items-start'}>
                <Image src={imageSrc} width={24} height={24} alt={"Icon"} loading={"lazy"} className={'border-0 inline-block max-w-full align-middle w-[24px] 1920px:-mt-[2px] 1920px:w-[32px]'} />
                <div className={'leading-[150%] font-light NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px]'}>
                    {children}
                </div>
            </div>
        </div>
    )
}