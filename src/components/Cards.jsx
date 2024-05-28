// eslint-disable react/prop-types
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = React.useState(false);

  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-2xl ml-12 md:ml-10 mb-10">
      <figure>
        <img
          src={item.image}
          alt="furnitures"
          className="hover:scale-105 transition-all duration-200 rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.body}</p>
        <div
          className={`${isHeartFilled ? "text-red-600" : "text-green-600"}`}
          onClick={() => setIsHeartFilled(!isHeartFilled)}
        >
          <FaHeart className="mt-10 h-5 w-5 cursor-pointer absolute" />
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-green-600 text-white ">
            Read More... <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
