import React from "react";
import random from "../images/pixify-three.jpg";

const WhyChooseUs = () => {
  return (
    <div className="pt-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-5 md:mb-10">
          Why Choose Us
        </h1>
        <p className="text-center pb-20">
          Choosing us for your furniture needs means <br />
          choosing quality, reliability, and exceptional service. Here's <br />
          why you should choose us:
        </p>
        <div className="md:grid md:grid-cols-2 md:gap-10 text-center">
          <div className="md:pl-72 pb-10">
            <span className="font-semibold text-2xl ">
              Fast & Free Shipping
            </span>
            <br />
            Our dedicated team is committed <br />
            to providing exceptional customer service
            <br /> every step of the way, from browsing our website.
          </div>
          <div className="md:pr-40 pb-10">
            <span className="font-semibold text-2xl">Easy to Shop</span>
            <br />
            We offer high-quality furniture crafted from
            <br /> premium materials to
            <br />
            ensure durability and longevity.
          </div>
          <div className="md:pl-72 pb-10">
            <span className="font-semibold text-2xl ">24/7 Support</span>
            <br />
            Your satisfaction is our top priority.
            <br /> If you're not completely satisfied with your <br />
            purchase, we'll work with you to make it right.
          </div>
          <div className="md:pr-40 pb-10">
            <span className="font-semibold text-2xl">Hassle Free Returns</span>
            <br />
            With our user-friendly website, <br />
            you can easily browse our products, <br />
            compare options, <br />
            and make purchases from <br />
            the comfort of your own home.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
