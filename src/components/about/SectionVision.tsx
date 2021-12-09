import React from "react";
import Grid from "@material-ui/core/Grid";
import BgImg from "../../assets/images/background/bg-bubble-3.png";
import Image1 from "../../assets/images/aboutus/vision.png";
import Image2 from "../../assets/images/aboutus/mission.png";

const SectionVision = () => {
    return (
        <div className="sectionvision">
            <img src={BgImg} alt="" className="sectionvision-bg" />
            <div className="container">
                <Grid container spacing={10}>
                    <Grid item lg={6} md={6} sm={12} spacing={5}>
                        <div className="sectionvision-item">
                            <img
                                src={Image1}
                                alt=""
                                className="sectionvision-item-img"
                            />
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} spacing={5}>
                        <div className="sectionvision-item">
                            <div className="sectionvision-item-text">
                                <p className="heading">Our Vision</p>
                                <p className="title">
                                    Be the best and go international
                                </p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Elit, quam suscipit purus
                                    donec amet. Egestas volutpat facilisi eu
                                    libero. Nunc, ipsum ornare mauris sit quam
                                    quis enim. Varius tellus in suspendisse
                                    placerat.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} spacing={5}>
                        <div className="sectionvision-item">
                            <div className="sectionvision-item-text">
                                <p className="heading">Our Mission</p>
                                <p className="title">
                                    Special & premium service to any clients
                                </p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Elit, quam suscipit purus
                                    donec amet. Egestas volutpat facilisi eu
                                    libero. Nunc, ipsum ornare mauris sit quam
                                    quis enim. Varius tellus in suspendisse
                                    placerat.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} spacing={5}>
                        <div className="sectionvision-item">
                            <img
                                src={Image2}
                                alt=""
                                className="sectionvision-item-img"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SectionVision;
