"use client";
import { useTranslations } from "next-intl"
import AboutTabs from "./AboutTabs";
import { useState } from "react";
import { ABOUT_TABS } from "@/constants/tabs";
import { AboutTab } from "@/types";
import { getAgeInYears } from "@/utils/dates";
import { ABOUT_SUMMARIES } from "@/constants/about";

export default function About() {
    const t = useTranslations('about');

    const [activeTab, setActiveTab] = useState<AboutTab>(ABOUT_TABS[0]);
    
    return(
        <section className="main-width py-section-lg pb-section-base" id="about">
            <h2 className="text-5xl font-semibold">
                {t('title')}
            </h2>
            <AboutTabs onChange={setActiveTab} />

            <div className="mt-4">
                <p className="text-lg">
                    {t(`content.${activeTab}.text`, { age: getAgeInYears() })}
                </p>
                <ul className="mt-6 flex gap-4">
                    {ABOUT_SUMMARIES.about.map(summary => (
                        <li 
                            className="cut-corner flex-1 px-4 pr-10 py-3 text-lg text-nowrap border-[1px] border-secondary bg-secondary/30"
                            key={summary}
                        >
                            {t(`content.${activeTab}.summary.${summary}`)}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}