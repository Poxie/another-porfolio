"use client";
import { ABOUT_TABS } from "@/constants/tabs"
import { useTranslations } from "next-intl"
import SelectableTabs from "../selectable-tabs";
import { AboutTab } from "@/types";

export default function AboutTabs({ onChange }: {
    onChange: (tab: AboutTab) => void;
}) {
    const t = useTranslations('about.tabs');

    return(
        <SelectableTabs 
            tabs={ABOUT_TABS}
            onChange={onChange}
            translation={t}
            className="mt-4"
        />
    )
}