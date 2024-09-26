import { Project } from "@/assets/json/types";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useRef, useEffect } from "react";

export default function ProjectLinks({ project, siblingRef }: {
    project: Project;
    siblingRef: React.RefObject<HTMLElement>;
}) {
    const links = [
        { href: project.github, icon: faGithub },
        { href: project.figma, icon: faFigma },
    ];

    const linkRefs = useRef(links.map(() => createRef<HTMLAnchorElement>()));

    const { initialState } = useAnimateIntoView(linkRefs.current[0], {
        delay: 600,
        siblingRef,
    });
    useAnimateIntoView(linkRefs.current[1], {
        delay: 800,
        siblingRef,
    });
    
    return (
        <ul className="flex gap-1">
            {links.map((link, index) => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        target="_blank"
                        className="p-2 block"
                        ref={linkRefs.current[index]}
                        style={initialState}
                    >
                        <FontAwesomeIcon 
                            icon={link.icon}
                            className="text-3xl"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}