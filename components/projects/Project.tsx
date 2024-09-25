"use client";
import { Project as ProjectType } from "@/assets/json/types"
import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";
import { useRef } from "react";

export default function Project({ project }: {
    project: ProjectType;
}) {
    const hoverRef = useRef<HTMLDivElement>(null);

    const getDistances = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return {
            top: y,
            left: x,
            right: rect.width - x,
            bottom: rect.height - y,
        };
    }
    const getMouseSide = (e: React.MouseEvent) => {
        const distances = getDistances(e);
        
        return Object.keys(distances).reduce((a, b) => (
            distances[a as keyof typeof distances] < distances[b as keyof typeof distances] ? a : b
        ));
    }

    const clearTransition = () => {
        if(!hoverRef.current) return;
        hoverRef.current.style.transition = 'none';
    }
    const setTransition = () => {
        if(!hoverRef.current) return;
        hoverRef.current.style.transition = 'left .3s, top .3s';
    }
    const setStartingPositions = (side: string) => {
        if (!hoverRef.current) return;

        let left: string;
        if(side === 'left') {
            left = '-100%';
        } else if(['top', 'bottom'].includes(side)) {
            left = '0';
        } else {
            left = '100%';
        }

        let top: string;
        if(side === 'top') {
            top = '-100%';
        } else if(['left', 'right'].includes(side)) {
            top = '0';
        } else {
            top = '100%';
        }

        hoverRef.current.style.top = top;
        hoverRef.current.style.left = left;
    }
    const setActivePosition = () => {
        if(!hoverRef.current) return;

        hoverRef.current.style.left = '0';
        hoverRef.current.style.top = '0';
    }

    const handleEnter = (e: React.MouseEvent) => {
        if(!hoverRef.current) return;

        const entrySide = getMouseSide(e);

        clearTransition();
        setStartingPositions(entrySide);

        setTimeout(() => {
            if(!hoverRef.current) return;

            setTransition();
            setActivePosition();
        });
    };

    const handleLeave = (e: React.MouseEvent) => {
        if(!hoverRef.current) return;

        const exitSide = getMouseSide(e);

        setTransition();
        setStartingPositions(exitSide);
    };

    return(
        <div 
            className="cut-corner border-[1px] border-secondary"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <ProjectHeader project={project} />
            <ProjectContent project={project} />

            <div className="z-[-1] absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none">
                <div 
                    className="absolute -top-full -left-full w-full h-full bg-secondary/20"
                    ref={hoverRef}
                />
            </div>
        </div>
    )
}