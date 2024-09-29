"use client";
import { Project as ProjectType } from "@/assets/json/types"
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

export default function Project({ project, index, reversed }: {
    project: ProjectType;
    index: number;
    reversed: boolean;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    return(
        <div 
            id={project.id}
            className={twMerge(
                "py-16 flex items-center gap-8 flex-col md:flex-row lg:gap-32",
                reversed && 'md:flex-row-reverse',
            )}
            ref={containerRef}
        >
            <ProjectInfo 
                siblingRef={containerRef}
                project={project}
                index={index}
            />
            <ProjectImage 
                project={project} 
                siblingRef={containerRef}
            />
        </div>
    )
}