import React from "react";
import Footer from "./Footer";

const CartPage = () => {
  return (
    <div className="text-center pt-48 ">
      <i className="font-bold pt-48 md:text-6xl text-3xl text-green-600">
        Your amazing cart items
      </i>
      <div className="pt-20 justify-center items-center grid grid-cols-1 md:grid md:grid-cols-2 ">
        <div className="card card-side shadow-2xl m-10 ">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="furniture"
              className="w-20 h-20 ml-5 rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions ">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>       
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
