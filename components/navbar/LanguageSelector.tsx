import {useTransition} from 'react';
import { LANGUAGES } from "@/constants/languages";
import Dropdown from "../dropdown";
import { setUserLocale } from "@/services/locale";
import { useLocale } from 'next-intl';

export default function LanguageSelector() {
    const locale = useLocale();
    const transition = useTransition();

    const onChange = (language: string) => {
        transition[1](() => {
            setUserLocale(language);
        });
    }

    return(
        <div className="flex-1 flex justify-end">
            <Dropdown 
                onChange={onChange}
                items={LANGUAGES}
                activeId={locale}
            />
        </div>
    )
}