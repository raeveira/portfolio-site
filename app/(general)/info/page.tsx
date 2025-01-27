'use client'
import {motion} from 'framer-motion';
import MarkDot from "@/components/MarkDot";
import Image from "next/image";
import ContainerHeroImage from "@/components/ContainerHeroImage";
import InfoPageText from "@/components/InfoPageText";
import ProjectDivider from "@/components/project/ProjectDivider";
import DoubleColHero from "@/components/DoubleColHero";
import DoubleColExp from "@/components/DoubleColExp";
import FriendBlock from "@/components/FriendBlock";
import React from 'react';

import friends from '@/data/friends';
import experiences from '@/data/experiences';
import aboutMeData from '@/data/aboutMeData';

const InfoPage = () => {
    return (
        <main>
            {/* hero - desktop */}
            <section
                className={'max-767px:hidden relative flex pb-[120px] pt-[172px] items-center justify-center flex-col bg-hero-radial 1920px:pb-[160px] 1920px:pt-[220px] 1440px:pt-[180px]'}>
                <div
                    className={'inset-auto/0/0 absolute flex pt-[40x] h-[200px] items-center flex-col bg-[linear-gradient(to_bottom,#10101000,var(--background),60%)] z-[5] 1920px:pt-[96px] 1920px:h-[280px] 1920px:items-center 1440px:pt-[64px]'}/>
                <div
                    className={'relative flex w-[882px] flex-col gap-y-[40px] z-[1] 1920px:w-[1440px] 1920px:gap-y-[80px] 1440px:gap-y-[48px] 1440px:w-[1044px]'}>
                    <motion.div className={'flex flex-col gap-y-[24px] 1920px:gap-y-[32px]'}
                                animate={{opacity: 1, y: 0}}
                                initial={{opacity: 0, y: 20}}
                                transition={{duration: 1, delay: 0.5}}
                    >
                        <div className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px]'}>
                            <MarkDot/>
                            <h1 className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:tracking-[2px] 1920px:text-[14px] 1920px:leading-[18px]'}>ABOUT
                                ME</h1>
                        </div>
                        <div
                            className={'leading-[110%] font-medium text-[48px] NeueMontreal [text-shadow:0_4px_10px_#0057ff33,0_-4px_10px_#ff5a0026,0_0_30px_#fff3] -tracking-[1px] text-left 1920px:leading-[80px] 1920px:text-[80px] 1920px:[text-shadow:0_8px_20px_#0057ff33,0_-6px_20px_#ff5a001a,0_0_30px_#fff3] 1920px:-tracking-[1.5px]'}>
                            I&apos;m passionate about creating beautiful products that
                            <span
                                className={'italic Gloock bg-clip-text [text-shadow:0_4px_6px_#0057ff26,0_-4px_6px_#ff5a001a,0_0_20px_#ffffff40] -tracking-[1px] bg-gradient-to-b from-onBackground from-50% to-[#f2f2f233]'}> empower people.</span>
                        </div>
                    </motion.div>
                    {/* info hero stack desktop */}
                    {aboutMeData.map((data, index) => (
                        <React.Fragment key={index}>
                            <DoubleColHero imageSrc={data.src} imageSrc1={data.src1} text={data.text} text1={data.text1}
                                           text2={data.text2} text3={data.text3} text4={data.text4} text5={data.text5}
                                           key={index}>
                                {aboutMeData.length - 1 === index && (
                                    <React.Fragment>
                                    <span
                                        className={'font-medium text-[18px] text-[#f2f2f2e6] 1920px:text-[24px] 1920px:leading-[125%] 1440px:text-[20px]'}>Thanks for stopping by!</span><br/>
                                    </React.Fragment>)}
                            </DoubleColHero>
                        </React.Fragment>
                    ))}
                    <div className={'px-[24px] 1920px:px-[48px] 1440px:px-[32px]'}>
                        <Image src={'/signature.png'} alt={'signature'} width={80} height={80}/>
                    </div>
                </div>
            </section>

            {/* hero - mobile */}
            <section
                className={'767px:hidden relative flex pb-[120px] pt-[160px] items-center justify-center flex-col bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f226,#0000)] max-991px:px-[48px] max-479px:pt-[144px] max-479px:px-[24px] max-479px:pb-[62px] max-767px:flex max-767px:bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f226,#0000)]'}>
                <div
                    className={'relative flex w-[882px] flex-col gap-y-[80px] z-[1] max-991px:w-auto max-767px:gap-y-[64px] max-479px:gap-y-[40px]'}>
                    {/* info wrapper */}
                    <motion.div
                        className={'flex flex-col gap-y-[24px] max-479px:flex max-479px:items-start max-479px:flex-col max-479px:gap-y-[2vh]'}
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 20}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <div className={'flex items-center self-start gap-x-[12px] max-479px:gap-x-[10px]'}>
                            <MarkDot/>
                            <h1 className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] max-479px:text-[10px] max-479px:leading-[16px]'}>ABOUT
                                ME</h1>
                        </div>
                        <div
                            className={'leading-[110%] font-medium text-[40px] NeueMontreal [text-shadow:0_4px_10px_#0057ff33,0_-4px_10px_#ff5a0026,0_0_30px_#fff3] tracking-[1px] text-left max-991px:text-[42px] max-991px:leading-[110%] max-767px:-tracking-[.15vw] max-767px:text-[8vw] max-767px:leading-[110%] max-479px:text-[7.9vw] max-479px:leading-[110%] max-479px:-tracking-[.1vw]'}>
                            I&apos;m passionate about creating beautiful products that
                            <span
                                className={'italic Gloock bg-clip-text [text-shadow:0_4px_6px_#0057ff26,0_-4px_6px_#ff5a001a,0_0_20px_#ffffff40] -tracking-[1px] bg-gradient-to-b from-onBackground from-50% to-[#f2f2f233]'}> empower people.</span>
                        </div>
                    </motion.div>
                    {/* info hero stack mobile */}
                    <div className={'max-767px:flex max-767px:flex-col max-767px:gap-y-[64px]'}>
                        {aboutMeData.map((data, index) => (
                            <React.Fragment key={index}>
                                <ContainerHeroImage imageSrc={data.src}/>
                                <InfoPageText text={data.text3} text1={data.text4} text2={data.text5}/>
                                <ContainerHeroImage imageSrc={data.src1}/>
                                <InfoPageText text={data.text} text1={data.text1} text2={data.text2}>
                                    {aboutMeData.length - 1 === index && (
                                        <>
                                        <span
                                            className={'font-medium text-[18px] text-[#f2f2f2e6]'}>Thanks for stopping by!</span>
                                            <br/>
                                        </>
                                    )}
                                </InfoPageText>
                            </React.Fragment>
                        ))}
                        <div className={'gap-y-[8px] flex-col flex'}>
                            <div className={'px-[24px]'}>
                                <Image src={'/signature.png'} alt={'signature'} width={80} height={80}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={'inset-[0%] absolute block bg-[0_0] bg-200px bg-[url("/noise/noise-overlay-2.png")] mix-blend-overlay opacity-20 z-[0] max-479px:opacity-60 max-479px:z-0'}/>
            </section>
            <ProjectDivider/>
            <section
                className={'flex pt-[72px] pb-[120px] items-center justify-start flex-col bg-none 1920px:py-[160px] max-991px:bg-none max-991px:py-[48px] max-991px:px-[48px] max-767px:items-stretch max-767px:py-[64px] max-767px:px-[24px] max-479px:px-[16px] max-479px:pt-[56px] max-479px:bg-none'}>
                <div
                    className={'relative flex w-[882px] flex-col gap-y-[56px] z-[1] 1920px:gap-y-[64px] 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto max-991px:self-stretch max-767px:gap-y-[32px]'}>
                    <div className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px]'}>
                        <MarkDot/>
                        <div
                            className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px]'}>EXPERIENCE
                        </div>
                    </div>
                    <div className={'flex items-start flex-col gap-y-[64px] 1920px:gap-y-[80px] 1440px:gap-y-[72px]'}>
                        {experiences.map((exp, index) => (
                            <DoubleColExp key={index} title={exp.title} subheader={exp.subheader} date={exp.date}
                                          content={exp.content} link={exp.link}/>
                        ))}
                    </div>
                </div>
            </section>
            <ProjectDivider/>
            <section
                className={'flex py-[120px] items-center justify-start flex-col bg-none 1920px:pb-[168px] 1920px:pt-[122px] max-991px:px-[40px] max-991px:bg-none max-767px:px-[24px] max-767px:py-[64px] max-767px:items-stretch max-767px:pb-[88px] max-479px:px-[16px] max-479px:pt-[56px] max-479px:bg-none'}>
                <div
                    className={'relative flex w-[882px] flex-col gap-y-[80px] z-[1] 1920px:w-[1440px] 1920px:gap-y-[64px] 1440px:w-[1044px] max-991px:w-auto max-991px:self-stretch max-767px:gap-y-[32px] max-479px:gap-y-[32px]'}>
                    <div className={'flex items-center self-start gap-x-[12px] 1920px:gap-x-[16px]'}>
                        <MarkDot/>
                        <div
                            className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] 1920px:leading-[18px] 1920px:text-[14px] 1920px:tracking-[2px]'}>FRIENDS
                        </div>
                    </div>
                    <div
                        className={'grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto] gap-y-[72px] gap-x-[32px] 1920px:gap-y-[88px] 1920px:gap-x-[64px] 1440px:gap-y-[80px] max-767px:grid-cols-[1fr_1fr] max-479px:grid-cols-[1fr] max-479px:gap-y-[48px]'}>
                        {friends.map((friend, index) => (
                            <FriendBlock key={index} name={friend.name} role={friend.role} linkUrl={friend.linkUrl}
                                         linkName={friend.linkName}/>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default InfoPage;