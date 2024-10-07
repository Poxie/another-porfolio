"use client";
import { useEffect, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import { twMerge } from "tailwind-merge";
import NavbarTabs from "./NavbarTabs";
import useIsSticky from "@/hooks/navbar/useIsSticky";

const FIXED_DELAY = 500;
export default function Navbar() {
    const sticky = useIsSticky();

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    function updateContentWidth() {
        if(sticky) {
            contentRef.current!.classList.add('main-width');
        } else {
            setTimeout(() => {
                contentRef.current!.classList.remove('main-width');
            }, 150);
        }
    }
    useEffect(() => {
        if(!containerRef.current) return;
        
        const timeouts: NodeJS.Timeout[] = [];
        if(!sticky) {
            if(containerRef.current.style.position !== 'fixed') return;

            containerRef.current.style.top = `-${containerRef.current.clientHeight}px`;

            timeouts.push(setTimeout(() => {
                containerRef.current!.style.position = 'absolute';
                containerRef.current!.style.transition = `top ${FIXED_DELAY}ms`;
                containerRef.current!.style.top = '0';
                updateContentWidth();
            }, FIXED_DELAY));
        }

        if(sticky) {
            containerRef.current.style.transition = '';
            containerRef.current.style.top = `-${containerRef.current.clientHeight}px`;
            containerRef.current.style.position = 'fixed';

            timeouts.push(setTimeout(() => {
                containerRef.current!.style.transition = `top ${FIXED_DELAY}ms`;
                containerRef.current!.style.top = '0';
                updateContentWidth();
            }, 10));
        }

        return () => {
            timeouts.forEach(clearTimeout);
        }
    }, [sticky]);

    return(
        <nav 
            className={twMerge(
                "p-4 z-50 left-0 top-0 absolute w-full",
                sticky && 'shadow-md backdrop-blur-sm'
            )}
            ref={containerRef}
        >
            <div className="flex justify-between" ref={contentRef}>
                <NavbarTabs isSticky={sticky} />
                <LanguageSelector />
            </div>
        </nav>
    )
}