import React from "react";
import HighlightedBody from "@/components/HighlightedBody";

export default function Description({ content }: { content: { text: string; highlight: boolean; }[] | undefined }) {
    return (
        <div
            className={'leading-[150%] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] 1920px:text-[18px] 1920px:pr-[40px] 1440px:pr-[24px] max-991px:w-auto max-767px:text-[15px] max-479px:text-[15px]'}>
            {content?.map((item, index) => (
                <React.Fragment key={index}>
                    {item.highlight ? (
                        <HighlightedBody content={item.text}/>
                    ) : (item.text + " ")}
                </React.Fragment>
            ))}
            <br/>
        </div>
    );

}