import { useEffect, useState } from "react";
import Logo from "../../components/logo/Logo.component";
import Navbar from "../../components/navbar/Navbar.component";
import "./Header.styles.css";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [previousScroll, setPreviousScroll] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setVisible(currentScroll < previousScroll);
            setPreviousScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [previousScroll]);

    const headerShowHide = useSpring({
        transform: visible ? "translateY(0%)" : "translateY(-100%)",
    });

    return (
        <animated.header style={headerShowHide} className="container header">
            <Logo toggle={toggle} />
            <Navbar toggle={toggle} handleToggle={setToggle} />
        </animated.header>
    );
};

export default Header;
