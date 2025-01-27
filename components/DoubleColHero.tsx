import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const DoubleColHero = ({imageSrc, imageSrc1, text, text1, text2, text3, text4, text5, children}: {
    imageSrc: string,
    imageSrc1?: string,
    text: string,
    text1?: string,
    text2?: string,
    text3?: string,
    text4?: string,
    text5?: string,
    children?: React.ReactNode
}) => {
    return (
        <div
            className={'grid items-start self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px]'}
        >
            <motion.div
                className={'flex flex-col gap-y-[64px] 1920px:gap-y-[88px] 1440px:gap-y-[64px]'}
                animate={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 1, delay: 1.5}}
            >
                <div className={'relative z-[3] w-auto'}>
                    <div
                        className={'-mb-[1px] h-[1px] inset-0/0/auto absolute z-[1] bg-[linear-gradient(to_right,#0000_5%,#fffc_35%,#fff_50%,#fffc_65%,#0000_95%)]'}/>
                    <div
                        className={'shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_30px_80px_#00000080] overflow-hidden p-[8px] outline outline-solid outline-[#f2f2f226] bg-hero-radial-far -outline-offset-1 backdrop-filter-none 1920px:border 1920px:rounded-[36px] 1920px:p-[12px] 1440px:p-[8px] 1440px:rounded-[24px]'}>
                        <div
                            className={'-mb-[2px] h-[2px] bg-gradient-to-r from-[#0000] from-10% via-[#fff] via-50% to-[#0000] to-90%'}/>
                        <div
                            className={'shadow-[inset_0_0_10px_#0000001a,0_0_12px_#0006] overflow-hidden rounded-[16px] border border-solid border-[#f2f2f24d] backdrop-blur-[20px] 1920px:shadow-[inset_0_0_15px_#0000001a,0_0_20px_#0000004d] 1920px:rounded-[24px]'}>
                            <div
                                className={'relative flex p-0 items-stretch justify-around auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] flex-col bg-[#101010b3] gap-y-[0px] gap-x-[32px] z-[5] 1920px:backdrop-filter-none 1920px:flex-col 1920px:p-0 1440px:gap-x-[62px] 1440px:gap-y-[0px] 1440px:p-0'}>
                                <Image src={imageSrc} alt={'selfie'}
                                       sizes={'(max-width: 767px) 100vw, (max-width: 991px) 42vw, (max-width: 1439px) 339px, (max-width: 1919px) 476px, 658px'}
                                       width={442} height={663}
                                       className={'max-w-full inline-block align-middle object-cover w-full h-full'}
                                       loading={'lazy'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={'leading-[150%] px-[24px] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:leading-[160%] 1920px:text-[20px] 1920px:px-[48px] 1440px:px-[32px] 1440px:text-[18px]'}>
                                <span
                                    className={'font-medium text-[18px] text-[#f2f2f2e6] 1920px:text-[24px] 1920px:leading-[125%] 1440px:text-[20px]'}>{text}</span>
                    {text1 && (<><br/><br/>{text1}</>)}
                    {text2 && (<><br/><br/>{text2}</>)}
                    <br/>
                    {children && (<><br/><br/>{children}</>)}
                </div>
            </motion.div>
            <motion.div
                className={'flex flex-col gap-y-[64px] 1920px:gap-y-[88px] 1440px:gap-y-[64px] pt-[48px] 1920px:pt-[80px]'}
                animate={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 1, delay: 1.5}}
            >
                <div
                    className={'leading-[150%] px-[24px] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:leading-[160%] 1920px:text-[20px] 1920px:px-[48px] 1440px:px-[32px] 1440px:text-[18px]'}>
                                <span
                                    className={'font-medium text-[18px] text-[#f2f2f2e6] 1920px:text-[24px] 1920px:leading-[125%] 1440px:text-[20px]'}>{text3}</span>
                    {text4 && (<><br/><br/>{text4}</>)}
                    {text5 && (<><br/><br/>{text5}</>)}
                    <br/>
                </div>
                <div className={'relative w-auto z-[3]'}>
                    <div
                        className={'-mb-[1px] h-[1px] inset-0/0/auto absolute z-[1] bg-[linear-gradient(to_right,#0000_5%,#fffc_35%,#fff_50%,#fffc_65%,#0000_95%)]'}/>
                    <div
                        className={'shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_30px_80px_#00000080] overflow-hidden p-[8px] outline outline-solid outline-[#f2f2f226] bg-hero-radial-far -outline-offset-1 backdrop-filter-none 1920px:border 1920px:rounded-[36px] 1920px:p-[12px] 1440px:p-[8px] 1440px:rounded-[24px]'}>
                        <div
                            className={'-mb-[2px] h-[2px] bg-gradient-to-r from-[#0000] from-10% via-[#fff] via-50% to-[#0000] to-90%'}/>
                        <div
                            className={'shadow-[inset_0_0_10px_#0000001a,0_0_12px_#0006] overflow-hidden rounded-[16px] border border-solid border-[#f2f2f24d] backdrop-blur-[20px] 1920px:shadow-[inset_0_0_15px_#0000001a,0_0_20px_#0000004d] 1920px:rounded-[24px]'}>
                            <div
                                className={'relative flex p-0 items-stretch justify-around auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] flex-col bg-[#101010b3] gap-y-[0px] gap-x-[32px] z-[5] 1920px:backdrop-filter-none 1920px:flex-col 1920px:p-0 1440px:gap-x-[62px] 1440px:gap-y-[0px] 1440px:p-0'}>
                                {imageSrc1 && (<Image src={imageSrc1} alt={'selfie'}
                                                      sizes={'(max-width: 767px) 100vw, (max-width: 991px) 42vw, (max-width: 1439px) 339px, (max-width: 1919px) 476px, 658px'}
                                                      width={442} height={663}
                                                      className={'max-w-full inline-block align-middle object-cover w-full h-full'}
                                                      loading={'lazy'}
                                />)}

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default DoubleColHero;