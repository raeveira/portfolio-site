'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScrollArrow() {
  return (
    <motion.div
      className="flex justify-center items-center"
      animate={{
        y: [0, 24, 0], // TranslateY from 0px to 24px and back to 0px
        opacity: [1, 0.4, 1], // Opacity fades when it moves up
      }}
      transition={{
        duration: 1.5, // Duration of one complete animation cycle
        ease: 'easeInOut',
        repeat: Infinity, // Loop the animation infinitely
      }}
    >
      <Image
        src={'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg'}
        alt="scroll down arrow icon"
        width={40}
        height={40}
      />
    </motion.div>
  );
}
