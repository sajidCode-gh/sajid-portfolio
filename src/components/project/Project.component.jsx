import SCApps from "./../../assets/sc-apps.png";
import estore from "./../../assets/e-store.png";
import gotomars from "./../../assets/gotomars.png";
import portfolio from "./../../assets/portofio.png";
import ProjectCard from "./Project-card.component";

import "./Project.style.css";
import { Fade } from "react-awesome-reveal";

const proejctData = [
    {
        title: "SC Apps",
        description:
            "3 in 1 App, with stunning design using Glassmorphism , It combines weather, todo and recipe app. Showcasing abilty to use third party API, fetch data and render on the front end",
        image: SCApps,
        technologies: ["Javascript", "Gulp", "SCSS", "HTML"],
        github: "https://github.com/sajidCode-gh/SC-Apps",
        link: "https://sajidcode-gh.github.io/SC-Apps/",
    },
    {
        title: "E Store",
        description:
            "A clothing store, with login, sign up authentication. showcasing teh ability to host and extend user data in document based database and fetch the data for front end.",
        image: estore,
        technologies: [
            "React",
            "Redux",
            "Firebase",
            "React Router",
            "Styled Components",
            "Netlify",
        ],
        github: "https://github.com/sajidCode-gh/E-Store",
        link: "https://estore-clothing.netlify.app/",
    },
    {
        title: "Go To Mars",
        description:
            "A hypothetical ticket booking service for Mars, Aesthetic design with nice animations, showcasing ability to create front-ends with unique look and feel",
        image: gotomars,
        technologies: ["React", "CSS", "HTML"],
        github: "https://github.com/sajidCode-gh/GoToMars",
        link: "https://sajidcode-gh.github.io/GoToMars/",
    },
    {
        title: "Portfolio",
        description:
            "My personal portfolio, includes some slick animations and hover effects",
        image: portfolio,
        technologies: ["React", "React Spring", "CSS", "Vite"],
        github: "https://github.com/sajidCode-gh/sajid-portfolio",
        link: "https://sajidcode-gh.github.io/sajid-portfolio/",
    },
];

const Project = () => {
    return (
        <section className="projects" id="projects">
            <div className="project-description text-middle">
                <Fade cascade triggerOnce>
                    <h2 className="project-heading">Projects</h2>
                    <p>
                        Here are some of my projects, domonstrating my front end
                        skills, and it's just the taste, I belive on my abililty
                        to build much more complex front ends.
                    </p>
                </Fade>
            </div>
            <div className="project-grid">
                {proejctData.map((data) => (
                    <ProjectCard key={data.title} data={data} />
                ))}
            </div>
        </section>
    );
};

export default Project;
