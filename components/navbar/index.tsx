"use client";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
    return(
        <nav className="p-4 z-40 fixed w-full left-0 top-0 flex justify-end">
            <LanguageSelector />
        </nav>
    )
}