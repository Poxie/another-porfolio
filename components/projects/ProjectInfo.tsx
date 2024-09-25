import { Project } from "@/assets/json/types";
import { useTranslations } from "next-intl";

export default function ProjectInfo({ project, index }: {
    project: Project;
    index: number;
}) {
    const t = useTranslations('projects');

    const projectIndex = (index + 1).toString().padStart(2, '0');
    const projectTitle = t(`${project.id}.title`);
    const projectDescription = t(`${project.id}.longDescription`);
    return(
        <div className="relative flex-1">
            <span className="z-[-1] absolute bottom-full -translate-x-[35%] translate-y-[35%] text-9xl font-extrabold text-transparent stroke-1 stroke-secondary">
                {projectIndex}
            </span>
            <span className="text-5xl font-semibold">
                {projectTitle}
            </span>
            <p className="mt-4 text-xl text-secondary">
                {projectDescription}
            </p>
        </div>
    )
}