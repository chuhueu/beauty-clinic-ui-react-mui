import React from "react";
import Grid from "@material-ui/core/Grid";
import VideoImg from "../../assets/images/aboutus/video-about1.png";
import CircleIcon from "../../assets/images/icons/circle.png";
import PlayIcon from "../../assets/images/icons/play.png";

const SectionAbout = () => {
    return (
        <div className="sectionabout">
            <div className="container">
                <Grid container>
                    <Grid item lg={8}>
                        <div className="sectionabout-top">
                            <p className="heading">About</p>
                            <p className="title">
                                We are a leading beauty clinic that has been
                                around since 2002
                            </p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <div className="sectionabout-bottom">
                    <img src={VideoImg} alt="" className="sectionabout-vid" />
                    <img src={CircleIcon} alt="" className="circle-icon" />
                    <img src={PlayIcon} alt="" className="play-icon" />
                </div>
            </div>
        </div>
    );
};

export default SectionAbout;
