import React from "react";
import hello from "../images/pato.JPG";
import Testimonies from "./Testimonies";

const Testimonials = () => {
  return (
    <div className="pt-20">
      <p className="text-center font-semibold text-green-600 pb-3">
        TESTIMONIALS
      </p>
      <h1 className="text-center font-semibold text-2xl md:text-4xl pb-10">
        Our Client Reviews
      </h1>
      <div className="avatar-group mb-10 flex items-center justify-center -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-12">
            <img src={hello} alt="hello" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={hello} alt="hello" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={hello} alt="hello" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="w-12 bg-neutral text-neutral-content">
            <span>+99</span>
          </div>
        </div>
      </div>
      {/* card testimonials */}
     <Testimonies />
    </div>
  );
};

export default Testimonials;
