import {useTransition} from 'react';
import { LANGUAGES } from "@/constants/languages";
import Dropdown from "../dropdown";
import { setUserLocale } from "@/services/locale";
import { useLocale } from 'next-intl';

export default async function LanguageSelector() {
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const onChange = (language: string) => {
        startTransition(() => {
            setUserLocale(language);
        });
    }

    return(
        <Dropdown 
            onChange={onChange}
            items={LANGUAGES}
            activeId={locale}
        />
    )
}