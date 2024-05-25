import React from "react";
import Video from "../assets/intro.mp4";

function IntroVideo() {
  return (
    <div className="intro">
      <video src={Video} autoPlay muted loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
}

export default IntroVideo;
