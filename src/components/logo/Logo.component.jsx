import { useSpring, animated } from "@react-spring/web";
import "./Logo.styles.css";

const Logo = ({ toggle }) => {
    const [animateLogo] = useSpring(() => ({
        from: {
            opacity: 0,
            letterSpacing: "10px",
        },
        to: {
            opacity: 1,
            letterSpacing: "6px",
        },
    }));

    return (
        <div className={toggle ? "logo" : "logo open"}>
            <div className="circle">S</div>
            <div className="name">
                <span>Muhammad Sajid</span>
                <animated.span
                    className="profession"
                    style={{ ...animateLogo }}
                >
                    WEB DEVELOPER
                </animated.span>
            </div>
        </div>
    );
};

export default Logo;
