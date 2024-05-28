import React from "react";
import furniture from "../images/image_eight.jpg";
import furnitures from "../images/image-nine.jpg";
import furnex from "../images/image_six.jpg";

const Testmonies = () => {
  return (
    <div className="pt-10 md:flex">
      <div className="card w-80 md:w-96 glass ml-14 md:ml-10 mb-20 shadow-2xl">
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
        </div>
      </div>
      <div className="card w-80 md:w-96 glass ml-14 md:ml-10 mb-20 shadow-2xl">
        <figure>
          <img
            src={furnitures}
            alt="furniture"
            className="hover:scale-105 transition-all duration-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Rachael Orton</h2>
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
        </div>
      </div>
      <div className="card w-80 md:w-96 glass ml-14 md:ml-10 mb-20 shadow-2xl">
        <figure>
          <img
            src={furnex}
            alt="furniture"
            className="hover:scale-105 transition-all duration-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ricky Raymond</h2>
          <p>
            I recently redecorated my living room to become more classy with
            pieces from
            <span className="text-xl font-semibold text-green-600">
              {" "}
              Furnex{" "}
            </span>
            and i couldn't be more happier with the results.
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
        </div>
      </div>
    </div>
  );
};

export default Testmonies;
