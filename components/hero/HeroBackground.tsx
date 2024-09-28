"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const SQUARE_SIZE = 80;
const HOVER_RADIUS = 100;

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const clippingRef = useRef<HTMLDivElement>(null);

    const [verticalLineCount, setVerticalLineCount] = useState(0);
    const [horizontalLineCount, setHorizontalLineCount] = useState(0);
    console.log(horizontalLineCount);
    
    const getContainerDimensions = () => ({
        width: containerRef.current?.clientWidth || 0,
        height: containerRef.current?.clientHeight || 0,
    });
    const getHorizontalLineCount = () => Math.ceil(getContainerDimensions().height / SQUARE_SIZE);
    const getVerticalLineCount = () => Math.ceil(getContainerDimensions().width / SQUARE_SIZE);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if(!clippingRef.current) return;

            const x = e.clientX;
            const y = e.clientY + window.scrollY;
            clippingRef.current.style.clipPath = `circle(${HOVER_RADIUS}px at ${x}px ${y}px)`;
        }

        const handleResize = () => {
            setHorizontalLineCount(getHorizontalLineCount());
            setVerticalLineCount(getVerticalLineCount());
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return(
        <div 
            className="z-[-1] absolute inset-0"
            ref={containerRef}
        >
            <Grid 
                verticalLineCount={verticalLineCount}
                horizontalLineCount={horizontalLineCount}
                className="z-[1] transition-[clip-path] ease-linear"
                style={{ clipPath: 'circle(0px)' }}
                isHighlighted
                ref={clippingRef}
            />
            <Grid 
                verticalLineCount={verticalLineCount}
                horizontalLineCount={horizontalLineCount}
            />
        </div>
    )
}

const Grid = React.forwardRef<HTMLDivElement, {
    verticalLineCount: number;
    horizontalLineCount: number;
    isHighlighted?: boolean;
    className?: string;
    style?: React.CSSProperties;
}>(({ verticalLineCount, horizontalLineCount, isHighlighted, style, className }, ref) => {
    return(
        <div 
            className={twMerge(
                "absolute inset-0",
                className,
            )}
            style={style}
            ref={ref}
        >
            {Array.from({ length: horizontalLineCount }).map((_, i) => (
                <Line
                    highlight={isHighlighted}
                    direction="horizontal"
                    index={i}
                    key={i}
                />
            ))}
            {Array.from({ length: verticalLineCount }).map((_, i) => (
                <Line
                    highlight={isHighlighted}
                    direction="vertical"
                    index={i}
                    key={i}
                />
            ))}
        </div>
    )
})

function Line({ direction, index, highlight }: {
    direction: 'vertical' | 'horizontal';
    index: number;
    highlight?: boolean;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <div 
            className={twMerge(
                "absolute bg-secondary/60 transition-[height,width] duration-[2s] ease-in-out",
                highlight && 'bg-white/20',
                direction === 'vertical' && "w-[1px] h-0",
                direction === 'horizontal' && 'w-0 h-[1px]',
                mounted && direction === 'vertical' && 'h-full',
                mounted && direction === 'horizontal' && 'w-full',
            )} 
            style={{
                top: direction === 'horizontal' ? `${index * SQUARE_SIZE}px` : 0,
                left: direction === 'vertical' ? `${index * SQUARE_SIZE}px` : 0,
            }}
        />
    )
}