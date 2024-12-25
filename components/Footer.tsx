import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    const link = {
        linkedin: 'https://www.linkedin.com/in/dylanbackes/',
        resume: 'https://drive.google.com/file/d/1pTNYEs-n9ItmKb7zdPGaqmZCyEM2dsf6/view?usp=sharing'
    };

    return (
        <footer className='border-t border-solid border-[#f2f2f21a] justify-center pt-[88px] pb-[80px] flex relative inset-0/0/auto max-479px:pt-16 max-479px:px-4 max-479px:pb-12'>
            <div className='gap-y-16 flex-col w-[882px] flex 1440px:w-[1044px] max-991px:w-full max-479px:gap-y-12'>
                <div className='justify-between flex max-479px:gap-y-12 max-479px:flex-col max-479px:items-start'>
                    <Image
                        src='/logos/logo-nbg.png'
                        alt='Logo'
                        className='h-12 w-auto max-479px:hidden'
                        width={50}
                        height={50}
                    />
                    <div className='gap-x-12 flex max-991px:gap-x-8 max-479px:gap-x-4'>
                        <div className='gap-y-4 flex-col items-start w-[106px] flex max-991px:w-[80px] max-479px:gap-y-3 max-479px:w-24 '>
                            <div className='opacity-50 tracking-[1.5px] text-[9px] font-medium leading-[13px] NeueMontreal'>MAIN</div>
                            <div className='gap-y-2 flex-col self-stretch flex'>
                                <Link href={'/'} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>Work</div>
                                </Link>
                                <Link href={'/info'} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>Info</div>
                                </Link>
                            </div>
                        </div>
                        <div className='gap-y-4 flex-col items-start w-[106px] flex max-991px:w-[80px] max-479px:gap-y-3 max-479px:w-24'>
                            <div className='opacity-50 tracking-[1.5px] text-[9px] font-medium leading-[13px] NeueMontreal'>CONTACT</div>
                            <div className='gap-y-2 flex-col self-stretch flex'>
                                <Link href={link.linkedin} target={"_blank"} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>LinkedIn</div>
                                    <Image
                                        src='/icons/icon-external.svg'
                                        alt='Arrow pointing up and right'
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                                <Link href={link.resume} target={"_blank"} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>Resume</div>
                                    <Image
                                        src='/icons/icon-external.svg'
                                        alt='Arrow pointing up and right'
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gap-x-12 flex-1 justify-between self-stretch items-end flex max-991px:gap-y-0 max-767px:flex-col max-767px:items-start max-479px:gap-y-8'>
                    <div className='gap-y-1 flex-col flex-1 self-stretch items-start flex max-479px:gap-y-2'>
                        <div className='tracking-[0.2px] NeueMontreal text-base font-medium max-479px:text-sm leading-[18px]'>&copy; {new Date().getFullYear()} Raeveira. All Rights Reserved.</div>
                        <div className='opacity-50 tracking-[0.2px] normal-case NeueMontreal max-479px:text-[12px] max-479px:leading-4'>Made with love, inspired by cats and their playful spirits.</div>
                    </div>
                    <div className='flex-col flex-1 justify-end self-stretch items-end flex max-767px:items-start'>
                        <div className='opacity-50 tracking-[0.2px] NeueMontreal text-xs font-light leading-5'>
                            Last updated by Rae on October 04, 2024, 21:05 CEST
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};