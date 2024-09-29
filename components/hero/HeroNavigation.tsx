import { NAVBAR_TABS } from "@/constants/tabs";
import HeroNavigationTab from "./HeroNavigationTab";
import { twMerge } from "tailwind-merge";

export default function HeroNavigation() {
    return(
        <ul className={twMerge(
            "grid",
            "[--right:3rem] mt-[--right] lg:mt-0 lg:pr-[--right] lg:absolute lg:right-0 lg:top-2/4 lg:-translate-y-2/4 overflow-hidden",
        )}>
            {NAVBAR_TABS.slice(1).map((tab, index) => (
                <li key={tab}>
                    <HeroNavigationTab 
                        tab={tab}
                        index={index}
                    />
                </li>
            ))}
        </ul>
    )
}