"use client";
import { Project as ProjectType } from "@/assets/json/types"
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardContent from "./ProjectCardContent";
import { useRef } from "react";
import useDirectionHover from "@/hooks/useDirectionHover";
import DirectionHover from "../direction-hover";
import scrollToSection from "@/utils/scrollToSection";

export default function ProjectCard({ project }: {
    project: ProjectType;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);

    useDirectionHover(containerRef, hoverRef);
    return(
        <div 
            className="cut-corner border-[1px] border-secondary"
            ref={containerRef}
        >
            <ProjectCardHeader project={project} />
            <ProjectCardContent project={project} />

            <DirectionHover ref={hoverRef} />

            <button
                className="absolute inset-0 w-full h-full"
                onClick={() => scrollToSection(project.id)}
            />
        </div>
    )
}