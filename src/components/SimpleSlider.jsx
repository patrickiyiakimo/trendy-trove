// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cards from "./Cards";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";


// const simpleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     >
//       NEXT
//     </div>
//   );
// };

// const simplePrevArrow = (props) => {
//    const { className, style, onClick } = props;
//    return (
//      <div
//        className={className}
//        style={{ ...style, display: "block", background: "green" }}
//        onClick={onClick}
//      >
//       BACK
//      </div>
//    );
// }

// const SimpleSlider = () => {
//   const [recipes, setRecipes] = React.useState([]);
//   const slider = React.useRef(null);

//   useEffect(() => {
//     fetch("/menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setRecipes(data);
//       });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],

//     nextArrow: <simpleNextArrow />,
//     prevArrow: <simplePrevArrow />
//   };
//   return (
//     <div className="slider-container">
//       <div className="align-center justify-center flex">
//         <button
//           onClick={() => slider?.current?.slickPrev()}
//           className="px-2 py-2 rounded-full ml-5 hover:bg-gray-300"
//         >
//           <IoIosArrowBack />
//         </button>
//         <button onClick={() => slider?.current?.slickNext()}
//         className="px-2 py-2 rounded-full hover:bg-gray-300"
//         >
//           <IoIosArrowForward />
//         </button>
//       </div>

//       <Slider ref={slider} {...settings}>
//         {recipes.map((item) => (
//           <Cards key={item._id} item={item} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SimpleSlider;


import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SimpleSlider = () => {
  const [recipes, setRecipes] = React.useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false, // Disable default arrows
  };

  return (
    <div className="slider-container">
      <div className="align-center justify-center flex">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="px-2 py-2 rounded-full ml-5 hover:bg-gray-300"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="px-2 py-2 rounded-full hover:bg-gray-300"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {recipes.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
