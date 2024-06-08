import React from "react";
import hello from "../images/pato.JPG";
import Testimonies from "./Testimonies";

const Testimonials = () => {
  return (
    <div className="pt-20">
      <p className="text-center font-semibold text-green-600 pb-3">
        TESTIMONIALS
      </p>
      <h1 className="text-center font-semibold text-2xl md:text-6xl pb-10">
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
      {/* the chat section */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Lona
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">
          Furnex makes the best furniture piece ever! :)
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={hello} alt="hello" />
          </div>
        </div>
        <div className="chat-header">
          Furnex
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">
          Thanks for the Compliment. We hope you shop with us again.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      {/* card testimonials */}
      <Testimonies />
    </div>
  );
};

export default Testimonials;
