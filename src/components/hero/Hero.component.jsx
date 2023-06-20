import "./Hero.styles.css";
import mainImage from "./../../assets/hero.png";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
    const [screenHight, setScreenHeight] = useState(window.innerHeight);

    const [moveBigText, setMovement] = useState();

    const animateBorder = useSpring({
        from: { boxShadow: "0 0 1px 2px rgba(15, 20, 30, 0.3)" },
        to: async (next) => {
            while (true) {
                await next({
                    boxShadow: "0 0 1px 2px rgba(15, 20, 30, 0.3)",
                });
                await next({
                    boxShadow: "0 0 10px 5px rgba(15, 20, 30, 0.6)",
                });
            }
        },
        config: { duration: 1000 },
        loop: true,
    });

    const textAnimateOne = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(100px)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0px)",
        },
    });

    const textAnimateTwo = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(100px)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0px)",
        },
        delay: 500,
    });

    const handleScroll = () => {
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        const handleMoveBigText = (event) => {
            setMovement(event.clientX / 18);
        };

        window.addEventListener("mousemove", handleMoveBigText);

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("mousemove", handleMoveBigText);
        };
    }, []);

    return (
        <div className="hero" style={{ height: screenHight - 104 + "px" }}>
            <div className="big-text" style={{ left: moveBigText + "rem" }}>
                Innovate
            </div>

            <div className="hero-section">
                <div className="hero-text">
                    <h4>MUHAMMAD SAJID</h4>
                    <animated.h1 style={textAnimateOne}>
                        <span>Proficient</span> <br /> Front-end Developer
                    </animated.h1>
                    <animated.p
                        className="hero-description"
                        style={textAnimateTwo}
                    >
                        Dedicated to delivering high-quality, visually stunning
                        solutions. Passionate about learning and embracing new
                        technologies. Excited to collaborate on real-world
                        projects, combining performance and aesthetics. Ready to
                        take on new challenges and contribute to your team's
                        success.
                    </animated.p>

                    <animated.a href="#contacts" style={animateBorder}>
                        Hit Me Up
                    </animated.a>
                </div>
                <animated.div style={textAnimateOne} className="hero-image">
                    <img src={mainImage} alt="main image" />
                </animated.div>
            </div>
        </div>
    );
};

export default Hero;
