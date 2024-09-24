import { useTranslations } from 'next-intl';
import HeroHeader from './HeroHeader';

export default function Hero() {
    const t = useTranslations('hero');
    
    return(
        <section className="py-section-lg">
            <HeroHeader />
        </section>
    )
}