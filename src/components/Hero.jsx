import React from "react";
import background from "../images/dreamtime-hero-image.jpg";

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen bg-bottom w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pt-20 pl-10 pr-10 md:p-40 items-center h-screen text-white">
        <hi className="text-2xl font-bold ">
          From timeless classics to modern marvels, we offer pieces that
          transforms houses into homes. Whether you're furnishing a cozy nook or
          designing a grand living space, we are here to elevate your interior
          journey. Enjoy browsing and discovering pieces that inspire your
          unique style!
        </hi>
        <div className="m-20">
          <button className="m-5 px-6 md:px-8 py-4 bg-green-600 rounded-md text-white font-semibold">
            Learn More
          </button>
          {/* <button className=" text-green-600 font-semibold px-8 py-4 bg-transparent border-green-600 border-2 rounded-md">
            About Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
