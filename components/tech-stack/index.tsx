import techStack from '@/assets/json/tech-stack.json';
import TechPodium from './TechPodium';

export default function TechStack() {
    return(
        <section className="main-width pt-section-base grid grid-cols-5 items-end overflow-hidden" id="tech-stack">
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