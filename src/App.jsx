import "./assets/font/stylesheet.css";
import "./App.css";
import Header from "./layout/header/Header.layout";
import Main from "./layout/main/main.layout";
import { useEffect, useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import Footer from "./layout/footer/Footer.layout";

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isAnimationComplete, setAnimationComplete] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleMouseMove = (event) => {
        const { clientX: x, clientY: y } = event;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        window.addEventListener("load", setLoading(false));

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("load", setLoading(false));
        };
    }, [loading]);

    const moveMouse = useSpring({
        top: mousePosition.y - 50,
        left: mousePosition.x - 50,
        config: {
            duration: 500,
            easing: easings.easeInOutBack,
        },
        onStart: () => {
            setAnimationComplete(true);
        },
        onRest: () => {
            setAnimationComplete(false);
        },
    });

    const scale = useSpring({
        transform: isAnimationComplete ? "scale(1)" : "scale(1.3)",
    });

    const loadingAnimation = useSpring({
        transform: loading ? "translateY(0%)" : "translateY(-100%)",
    });

    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />

            <animated.div
                style={{ ...moveMouse, ...scale }}
                className="follow-pointer"
            ></animated.div>
            <animated.div style={loadingAnimation} className="loading">
                Loading...
            </animated.div>
        </div>
    );
}

export default App;
