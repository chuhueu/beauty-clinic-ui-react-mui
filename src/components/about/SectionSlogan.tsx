import React from "react";
import BgSlogan from "../../assets/images/aboutus/section-slogan.png";

const SectionSlogan = () => {
    return (
        <div
            className="sectionslogan"
            style={{ backgroundImage: `url("${BgSlogan}")` }}
        >
            <div className="sectionslogan-text">
                <p className="heading">Business Slogan</p>
                <p className="title">
                    Best responsibility and service for our customers
                </p>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                </p>
            </div>
        </div>
    );
};

export default SectionSlogan;
