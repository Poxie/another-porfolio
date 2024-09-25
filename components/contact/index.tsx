import { useTranslations } from "next-intl"
import ContactForm from "./ContactForm";

export default function Contact() {
    const t = useTranslations('contact');
    
    return(
        <section className="p-section-sm bg-secondary" id="contact">
            <div className="w-contact mx-auto">
                <h2 className="mb-8 text-4xl text-center font-semibold">
                    {t('title')}
                </h2>

                <ContactForm />
            </div>
        </section>
    )
}