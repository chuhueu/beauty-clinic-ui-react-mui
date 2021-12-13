import React from "react";
import SearchIcon from "../../assets/images/icons/search.png";
import Post1 from "../../assets/images/blog/post-1.png";
import Post2 from "../../assets/images/blog/post-2.png";
import Post3 from "../../assets/images/blog/post-3.png";
import FacebookIcon from "../../assets/images/icons/facebook.png";
import TwitterIcon from "../../assets/images/icons/twitter.png";
import InstagramIcon from "../../assets/images/icons/instagram.png";
import LinkedinIcon from "../../assets/images/icons/linkedin.png";

const SectionWidget = () => {
    return (
        <div className="sectionarticle-right">
            <form className="searchwidget">
                <input type="text" placeholder="Search here" />
                <button className="icon">
                    <img src={SearchIcon} alt="" />
                </button>
            </form>
            <div className="postwidget">
                <p className="title">Recent Posts</p>
                <div className="postwidget-list">
                    <div className="postwidget-item">
                        <img src={Post1} alt="" className="postwidget-img" />
                        <div className="postwidget-content">
                            <p className="time">01 jan 2021</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="postwidget-item">
                        <img src={Post2} alt="" className="postwidget-img" />
                        <div className="postwidget-content">
                            <p className="time">01 jan 2021</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="postwidget-item">
                        <img src={Post3} alt="" className="postwidget-img" />
                        <div className="postwidget-content">
                            <p className="time">01 jan 2021</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catswidget">
                <p className="title">Categories</p>
                <div className="catswidget-list">
                    <div className="catswidget-item">
                        <p>Consultation</p>
                    </div>
                    <div className="catswidget-item">
                        <p>Beauty</p>
                    </div>
                    <div className="catswidget-item">
                        <p>Treatments</p>
                    </div>
                    <div className="catswidget-item">
                        <p>News</p>
                    </div>
                </div>
            </div>
            <div className="tagswidget">
                <p className="title">Categories</p>
                <div className="tagswidget-list">
                    <div className="tagswidget-item">
                        <p>beauty</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>cute</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>skin</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>glow</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>style</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>clinic</p>
                    </div>

                    <div className="tagswidget-item">
                        <p>style</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>great</p>
                    </div>
                    <div className="tagswidget-item">
                        <p>cute</p>
                    </div>
                </div>
            </div>
            <div className="socialwidget">
                <p className="title">Social Connect</p>
                <div className="socialwidget-list">
                    <div className="socialwidget-item">
                        <img src={FacebookIcon} alt="" className="icon" />
                    </div>
                    <div className="socialwidget-item">
                        <img src={TwitterIcon} alt="" className="icon" />
                    </div>
                    <div className="socialwidget-item">
                        <img src={InstagramIcon} alt="" className="icon" />
                    </div>
                    <div className="socialwidget-item">
                        <img src={LinkedinIcon} alt="" className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWidget;
