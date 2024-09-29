import { Project } from "@/assets/json/types"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCardLinks({ project }: {
    project: Project;
}) {
    const links = [
        { href: project.github, icon: faGithub, tooltip: 'GitHub repo' },
        { href: project.figma, icon: faFigma, tooltip: 'Figma file' },
        { href: project.demo, icon: faExternalLinkAlt, tooltip: 'Live demo' },
    ];

    return(
        <ul className="-mr-1 flex relative z-[1]">
            {links.map(link => (
                <li key={link.href}>
                    <a
                        aria-label={link.tooltip}
                        data-tooltip={link.tooltip}
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