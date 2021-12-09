import React from "react";
import Grid from "@material-ui/core/Grid";
import Image1 from "../../assets/images/gallery/gallery1.png";
import Image2 from "../../assets/images/gallery/gallery2.png";
import Image3 from "../../assets/images/gallery/gallery3.png";
import Image4 from "../../assets/images/gallery/gallery4.png";
import Image5 from "../../assets/images/gallery/gallery5.png";
import Image6 from "../../assets/images/gallery/gallery6.png";
import Image7 from "../../assets/images/gallery/gallery7.png";
import Image8 from "../../assets/images/gallery/gallery8.png";
import Image9 from "../../assets/images/gallery/gallery9.png";

const OurGallery = () => {
    return (
        <div className="ourgallery">
            <div className="container">
                <div className="ourgallery-top">
                    <p className="heading">Our Gallery</p>
                    <Grid container spacing={2}>
                        <Grid item lg={7} md={7} xs={12}>
                            <p className="title">
                                Check out the collection pictures from our
                                clinic
                            </p>
                        </Grid>
                        <Grid item lg={5} md={5} xs={12}>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </p>
                        </Grid>
                    </Grid>
                </div>
                <div className="ourgallery-content">
                    <Grid container spacing={5}>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image1}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image2}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image3}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>

                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image4}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image5}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image6}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image7}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image8}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <img
                                src={Image9}
                                alt=""
                                className="ourgallery-img"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="ourgallery-bottom">
                    <Grid container>
                        <Grid item lg={8} sm={12}>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non enim,{" "}
                                <span>our teams.</span>
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default OurGallery;
