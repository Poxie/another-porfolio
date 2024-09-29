import HeroHeader from './HeroHeader';
import HeroNavigation from './HeroNavigation';
import HeroBackground from './background/index';
import HeroReadMoreButton from './HeroReadMoreButton';

export default function Hero() {
    return(
        <section className="py-section-base md:py-section-lg relative overflow-hidden" id="home">
            <HeroBackground />
            <HeroHeader />
            <HeroNavigation />
            <HeroReadMoreButton />
        </section>
    )
}