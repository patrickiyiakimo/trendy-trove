// import { useEffect, useState } from "react";
// import React from "react";

// const Navbar = () => {
//   // theme toggle function
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const handleToggle = (e) => {
//     if (e.target.checked) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     const localTheme = localStorage.getItem("theme");
//     document.querySelector("html").setAttribute("data-theme", localTheme);
//   }, [theme]);

//   return (
//     <div
//       className={`navbar ${
//         theme === "dark" ? "dark" : ""
//       } bg-base-100 text-green-600 font-semibold z-10 fixed
//           transition-all duration-300 ease-in-out shadow-xl
//         `}
//     >
//       <div className="navbar-start ">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>Products</a>
//             </li>
//             <li>
//               <a>Services</a>
//             </li>
//             {/* <li>
//               <a>Contact Us</a>
//             </li> */}
//             <li>
//               <a>Contact</a>
//               <ul className="p-2">
//                 <li>
//                   {/* You can open the modal using document.getElementById('ID').showModal() method */}
//                   <button
//                     className="btn"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Sign Up
//                   </button>
//                   <dialog
//                     id="my_modal_3"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box ">
//                       <form method="dialog">
//                         {/* if there is a button in form, it will close the modal */}
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                       </form>
//                       <h3 className="font-bold text-lg">Hello!</h3>
//                       <p className="py-4">
//                         Press ESC key or click on ✕ button to close
//                       </p>
//                     </div>
//                   </dialog>
//                 </li>
//                 <li>
//                   <a>Log In</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle"
//               >
//                 <div className="indicator">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   <span className="badge badge-sm indicator-item">0</span>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <a className=" ml-2 text-3xl font-bold text-green-600">Furnex</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Services</a>
//           </li>
//           {/* <li>
//             <a>Contact Us</a>
//           </li> */}
//           <li>
//             <details>
//               <summary>Contact</summary>
//               <ul className="p-2">
//                 <li>
//                   {/* You can open the modal using document.getElementById('ID').showModal() method */}
//                   <button
//                     className="btn"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Sign Up
//                   </button>
//                   <dialog
//                     id="my_modal_3"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box ">
//                       <form method="dialog">
//                         {/* if there is a button in form, it will close the modal */}
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                       </form>
//                       <h3 className="font-bold text-lg">Hello!</h3>
//                       <p className="py-4">
//                         Press ESC key or click on ✕ button to close
//                       </p>
//                     </div>
//                   </dialog>
//                 </li>
//                 <li>
//                   <a>Log In</a>
//                 </li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <div className="indicator">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 <span className="badge badge-sm indicator-item">0</span>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end ">
//         <button className="btn text-green-600" onChange={handleToggle}>
//           <label className="flex cursor-pointer gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="5" />
//               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//             </svg>
//             <input
//               type="checkbox"
//               value="synthwave"
//               className={`toggle theme-controller ${
//                 theme === "dark" ? "checked" : ""
//               }`}
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </label>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useEffect, useState } from "react";
// import React from "react";

