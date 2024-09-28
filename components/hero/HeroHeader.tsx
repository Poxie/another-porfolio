"use client";
import { useTranslations } from "next-intl"
import HeroLinks from "./HeroLinks";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function HeroHeader() {
    const t = useTranslations('hero');

    const headerRef = useRef<HTMLHeadingElement>(null);
    const subheaderRef = useRef<HTMLParagraphElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const { initialState } = useAnimateIntoView(headerRef, { delay: 600 });
    useAnimateIntoView(subheaderRef, { delay: 900, siblingRef: headerRef });
    useAnimateIntoView(paragraphRef, { delay: 1200, siblingRef: headerRef });
    return(
        <div className="main-width">
            <h1 
                className="text-6xl font-semibold"
                style={initialState}
                ref={headerRef}
            >
                {t('header')}
            </h1>
            <p 
                className="mt-2 text-5xl text-secondary"
                style={initialState}
                ref={subheaderRef}
            >
                {t('subheader')}
            </p>
            <p 
                className="w-[500px] mt-4 text-2xl text-secondary"
                style={initialState}
                ref={paragraphRef}
            >
                {t('paragraph')}
            </p>
            <HeroLinks 
                className="mt-6"
                siblingRef={headerRef}
            />
        </div>
    )
}