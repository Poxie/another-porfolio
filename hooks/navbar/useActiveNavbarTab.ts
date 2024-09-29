import { NAVBAR_TABS } from "@/constants/tabs";
import { useEffect, useState } from "react";

const SCROLL_OFFSET = 500;
export default function useActiveNavbarTab() {
    const [activeTab, setActiveTab] = useState(NAVBAR_TABS[0])
    
    useEffect(() => {
        // Determining active tab
        const scroll = () => {
            const scroll = window.scrollY;
            
            for(const tab of NAVBAR_TABS) {
                const element = document.querySelector(`#${tab}`);
                if(!element) continue;
                
                const fromTop = (element?.getBoundingClientRect().top || 0) + window.scrollY - SCROLL_OFFSET;
                if(scroll >= fromTop) {
                    setActiveTab(tab);
                }
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return activeTab;
}