'use client';
import React, {useEffect, useState} from 'react';
import ProjectCard from '@/components/project/ProjectCard';
import { fetchData } from '@/app/actions/fetchAllData';
import ItemIdentifier from "@/types/ItemIdentifier";

export default function ProjectSection() {
    const [projects, setProject] = useState<ItemIdentifier[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await fetchData();
            if(data) setProject(data);
        }

        fetchProjects().then(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Project Loading</div>
    }

    if (!projects) {
        return <div>Project not found</div>;
    }

    return (
        <section className={'relative flex pb-[200px] pt-6 items-center flex-col gap-y-20 1920px:pt-16 max-991px:items-stretch max-991px:px-12 max-767px:px-6 max-767px:pt-12 max-479px:gap-y-10 max-479px:pt-0 max-479px:px-4 max-479px:pb-20'}>
            <div className={'relative flex w-[882px] items-stretch flex-col gap-y-10 1920px:gap-y-20 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto max-479px:gap-y-10'}>
                {projects && projects.map((item, index) => (
                    <ProjectCard key={index} ItemIdentifier={item.id} />
                ))}
            </div>
        </section>
    )
}