import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className="srolltotop"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
        >
            <ArrowUpwardIcon className="icon" />
        </button>
    );
};

export default ScrollToTop;
