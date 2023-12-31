import { useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ data }) => {
    const { title, description, image, github, technologies, link } = data;
    const [isMouseEntered, setMouseEntered] = useState(false);

    const handleMouseEnter = () => {
        setMouseEntered(true);
    };

    const handleMouseLeave = () => {
        setMouseEntered(false);
    };

    const slideAnimation1 = useSpring({
        transform: isMouseEntered ? "translateY(0)" : "translateY(50px)",
        opacity: isMouseEntered ? 1 : 0,
        config: { duration: 100 },
        delay: 0,
    });

    const slideAnimation2 = useSpring({
        transform: isMouseEntered ? "translateY(0)" : "translateY(50px)",
        opacity: isMouseEntered ? 1 : 0,
        config: { duration: 100 },
        delay: 150,
    });

    const slideAnimation3 = useSpring({
        transform: isMouseEntered ? "translateY(0)" : "translateY(50px)",
        opacity: isMouseEntered ? 1 : 0,
        config: { duration: 100 },
        delay: 300,
    });

    const slideAnimation4 = useSpring({
        transform: isMouseEntered ? "translateY(0)" : "translateY(50px)",
        opacity: isMouseEntered ? 1 : 0,
        config: { duration: 100 },
        delay: 350,
    });

    const slideAnimation5 = useSpring({
        pointerEvents: isMouseEntered ? "all" : "none",
        opacity: isMouseEntered ? 1 : 0,
        config: { duration: 100 },
        delay: 300,
    });

    const zoomImage = useSpring({
        transform: isMouseEntered ? "scale(1.1)" : "scale(1)",
        config: {
            duration: 1000,
        },
    });

    return (
        <Fade triggerOnce>
            <div
                className="project-card"
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
            >
                <animated.div style={zoomImage} className="project-image">
                    <img src={image} alt="image" />
                </animated.div>
                <div className="project-info">
                    <animated.h3 style={slideAnimation2}>{title}</animated.h3>
                    <animated.p style={slideAnimation3}>
                        {description}
                    </animated.p>
                    <animated.ul style={slideAnimation4}>
                        {technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </animated.ul>

                    <animated.div
                        className="project-source"
                        style={slideAnimation5}
                    >
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="github"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                            Preview
                        </a>
                    </animated.div>
                </div>
                <animated.div
                    style={slideAnimation1}
                    className="project-overlay"
                ></animated.div>
            </div>
        </Fade>
    );
};

export default ProjectCard;
