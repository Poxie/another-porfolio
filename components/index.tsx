import About from "./about";
import Hero from "./hero";
import ProjectCards from "./project-cards";
import Projects from "./projects";

export default function Home() {
    return(
        <main>
            <Hero />
            <About />
            <ProjectCards />
            <Projects />
        </main>
    )
}