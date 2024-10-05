import React from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Shine from '@/components/Shine';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='z-[1] bg-hero-radial flex-row justify-center max-1920px:pt-40 pb-1 flex relative overflow-hidden 1920px:pt-[200px] 1920px:pb-0 min-[1280px]:px-0 max-991px:px-12 max-479px:hidden'>
            <div className='z-[5] flex-col items-center h-[200px] pt-12 flex absolute inset-auto/0/0 hero-fade 1920px:items-center 1920px:h-[280px] 1920px:pt-24 1920px:flex 1440px:pt-16'>
                <div className='opacity-100 1920px:gap-x-[16px] 1920px:items-center'>
                    <ScrollArrow />
                </div>
            </div>
            <div className='z-[3] w-[882px] relative opacity-100 transform translate-x-0 translate-y-0 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto'>
                <div className='opacity-100 z-[1] bg-hero-gradient absolute inset-0/0/auto h-[1px] -mb-[1px]' />
                <div className='backdrop-filter-none -outline-offset-1 bg-hero-radial-far rounded-3xl outline outline-1 outline-[#f2f2f226] p-2 overflow-hidden shadow-hero-shadow 1920px:rounded-[36px] 1920px:p-3 1920px:shadow-window-outline-1920 1440px:rounded-3xl 1440px:p-2'>
                    <div className="h-[2px] -mb-[2px] bg-gradient-to-r from-[#0000] via-[#fff] to-[#0000] from-10% via-50% to-90% relative z-10"></div>
                    <div className='backdrop-blur-[20px] border border-solid border-[#f2f2f24d] rounded-2xl overflow-hidden shadow-hero-shadow-window 1920px:rounded-3xl 1920px:shadow-window-main-1920'>
                        <Shine />
                        <div className='backdrop-blur-[40px] bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f280] via-50% to-[#f2f2f21a] rounded-t-2xl justify-between items-center h-10 pl-3 flex shadow-window-bar 1920px:h-14 1920px:pl-7 1920px:pr-4'>
                            <div className='gap-x-[10px] flex 1920px:gap-x-[14px]'>
                                <div className='bg-[#f46b5d] shadow-red border border-solid border-[#10101040] w-3 h-3 rounded-[100px] 1920px:w-4 1920px:h-4' />
                                <div className='bg-[#f9bd4e] shadow-yellow border border-solid border-[#10101040] w-3 h-3 rounded-[100px] 1920px:w-4 1920px:h-4' />
                                <div className='bg-[#57c353] shadow-green border border-solid border-[#10101040] w-3 h-3 rounded-[100px] 1920px:w-4 1920px:h-4' />
                            </div>
                            <Image src={'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg'} alt={'plus icon'} height={24} width={24} className='border-0 max-w-full inline-block opacity-[2] w-6 1920px:w-8'></Image>
                        </div>
                        <div className='z-[5] gap-x-8 gap-y-0 bg-[#101010b3] flex-col justify-around items-stretch pt-[80px] px-[56px] pb-[192px] flex relative 1920px:backdrop-filter-none 1920px:flex-col 1920px:pt-[120px] 1920px:px-[88px] 1920px:pb-[280px] 1440px:gap-y-16 1440px:gap-x-0 1440px:pt-24 1440px:px-[72px] 1440px:pb-[200px] max-991px:gap-y-8 max-991px:pt-[8vw] max-991px:px-[5vw] max-991px:pb-[26vw] max-767px:pb-[28vw]'>
                            <div className='z-[1] gap-16 flex-col flex relative 1920px:gap-y-24 max-991px:gap-y-[7vw]'>
                                <div className='text-left -tracking-[2px] hero-text NeueMontreal text-[80px] font-medium leading-[90%] 1920px:-tracking-[3px] 1920px:text-[132px] hero-text-1920  1440px:-tracking-[2.2px] 1440px:text-8xl max-991px:text-[8.2vw] ]'>
                                    I craft wonders, adventures &amp; <span className="bg-gradient-to-b from-[var(--on-background)] from-50% to-transparent text-transparent bg-clip-text pr-3 tracking-[-2px] font-gloock italic 1920px:-tracking-[3px] max-991px:-tracking-[1.5px] ">tales.</span>
                                </div>
                                <div className='grid grid-cols-2 gap-x-6 auto-rows-auto 1920px:gap-x-[88px] 1440px:gap-x-10 max-991px:gap-x-[2vw]'>
                                    <div />
                                    <div className='col-span-1 row-span-1'>
                                        <div className='flex-col NeueMontreal text-[20px] font-medium leading-[140%] flex 1920px:text-[32px] min-[1440]:text-2xl max-991px:text-[2.2vw]'>
                                            Student at Gilde. Based in Roermond.
                                            <br />
                                            <span className='NeueMontreal text-[20px] font-normal leading-[1.4] text-[#f2f2f280] max-991px:text-[2.2vw]'>Passionate about language side quests!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='z-0 opacity-25 mix-blend-overlay bg-[url("/noise/noise-overlay-2.png")] bg-[0px] bg-200px absolute inset-[0%]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden absolute inset-[96px_24px_auto] z-[2] opacity-[0.7] filter blur-[100px] rounded-[2000px] h-1/2 bg-gradient-to-r from-transparent from-5% via-[var(--on-background)] via-50% to-transparent to-95% 1920px:filter-blur-[140px] 1920px:rounded-[3000px] 1920px:h-[60%] 1920px:top-[144px] 1920px:left-[80px] 1920px:right-[80px] 1440px:left-[40px] 1440px:right-[40px] max-991px:opacity-80 max-991px:blur-[60px] max-991px:h-[360px]"></div>
            <div className="absolute inset-0 z-0 opacity-[0.2] mix-blend-overlay bg-[url('https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')] bg-[0_0] bg-200px"></div>
        </section>
    );
};
