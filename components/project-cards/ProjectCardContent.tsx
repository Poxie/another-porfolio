import { Project } from "@/assets/json/types"
import { useTranslations } from "next-intl";

export default function ProjectContent({ project }: {
    project: Project;
}) {
    const t = useTranslations('projects');

    const projectDescription = t(`${project.id}.description`);
    const projectDate = t(`${project.id}.date`);
    return(
        <div className="px-4 py-3.5 grid gap-4 text-secondary">
            <span>
                {projectDescription}
            </span>

            <div className="flex justify-between text-sm">
                <span>
                    {project.tech.join(', ')}
                </span>
                <span>
                    {projectDate}
                </span>
            </div>
        </div>
    )
}