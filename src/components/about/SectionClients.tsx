import React from "react";
import Logo1 from "../../assets/images/aboutus/logo1.png";
import Logo2 from "../../assets/images/aboutus/logo2.png";
import Logo3 from "../../assets/images/aboutus/logo3.png";
import Logo4 from "../../assets/images/aboutus/logo4.png";
import Logo5 from "../../assets/images/aboutus/logo5.png";

const SectionClients = () => {
    return (
        <div className="sectionclients">
            <div className="container">
                <div className="sectionclients-text">
                    <p className="heading">Our Clients</p>
                    <p className="title">Well-known agencies</p>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <div className="sectionclients-list">
                    <div className="sectionclients-item">
                        <img
                            src={Logo1}
                            alt=""
                            className="sectionclients-logo"
                        />
                    </div>
                    <div className="sectionclients-item">
                        <img
                            src={Logo2}
                            alt=""
                            className="sectionclients-logo"
                        />
                    </div>
                    <div className="sectionclients-item">
                        <img
                            src={Logo3}
                            alt=""
                            className="sectionclients-logo"
                        />
                    </div>
                    <div className="sectionclients-item">
                        <img
                            src={Logo4}
                            alt=""
                            className="sectionclients-logo"
                        />
                    </div>
                    <div className="sectionclients-item">
                        <img
                            src={Logo5}
                            alt=""
                            className="sectionclients-logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionClients;
