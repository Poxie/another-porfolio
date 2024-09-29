import { NAVBAR_TABS } from "@/constants/tabs";
import useActiveNavbarTab from "@/hooks/navbar/useActiveNavbarTab";
import scrollToSection from "@/utils/scrollToSection";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function NavbarTabs({ isSticky }: {
    isSticky: boolean;
}) {
    const t = useTranslations('navbar');

    const activeTab = useActiveNavbarTab();

    return(
        <AnimatePresence>
            {isSticky && (
                <motion.ul 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {NAVBAR_TABS.map(tab => (
                        <li key={tab}>
                            <button 
                                onClick={() => scrollToSection(tab)}
                                className={twMerge(
                                    "text-secondary",
                                    activeTab === tab && "text-primary",
                                )}
                            >
                                {t(tab)}
                            </button>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}