import React from "react";

export default function HighlightedBody({ content }: {content: string}) {
    return (
        <span
            className={'font-normal highlighted-text text-[#f2f2f2e6]'}>{content + " "}</span>
    );
}