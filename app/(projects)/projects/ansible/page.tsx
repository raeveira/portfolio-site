'use client';
import React from 'react';
import ProjectStructure from "@/components/project/ProjectStructure";
import ProjectSectionBanner from "@/components/project/ProjectSectionBanner";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectDivider from "@/components/project/ProjectDivider";
import ProjectContext from "@/components/project/ProjectContext";
import ProjectProblem from "@/components/project/ProjectProblem";
import ProjectUpdateFlow from "@/components/project/ProjectUpdateFlow";
import ProjectLayoutPatterns from "@/components/project/ProjectLayoutPatterns";
import ProjectInteractions from "@/components/project/ProjectInteractions";
import ProjectVisualDesign from "@/components/project/ProjectVisualDesign";
import ProjectFinalDesign from "@/components/project/ProjectFinalDesign";
import ProjectRetrospective from "@/components/project/ProjectRetrospective";

export default function AnsibleProjectPage() {
    const ItemIdentifier = 1;

    return (
        <>
            <ProjectStructure ItemIdentifier={ItemIdentifier}/>
            <ProjectSectionBanner ItemIdentifier={ItemIdentifier}/>
            <main className="min-h-dvh">
                <ProjectOverview ItemIdentifier={ItemIdentifier}/>
                <ProjectHighlights ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectContext ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectProblem ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectUpdateFlow ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectLayoutPatterns ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectInteractions ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectVisualDesign ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectFinalDesign ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
                <ProjectRetrospective ItemIdentifier={ItemIdentifier}/>
                <ProjectDivider/>
            </main>
        </>
    );
}
