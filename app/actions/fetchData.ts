'use server';
import {fetchDataById} from "@/prisma/queries";
import ItemIdentifier from "@/types/ItemIdentifier";

const fetchData = async ({id}: { id: string }): Promise<ItemIdentifier> => {

    const items = await fetchDataById({id});
    console.log(items);
    if (!items) {
        console.log('id: ', id);
        throw new Error('Item not found');
    }
    return items;
};

export default fetchData;