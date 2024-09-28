import { useTranslations } from 'next-intl';
import HeroHeader from './HeroHeader';
import HeroNavigation from './HeroNavigation';
import HeroBackground from './HeroBackground';

export default function Hero() {
    const t = useTranslations('hero');
    
    return(
        <section className="py-section-lg relative overflow-hidden">
            <HeroBackground />
            <HeroHeader />
            <HeroNavigation />
        </section>
    )
}