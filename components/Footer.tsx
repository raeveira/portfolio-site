import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    const link = {
        linkedin: 'https://www.linkedin.com/in/dylanbackes/',
        resume: 'https://drive.google.com/file/d/1pTNYEs-n9ItmKb7zdPGaqmZCyEM2dsf6/view?usp=sharing'
    };

    return (
        <footer className='border-t border-solid border-[#f2f2f21a] justify-center pt-[88px] pb-[80px] flex relative inset-0/0/auto'>
            <div className='gap-y-16 flex-col w-[882px] flex min-[1440px]:w-[1044px]'>
                <div className='justify-between flex'>
                    <Image
                        src='/logos/logo-nbg.png'
                        alt='Logo'
                        className='h-12 w-auto'
                        width={50}
                        height={50}
                    />
                    <div className='gap-x-12 flex'>
                        <div className='gap-y-4 flex-col items-start w-[106px] flex'>
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
                        <div className='gap-y-4 flex-col items-start w-[106px] flex'>
                            <div className='opacity-50 tracking-[1.5px] text-[9px] font-medium leading-[13px] NeueMontreal'>CONTACT</div>
                            <div className='gap-y-2 flex-col self-stretch flex'>
                                <Link href={link.linkedin} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>LinkedIn</div>
                                    <Image
                                        src='icon-external.svg'
                                        alt='LinkedIn Icon'
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                                <Link href={link.resume} className='gap-x-1 text-onBackground self-stretch items-center h-10 no-underline flex'>
                                    <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>Resume</div>
                                    <Image
                                        src='icon-external.svg'
                                        alt='LinkedIn Icon'
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gap-x-12 flex-1 justify-between self-stretch items-end flex'>
                    <div className='gap-y-1 flex-col flex-1 self-stretch items-start flex'>
                        <div className='tracking-[0.2px] NeueMontreal text-base font-medium'>&copy; {new Date().getFullYear()} Raeveira. All Rights Reserved.</div>
                        <div className='opacity-50 tracking-[0.2px] normal-case NeueMontreal'>Made with love and Mango Green Teas (50% sugar, less ice)</div>
                    </div>
                    <div className='flex-col flex-1 justify-end self-stretch items-end flex'>
                        <div className='opacity-50 tracking-[0.2px] NeueMontreal text-xs font-light leading-5'>
                            Last updated by Rae on September 25, 2024, 18:37 CEST
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};