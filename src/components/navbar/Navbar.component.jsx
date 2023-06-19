import { useSpring, animated } from "@react-spring/web";
import "./Navbar.styles.css";

const Navbar = ({ toggle, handleToggle }) => {
    const [slideNavbar, api] = useSpring(() => ({
        height: "0vh",
    }));

    const handleNavBarToggle = () => {
        handleToggle(!toggle);

        api.start({
            scale: toggle ? "100%" : "0%",
            height: toggle ? "100vh" : "0vh",
        });
    };

    return (
        <div className="navbar">
            <div
                className={toggle ? "menu" : "menu open"}
                onClick={handleNavBarToggle}
            >
                {toggle ? "MENU" : "CLOSE"} <span className="icon"></span>
            </div>
            <animated.nav style={{ width: "100vw", ...slideNavbar }}>
                <h3>NAVIGATION</h3>
                <ul>
                    <li onClick={handleNavBarToggle}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li onClick={handleNavBarToggle}>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li onClick={handleNavBarToggle}>
                        <a href="#experience">EXPERIENCE</a>
                    </li>
                    <li onClick={handleNavBarToggle}>
                        <a href="#skills">SKILLS</a>
                    </li>
                    <li onClick={handleNavBarToggle}>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </animated.nav>
        </div>
    );
};

export default Navbar;
