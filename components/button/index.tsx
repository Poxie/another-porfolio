"use client";
import { twMerge } from "tailwind-merge";
import DirectionHover from "../direction-hover";
import { useRef } from "react";
import useDirectionHover from "@/hooks/useDirectionHover";

export default function Button({ children, onClick, disabled, className }: {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}) {
    const containerRef = useRef<HTMLButtonElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);

    useDirectionHover(containerRef, hoverRef);
    return(
        <button
            className={twMerge(
                "[--cut-size:15%] cut-corner py-2 px-4 flex items-center gap-3 text-primary border-[1px] border-secondary",
                className,
            )}
            onClick={onClick}
            disabled={disabled}
            ref={containerRef}
        >
            {children}

            <DirectionHover ref={hoverRef} />
        </button>
    )
}