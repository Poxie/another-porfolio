"use client";
import { Project } from "@/assets/json/types";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import useIsWithinScroll from "@/hooks/useIsWithinScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import ProjectPreview from "./ProjectPreview";

export default function ProjectImage({ project, siblingRef }: {
    project: Project;
    siblingRef?: React.RefObject<HTMLElement>;
}) {
    const t = useTranslations('projects');

    const coverRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useAnimateIntoView(coverRef, {
        initialState: { left: '-100%' },
        state: { left: '100%' },
        duration: 2700,
        siblingRef,
    });
    useAnimateIntoView(imageRef, {
        initialState: { opacity: 0 },
        delay: 800,
        duration: 0,
        siblingRef,
    });

    const alt = `${t(`${project.id}.title`)}'s preview image`;
    return(
        <div className="cut-corner flex-1 aspect-video border-[1px] border-secondary">
            <ProjectPreview url={project.demo}>
                <div className="h-full relative overflow-hidden">
                    <div 
                        ref={coverRef}
                        className={twMerge(
                            "z-[1] absolute -left-full top-0 w-full h-full bg-secondary",
                        )}
                    />
                    <Image 
                        ref={imageRef}
                        className="opacity-0 h-full w-full object-cover"
                        src={`/imgs/projects/${project.image}`}
                        width={472}
                        height={284}
                        alt={alt}
                    />
                </div>
            </ProjectPreview>
        </div>
    )
}