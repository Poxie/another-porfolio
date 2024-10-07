import techStack from '@/assets/json/tech-stack.json';
import TechPodium from './TechPodium';

export default function TechStack() {
    return(
        <section className="main-width py-section-sm lg:pb-0 grid gap-8 lg:gap-0 lg:grid-cols-5 items-end overflow-hidden" id="tech-stack">
            {techStack.map((tech, index) => (
                <TechPodium 
                    tech={tech}
                    index={index}
                    key={tech.id}
                />
            ))}
        </section>
    )
}