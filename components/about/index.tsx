"use client";
import { useTranslations } from "next-intl"
import AboutTabs from "./AboutTabs";
import { useState } from "react";
import { ABOUT_TABS } from "@/constants/tabs";
import { AboutTab } from "@/types";
import { getAgeInYears } from "@/utils/dates";

export default function About() {
    const t = useTranslations('about');

    const [activeTab, setActiveTab] = useState<AboutTab>(ABOUT_TABS[0]);
    
    return(
        <section className="main-width py-section-lg pb-section-base">
            <h2 className="text-5xl font-semibold">
                {t('title')}
            </h2>
            <AboutTabs onChange={setActiveTab} />

            <p className="mt-4 text-lg">
                {t(`content.${activeTab}`, { age: getAgeInYears() })}
            </p>
        </section>
    )
}