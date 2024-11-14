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

type InformationItem = {
    subheading: string;
    description: DescriptionItem[];
    image?: HighlightImages[];
    points?: PointsItem[];
    additionalPoints?: PointsItem[];
    discovery?: string;
};

type Content = {
    overview: {
        role: string;
        tasks: string;
        team: string[];
        timeline: string;
        status: string;
        overview: string[];
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
    LayoutPatterns: {
        heading: string;
        information: InformationItem[];
    };
};

type ItemIdentifier = {
    id: number;
    text: string;
    heading: string;
    company: string;
    year: string;
    description: string;
    image: string;
    link: string;
    color_from: string;
    color_to: string;
    SidebarItem: SidebarItem[];
    content: Content;
};

export default ItemIdentifier;