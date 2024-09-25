import { Project } from "@/assets/json/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProjectImage({ project }: {
    project: Project;
}) {
    const t = useTranslations('projects');

    const alt = `${t(`${project.id}.title`)}'s preview image`;
    return(
        <div className="cut-corner flex-1 aspect-video border-[1px] border-secondary">
            <Image 
                className="h-full w-full object-cover"
                src={`/imgs/projects/${project.image}`}
                width={472}
                height={284}
                alt={alt}
            />
        </div>
    )
}