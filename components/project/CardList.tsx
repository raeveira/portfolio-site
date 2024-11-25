import {CardItem} from "@/types/ItemIdentifier";
import ContainedPointsItem from "@/components/project/ContainedPointsItem";
import HighlightedBody from "@/components/HighlightedBody";
import React from "react";

export const CardList = ({cards}: { cards: CardItem[] | undefined }) => {
    return (
        <>

            <div className={'flex flex-col space-y-12 max-767px:pt-0 max-991px:pb-10'}>
                <div className={'flex flex-col space-y-1'}>
                    {cards?.map((item, index) => {
                        const position = cards.length === 1 ? 'single' : index === 0 ? 'top' : index === cards.length - 1 ? 'bottom' : 'middle';
                        return (
                            <ContainedPointsItem key={index} position={position} imageSrc={item.icon}>
                                <>
                                    <HighlightedBody content={item.heading}/>
                                    <br/><br/>
                                    {item.description}
                                </>
                            </ContainedPointsItem>
                        )
                    })}
                </div>

            </div>

        </>
    )
};