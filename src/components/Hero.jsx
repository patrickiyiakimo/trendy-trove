import React from "react";
import background from "../images/dreamtime-hero-image.jpg";
import "../App.css"; 

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen bg-bottom w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pt-40 pl-5 pr-10 md:p-40 items-center h-screen text-white">
        <hi className="text-2xl font-bold ">
          From timeless classics to modern marvels, we offer pieces that
          transforms houses into homes. Whether you're furnishing a cozy nook or
          designing a grand living space, we are here to elevate your interior
          journey. Enjoy browsing and discovering pieces that inspire your
          unique style!
        </hi>
        <div className="m-20">
          <button className="button px-3 py-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
