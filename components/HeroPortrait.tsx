import React from 'react';
import ScrollArrow from '@/components/ScrollArrow';

export default function HeroPortrait() {
    return (
        <section className='max-479px:gap-y-[10vh] max-479px:bg-hero-radial-far-2 max-479px:flex-col max-479px:items-stretch max-479px:pt-[20vh]  max-479px:px-[16px] max-479px:pb-[6vh] max-479px:flex max-479px:relative hidden'>
            <div className='max-479px:z-[1] max-479px:gap-y-[6vh] max-479px:flex-col max-479px:px-[8px] max-479px:flex max-479px:relative'>
                <div className='opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 scale-z-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-3d max-479px:z-[1] max-479px:gap-y-[3vh] max-479px:flex-col max-479px:items-start max-479px:flex max-479px:relative'>
                    <div className='gap-x-[12px] self-start items-center flex max-479px:gap-x-[10px]'>
                        <div className='bg-onBackground rounded-[50%] w-[10px] h-[10px] shadow-dot-section' />
                        <div className='max-479px:text-[#f2f2f280] NeueMontreal max-479px:text-[16px] max-479px:font-normal max-479px:block'>Rae - Software Developer</div>
                    </div>  
                    <div className='NeueMontreal font-medium max-479px:text-left max-479px:-tracking-[.25vw] text-hero-479 max-479px:text-[13vw] max-479px:leading-[12vw] max-479px:text-hero-479'>
                        I craft products, interactions
                        <span> &</span>
                        <br />
                        <span className='max-479px:-tracking-[.25vw]'>stories.</span>
                    </div>
                </div>
                <div className='opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 scale-z-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-3d max-479px:z-[1] max-479px:gap-y-[2vh] max-479px:flex-col max-479px:items-start max-479px:flex max-479px:relative'>
                    <div className='max-479px:text-[#f2f2f280] NeueMontreal max-479px:text-[5vw] max-479px:font-medium max-479px:leading-[140%]'>
                        <span className='max-479px:text-[#f2f2f2e6]'>
                            Student at Gilde. Based in Roermond.
                            <br />
                        </span>
                        Formerly at Google and RBC.
                    </div>
                </div>
            </div>
            <div className='opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 scale-z-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-3d max-479px:z-[1] max-479px:gap-y-[16px] max-479px:flex-col max-479px:flex-initial max-479px:items-stretch max-479px:flex max-479px:relative'>
                <div className='max-479px:bg-[#f2f2f21a] max-479px:w-full max-479px:h-[1px] max-479px:pb-0 max-479px:pr-0' />
                <div className='max-479px:gap-x-[6px] max-479px:items-center max-479px:flex max-479px:relative'>
                    <ScrollArrow />
                    <div className='hidden max-479px:text-[#f2f2f280] NeueMontreal max-479px:text-[16px] max-479px:font-normal max-479px:block'>
                        Selected Work &apos;23
                    </div>
                </div>
            </div>
            <div className='z-0 opacity-20 bg-blend-overlay bg-[url("/noise/noise-overlay-2.png")] bg-0_0 bg-200px block absolute inset-[0%] max-479px:z-0 max-479px:opacity-60' />
        </section>
    );
};
