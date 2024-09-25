import { Project as ProjectType } from "@/assets/json/types"
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import { twMerge } from "tailwind-merge";

export default function Project({ project, index, reversed }: {
    project: ProjectType;
    index: number;
    reversed: boolean;
}) {
    return(
        <div 
            id={project.id}
            className={twMerge(
                "py-16 flex items-center gap-32",
                reversed && 'flex-row-reverse',
            )}
        >
            <ProjectInfo 
                project={project}
                index={index}
            />
            <ProjectImage project={project} />
        </div>
    )
}