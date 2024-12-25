import SidebarItem from "@/types/SidebarItem";
import HighlightImages from "@/types/HighlightImages";

type DescriptionItem = {
    text: string;
    highlight: boolean;
    break: boolean;
};

type SolutionDescriptionItem = {
    icons: string;
    heading: string;
    description: string;
};

export type PointsItem = {
    highlightedText: string;
    text: string;
    icon: string;
};

export type CardItem = {
    heading: string;
    description: string;
    icon: string;
};

type InformationItem = {
    subHeading: string;
    description: DescriptionItem[];
    image?: HighlightImages[];
    cards?: CardItem[];
    points?: PointsItem[];
    additionalPoints?: PointsItem[];
    additionalPoints1?: PointsItem[];
    additionalPoints2?: PointsItem[];
    discovery?: {
        heading: string;
        color: string;
        description: string;
        icon: string;
    };
};

type Content = {
    overview: {
        role: string;
        tasks: string;
        team: string;
        timeline: string;
        status: string;
        overview: string;
    };
    highlightReel: {
        calloutText: string;
        moneyshots: HighlightImages[];
    };
    context: {
        heading: string;
        subheading: string;
        description: DescriptionItem[];
        images: HighlightImages[];
    };
    problem: {
        heading: string;
        subheading: string;
        challenge: string;
        solutionMethod: string;
        solutionDescription: SolutionDescriptionItem[];
        description: DescriptionItem[];
        points: PointsItem[];
        images: HighlightImages[];
    };
    updateFlow: {
        heading: string;
        information: InformationItem[];
    };
    layoutPatterns: {
        heading: string;
        information: InformationItem[];
    };
    interactions: {
        heading: string;
        information: InformationItem[];
    };
    visualDesign: {
        heading: string;
        information: InformationItem[];
    };
    finalDesign: {
        heading: string;
        information: InformationItem[];
    };
    retrospective: {
        heading: string;
        information: InformationItem[];
    };
};

type ItemIdentifier = {
    id: string;
    text: string;
    heading: string;
    company: string;
    year: string;
    description: string;
    image: string;
    link: string;
    color_from: string;
    color_to: string;
    SidebarItems: SidebarItem[];
    Content: Content;
};

export default ItemIdentifier;