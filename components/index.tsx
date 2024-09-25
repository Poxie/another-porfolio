import About from "./about";
import Hero from "./hero";
import ProjectCards from "./project-cards";

export default function Home() {
    return(
        <main>
            <Hero />
            <About />
            <ProjectCards />
        </main>
    )
}