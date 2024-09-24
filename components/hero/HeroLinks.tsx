import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { twMerge } from "tailwind-merge";
import HeroLinkIllustration from "./HeroLinkIllustration";
import { LINKS } from "@/constants/links";

export default function HeroLinks({ className }: {
    className?: string;
}) {
    return(
        <ul className={twMerge(
            "flex gap-6",
            className,
        )}>
            {LINKS.map(link => (
                <li key={link.name}>
                    <a
                        className="group relative flex items-center justify-center"
                        target="_blank"
                        href={link.url}
                    >
                        <FontAwesomeIcon 
                            icon={link.icon}
                            className="text-4xl z-[1] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none"
                        />
                        <HeroLinkIllustration />
                    </a>
                </li>
            ))}
        </ul>
    )
}