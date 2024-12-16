import {
    Project as PrismaProject,
    SidebarItems,
    Content,
    LayoutPatterns,
    UpdateFlow,
    HighlightReel,
    Overview,
    Context,
    Problem, InformationItem, DescriptionItems, HighLightImages, CardItem, PointsItem, DiscoveryItem, Interactions
} from '@prisma/client';

export type ExtendedProject = PrismaProject & {
    SidebarItems: SidebarItems[];
    Content: ExtendedContent;
};

export type ExtendedContent = Content & {
    overview: Overview;
    highlightReel: HighlightReel;
    context: Context;
    problem: Problem;
    updateFlow: UpdateFlow;
    layoutPatterns: ExtendedLayoutPatterns;
    interactions: ExtendedInteractions;
};

export type ExtendedLayoutPatterns = LayoutPatterns & {
    information: ExtendedInformation[];
}

export type ExtendedInformation = InformationItem & {
    description: DescriptionItems[];
    image: HighLightImages[];
    cards: CardItem[];
    points: PointsItem[];
    additionalPoints: PointsItem[];
    additionalPoints1: PointsItem[];
    additionalPoints2: PointsItem[];
    discovery: DiscoveryItem;
}

export type ExtendedInteractions = Interactions & {
    information: ExtendedInformation[];
};