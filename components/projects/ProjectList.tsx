import projects from '@/assets/json/projects.json';
import Project from './Project';

export default function ProjectList() {
    return(
        <ul className="main-width grid grid-cols-3 gap-4">
            {projects.map(project => (
                <li key={project.id}>
                    <Project 
                        project={project}
                    />
                </li>
            ))}
        </ul>
    )
}