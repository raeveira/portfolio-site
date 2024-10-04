'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScrollArrow() {
  return (
    <motion.div
      className="flex justify-center items-center"
      animate={{
        y: [0, 24, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      <Image
        src={'/icons/arrow-down.svg'}
        alt="scroll down arrow icon"
        width={40}
        height={40}
        className='opacity-50 block min-[1920px]:w-[48px] min-[1440px]:h-[48px] min-[1440px]:w-[48px] max-[479px]:z-[1] max-[479px]:opacity-100 max-[479px]:w-[24px] max-[479px]:h-auto max-[479px]:relative max-[479px]:-ml-[2px]'
      />
    </motion.div>
  );
}
