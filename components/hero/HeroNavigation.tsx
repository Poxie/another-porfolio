import { NAVBAR_TABS } from "@/constants/tabs";
import HeroNavigationTab from "./HeroNavigationTab";

export default function HeroNavigation() {
    return(
        <ul className="[--right:3rem] pr-[--right] absolute right-0 top-2/4 -translate-y-2/4 overflow-hidden">
            {NAVBAR_TABS.map((tab, index) => (
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