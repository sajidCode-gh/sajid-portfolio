import { useState } from "react";
import Logo from "../../components/logo/Logo.component";
import Navbar from "../../components/navbar/Navbar.component";
import "./Header.styles.css";

const Header = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <header className="container header">
            <Logo toggle={toggle} />
            <Navbar toggle={toggle} handleToggle={setToggle} />
        </header>
    );
};

export default Header;
