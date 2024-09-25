import projects from '@/assets/json/projects.json';
import ProjectCard from './ProjectCard';

export default function ProjectCardList() {
    return(
        <ul className="main-width grid grid-cols-3 gap-4">
            {projects.map(project => (
                <li key={project.id}>
                    <ProjectCard 
                        project={project}
                    />
                </li>
            ))}
        </ul>
    )
}