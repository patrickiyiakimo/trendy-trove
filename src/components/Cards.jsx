// eslint-disable react/prop-types
import React from "react";

const Cards = ({ item }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="furnitures" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
