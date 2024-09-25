"use client";
import { twMerge } from "tailwind-merge";
import DirectionHover from "../direction-hover";
import { useRef } from "react";
import useDirectionHover from "@/hooks/useDirectionHover";

export default function Button({ children, onClick, disabled, href, className }: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    className?: string;
}) {
    const containerRef = useRef<any>(null);
    const hoverRef = useRef<HTMLDivElement>(null);

    useDirectionHover(containerRef, hoverRef);

    const props = {
        ref: containerRef,
        onClick,
        disabled,
        className: twMerge(
            "[--cut-size:15%] cut-corner py-2 px-4 flex items-center gap-3 text-primary border-[1px] border-secondary",
            className,
        ),
    }
    
    if(href) {
        return(
            <a 
                {...props}
                href={href}
                target="_blank"
            >
                {children}
                <DirectionHover ref={hoverRef} />
            </a>
        )
    }

    return(
        <button {...props}>
            {children}
            <DirectionHover ref={hoverRef} />
        </button>
    )
}