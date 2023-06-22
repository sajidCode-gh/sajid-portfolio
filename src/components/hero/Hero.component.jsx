import "./Hero.styles.css";
import mainImage from "./../../assets/hero.png";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
    const [screenHight, setScreenHeight] = useState(window.innerHeight);

    const [moveBigText, setMovement] = useState();
    const [bigText, setBigText] = useState("Innovate");
    const [currentIndex, setCurrentIndex] = useState(1);
    const [scroll, setScroll] = useState(0);

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

    const fadeOutImage = useSpring({
        opacity: scroll > 150 ? 0.5 : 1,
    });

    const bigTextMove = useSpring({
        left: moveBigText,
        config: {
            duration: 1000,
        },
    });

    const moveArrowScroll = useSpring({
        from: { top: "5px", height: "7px" },
        to: async (next) => {
            while (true) {
                await next({
                    top: "20px",
                    height: "5px",
                });
                await next({
                    top: "5px",
                    height: "7px",
                });
            }
        },
        config: {
            duration: 700,
        },
    });

    const handleResize = () => {
        setScreenHeight(window.innerHeight);
    };

    const handleArrowDown = () => {
        window.scroll(0, screenHight);
    };

    const handleScroll = () => {
        const currentPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        setScroll(currentPosition);
    };

    let wordsArray = ["Innovate", "Inspire", "Empower", "Revolutionize"];

    const changeBigWord = () => {
        setBigText(wordsArray[currentIndex]);
        setCurrentIndex(currentIndex + 1);

        if (currentIndex == wordsArray.length - 1) {
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        const handleMoveBigText = (event) => {
            setMovement(event.clientX);
        };

        window.addEventListener("mousemove", handleMoveBigText);

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("mousemove", handleMoveBigText);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(changeBigWord, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [bigText]);

    return (
        <div className="hero" style={{ height: screenHight - 104 + "px" }}>
            <animated.div className="big-text" style={bigTextMove}>
                {bigText}
            </animated.div>

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

                    <animated.a
                        href="#contacts"
                        className="contact-btn"
                        style={animateBorder}
                    >
                        Contact
                    </animated.a>
                </div>
                <animated.div
                    style={{ ...textAnimateOne, ...fadeOutImage }}
                    className="hero-image"
                >
                    <img src={mainImage} alt="main image" />
                </animated.div>
            </div>

            <div onClick={handleArrowDown} className="scroll-down-arrow">
                <animated.div
                    style={moveArrowScroll}
                    className="inner"
                ></animated.div>
            </div>
        </div>
    );
};

export default Hero;
