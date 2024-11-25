import Image from "next/image";
import React from "react";

export const Discovery = ({discoveryItem}: {
    discoveryItem?: { heading: string; color: string; description: string; icon: string; };
}) => {
    return (
        <>
            {discoveryItem && (
                <div
                    className={`shadow-[0_40px_100px_#0006] relative flex p-[32px] pb-[36px] items-center flex-col rounded-[24px] border-none bg-[#f2f2f20a] pt-[36px] self-stretch bg-[radial-gradient(circle_at_50%_0,${discoveryItem.color},#0000_60%)] gap-y-[16px] 1440px:py-[44px] 1440px:bg-[radial-gradient(circle_at_50%_0,${discoveryItem.color},#0000_70%)] 1440px:gap-y-[24px] 1920px:py-[52px] 1920px:bg-[radial-gradient(circle_at_50%_0,${discoveryItem.color},#0000_80%)] 1920px:gap-y-[32px]`}>
                    <div
                        className={'flex items-center justify-center flex-col gap-y-[16px] gap-x-[8px] 1920px:gap-y-[24px]'}>
                        <Image src={discoveryItem.icon} alt={'discovery icon'}
                               height={40}
                               width={40}
                               loading={'lazy'}
                               className={'border-0 inline-block max-w-full w-[40px] 1920px:w-[56px]'}/>
                        <div
                            className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px]'}>KEY
                            {discoveryItem.heading}
                        </div>
                    </div>
                    <div
                        className={'leading-[140%] font-medium text-[24px] NeueMontreal tracking-[.2px] text-center 1920px:text-[40px] 1440px:text-[20px] max-767px:leading-[130%] max-479px:text-[18px] max-479px:text-center'}>
                        {discoveryItem.description}
                    </div>
                    <div
                        className={'-mb-[1px] h-[1px] absolute inset-0/0/auto bg-gradient-to-r from-[#0000] from-5% via-[#63e6e2] via-50% to-[#0000] to-95%'}/>
                </div>
            )}
        </>
    )
};