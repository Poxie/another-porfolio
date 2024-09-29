import { AboutLink } from "@/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroLinkIllustration from "./HeroLinkIllustration";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function HeroLink({ link, index, siblingRef }: {
    link: AboutLink;
    index: number;
    siblingRef: React.RefObject<HTMLElement>;
}) {
    const ref = useRef<HTMLAnchorElement>(null);

    const { initialState } = useAnimateIntoView(ref, { delay: 1300 + (index * 100), siblingRef });
    return(
        <a
            aria-label={link.tooltip}
            data-tooltip={link.tooltip}
            style={{
                ...initialState,
                '--from-element': '.6rem',
                '--arrow-offset': '.15rem',
            } as React.CSSProperties}
            className="group relative flex items-center justify-center"
            target="_blank"
            href={link.url}
            ref={ref}
        >
            <FontAwesomeIcon 
                icon={link.icon}
                className="text-4xl z-[1] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none"
            />
            <HeroLinkIllustration />
        </a>
    )
}