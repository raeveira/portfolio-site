import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectCardSkeleton() {
    return (
        <div className="outline -outline-offset-1 bg-[#f2f2f20a] rounded-3xl outline-1 outline-[#f2f2f20d] self-stretch p-2 relative shadow-projectCardOutline 1920px:rounded-[36px] 1920px:p-3">
            <div className="z-[1] bg-[linear-gradient(to_right,rgba(0,0,0,0)_5%,rgba(255,252,255,0.05)_35%,rgba(255,255,255,0.05)_50%,rgba(255,252,255,0.05)_65%,rgba(0,0,0,0)_95%)]" />
            <div className="bg-[#0000] max-w-full overflow-hidden h-[500px] gap-y-14 pt-8 px-5 relative flex flex-col rounded-2xl border border-solid border-[#3d3d3d] text-onBackground max-991px:h-auto max-479px:gap-y-12 max-479px:pt-[26px] max-479px:px-6 1440px:gap-y-16 1440px:h-[696px] 1440px:pt-9 1440px:px-8 1920px:gap-y-[88px] 1920px:rounded-[24px] 1920px:h-[960px] 1920px:pt-[44px] 1920px:px-[44px]">
                <div className="z-[1] absolute inset-0/0/auto h-[1px] -mb-[1px] max-479px:bg-gradient-to-r max-479px:from-[#0000] from-15% via-[#ffffff0d] via-50% to-[#0000] to-85%" />
                <div className="z-[1] gap-y-2 flex-col items-start flex relative max-767px:gap-y-2 1920px:gap-y-3">
                    <div className="justify-between self-stretch items-center flex">
                        <Skeleton className="h-8 w-3/4 1920px:h-10 bg-[#ffffff0d]" />
                        <Skeleton className="h-8 w-8 1920px:h-12 1920px:w-12 bg-[#ffffff0d]" />
                    </div>
                    <Skeleton className="h-20 w-full bg-[#ffffff0d]" />
                </div>
                <Skeleton className="z-[1] self-center w-[90%] h-[300px] relative rounded-xl rounded-b-none max-767px:w-full 1440px:h-[400px] 1920px:h-[600px] bg-[#ffffff0d]" />
            </div>
        </div>
    )
}