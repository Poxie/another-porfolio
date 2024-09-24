import { useTranslations } from "next-intl"
import HeroLinks from "./HeroLinks";

export default function HeroHeader() {
    const t = useTranslations('hero');

    return(
        <div>
            <h1 className="text-5xl font-semibold">
                {t('header')}
            </h1>
            <p className="mt-2 text-4xl text-secondary">
                {t('subheader')}
            </p>
            <p className="w-[450px] mt-4 text-xl text-secondary">
                {t('paragraph')}
            </p>
            <HeroLinks className="mt-6" />
        </div>
    )
}