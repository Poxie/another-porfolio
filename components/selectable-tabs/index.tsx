import { createRef, useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SelectableTabs<T extends string>({ tabs, onChange, translation, className }: {
    tabs: (readonly T[]) | T[];
    onChange: (tab: T) => void;
    translation: (tab: string) => string;
    className?: string;
}) {
    const [activeTab, setActiveTab] = useState(0);

    const tabRefs = useRef(tabs.map(() => createRef<HTMLButtonElement>()));
    const stripe = useRef<HTMLDivElement>(null);

    const handleChange = (index: number) => {
        setActiveTab(index);
        onChange(tabs[index]);
    }

    useLayoutEffect(() => {
        const tab = tabRefs.current[activeTab].current;
        const stripeElement = stripe.current;

        if(tab && stripeElement) {
            stripeElement.style.width = `${tab.offsetWidth}px`;
            stripeElement.style.left = `${tab.offsetLeft}px`;
        }
    }, [activeTab]);

    return(
        <div className={twMerge(
            "relative",
            className,
        )}>
            <ul className="flex gap-5 border-b-[1px] border-b-secondary">
                {tabs.map((tab, index) => (
                    <li key={tab}>
                        <button
                            className={twMerge(
                                "py-3 text-lg text-secondary hover:text-primary transition-colors",
                                index === activeTab && "text-primary",
                            )}
                            onClick={() => handleChange(index)}
                            ref={tabRefs.current[index]}
                        >
                            {translation(tab)}
                        </button>
                    </li>
                ))}
            </ul>
            <div
                className="absolute bottom-[0.5px] h-[1px] w-0 bg-light transition-[width,left]" 
                ref={stripe}
            />
        </div>
    )
}