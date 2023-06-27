import { useState } from "react";
import "./Skills.styles.css";
import { useSpring, animated } from "@react-spring/web";

const skills = [
    "Javascript",
    "React.js",
    "Next.js",
    "Redux",
    "React-Spring",
    "Shopify",
    "Liquid",
    "Node",
    "Express.js",
    "Firebase",
    "HTML",
    "CSS",
    "Tailwind",
    "Python",
    "Github",
    "vite",
    "Vim",
    "Figma",
];

const Skills = () => {
    const hoverAnimation = useSpring({
        from: {
            fontSize: "0.97rem",
        },
        to: {
            fontSize: "1rem",
        },
        config: { tension: 200, friction: 10 },
        loop: true,
    });
    return (
        <div className="skills" id="skills">
            <div className="skills-info text-middle">
                <h2>Skill Set</h2>
                <p>
                    My skills and tools that I've been using based on need and
                    requirement <br />
                    <span>Mindset: </span> I'm not limited to these
                    technologies, I've ability to learn new technology and ready
                    to accept new challenges
                </p>
            </div>

            <animated.div className="skill-set">
                {skills.map((skill) => (
                    <animated.div style={hoverAnimation} key={skill}>
                        {skill}
                    </animated.div>
                ))}
            </animated.div>
        </div>
    );
};

export default Skills;
