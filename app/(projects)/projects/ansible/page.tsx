'use client';
import React from 'react';
import ProjectStructure from "@/components/project/ProjectStructure";
import ProjectSectionBanner from "@/components/project/ProjectSectionBanner";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectDivider from "@/components/project/ProjectDivider";
import ProjectContext from "@/components/project/ProjectContext";
import ProjectProblem from "@/components/project/ProjectProblem";

export default function AnsibleProjectPage() {
    return (
        <>
            <ProjectStructure ItemIdentifier={1}/>
            <ProjectSectionBanner ItemIdentifier={1}/>
            <main className="min-h-dvh">
                <ProjectOverview ItemIdentifier={1}/>
                <ProjectHighlights ItemIdentifier={1}/>
                <ProjectDivider/>
                <ProjectContext ItemIdentifier={1}/>
                <ProjectDivider/>
                <ProjectProblem ItemIdentifier={1}/>
            </main>
        </>
    );
}
