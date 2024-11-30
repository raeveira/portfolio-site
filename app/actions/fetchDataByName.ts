'use server'
import Items from '@/data/projectItems';

const fetchDataByName = async ({name}: { name: string }) => {
    const items = Items.find((item) => item.text.toLowerCase() === name.toLowerCase());
    if(items) {
        return items.id;
    }
}

export default fetchDataByName;