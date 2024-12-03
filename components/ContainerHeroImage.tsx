import Image from "next/image";

const ContainerHeroImage = ({imageSrc}: {imageSrc: string}) => {
    return (
        <div className={'relative w-auto z-[3]'}
        >
            <div
                className={'-mb-[1px] h-[1px] inset-0/0/auto absolute z-[1] bg-[linear-gradient(to_right,#0000_5%,#fffc_35%,#fff_50%,#fffc_65%,#0000_95%)]'}/>
            <div
                className={'shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_30px_80px_#00000080] overflow-hidden p-[8px] outline-1 outline-[#f2f2f226] outline rounded-[24px] bg-hero-radial-far -outline-offset-1 backdrop-filter-none max-767px:backdrop-blur-[50px] max-767px:shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_20px_80px_#000c]'}>
                <div
                    className={'-mb-[2px] h-[2px] bg-gradient-to-r from-[#0000] from-10% via-[#fff] via-50% to-[#0000] to-90%'}/>
                <div
                    className={'shadow-[inset_0_0_10px_#0000001a,0_0_12px_#0006] overflow-hidden rounded-[16px] border-solid border border-[#f2f2f24d] backdrop-blur-[20px]'}>
                    <div
                        className={'relative  pt-[80px] px-[56px] pb-[192px] items-stretch justify-around auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] flex-col bg-[#101010b3] gap-y-[0px] gap-x-[32px] z-[5] max-991px:gap-y-[32px] max-991px:pt-[8vw] max-991px:px-[5vw] max-991px:pb-[26vw] max-767px:pb-[28vw] p-0'}>
                        <Image src={imageSrc} alt={'selfie'} width={442} height={663}
                               className={'max-w-full inline-block align-middle'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerHeroImage;