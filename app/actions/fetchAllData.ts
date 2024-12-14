'use server'

import { fetchAllDataIds } from "@/prisma/queries";

export const fetchData = async () => {
    const data = await fetchAllDataIds();
    if(data) return data;
}