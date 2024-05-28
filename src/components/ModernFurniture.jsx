import React from "react";
import furniture from "../images/freepik_image_hero_image.jpg"


const ModernFurniture = () => {
  return (
    <div className="md:flex">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold pt-20 ml-5 md:ml-20">
          We help you make
          <br /> Modern Furnitures
        </h1>
        <p className="ml-5 mr-10 md:ml-20 pt-4 md:pr-40">
          Begin by researching modern furniture designs and trends.
          <br /> Look for inspiration in magazines,
          <br /> online platforms, and design exhibitions. Develope a marketing
          strategy <br />
          to promote your modern furnitiure collection.
          <br /> Consider selling through your own website, <br />
          retail stores, or online marketplaces.
          <br /> Build partnerships with distributors or retailers to expand
          your reach.
        </p>
        <div className="grid grid-cols-1 ml-10 md:grid md:grid-cols-2 md:gap-7 pt-8 md:ml-20">
          <pan>𓋪 Testing and Evaluation</pan>
          <pan>𓋪 Research and inspiartion</pan>
          <pan>𓋪 Marketing and Distribution</pan>
          <pan>𓋪 Sketching and Rendering</pan>
          <button className="hover:bg-green-500 w-40 mr-40 px-3 py-3">Explore More</button>
        </div>
      </div>
      <div>
        <img src={furniture} alt="living room furniture" className="md:w-3/2 ml-10 md:mr-40  rounded md:h-96 md:pt-40 " />
      </div>
    </div>
  );
};

export default ModernFurniture;
