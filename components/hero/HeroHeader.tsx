import { useTranslations } from "next-intl"
import HeroLinks from "./HeroLinks";
import HeroReadMoreButton from "./HeroReadMoreButton";

export default function HeroHeader() {
    const t = useTranslations('hero');

    return(
        <div className="main-width">
            <h1 className="text-6xl font-semibold">
                {t('header')}
            </h1>
            <p className="mt-2 text-5xl text-secondary">
                {t('subheader')}
            </p>
            <p className="w-[500px] mt-4 text-2xl text-secondary">
                {t('paragraph')}
            </p>
            <HeroLinks className="mt-6" />
            <HeroReadMoreButton />
        </div>
    )
}