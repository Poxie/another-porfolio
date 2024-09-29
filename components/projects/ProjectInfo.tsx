"use client";
import { Project } from "@/assets/json/types";
import { useTranslations } from "next-intl";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectLinks from "./ProjectLinks";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import { twMerge } from "tailwind-merge";

export default function ProjectInfo({ project, index, siblingRef }: {
    project: Project;
    index: number;
    siblingRef?: React.RefObject<HTMLElement>;
}) {
    const t = useTranslations('projects');

    const titleRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const { initialState } = useAnimateIntoView(titleRef, { siblingRef });
    useAnimateIntoView(descriptionRef, {
        delay: 200,
        siblingRef,
    });
    useAnimateIntoView(buttonRef, {
        delay: 400,
        siblingRef,
    });

    const projectIndex = (index + 1).toString().padStart(2, '0');
    const projectTitle = t(`${project.id}.title`);
    const projectDescription = t(`${project.id}.longDescription`);
    return(
        <div className="relative flex-1">
            <span 
                className={twMerge(
                    "z-[-1] absolute bottom-full text-9xl font-extrabold text-transparent stroke-1 stroke-secondary",
                    "right-0 translate-y-[45%] md:translate-y-[35%] md:-translate-x-[35%] md:right-[unset]"
                )}
            >
                {projectIndex}
            </span>
            <span 
                className="block text-5xl font-semibold"
                style={initialState}
                ref={titleRef}
            >
                {projectTitle}
            </span>
            <p 
                className="mt-4 text-xl text-secondary"
                style={initialState}
                ref={descriptionRef}
            >
                {projectDescription}
            </p>
            <div className="mt-6 flex gap-4 items-center">
                <Button 
                    style={initialState}
                    href={project.demo}
                    ref={buttonRef}
                >
                    {t('viewProject')}
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                    />
                </Button>

                <ProjectLinks 
                    project={project}
                    siblingRef={siblingRef}
                />
            </div>
        </div>
    )
}