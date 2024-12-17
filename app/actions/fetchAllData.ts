'use server'

import { fetchAllDataIds } from "@/prisma/queries";
import {ExtendedProject as Project} from "@/types/ProjectType";


export const fetchData = async (): Promise<Project[] | null> => {
    const data = await fetchAllDataIds();
    if(data) return data;
    return null;
}