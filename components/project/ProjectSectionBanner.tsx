import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import ItemIdentifier from "@/types/ItemIdentifier";

export default function ProjectSectionBanner({Project}: { Project: ItemIdentifier }) {

    const [projectItems, setProjectItems] = useState<ItemIdentifier>();

    useEffect(() => {
        const fetchProjectItems = async () => {
            if (Project) setProjectItems(Project);
        }
        fetchProjectItems().then();
    }, [Project]);

    if(!projectItems) {
        return <div>Error: Unable to load project data</div>;
    }

    return (
        <section id={projectItems.SidebarItems[0].id}
                 className={'overflow-hidden relative flex pt-[104px] items-center flex-col z-[1] bg-hero-radial-far 1920px:pt-[144px] 1440px:pt-[120px] max-991px:px-[48px] max-767px:px-[24px] max-479px:pt-[112px] max-479px:px-[16px]'}>
            <div
                className={'relative flex w-[882px] items-stretch flex-col gap-y-[32px] z-[3] 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto'}>
                <div className={'flex items-center flex-col gap-y-[64px] 1920px:gap-y-[72px] max-479px:gap-y-[40px]'}>
                    <div
                        className={'flex items-center justify-between flex-col gap-y-[16px] 1920px:gap-y-[24px] 1440px:gap-y-[32px] max-479px:gap-y-[16px] max-479px:px-[24px]'}>
                        <div
                            className={'flex items-center flex-col gap-y-[16px] 1920px:gap-y-[16px] 1440px:gap-y-[16px]'}>
                            <h1 className={'font-medium NeueMontreal text-left leading-[72px] text-[64px] bg-clip-text -tracking-[1px] bg-gradient-to-b from-onBackground from-50% to-transparent projectBannerShadow 1920px:leading-[88px] 1920px:text-[80px] 1920px:-tracking-[1px] 1440px:text-[72px] 1440px:leading-[80px] max-767px:leading-[64px] max-767px:text-[56px] max-767px:-tracking-[2.5px] max-479px:leading-[52px] max-479px:text-[48px] max-479px:-tracking-[1.5px] '}>{projectItems.heading}</h1>
                            <h2 className={'leading-[22px] font-normal text-[18px] NeueMontreal text-center text-onBackground opacity-50 1920px:leading-[24px] 1920px:text-[20px] 1920px:tracking-[.2px] max-479px:leading-[20px] max-479px:text-[16px] max-479px:-tracking-[.25px]'}>{projectItems.company + " " || ''}
                                — {projectItems.year}</h2>
                        </div>
                    </div>
                    <motion.div
                        className={'self-stretch transform-style-preserve-3d opacity-100 translate-y-[64px] justify-center flex max-479px:justify-center max-479px:flex'}
                        initial={{translateY: 64, opacity: 0}}
                        animate={{translateY: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                    >
                        <Image src={projectItems.image} alt={projectItems.text || ''} height={1225} width={1440}
                               className={'inline-block max-w-full h-auto align-middle max-479px:max-w-full'} />
                    </motion.div>
                </div>
            </div>
            <div
                className={'inset-[0%] absolute bg-240px bg-[url("/noise/noise-overlay-2.png")] bg-blend-overlay opacity-20 z-[2]'}/>
            <div
                className={'inset-auto/0/0 absolute h-[240px] bg-gradient-to-b from-transparent to-background z-[4] 1920px:h-[400px] max-479px:h-[80px]'}/>
        </section>
    )
}