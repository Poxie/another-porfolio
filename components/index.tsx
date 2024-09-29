import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import ProjectCards from "./project-cards";
import Projects from "./projects";
import TechStack from "./tech-stack";

export default function Home() {
    return(
        <main>
            <Hero />
            <About />
            <ProjectCards />
            <Projects />
            <TechStack />
            <Contact />
        </main>
    )
}