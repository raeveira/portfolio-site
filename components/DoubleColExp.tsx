import Link from "next/link";

const DoubleColExp = ({title, subheader, date, content, link}: {
    title: string,
    subheader: string,
    date: string,
    content: string,
    link: string
}) => {
    return (
        <div
            className={'grid items-baseline self-stretch justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[48px] 1920px:gap-x-[72px] 1440px:gap-x-[56px] max-991px:gap-x-[32px] max-767px:gap-y-[16px] max-767px:grid-cols-[1fr] max-767:grid-rows-[auto_auto]'}>
            {/* title */}
            <div className={'flex flex-col gap-y-[16px]'}>
                <h2 className={'leading-[125%] font-medium text-[40px] NeueMontreal [text-shadow:none] tracking-[.1px] 1920px:text-[48px] 1920px:leading-[62px] max-767px:text-[32px] max-767px:leading-[40px] max-767px:-tracking-[.75px] max-479px:leading-[32px] max-479px:text-[28px] max-479px:tracking-[.2px]'}>{title}</h2>
                {link && (
                    <Link
                        href={link}
                        className="text-[16px] text-[#f2f2f2] hover:text-[#f2f2f2cc] transition-colors duration-300 underline underline-offset-2 decoration-[#f2f2f266] hover:decoration-[#f2f2f2cc]"
                    >
                        {link}
                    </Link>
                )}
            </div>
            {/* content */}
            <div className={'flex flex-col gap-y-[48px] pt-0 1920px:gap-y-[64px] max-767px:pt-0'}>
                <div className={'flex flex-col gap-y-[20px] 1440px:gap-y-[24px] max-767px:gap-y-[16px]'}>
                    <div
                        className={'flex flex-col gap-y-[8px] 1920px:gap-y-[10px] max-991px:gap-y-[12px] max-767px:gap-y-[4px]'}>
                        <h3 className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:text-[28px] 1920px:leading-[38px] max-479px:leading-[26px] max-479px:text-[20px] max-479px:tracking-[.2px]'}>{subheader}</h3>
                        <div
                            className={'leading-[125%] font-normal text-[16px] NeueMontreal text-[#f2f2f266] 1920px:text-[20px] 1440px:text-[10px] max-479px:leading-[19px] max-479px:text-[15px]'}>{date}</div>
                    </div>
                    <p className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:pr-[40px] 1920px:text-[20px] 1440px:text-[18px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DoubleColExp;