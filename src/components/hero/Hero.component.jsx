import "./Hero.styles.css";
import mainImage from "./../../assets/hero.png";
import { useState, useEffect } from "react";

const Hero = () => {
    const [screenHight, setScreenHeight] = useState(window.innerHeight);
    const [moveBigText, setMovement] = useState();

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

    console.log(moveBigText);

    return (
        <div className="hero" style={{ height: screenHight - 104 + "px" }}>
            <div className="big-text" style={{ left: moveBigText + "rem" }}>
                Innovate
            </div>

            <div className="hero-section">
                <div className="hero-text">
                    <h4>MUHAMMAD SAJID</h4>
                    <h1>
                        <span>Proficient</span> <br /> Front-end Developer
                    </h1>
                    <p className="hero-description">
                        Dedicated to delivering high-quality, visually stunning
                        solutions. Passionate about learning and embracing new
                        technologies. Excited to collaborate on real-world
                        projects, combining performance and aesthetics. Ready to
                        take on new challenges and contribute to your team's
                        success.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={mainImage} alt="main image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
