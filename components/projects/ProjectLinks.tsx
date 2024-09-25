import { Project } from "@/assets/json/types";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectLinks({ project }: {
    project: Project;
}) {
    const links = [
        { href: project.github, icon: faGithub },
        { href: project.figma, icon: faFigma },
    ]

    return(
        <ul className="flex gap-1">
            {links.map(link => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        target="_blank"
                        className="p-2"
                    >
                        <FontAwesomeIcon 
                            icon={link.icon}
                            className="text-3xl"
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}