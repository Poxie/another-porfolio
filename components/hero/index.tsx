import { useTranslations } from 'next-intl';
import HeroHeader from './HeroHeader';
import HeroNavigation from './HeroNavigation';

export default function Hero() {
    const t = useTranslations('hero');
    
    return(
        <section className="py-section-lg relative">
            <HeroHeader />
            <HeroNavigation />
        </section>
    )
}