import React from "react";
import Grid from "@material-ui/core/Grid";
import Article1 from "../../assets/images/blog/article-1.png";
import Article2 from "../../assets/images/blog/article-2.png";
import Article3 from "../../assets/images/blog/article-3.png";
import FolderIcon from "../../assets/images/icons/folder.png";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.png";
import SectionWidget from "./SectionWidget";

const SectionArticle = () => {
    return (
        <div className="sectionarticle">
            <div className="container">
                <Grid container spacing={10}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <div className="sectionarticle-left">
                            <Grid container>
                                <Grid item lg={12}>
                                    <div className="article-item">
                                        <img
                                            src={Article1}
                                            alt=""
                                            className="article-item-img"
                                        />
                                        <div className="article-item-text">
                                            <div className="heading">
                                                <img
                                                    src={FolderIcon}
                                                    alt=""
                                                    className="icon"
                                                />
                                                <p>Consultation</p>
                                            </div>
                                            <p className="title">
                                                How much does a consultation
                                                cost at our clinic?
                                            </p>
                                            <p className="desc">
                                                A wonderful serenity has taken
                                                possession of my entire soul,
                                                like these sweet mornings of
                                                spring which I enjoy with my
                                                whole heart. I am alone, and
                                                feel the charm of existence in
                                                this spot, which was created for
                                                the…
                                            </p>
                                        </div>
                                        <button className="button button--primary button--rounded">
                                            Read More
                                            <img
                                                src={ArrowRightIcon}
                                                alt=""
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item lg={12}>
                                    <div className="article-item">
                                        <img
                                            src={Article2}
                                            alt=""
                                            className="article-item-img"
                                        />
                                        <div className="article-item-text">
                                            <div className="heading">
                                                <img
                                                    src={FolderIcon}
                                                    alt=""
                                                    className="icon"
                                                />
                                                <p>Beauty</p>
                                            </div>
                                            <p className="title">
                                                Watch out! don't choose the
                                                wrong beauty product
                                            </p>
                                            <p className="desc">
                                                A wonderful serenity has taken
                                                possession of my entire soul,
                                                like these sweet mornings of
                                                spring which I enjoy with my
                                                whole heart. I am alone, and
                                                feel the charm of existence in
                                                this spot, which was created for
                                                the…
                                            </p>
                                        </div>
                                        <button className="button button--primary button--rounded">
                                            Read More
                                            <img
                                                src={ArrowRightIcon}
                                                alt=""
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item lg={12}>
                                    <div className="article-item">
                                        <img
                                            src={Article3}
                                            alt=""
                                            className="article-item-img"
                                        />
                                        <div className="article-item-text">
                                            <div className="heading">
                                                <img
                                                    src={FolderIcon}
                                                    alt=""
                                                    className="icon"
                                                />
                                                <p>Treatments</p>
                                            </div>
                                            <p className="title">
                                                About skin care you need to know
                                            </p>
                                            <p className="desc">
                                                A wonderful serenity has taken
                                                possession of my entire soul,
                                                like these sweet mornings of
                                                spring which I enjoy with my
                                                whole heart. I am alone, and
                                                feel the charm of existence in
                                                this spot, which was created for
                                                the…
                                            </p>
                                        </div>
                                        <button className="button button--primary button--rounded">
                                            Read More
                                            <img
                                                src={ArrowRightIcon}
                                                alt=""
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <SectionWidget />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="pagination">
                            <div className="pagination-item active">
                                <p>1</p>
                            </div>
                            <div className="pagination-item">
                                <p>2</p>
                            </div>
                            <div className="pagination-item">
                                <p>3</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SectionArticle;
