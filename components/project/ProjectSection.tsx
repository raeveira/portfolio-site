'use client';
import React, {useEffect, useState} from 'react';
import ProjectCard from '@/components/project/ProjectCard';
import {fetchData} from '@/app/actions/fetchAllData';
import {Project} from '@prisma/client';

export default function ProjectSection() {
    const [projects, setProject] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await fetchData();
            if (data) setProject(data);
        }

        fetchProjects().then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        )
    }

    if (!projects) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-xl text-gray-600">Error loading projects. Please try again later.</p>
            </div>
        )
    }

    if (projects.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center h-64 space-y-4">
                <p className="text-xl text-gray-600">No projects found.</p>
            </div>
        )
    }

    return (
        <section
            className={'relative flex pb-[200px] pt-6 items-center flex-col gap-y-20 1920px:pt-16 max-991px:items-stretch max-991px:px-12 max-767px:px-6 max-767px:pt-12 max-479px:gap-y-10 max-479px:pt-0 max-479px:px-4 max-479px:pb-20'}>
            <div
                className={'relative flex w-[882px] items-stretch flex-col gap-y-10 1920px:gap-y-20 1920px:w-[1440px] 1440px:w-[1044px] max-991px:w-auto max-479px:gap-y-10'}>
                {projects && projects.map((item, index) => (
                    <ProjectCard key={index} ProjectID={item.id}/>
                ))}
            </div>
        </section>
    )
}