import React from "react";
import background from "../images/src/images/main_hero_image.jpg";

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div></div>
    </div>
  );
};

export default Hero;
