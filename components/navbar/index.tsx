"use client";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { twMerge } from "tailwind-merge";
import NavbarTabs from "./NavbarTabs";
import useIsSticky from "@/hooks/navbar/useIsSticky";

export default function Navbar() {
    const sticky = useIsSticky();

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
    useEffect(updateContentWidth, [sticky]);

    return(
        <nav className={twMerge(
            "p-4 z-50 left-0 -top-[100px] sticky w-full transition-[top] duration-500",
            sticky && 'shadow-md top-0 backdrop-blur-sm'
        )}>
            <div className="flex justify-between" ref={contentRef}>
                <NavbarTabs isSticky={sticky} />
                <LanguageSelector />
            </div>
        </nav>
    )
}