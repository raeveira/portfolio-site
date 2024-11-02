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

    }
}

export default ItemIdentifier;