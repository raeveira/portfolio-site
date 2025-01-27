import Link from "next/link";
import {ExternalLink} from "lucide-react";

const FriendBlock = ({name, role, linkUrl, linkName}: {name: string, role: string, linkUrl: string, linkName: string}) => {
    return (
        <div className={'flex items-start flex-col gap-y-[8px] 1920px:gap-y-[16px]'}>
            <div className={'flex flex-col gap-y-[6px] 1920px:gap-y-[12px]'}>
                <h3 className={'leading-[125%] font-medium text-[24px] NeueMontreal pr-[24px] flex-[0_auto] tracking-[.1px] 1920px:leading-[38px] 1920px:text-[28px] max-479px:leading-[26px] max-479px:text-[20px] max-479px:tracking-[.2px]'}>{name}</h3>
                <h4
                    className={
                        'leading-[125%] font-light text-[16px] NeueMontreal text-[#f2f2f266] tracking-[.5px] 1920px:text-[20px] 1440px:text-[18px] max-479px:text-[15px] max-479px:leading-[19px] break-words overflow-hidden'
                    }
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                    }}
                >
                    {role}
                </h4>
            </div>
            <Link href={linkUrl}
                  className={'flex bg-[#0000] max-w-full transition-opacity duration-400 no-underline py-[4px] items-center flex-row opacity-60 gap-x-[4px] hover:outline-0 hover:opacity-100'}>
                <div
                    className={'no-underline leading-[125%] text-[16px] NeueMontreal tracking-[.2px] text-onBackground 1920px:text-[20px] 1440px:text-[18px]'}>{linkName}</div>
                <ExternalLink size={20} className={'text-onBackground'} />
            </Link>
        </div>
    )
}

export default FriendBlock;