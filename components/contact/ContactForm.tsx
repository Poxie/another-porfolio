"use client";
import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function ContactForm() {
    const t = useTranslations('contact');

    const [contactInfo, setContactInfo]  = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<null | {
        type: 'error' | 'success',
        message: string;
    }>(null);

    const updateInfo = (key: keyof typeof contactInfo, value: string) => {
        setFeedback(null);
        setContactInfo(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        const response = await fetch('/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactInfo),
        });

        const data = await response.json();
        setLoading(false);

        if(!response.ok) {
            setFeedback({
                type: 'error',
                message: data.message,
            });
            return;
        }

        setFeedback({
            type: 'success',
            message: t('success'),
        });
        setContactInfo({
            name: '',
            email: '',
            message: '',
        })
    }

    return(
        <form 
            className="grid gap-2"
            onSubmit={handleSubmit}
        >
            {feedback && (
                <span className={twMerge(
                    "text-sm p-4 block text-center rounded-md",
                    feedback.type === 'success' && 'bg-success/20',
                    feedback.type === 'error' && 'bg-error/20',
                )}>
                    {feedback.message}
                </span>
            )}

            <Input 
                label={t('name')}
                onChange={text => updateInfo('name', text)}
                value={contactInfo.name}
            />
            <Input 
                label={t('email')}
                onChange={text => updateInfo('email', text)}
                value={contactInfo.email}
            />
            <Input 
                textArea
                label={t('message')}
                onChange={text => updateInfo('message', text)}
                value={contactInfo.message}
            />
            <div className="mt-4 flex justify-center">
                <Button 
                    type="secondary"
                    disabled={loading}
                >
                    {t('send')}
                    <FontAwesomeIcon 
                        icon={faPaperPlane}
                    />
                </Button>
            </div>
        </form>
    )
}