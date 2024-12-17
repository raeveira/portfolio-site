'use server';
import {fetchDataById} from "@/prisma/queries";
import {ExtendedProject as Project} from "@/types/ProjectType";

const fetchData = async ({id}: { id: string }): Promise<Project | null> => {

    const items = await fetchDataById({id});
    console.log(items);
    if (!items) {
        console.log('id: ', id);
        throw new Error('Item not found');
    }
    return items || null;
};

export default fetchData;