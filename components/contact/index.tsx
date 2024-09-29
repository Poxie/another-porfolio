"use client";
import { useTranslations } from "next-intl"
import ContactForm from "./ContactForm";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function Contact() {
    const t = useTranslations('contact');

    const coverRef = useRef<HTMLDivElement>(null);
    const { initialState } = useAnimateIntoView(coverRef, { 
        duration: 2500,
        initialState: {
            transform: 'translateY(0%)',
        },
        state: {
            transform: 'translateY(200%)',
        } 
    });

    return(
        <section className="p-section-sm relative bg-secondary overflow-hidden" id="contact">
            <div
                style={initialState} 
                className="z-[1] absolute inset-0" 
                ref={coverRef}
            >
                <div className="h-full bg-tertiary -translate-y-full" />
                <div className="h-full bg-secondary -translate-y-full" />
            </div>
            <div className="w-contact mx-auto">
                <h2 className="mb-8 text-4xl text-center font-semibold">
                    {t('title')}
                </h2>

                <ContactForm />
            </div>
        </section>
    )
}