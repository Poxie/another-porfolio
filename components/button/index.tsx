"use client";
import { CSSProperties, forwardRef, useRef } from "react";
import { twMerge } from "tailwind-merge";
import DirectionHover from "../direction-hover";
import useDirectionHover from "@/hooks/useDirectionHover";

const Button = forwardRef<HTMLDivElement, {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
    className?: string;
    style?: CSSProperties;
}>(({ children, onClick, disabled, href, type = "primary", className, style }, ref) => {
    const containerRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);

    useDirectionHover(containerRef, hoverRef);

    const props = {
        onClick,
        disabled,
        className: twMerge(
            "[--cut-size:15%] cut-corner py-2 px-4 flex items-center gap-3 text-primary border-[1px] border-secondary",
            type === 'secondary' && 'cut-corner-secondary border-quaternary',
            disabled && 'bg-secondary/50 cursor-not-allowed',
            disabled && type === 'secondary' && 'bg-quaternary/50',
            className,
        ),
    }
    const directionHoverProps = {
        className: twMerge(
            type === 'secondary' && 'bg-quaternary/20',
        ),
        ref: hoverRef,
    }

    let containerChildren: React.ReactNode | null = null;
    
    if (href) {
        containerChildren = (
            <a 
                {...props}
                href={href}
                target="_blank"
                ref={containerRef as React.RefObject<HTMLAnchorElement>}
            >
                {children}
                <DirectionHover {...directionHoverProps} />
            </a>
        )
    } else { 
        containerChildren = (
            <button 
                {...props}
                ref={containerRef as React.RefObject<HTMLButtonElement>}
            >
                {children}
                <DirectionHover {...directionHoverProps} />
            </button>
        )
    }

    return(
        <div
            ref={ref}
            style={style}
        >
            {containerChildren}
        </div>
    )
});
Button.displayName = 'Button';

export default Button;