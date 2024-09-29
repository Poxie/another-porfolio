"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import scrollToSection from "@/utils/scrollToSection";

const READ_MORE_TEXT = "Read more";
export default function HeroReadMoreButton() {
    const ref = useRef<HTMLButtonElement>(null);

    const { initialState } = useAnimateIntoView(ref, {
        initialState: { transform: 'translateY(25px) translateX(-50%)', opacity: '0' },
        state: { transform: 'translateY(0) translateX(-50%)', opacity: '1' },
        delay: 1400,
        threshold: 1,
    });
    return(
        <button 
            onClick={() => scrollToSection('about')}
            className="grid place-items-center gap-2 absolute bottom-0 left-2/4 -translate-x-2/4"
            style={initialState}
            ref={ref}
        >
            <div className="flex">
                {READ_MORE_TEXT.split('').map((letter, index) => (
                    <span 
                        className={twMerge(
                            "block animate-letter-bounce",
                            letter === ' ' && 'mx-0.5'
                        )}
                        style={{ animationDelay: `${index * 70}ms` }}
                        key={index}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <FontAwesomeIcon 
                icon={faArrowDown} 
                className="size-12 animate-bounce"
            />
        </button>
    )
}