// const Navbar = () => {
//   // const [isAccepted, setIsAccepted] = useState();
//   // theme toggle function
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const handleToggle = (e) => {
//     if (e.target.checked) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     const localTheme = localStorage.getItem("theme");
//     document.querySelector("html").setAttribute("data-theme", localTheme);
//   }, [theme]);

//   // mobile sign/log section
//   const openMobileSignUpModal = () => {
//     document.getElementById("mobile_sign_up_modal").showModal();
//   };
//   const openMobileLogInModal = () => {
//     document.getElementById("mobile_log_in_modal").showModal();
//   };

//   // desktop sign/log section
//   const openDesktopSignUpModal = () => {
//     document.getElementById("desktop_sign_up_modal").showModal();
//   };
//   const openDesktopLogInModal = () => {
//     document.getElementById("desktop_log_in_modal").showModal();
//   };

//   return (
//     <div
//       className={`navbar ${
//         theme === "dark" ? "dark" : ""
//       } bg-base-100 text-green-600 font-semibold z-10 fixed
//           transition-all duration-300 ease-in-out shadow-xl
//         `}
//     >
//       <div className="navbar-start ">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>Products</a>
//             </li>
//             <li>
//               <a>Services</a>
//             </li>
//             <li>
//               <a>Contact</a>
//               <ul className="p-2">
//                 <li>
//                   <button className="btn" onClick={openMobileSignUpModal}>
//                     Sign Up
//                   </button>
//                   <dialog
//                     id="mobile_sign_up_modal"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box">
//                       <h3 className="font-bold mb-5 text-lg">SIGN UP</h3>
//                       <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                         <input
//                           type="text"
//                           name="text"
//                           id="name"
//                           placeholder="John Doe"
//                           className="border-2 px-3 py-4 w-full mb-4  block"
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="JohnDoe@gmail.com"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="JohnDoe1234"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <button className="hover:bg-green-500">Submit</button>
//                         <p>
//                           Already have a account?{" "}
//                           <span className="text-blue-600 underline ml-20">
//                             Log In
//                           </span>
//                         </p>
//                       </form>
//                     </div>
//                   </dialog>
//                 </li>
//                 <li>
//                   <button className="btn" onClick={openMobileLogInModal}>
//                     Log in
//                   </button>
//                   <dialog
//                     id="mobile_sign_up_modal"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box">
//                       <h3 className="font-bold mb-5 text-lg">LOG IN</h3>
//                       <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                         <input
//                           type="text"
//                           name="text"
//                           id="name"
//                           placeholder="John Doe"
//                           className="border-2 px-3 py-4 w-full mb-4  block"
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="JohnDoe@gmail.com"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="JohnDoe1234"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <button className="hover:bg-green-500">Submit</button>
//                         <p>
//                           Already have a account?{" "}
//                           <span className="text-blue-600 underline ml-20">
//                             Log In
//                           </span>
//                         </p>
//                       </form>
//                     </div>
//                   </dialog>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle"
//               >
//                 <div className="indicator">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   <span className="badge badge-sm indicator-item">0</span>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <a className=" ml-2 text-3xl font-bold text-green-600">Furnex</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Services</a>
//           </li>
//           <li>
//             <details>
//               <summary>Contact</summary>
//               <ul className="p-2">
//                 <li>
//                   <button className="btn" onClick={openDesktopSignUpModal}>
//                     Sign Up
//                   </button>
//                   <dialog
//                     id="desktop_sign_up_modal"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box ">
//                       <h3 className="font-bold mb-5 text-lg">SIGN UP</h3>
//                       <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                         <input
//                           type="text"
//                           name="text"
//                           id="name"
//                           placeholder="John Doe"
//                           className="border-2 px-3 py-4 w-full mb-4"
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="JohnDoe@gmail.com"
//                           className="border-2 px-3 py-4 w-full mb-4"
//                         />
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="JohnDoe1234"
//                           className="border-2 px-3 py-4 w-full mb-4"
//                         />
//                         <button className="hover:bg-green-500">Submit</button>
//                         <p>
//                           Already have a account?{" "}
//                           <span className="text-blue-600 underline ml-48">
//                             Log In
//                           </span>
//                         </p>
//                       </form>
//                     </div>
//                   </dialog>
//                 </li>
//                 <li>
//                   <button className="btn" onClick={openDesktopLogInModal}>
//                     Log in
//                   </button>
//                   <dialog
//                     id="mobile_sign_up_modal"
//                     className="modal flex items-center justify-center"
//                   >
//                     <div className="modal-box">
//                       <h3 className="font-bold mb-5 text-lg">LOG IN</h3>
//                       <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                           ✕
//                         </button>
//                         <input
//                           type="text"
//                           name="text"
//                           id="name"
//                           placeholder="John Doe"
//                           className="border-2 px-3 py-4 w-full mb-4  block"
//                         />
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="JohnDoe@gmail.com"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="JohnDoe1234"
//                           className="border-2 px-3 py-4 w-full mb-4 block"
//                         />
//                         <button className="hover:bg-green-500">Submit</button>
//                         <p>
//                           Already have a account?{" "}
//                           <span className="text-blue-600 underline ml-20">
//                             Log In
//                           </span>
//                         </p>
//                       </form>
//                     </div>
//                   </dialog>
//                 </li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <div className="indicator">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 <span className="badge badge-sm indicator-item">0</span>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end ">
//         <button className="btn text-green-600" onChange={handleToggle}>
//           <label className="flex cursor-pointer gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="5" />
//               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//             </svg>
//             <input
//               type="checkbox"
//               value="synthwave"
//               className={`toggle theme-controller ${
//                 theme === "dark" ? "checked" : ""
//               }`}
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </label>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;














import { useEffect, useState } from "react";
import React from "react";

const Navbar = () => {
  // theme toggle function
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // mobile sign/log section
  const openMobileSignUpModal = () => {
    document.getElementById("mobile_sign_up_modal").showModal();
  };
  const openMobileLogInModal = () => {
    document.getElementById("mobile_log_in_modal").showModal();
  };

  // desktop sign/log section
  const openDesktopSignUpModal = () => {
    document.getElementById("desktop_sign_up_modal").showModal();
  };
  const openDesktopLogInModal = () => {
    document.getElementById("desktop_log_in_modal").showModal();
  };

  return (
    <div
      className={`navbar ${
        theme === "dark" ? "dark" : ""
      } bg-base-100 text-green-600 font-semibold z-10 fixed
          transition-all duration-300 ease-in-out shadow-xl
        `}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
              <ul className="p-2">
                <li>
                  <button className="btn" onClick={openMobileSignUpModal}>
                    Sign Up
                  </button>
                  <dialog
                    id="mobile_sign_up_modal"
                    className="modal flex items-center justify-center"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold mb-5 text-lg">SIGN UP</h3>
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <input
                          type="text"
                          name="text"
                          id="name"
                          placeholder="name: John Doe"
                          className="border-2 px-3 py-4 w-full mb-4  block"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email: JohnDoe@gmail.com"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="password: JohnDoe1234"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <button className="hover:bg-green-500">Submit</button>
                        <p>
                          Already have a account?{" "}
                          <span className="text-blue-600 underline ml-20">
                            Log In
                          </span>
                        </p>
                      </form>
                    </div>
                  </dialog>
                </li>
                <li>
                  <button className="btn" onClick={openMobileLogInModal}>
                    Log in
                  </button>
                  <dialog
                    id="mobile_log_in_modal"
                    className="modal flex items-center justify-center"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold mb-5 text-lg">LOG IN</h3>
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email: JohnDoe@gmail.com"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="password: JohnDoe1234"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <button className="hover:bg-green-500">Submit</button>
                        <p>
                          Don't have an account?{" "}
                          <span className="text-blue-600 underline ml-20">
                            Sign Up
                          </span>
                        </p>
                      </form>
                    </div>
                  </dialog>
                </li>
              </ul>
            </li>
            <li>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a className=" ml-2 text-3xl font-bold text-green-600">Furnex</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <details>
              <summary>Contact</summary>
              <ul className="p-2">
                <li>
                  <button className="btn" onClick={openDesktopSignUpModal}>
                    Sign Up
                  </button>
                  <dialog
                    id="desktop_sign_up_modal"
                    className="modal flex items-center justify-center"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold mb-5 text-lg">SIGN UP</h3>
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <input
                          type="text"
                          name="text"
                          id="desktop_signup_name"
                          placeholder="name: John Doe"
                          className="border-2 px-3 py-4 w-full mb-4"
                        />
                        <input
                          type="email"
                          name="email"
                          id="desktop_signup_email"
                          placeholder="email: JohnDoe@gmail.com"
                          className="border-2 px-3 py-4 w-full mb-4"
                        />
                        <input
                          type="password"
                          name="password"
                          id="desktop_signup_password"
                          placeholder="password: JohnDoe1234"
                          className="border-2 px-3 py-4 w-full mb-4"
                        />
                        <button className="hover:bg-green-500">Submit</button>
                        <p>
                          Already have an account?{" "}
                          <span className="text-blue-600 underline ml-48">
                            Log In
                          </span>
                        </p>
                      </form>
                    </div>
                  </dialog>
                </li>
                <li>
                  <button className="btn" onClick={openDesktopLogInModal}>
                    Log in
                  </button>
                  <dialog
                    id="desktop_log_in_modal"
                    className="modal flex items-center justify-center"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold mb-5 text-lg">LOG IN</h3>
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <input
                          type="email"
                          name="email"
                          id="desktop_login_email"
                          placeholder="email: JohnDoe@gmail.com"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <input
                          type="password"
                          name="password"
                          id="desktop_login_password"
                          placeholder="password: JohnDoe1234"
                          className="border-2 px-3 py-4 w-full mb-4 block"
                        />
                        <button className="hover:bg-green-500">Submit</button>
                        <p>
                          Don't have an account?{" "}
                          <span className="text-blue-600 underline ml-48">
                            Sign Up
                          </span>
                        </p>
                      </form>
                    </div>
                  </dialog>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <button className="btn text-green-600" onChange={handleToggle}>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className={`toggle theme-controller ${
                theme === "dark" ? "checked" : ""
              }`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
