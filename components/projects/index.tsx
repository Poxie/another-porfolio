import PROJECTS from '@/assets/json/projects.json';
import Project from './Project';

export default function Projects() {
    return(
        <section className="py-section-base border-t-[1px] border-t-secondary">
            <ul className="main-width">
                {PROJECTS.map((project, index) => (
                    <li key={project.id}>
                        <Project 
                            project={project}
                            index={index}
                            reversed={index % 2 !== 0}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}