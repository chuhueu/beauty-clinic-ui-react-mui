import React from "react";
import VideoTourImg from "../../assets/images/gallery/video-tour.png";
import PlayButton from "../../assets/images/icons/play-button.png";

const VideoTour = () => {
    return (
        <div
            className="sectionslogan"
            style={{ backgroundImage: `url("${VideoTourImg}")` }}
        >
            <div className="sectionslogan-text">
                <p className="title">Watch the video tour</p>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                </p>
                <div className="sectionslogan-play">
                    <img src={PlayButton} alt="" className="play-icon" />
                </div>
            </div>
        </div>
    );
};

export default VideoTour;
