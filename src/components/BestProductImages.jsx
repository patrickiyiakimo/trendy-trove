// import React from 'react'

// const BestProductImages = () => {
//   return (
//       <div>
//           <div>
              
//           </div>
//     </div>
//   )
// }

// export default BestProductImages;





import React from "react";
import Slider from "react-slick";
import freepik from "../images/freepik_image_hero_image.jpg";
import hero from "../images/hero_image.jpg";
import eight from "../images/image_eight.jpg";
import four from "../images/image_four.jpg";
// import { baseUrl } from "./config";

function BestProductImages() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={freepik} alt="carousel" className="p-10  w-2/4"/>
        </div>
        <div>
          <img src={hero} alt="carousel"/>
        </div>
        <div>
          <img src={eight} alt="carousel"/>
        </div>
        <div>
          <img src={four} alt="carousel"/>
        </div>
      </Slider>
    </div>
  );
}

export default BestProductImages;
