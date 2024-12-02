'use client'
import { motion } from 'framer-motion';
import MarkDot from "@/components/MarkDot";

const InfoPage = () => {
    return (
        <main>
            {/* hero - desktop */}
            <section className={''}>

            </section>

            {/* hero - mobile */}
            <section className={'relative flex pb-[120px] pt-[160px] items-center justify-center flex-col bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f226,#0000)] max-991px:px-[48px] max-479px:pt-[144px] max-479px:px-[24px] max-479px:pb-[62px] max-767px:flex max-767px:bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f226,#0000)]'}>
                <div className={'relative flex w-[882px] flex-col gap-y-[80px] z-[1] max-991px:w-auto max-767px:gap-y-[64px] max-479px:gap-y-[40px]'}>
                    {/* info wrapper */}
                    <motion.div className={'flex flex-col gap-y-[24px] max-479px:flex max-479px:items-start max-479px:flex-col max-479px:gap-y-[2vh]'}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className={'flex items-center self-start gap-x-[12px] max-479px:gap-x-[10px]'}>
                            <MarkDot />
                            <h1 className={'leading-[19px] font-medium text-[11px] NeueMontreal mt-[1px] tracking-[1.5px] text-left text-[#f2f2f266] max-479px:text-[10px] max-479px:leading-[16px]'}>ABOUT ME</h1>
                        </div>
                        <div className={'leading-[110%] font-medium text-[40px] NeueMontreal [text-shadow:0_4px_10px_#0057ff33,0_-4px_10px #ff5a0026,0_0_30px_#fff3] tracking-[1px] text-left max-991px:text-[42px] max-991px:leading-[110%] max-767px:-tracking-[.15vw] max-767px:text-[8vw] max-767px:leading-[110%] max-479px:text-[7.9vw] max-479px:leading-[110%] max-479px:-tracking-[.1vw]'}>
                            I&apos;m passionate about creating beautiful products that
                            <span className={'italic Gloock bg-clip-text [text-shadow:0_4px_6px_#0057ff26,0_-4px_6px_#ff5a001a,0_0_20px_#ffffff40] -tracking-[1px] bg-gradient-to-b from-onBackground from-50% to-[#f2f2f233]'}> empower people.</span>
                        </div>
                    </motion.div>
                    {/* info hero stack mobile */}
                    <div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default InfoPage;