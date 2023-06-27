import Experience from "../../components/experience/Experience.component";
import Hero from "../../components/hero/Hero.component";
import Project from "../../components/project/project.component";
import Skills from "../../components/skills/Skills.component";

const Main = () => {
    return (
        <main className="main container-full">
            <Hero />
            <Project />
            <Experience />
            <Skills />
        </main>
    );
};

export default Main;
