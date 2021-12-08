import React, { useState } from "react";
import CustomLink from "./CustomLink";
import LogoMain from "../../assets/images/main-logo.png";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <div className="header-left">
                        <img
                            src={LogoMain}
                            alt="Logo"
                            className="header-logo"
                        />
                    </div>
                    <div
                        className={`header-right ${toggleMenu ? "active" : ""}`}
                    >
                        <div className="menu">
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <CustomLink
                                        to="/"
                                        label="Home"
                                        activeOnlyWhenExact={true}
                                    />
                                </li>
                                <li className="menu-item">
                                    <CustomLink to="/about" label="About" />
                                </li>
                                <li className="menu-item">
                                    <CustomLink to="/service" label="Service" />
                                </li>
                                <li className="menu-item">
                                    <CustomLink to="/gallery" label="Gallery" />
                                </li>
                                <li className="menu-item">
                                    <CustomLink to="/blog" label="Blog" />
                                </li>
                            </ul>
                        </div>
                        <div className="button button--primary button--rounded">
                            Contact
                        </div>
                    </div>
                    <div
                        className={`header-toggle ${
                            toggleMenu ? "is-active" : ""
                        }`}
                        id="mobile-menu"
                        onClick={handleToggleMenu}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
