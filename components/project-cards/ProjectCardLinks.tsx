import { Project } from "@/assets/json/types"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCardLinks({ project }: {
    project: Project;
}) {
    const links = [
        { href: project.github, icon: faGithub },
        { href: project.figma, icon: faFigma },
        { href: project.demo, icon: faExternalLinkAlt },
    ];

    return(
        <ul className="-mr-1 flex">
            {links.map(link => (
                <li key={link.href}>
                    <a
                        className="p-2"
                        href={link.href}
                        target="_blank"
                    >
                        <FontAwesomeIcon 
                            icon={link.icon}
                            className="text-lg"
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}