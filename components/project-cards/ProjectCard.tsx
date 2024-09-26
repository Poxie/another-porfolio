"use client";
import { Project as ProjectType } from "@/assets/json/types"
import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardContent from "./ProjectCardContent";
import { useRef } from "react";
import useDirectionHover from "@/hooks/useDirectionHover";
import DirectionHover from "../direction-hover";
import scrollToSection from "@/utils/scrollToSection";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function ProjectCard({ project, index }: {
    project: ProjectType;
    index: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);

    useDirectionHover(containerRef, hoverRef);
    const { initialState } = useAnimateIntoView(containerRef, {
        delay: index * 100,
    });
    return(
        <div 
            className="cut-corner border-[1px] border-secondary"
            ref={containerRef}
            style={initialState}
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