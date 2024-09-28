"use client";
import { NAVBAR_TABS } from "@/constants/tabs";
import scrollToSection from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import HeroNavigationTab from "./HeroNavigationTab";

export default function HeroNavigation() {
    const t = useTranslations('navbar');
    
    return(
        <ul className="[--right:3rem] pr-[--right] absolute right-0 top-2/4 -translate-y-2/4 overflow-hidden">
            {NAVBAR_TABS.map((tab, index) => (
                <li>
                    <HeroNavigationTab 
                        tab={tab}
                        index={index}
                        key={tab}
                    />
                </li>
            ))}
        </ul>
    )
}