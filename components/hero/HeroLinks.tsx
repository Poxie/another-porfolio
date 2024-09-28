import { twMerge } from "tailwind-merge";
import { LINKS } from "@/constants/links";
import React from "react";
import HeroLink from "./HeroLink";

export default function HeroLinks({ className, siblingRef }: {
    className?: string;
    siblingRef: React.RefObject<HTMLElement>;
}) {
    return(
        <ul className={twMerge(
            "flex gap-6",
            className,
        )}>
            {LINKS.map((link, index) => (
                <li key={link.name}>
                    <HeroLink 
                        link={link}
                        siblingRef={siblingRef}
                        index={index}
                    />
                </li>
            ))}
        </ul>
    )
}