"use client";
import { Project } from "@/assets/json/types";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import useIsWithinScroll from "@/hooks/useIsWithinScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function ProjectImage({ project }: {
    project: Project;
}) {
    const t = useTranslations('projects');

    const coverRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const visible = useIsWithinScroll(coverRef);
    useAnimateIntoView(imageRef, {
        initialState: { opacity: 0 },
        delay: 1050,
        duration: 0,
        siblingRef: coverRef,
    });

    const alt = `${t(`${project.id}.title`)}'s preview image`;
    return(
        <div className="cut-corner flex-1 aspect-video border-[1px] border-secondary">
            <div className="h-full relative overflow-hidden">
                <div 
                    ref={coverRef}
                    className={twMerge(
                        "z-[1] absolute -left-full top-0 w-full h-full bg-secondary",
                        visible && 'left-full transition-[left,top] duration-[3s] ease-in-out'
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
        </div>
    )
}