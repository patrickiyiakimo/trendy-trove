import React from "react";
import hello from "../images/pato.JPG";
import furniture from "../images/image_eight.jpg";

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
      <div className="card w-96 glass ml-10 mb-20">
        <figure>
          <img
            src={furniture}
            alt="furniture"
            className="hover:scale-105 transition-all duration-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Patrick I.</h2>
          <p>
            Thrilled with my recent purchase from{" "}
            <span className="text-xl font-semibold text-green-600">Furnex</span>
            . The quality of the furniture exceeded my expectations, and the
            delivery process was seamless. Will definitely be shopping here
            again.
          </p>
          <div className="">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-600"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-300"
                checked
              />
            </div>
          </div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
