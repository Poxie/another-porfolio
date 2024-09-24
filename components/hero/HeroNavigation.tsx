import { NAVBAR_TABS } from "@/constants/navbarTabs";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function HeroNavigation() {
    const t = useTranslations('navbar');
    
    return(
        <ul className="[--right:3rem] pr-[--right] absolute right-0 top-2/4 -translate-y-2/4 overflow-hidden">
            {NAVBAR_TABS.map(tab => (
                <li>
                    <button
                        className={twMerge(
                            "w-full p-8 relative text-6xl text-right font-bold uppercase",
                            "after:z-[-1] after:absolute after:top-2/4 after:-translate-y-2/4 after:h-full after:left-[calc(100%+var(--right))] after:w-[calc(100%+var(--right))] after:border-y-2 after:border-y-secondary after:bg-gradient-to-l after:from-secondary after:to-primary after:duration-500 after:transition-[left] hover:after:left-0"
                        )}
                    >
                        {t(tab)}
                    </button>
                </li>
            ))}
        </ul>
    )
}