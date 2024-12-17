import {
    Project as PrismaProject,
    SidebarItems,
    Content,
    LayoutPatterns,
    UpdateFlow,
    HighlightReel,
    Overview,
    Context,
    Problem,
    InformationItem,
    DescriptionItems,
    HighLightImages,
    CardItem,
    PointsItem,
    DiscoveryItem,
    Interactions,
    VisualDesign,
    FinalDesign,
    Retrospective, SolutionDescriptionItem
} from '@prisma/client';

export type ExtendedProject = PrismaProject & {
    SidebarItems: SidebarItems[];
    Content: ExtendedContent;
};

export type ExtendedContent = Content & {
    overview: Overview | null;
    highlightReel: ExtendedHighlightReel | null;
    context: ExtendedContext | null;
    problem: ExtendedProblem | null;
    updateFlow: ExtendedUpdateFlow | null;
    layoutPatterns: ExtendedLayoutPatterns | null;
    interactions: ExtendedInteractions | null;
    visualDesign: ExtendedVisualDesign | null;
    finalDesign: ExtendedFinalDesign | null;
    retrospective: ExtendedRetrospective | null;
};

export type ExtendedHighlightReel = HighlightReel & {
    moneyshots: HighLightImages[];
};

export type ExtendedContext = Context & {
    description: DescriptionItems[];
    images: HighLightImages[];
};

export type ExtendedProblem = Problem & {
    description: DescriptionItems[];
    solutionMethod: string;
    solutionDescription: SolutionDescriptionItem[];
    points: PointsItem[];
    images: HighLightImages[];
};

export type ExtendedUpdateFlow = UpdateFlow & {
    information: ExtendedInformation[];
};

export type ExtendedLayoutPatterns = LayoutPatterns & {
    information: ExtendedInformation[];
};

export type ExtendedInteractions = Interactions & {
    information: ExtendedInformation[];
};

export type ExtendedVisualDesign = VisualDesign & {
    information: ExtendedInformation[];
};

export type ExtendedFinalDesign = FinalDesign & {
    information: ExtendedInformation[];
};

export type ExtendedRetrospective = Retrospective & {
    information: ExtendedInformation[];
};

export type ExtendedInformation = InformationItem & {
    description: DescriptionItems[];
    image: HighLightImages[];
    cards: CardItem[];
    points: PointsItem[];
    additionalPoints: PointsItem[];
    additionalPoints1: PointsItem[];
    additionalPoints2: PointsItem[];
    discovery: DiscoveryItem | null;
};
