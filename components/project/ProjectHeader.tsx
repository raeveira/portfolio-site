'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';

const inter = Inter({
    style: 'normal',
    weight: ['400', '700'],
    display: 'swap',
    adjustFontFallback: true,
    fallback: ['Arial', 'sans-serif'],
    preload: true,
    subsets: ['latin'],
});

export default function ProjectHeader() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className="inset-0/0/auto fixed flex px-[48px] justify-between bg-gradient-to-b from-[#00000040] to-[#0000] z-[9] pointer-events-none h-[104px] 1920px:h-[144px] 1440px:h-[120px] max-767px:px-6 max-767px:from-[#00000080] max-479px:py-6 max-479px:px-4 max-479px:h-auto max-479px:items-start">
            <Link href={'/'} className={'max-w-full flex transition-all duration-400 no-underline py-[10px] pr-6 pl-3 items-center rounded-[100px] border-solid border border-[#f2f2f20a] bg-[#f2f2f226] text-onBackground backdrop-blur-[10px] gap-x-2 pointer-events-auto self-center max-479px:self-auto max-479px:relative hover:bg-[#f2f2f233] hover:border-[#f2f2f21a]'}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    animate={{ x: isHovered ? -4 : 0 }}
                    transition={{ duration: 0.2, ease: 'linear' }}
                >
                    <Image src={'/icons/arrow-left.svg'} alt={'arrow pointing left'} width={24} height={24} className={'max-w-full w-[20px] inline-block border-0 !fill-onBackground'} loading={"lazy"} />
                </motion.div>
                <div className={'font-medium text-[16px] -tracking-[.5px] pointer-events-auto text-onBackground' + inter.className}>Back</div>
            </Link>
        </header>
    )
}