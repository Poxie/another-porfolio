import { useTranslations } from "next-intl"
import ProjectList from "./ProjectList";

export default function Projects() {
    const t = useTranslations('projects');
    
    return(
        <section className="py-section-base">
            <div className="mb-16 relative flex justify-center">
                <h2 className="px-8 text-5xl font-semibold bg-primary">
                    {t('title')}
                </h2>
                <div className="z-[-1] absolute top-2/4 -translate-y-2/4 bg-secondary h-[1px] w-full" />
            </div>
            <ProjectList />
        </section>
    )
}