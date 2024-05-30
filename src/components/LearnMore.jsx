import React from "react";
import Footer from "./Footer";

const LearnMore = () => {
  return (
    <div className="">
      <div className="pt-40 ">
        <h1 className="text-center font-bold text-2xl md:text-6xl pb-10">
          Welcome to <span className="text-green-600">Furnex</span>
        </h1>
        <p className="ml-10 mr-10 md:px-96 pb-10">
          At Furnex, we believe that furniture is more than just a functional
          necessity. It's an expression of style, a reflection of personality,
          and a cornerstone of comfort. Our mission is to provide high-quality
          furniture that enhances your living space and transforms your house
          into a home.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LearnMore;
