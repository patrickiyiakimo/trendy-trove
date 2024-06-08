import React from "react";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = async (e) => {
    e.preventDefault(); 
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "input a valid email";
        }
      },
    });

    if (email) {
      Swal.fire(`Thanks for subscribing:) ${email}`);
    }
  };

  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form onSubmit={subscribe}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                onChange={handleOnChange}
                value={email}
                type="text"
                placeholder="JohnDoe@gmail.com"
                className="input input-bordered join-item"
              />
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-500 text-white hover:text-white join-item"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
