import { Project } from "@/assets/json/types";
import ProjectCardLinks from "./ProjectCardLinks";
import { useTranslations } from "next-intl";

export default function ProjectHeader({ project }: {
    project: Project;
}) {
    const t = useTranslations('projects');

    const projectTitle = t(`${project.id}.title`);
    return(
        <div className="px-4 py-3.5 flex justify-between items-center border-b-[1px] border-b-secondary">
            <span className="text-2xl">
                {projectTitle}
            </span>
            <ProjectCardLinks project={project} />
        </div>
    )
}