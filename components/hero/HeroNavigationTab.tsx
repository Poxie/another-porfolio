"use client";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import { NavbarTab } from "@/types";
import scrollToSection from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroNavigationTab({ tab, index }: {
    tab: NavbarTab;
    index: number;
}) {
    const t = useTranslations('navbar');
    
    const ref = useRef<HTMLButtonElement>(null);

    const { initialState } = useAnimateIntoView(ref, {
        initialState: { transform: 'translateX(105%)' },
        state: { transform: 'translateX(0)' },
        delay: 600 + (index * 150),
    });
    return(
        <button
            onClick={() => scrollToSection(tab)}
            className={twMerge(
                "w-full p-8 relative text-4xl lg:text-6xl text-left lg:text-right font-bold uppercase",
                "after:z-[-1] after:absolute after:top-2/4 after:-translate-y-2/4 after:h-full after:w-[calc(100%+var(--right))] after:border-y-2 after:border-y-secondary after:from-secondary after:to-primary after:duration-500 after:transition-[left,right]",
                "after:right-[calc(200%+var(--right))] after:hover:right-0 after:bg-gradient-to-r",
                "lg:after:left-[calc(100%+var(--right))] lg:after:hover:left-0 lg:after:bg-gradient-to-l",
            )}
            style={initialState}
            ref={ref}
        >
            {t(tab)}
        </button>
    )
}