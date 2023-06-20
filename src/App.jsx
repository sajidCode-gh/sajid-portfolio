import "./assets/font/stylesheet.css";
import "./App.css";
import Header from "./layout/header/Header.layout";
import Main from "./layout/main/main.layout";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX: x, clientY: y } = event;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    // const moveMouse = useSpring({
    //     top: mousePosition.y - 50,
    //     left: mousePosition.x - 50,
    // });

    return (
        <div className="app">
            <Header />
            <Main />

            <animated.div
                style={{ top: mousePosition.y, left: mousePosition.x }}
                className="follow-pointer"
            ></animated.div>
        </div>
    );
}

export default App;
