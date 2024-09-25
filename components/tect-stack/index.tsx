import techStack from '@/assets/json/tech-stack.json';
import TechPodium from './TechPodium';

export default function TechStack() {
    return(
        <section className="main-width pt-section-base grid grid-cols-5 items-end" id="tech-stack">
            {techStack.map((tech, index) => {
                let heightDecimal = 1;
                if([1,3].includes(index)) heightDecimal = 5/6;
                if([0,4].includes(index)) heightDecimal = 4/6;

                return(
                    <TechPodium 
                        tech={tech}
                        heightDecimal={heightDecimal}
                        key={tech.id}
                    />
                )
            })}
        </section>
    )
}