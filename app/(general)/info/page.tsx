'use client'
import {motion} from 'framer-motion';
import MarkDot from "@/components/MarkDot";
import Image from "next/image";
import ContainerHeroImage from "@/components/ContainerHeroImage";
import InfoPageText from "@/components/InfoPageText";
import ProjectDivider from "@/components/project/ProjectDivider";
import DoubleColHero from "@/components/DoubleColHero";

const InfoPage = () => {
    return (
        <main>
            {/* hero - desktop */}
            <section
                className={'max-767px:hidden relative flex pb-[120px] pt-[172px] items-center justify-center flex-col bg-hero-radial 1920px:pb-[160px] 1920px:pt-[220px] 1440px:pt-[180px]'}>
                <div
                    className={'inset-auto/0/0 absolute flex pt-[40x] h-[200px] items-center flex-col bg-[linear-gradient(to_bottom,#10101000,var(--background),60%)] z-[5] 1920px:pt-[96px] 1920px:h-[280px] 1920px:items-center 1440px:pt-[64px]'}/>
                <div
                    className={'relative flex w-[882px] flex-col gap-y-[80px] z-[1] 1920px:w-[1440px] 1920px:gap-y-[120px] 1440px:gap-y-[88px] 1440px:w-[1044px]'}>
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
                                className={'italic Gloock bg-clip-text [text-shadow:0_4px_6px_#0057ff26,0_-4px_6px_#ff5a001a,0_0_20px_#ffffff40] -tracking-[1px] bg-gradient-to-b from-onBackground from-50% to-[#f2f2f233]'}>empower people.</span>
                        </div>
                    </motion.div>
                    {/* info hero stack desktop */}
                    <DoubleColHero imageSrc={'/logos/logo.png'} imageSrc1={'/logos/logo.png'}
                                   text={'My background in Architecture.'}
                                   text1={'In June of 2022, I graduated from architecture school at the University of Toronto. There, I became obsessed with architectural visualization.'}
                                   text2={'I was deeply fascinated in the concepts of modularity and adaptability — how our built environment could organically evolve in conjuction with humanity.'}
                                   text3={'This is my story — alongside some flicks from my recent trip to Japan.'}/>
                    <DoubleColHero imageSrc={'/logos/logo.png'} imageSrc1={'/logos/logo.png'}
                                   text={'This thing called UX?'}
                                   text1={'When the pandemic struck, I took it as an opportunity to explore new things. I came across UX design competitions, and thought it might be fun to just give it a go (several times).\n'}
                                   text2={'Long story short, my failures eventually turned into successes, and the rest was history.'}
                                   text3={'But, I wanted more.'}
                                   text4={'Though I loved the freedom of academic practice, I was greatly dissatisfied with just how slow the industry actually moved.'}
                                   text5={'I wanted to push my design craft at a faster pace and have a positive impact on vastly more people.'}/>
                    <DoubleColHero imageSrc={'/logos/logo.png'} imageSrc1={'/logos/logo.png'} text={'In my spare time,'}
                                   text1={'I\'m probably making tweaks to my portfolio or hanging out on Discord.'}
                                   text2={'Other than that, you\'ll find me playing basketball and volleyball, hitting the gym, gaming, and trying to get my hands on the latest tech.'}
                                   text3={'Making it all happen.‍'}
                                   text4={'To my advantage, I was able leverage a lot of the skills and design principles I had picked up during architecture school to greatly expedite my journey of self-learning UX Design.'}
                                   text5={'I loved solving problems by making stuff, and really valued visual storytelling and paying meticulous attention to precision and craftsmanship.'}>
                        <span
                            className={'font-medium text-[18px] text-[#f2f2f2e6] 1920px:text-[24px] 1920px:leading-[125%] 1440px:text-[20px]'}>Thanks for stopping by!</span><br/>
                    </DoubleColHero>
                    <div className={'px-[24px] 1920px:px-[48px] 1440px:px-[32px]'}>
                        <Image src={'/logos/logo.png'} alt={'signature'} width={80} height={80}/>
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
                        <motion.div className={'relative w-auto z-[3]'}
                                    animate={{opacity: 1, y: 0}}
                                    initial={{opacity: 0, y: 20}}
                                    transition={{duration: 1, delay: 1.5}}
                        >
                            <div
                                className={'-mb-[1px] h-[1px] inset-0/0/auto absolute z-[1] bg-[linear-gradient(to_right,#0000_5%,#fffc_35%,#fff_50%,#fffc_65%,#0000_95%)]'}/>
                            <div
                                className={'shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_30px_80px_#00000080] overflow-hidden p-[8px] outline-1 outline-[#f2f2f226] outline rounded-[24px] bg-hero-radial-far -outline-offset-1 backdrop-filter-none max-767px:backdrop-blur-[50px] max-767px:shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_20px_80px_#000c]'}>
                                <div
                                    className={'-mb-[2px] h-[2px] bg-gradient-to-r from-[#0000] from-10% via-[#fff] via-50% to-[#0000] to-90%'}/>
                                <div
                                    className={'shadow-[inset_0_0_10px_#0000001a,0_0_12px_#0006] overflow-hidden rounded-[16px] border-solid border border-[#f2f2f24d] backdrop-blur-[20px]'}>
                                    <div
                                        className={'relative pt-[80px] px-[56px] pb-[192px] items-stretch justify-around auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] flex-col bg-[#101010b3] gap-y-[0px] gap-x-[32px] z-[5] max-991px:gap-y-[32px] max-991px:pt-[8vw] max-991px:px-[5vw] max-991px:pb-[26vw] max-767px:pb-[28vw] p-0'}>
                                        <Image src={'/logos/logo.png'} alt={'selfie'} width={442} height={663}
                                               className={'max-w-full inline-block align-middle'}/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <InfoPageText text={'This is my story — alongside some flicks from my recent trip to Japan.'}
                                      text1={undefined} text2={undefined}/>
                        <ContainerHeroImage imageSrc={'/logos/logo.png'}/>
                        <InfoPageText text={'My background in Architecture.'}
                                      text1={'In June of 2022, I graduated from architecture school at the University of Toronto. There, I became obsessed with architectural visualization.'}
                                      text2={'I was deeply fascinated in the concepts of modularity and adaptability — how our built environment could organically evolve in conjuction with our lifestyles and larger societal forces.'}/>
                        <ContainerHeroImage imageSrc={'/logos/logo.png'}/>
                        <InfoPageText text={'But, I wanted more.'}
                                      text1={'Though I loved the freedom of the academic design environment, I was dissatisfied with how slow the industry actually moved.'}
                                      text2={'I wanted to push my design craft at a faster pace and have a positive impact on vastly more people.'}/>
                        <ContainerHeroImage imageSrc={'/logos/logo.png'}/>
                        <InfoPageText text={'This thing called UX?'}
                                      text1={'When the pandemic struck, I took it as an opportunity to explore new things. I came across UX design competitions, and thought it might be fun to just give it a go (several times).'}
                                      text2={'Long story short, my failures eventually turned into successes, and the rest was history.'}/>
                        <ContainerHeroImage imageSrc={'/logos/logo.png'}/>
                        <InfoPageText text={'Making it all happen.'}
                                      text1={'To my advantage, I was able leverage a lot of the skills and design principles I had picked up during architecture school to greatly expedite my journey of self-learning UX Design.'}
                                      text2={'I loved solving problems by making stuff, and really valued visual storytelling and paying meticulous attention to precision and craftsmanship.'}/>
                        <ContainerHeroImage imageSrc={'/logos/logo.png'}/>
                        <div className={'gap-y-[8px] flex-col flex'}>
                            <InfoPageText text={'In my spare time,'}
                                          text1={'I\'m probably making tweaks to my portfolio or hanging out on Discord.'}
                                          text2={'Other than that, you\'ll find me playing basketball and volleyball, hitting the gym, gaming, and trying to get my hands on the latest tech.'}>
                                <span
                                    className={'font-medium text-[18px] text-[#f2f2f2e6]'}>Thanks for stopping by!</span><br/>
                            </InfoPageText>
                            <div className={'px-[24px]'}>
                                <Image src={'/logos/logo.png'} alt={'signature'} width={80} height={80}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={'inset-[0%] absolute block bg-[0_0] bg-200px bg-[url("/noise/noise-overlay-2.png")] mix-blend-overlay opacity-20 z-[0]'}/>
            </section>
            <ProjectDivider/>
        </main>
    )
}

export default InfoPage;