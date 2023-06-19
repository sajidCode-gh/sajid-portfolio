import "./Hero.styles.css";
import mainImage from "./../../assets/bg_home.png";
import { useState, useEffect } from "react";

const Hero = () => {
    const [screenHight, setScreenHeight] = useState(window.innerHeight);

    const handleScroll = () => {
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="hero" style={{ height: screenHight - 104 + "px" }}>
            <div className="big-text">Innovate</div>

            <div className="hero-section">
                <div className="hero-text">
                    <h4>MUHAMMAD SAJID</h4>
                    <h1>Proficient Front-end Developer</h1>
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
