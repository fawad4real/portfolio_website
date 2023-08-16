import React from "react";
import constants from "../../assets/Config/constant";

import "./NowPlaying.scss";
import { Link } from "react-router-dom";
export const NowPlaying = () => {
  const handleVideoEnd = () => {
    console.log("Video playback has ended.");
    // Add your custom code here
  };
  return (
    <div className="nowplaying-wrapper">
      <Link to="/" className="cross-btn">
        <img src={constants.image.cross} />
      </Link>
      <video controls onEnded={handleVideoEnd} autoPlay>
        <source src={constants.video.video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
