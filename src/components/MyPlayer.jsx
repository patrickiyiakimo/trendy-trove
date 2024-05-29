
import React from "react";
// import Marquee from "react-marquee"; // Ensure you have this package installed
import video from "../video/7464106-hd_1080_1920_30fps.mp4";
import pics from "../images/image_eight.jpg";
import pics4 from "../images/image_six.jpg";
// import pics5 from "../images/image_three.jpg";
import pics2 from "../images/image_eight.jpg";
import pics3 from "../images/image_seven.jpg";
import pics6 from "../images/image-nine.jpg";

const MyPlayer = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl font-semibold">Our Gallery</h1>
      <div className="md:flex ml-20">
        <div className="mr-10">
          <video
            autoPlay
            muted
            controls
            width="250"
            height="50"
            className="rounded-md"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="grid grid-cols-2 md:mr-10 mr-20 md:grid md:grid-cols-3 ">
          {/* <Marquee direction="left" speed={50} delay={0} loop={0}> */}
          <div>
            <img src={pics3} alt="images" className="mr-10  hover:scale-105 transition-all duration-200 mt-4  rounded-md md:mr-4" />
          </div>
          <div>
            <img src={pics} alt="images" className="mr-10 hover:scale-105 transition-all duration-200 mt-4 rounded-md ml-5 " />
          </div>
          <div>
            <img src={pics4} alt="images" className="mr-10 hover:scale-105 transition-all duration-200 mt-4 rounded-md " />
          </div>
          <div>
            <img src={pics2} alt="images" className="mr-10 hover:scale-105 transition-all duration-200 mt-4 rounded-md ml-5" />
          </div>
          <div>
            <img src={pics3} alt="images" className="mr-10 hover:scale-105 transition-all duration-200 mt-4 rounded-md " />
          </div>
          <div>
            <img src={pics6} alt="images" className="mr-10 hover:scale-105 transition-all duration-200 mt-4 rounded-md ml-5" />
          </div>
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  );
};

export default MyPlayer;
