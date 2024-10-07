"use client";
import { TechLanguage } from "@/assets/json/types"
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const DEFAULT_HEIGHT = 350;
export default function TechPodium({ tech, index }: {
    tech: TechLanguage;
    index: number;
}) {
    const t = useTranslations('tech-stack');
    const screenSize = useScreenSize();
    const isSmallScreen = ['xs', 'sm', 'md'].includes(screenSize);
    
    const ref = useRef<HTMLDivElement>(null);

    const isSecondHeight = [1,3].includes(index);
    const isThirdHeight = [0,4].includes(index);

    let delay = 0;
    if(isSecondHeight && !isSmallScreen) delay = 300;
    if(isThirdHeight && !isSmallScreen) delay = 600;
    
    const { initialState } = useAnimateIntoView(ref, {
        initialState: {
            transform: 'translateY(100%)',
            opacity: isSmallScreen ? 1 : 0,
        },
        state: {
            transform: 'translateY(0)',
            opacity: 1,
        },
        threshold: 1,
        duration: 600,
        delay,
    });

    let heightDecimal = 1;
    if(isSecondHeight) heightDecimal = 5/6;
    if(isThirdHeight) heightDecimal = 4/6;
    
    const podiumHeight = DEFAULT_HEIGHT * heightDecimal;
    return(
        <div 
            style={initialState}
            className="text-center"
            ref={ref}
        >
            <span className="mb-4 block text-4xl font-semibold">
                {tech.language}
            </span>
            <div
                className="bg-secondary border-[1px] border-tertiary rounded-2xl lg:rounded-b-none"
                style={{ height: !isSmallScreen ? `${podiumHeight}px` : 'unset' }}
            >
                <span className="p-4 block border-b-[1px] border-tertiary">
                    {t(`${tech.id}.description`)}
                </span>
                <ul className="p-4 text-secondary">
                    {tech.addons.map(addon => (
                        <li key={addon}>
                            {addon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}