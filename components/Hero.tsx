import React from 'react';
import ScrollArrow from '@/components/ScrollArrow';
import Shine from '@/components/Shine';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='z-[1] bg-hero-radial flex-row justify-center max-[1920px]:pt-40 pb-1 flex relative overflow-hidden pt-[200px] min-[1920px]:pb-0 min-[1280px]:px-0'>
            <div className='z-[5] flex-col items-center h-[200px] pt-12 flex absolute inset-auto/0/0 hero-fade min-[1920px]:items-center min-[1920px]:h-[280px] min-[1920px]:pt-24 min-[1920px]:flex min-[1440px]:pt-16'>
                <div className='opacity-100'>
                    <ScrollArrow />
                </div>
            </div>
            <div className='z-[3] w-[882px] relative opacity-100 transform translate-x-0 translate-y-0 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d min-[1920px]:w-[1440px] min-[1440px]:w-[1044px]'>
                <div className='opacity-100 z-[1] bg-hero-gradient absolute inset-0/0/auto h-[1px] -mb-[1px]' />
                <div className='backdrop-filter-none -outline-offset-1 bg-hero-radial-far rounded-3xl outline outline-1 outline-[#f2f2f226] p-2 overflow-hidden shadow-hero-shadow min-[1920px]:rounded-[36px] min-[1920px]:p-3 min-[1920px]:shadow-window-outline-1920 min-[1440px]:rounded-3xl min-[1440px]:p-2'>
                    <div className="h-[2px] -mb-[2px] bg-gradient-to-r from-[#0000] via-[#fff] to-[#0000] from-10% via-50% to-90% relative z-10"></div>
                    <div className='backdrop-blur-[20px] border border-solid border-[#f2f2f24d] rounded-2xl overflow-hidden shadow-hero-shadow-window min-[1920px]:rounded-3xl min-[1920px]:shadow-window-main-1920'>
                        <Shine />
                        <div className='backdrop-blur-[40px] bg-gradient-to-r from-[#f2f2f21a] via-[#f2f2f280] via-50% to-[#f2f2f21a] rounded-t-2xl justify-between items-center h-10 pl-3 flex shadow-window-bar min-[1920px]:h-14 min-[1920px]:pl-7 min-[1920px]:pr-4'>
                            <div className='gap-x-[10px] flex min-[1920px]:gap-x-[14px]'>
                                <div className='bg-[#f46b5d] shadow-red border border-solid border-[#10101040] w-3 h-3 rounded-[100px] min-[1920px]:w-4 min-[1920px]:h-4' />
                                <div className='bg-[#f9bd4e] shadow-yellow border border-solid border-[#10101040] w-3 h-3 rounded-[100px] min-[1920px]:w-4 min-[1920px]:h-4' />
                                <div className='bg-[#57c353] shadow-green border border-solid border-[#10101040] w-3 h-3 rounded-[100px] min-[1920px]:w-4 min-[1920px]:h-4' />
                            </div>
                            <Image src={'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg'} alt={'plus icon'} height={24} width={24} className='border-0 max-w-full inline-block opacity-[2] w-6 min-[1920px]:w-8'></Image>
                        </div>
                        <div className='z-[5] gap-x-8 gap-y-0 bg-[#101010b3] flex-col justify-around items-stretch pt-[80px] px-[56px] pb-[192px] flex relative min-[1920px]:backdrop-filter-none min-[1920px]:flex-col min-[1920px]:pt-[120px] min-[1920px]:px-[88px] min-[1920px]:pb-[280px] min-[1440px]:gap-y-16 min-[1440px]:gap-x-0 min-[1440px]:pt-24 min-[1440px]:px-[72px] min-[1440px]:pb-[200px]'>
                            <div className='z-[1] gap-16 flex-col flex relative min-[1920px]:gap-y-24'>
                                <div className='text-left -tracking-[2px] hero-text NeueMontreal text-[80px] font-medium leading-[90%] min-[1920px]:-tracking-[3px] min-[1920px]:text-[132px] min-[1920px]:text-hero-1920  min-[1440px]:-tracking-[2.2px] min-[1440px]:text-8xl'>
                                    I craft products, interactions &amp; <span className="bg-gradient-to-b from-[var(--on-background)] from-50% to-transparent text-transparent bg-clip-text pr-3 tracking-[-2px] font-gloock italic min-[1920px]:-tracking-[3px]">stories.</span>
                                </div>
                                <div className='grid grid-cols-2 gap-x-6 auto-rows-auto min-[1920px]:gap-x-[88px] min-[1440px]:gap-x-10'>
                                    <div />
                                    <div className='col-span-1 row-span-1'>
                                        <div className='flex-col NeueMontreal text-[20px] font-medium leading-[140%] flex min-[1920px]:text-[32px] min-[1440]:text-2xl'>
                                            Designer at Discord. Based in Toronto.
                                            <br />
                                            <span className='NeueMontreal text-[20px] font-normal leading-[1.4] text-[#f2f2f280]'>Formerly at Google and RBC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='z-0 opacity-25 mix-blend-overlay bg-window-grain bg-[0px] bg-200px absolute inset-[0%]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute inset-[96px_24px_auto] top-[96px] left-[24px] right-[24px] z-[2] opacity-[0.7] filter blur-[100px] rounded-[2000px] h-[50%] min-[1920px]:filter-blur-[140px] min-[1920px]:rounded-[3000px] min-[1920px]:h-[60%] min-[1920px]:top-[144px] min-[1920px]:left-[80px] min-[1920px]:right-[80px] bg-gradient-to-r from-transparent to-[var(--on-background)] via-[var(--on-background)]"></div> */}
            <div className="absolute inset-0 z-0 opacity-[0.2] mix-blend-overlay bg-[url('https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')] bg-[0_0] bg-200px"></div>
        </section>
    );
};
