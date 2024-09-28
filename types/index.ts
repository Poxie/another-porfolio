import { LINKS } from "@/constants/links";
import { ABOUT_TABS, NAVBAR_TABS } from "@/constants/tabs";

export type AboutTab = typeof ABOUT_TABS[number];
export type AboutLink = typeof LINKS[number];
export type NavbarTab = typeof NAVBAR_TABS[number];