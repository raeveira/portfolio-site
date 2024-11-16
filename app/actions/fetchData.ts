'use server';
import Items from "@/data/projectItems";

const fetchData = async ({id}: { id: number }) => {
    const items = Items.find((item) => item.id === id);
    if(items) {
        return items;
    }
};

export default fetchData;