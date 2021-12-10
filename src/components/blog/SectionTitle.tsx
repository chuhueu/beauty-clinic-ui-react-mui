import React from "react";
import BgTitle from "../../assets/images/blog/title-bg.png";

const SectionTitle = () => {
    return (
        <div
            className="sectiontitle"
            style={{ backgroundImage: `url("${BgTitle}")` }}
        >
            <div className="container">
                <div className="sectiontitle-wrapper">
                    <div className="sectiontitle-left">
                        <p>Blog</p>
                    </div>
                    <div className="sectiontitle-right">
                        <p>Home • Blog</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
