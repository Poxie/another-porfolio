import projects from '@/assets/json/projects.json';
import ProjectCard from './ProjectCard';

export default function ProjectCardList() {
    return(
        <ul className="main-width grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
                <li key={project.id}>
                    <ProjectCard 
                        project={project}
                        index={index}
                    />
                </li>
            ))}
        </ul>
    )
}