'use client'
import { motion } from "framer-motion";

export default function Shine() {
    return (
        <motion.div
            className='transform-style-preserve-3d rotate-[15deg] gap-6 opacity-15 blur-md h-[200%] pb-0 pr-0 flex absolute inset-[0%] min-[1920px]:gap-x-12 min-[1440px]:gap-x-10'
            initial={{ opacity: 0, x: '-25vw' }}
            animate={{ opacity: [0.15, 0.15, 0, 0], x: ['-25vw', '80vw', '80vw', '-25vw'] }}
            transition={{
                duration: 7,
                times: [0, 0.4286, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={{ rotateZ: '15deg' }}
        >
            <div className="bg-[#fff] w-4 min-[1920px]:w-12 min-[1440px]:w-10" />
            <div className="bg-[#fff] w-16 min-[1920px]:w-[120px] min-[1440px]:w-24" />
        </motion.div>
    );
};
