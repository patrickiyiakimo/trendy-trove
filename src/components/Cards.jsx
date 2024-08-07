import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const { name, image, body, _id, price } = item;
  const [isHeartFilled, setIsHeartFilled] = React.useState(false);

  const handleAddToCart = async (item) => {
    const cartItems = { menuItemIs: _id, name, price, image };
    
   await fetch("/menu.json", {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body:JSON.stringify(cartItems)
    })
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
    })
  };

  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-2xl ml-12 md:ml-10 mb-10">
      <Link to={`/item/${item.id}`}>
        <figure>
          <img
            src={item.image}
            alt="furnitures"
            className="hover:scale-105 cursor-pointer transition-all duration-200 rounded-md"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.body}</p>
        <p className="text-red-400 font-semibold">{item.price}</p>
        <div
          className={`${isHeartFilled ? "text-red-600" : "text-green-600"}`}
          onClick={() => setIsHeartFilled(!isHeartFilled)}
        >
          <FaHeart className="mt-10 h-5 w-5 cursor-pointer absolute" />
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn bg-green-600 text-white"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;