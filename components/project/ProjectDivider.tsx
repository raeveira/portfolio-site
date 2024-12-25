export default function ProjectDivider() {
    return (
        <div className={'flex items-center flex-col max-991px:px-[48px] max-767px:px-[24px] max-479px:p-0'}>
            <div className={'flex w-[882px] flex-col gap-y-[96px] 1920px:w-[1440px] 1920px:gap-y-[144px] 1440px:w-[1044px] 1440px:gap-y-[120px] max-991px:w-full max-479px:gap-y-[80px]'}>
                <div className={'flex w-full items-center gap-x-[8px]'}>
                    <div className={'h-[1px] flex-1 bg-[#f2f2f233] max-479px:h-[12px] max-479px:border-b-[1px_solid_#f2f2f226] max-479px:border-t-[1px_solid_#f2f2f226] max-479px:bg-[#000]'} />
                </div>
            </div>
        </div>
    );
}