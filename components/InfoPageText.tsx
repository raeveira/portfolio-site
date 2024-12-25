import React from "react";

const InfoPageText = ({text, text1, text2, children}: { text: string, text1: string | undefined, text2: string | undefined, children?: React.ReactNode }) => {
    return (
        <div
            className={'leading-[150%] px-[24px] font-light text-[16px] NeueMontreal flex-1 tracking-[.4px] text-[#f2f2f299] max-991px:w-auto max-767px:text-[15px] '}>
                  <span className={'font-medium text-[18px] text-[#f2f2f2e6]'}>
                     {text}
                      {text1 && (<><br/><br/></>)}
                   </span>
            {text1}
            {text2 && (<><br/><br/></>)}
            {text2}
            {children && (<><br/><br/></>)}
            {children}
            <br/>
        </div>
    )
}

export default InfoPageText;