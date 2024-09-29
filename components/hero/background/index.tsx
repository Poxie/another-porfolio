"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroBackgroundGrid from "./HeroBackgroundGrid";

export const HERO_SQUARE_SIZE = 80;
export const HERO_HOVER_RADIUS = 100;

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const clippingRef = useRef<HTMLDivElement>(null);

    const [verticalLineCount, setVerticalLineCount] = useState(0);
    const [horizontalLineCount, setHorizontalLineCount] = useState(0);
    
    const getContainerDimensions = () => ({
        width: containerRef.current?.clientWidth || 0,
        height: containerRef.current?.clientHeight || 0,
    });
    const getHorizontalLineCount = () => Math.ceil(getContainerDimensions().height / HERO_SQUARE_SIZE);
    const getVerticalLineCount = () => Math.ceil(getContainerDimensions().width / HERO_SQUARE_SIZE);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if(!clippingRef.current) return;

            const x = e.clientX;
            const y = e.clientY + window.scrollY;
            clippingRef.current.style.clipPath = `circle(${HERO_HOVER_RADIUS}px at ${x}px ${y}px)`;
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
            <HeroBackgroundGrid 
                verticalLineCount={verticalLineCount}
                horizontalLineCount={horizontalLineCount}
                className="z-[1] transition-[clip-path] ease-linear"
                style={{ clipPath: 'circle(0px)' }}
                isHighlighted
                ref={clippingRef}
            />
            <HeroBackgroundGrid 
                verticalLineCount={verticalLineCount}
                horizontalLineCount={horizontalLineCount}
            />
        </div>
    )
}