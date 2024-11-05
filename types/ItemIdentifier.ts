import SidebarItem from "@/types/SidebarItem";
import HighlightImages from "@/types/HighlightImages";

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
    content: {
        overview: {
            role: string;
            tasks: string;
            team: string[];
            timeline: string;
            status: string;
            overview: string[];
        }
        hightlightReel: {
            calloutText: string;
            moneyshots: HighlightImages[];
        }
        context: {
            heading: string;
            subheading: string;
            description: { text: string; highlight: boolean; }[];
            images: HighlightImages[];
        },
        problem: {
            heading: string;
            subheading: string;
            challenge: string;
            solutionMethod: string;
            solutionDescription: {icons: string, heading: string, description: string}[];
            description: { text: string; highlight: boolean; }[];
            points: { highlightedText: string; text: string; icon: string; }[];
            images: HighlightImages[];
        }
    }
}

export default ItemIdentifier;