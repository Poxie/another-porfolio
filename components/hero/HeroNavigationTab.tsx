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
                "w-full p-8 relative text-6xl text-right font-bold uppercase",
                "after:z-[-1] after:absolute after:top-2/4 after:-translate-y-2/4 after:h-full after:left-[calc(100%+var(--right))] after:w-[calc(100%+var(--right))] after:border-y-2 after:border-y-secondary after:bg-gradient-to-l after:from-secondary after:to-primary after:duration-500 after:transition-[left] hover:after:left-0"
            )}
            style={initialState}
            ref={ref}
        >
            {t(tab)}
        </button>
    )
}