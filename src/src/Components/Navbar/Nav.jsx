import "./Nav.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };
  return (
    <section className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>
        <div className="nav-right">
          <Link to="/product">
            {/* <a href="" style={{ textDecoration: "none", color: "#333333" }}> */}
            Products
            {/* </a> */}
          </Link>

          <a href="#features">Features</a>
          <a href="#review">Review</a>
          <a href="#blog">Blog</a>

          <a href="#FAQ">FAQ</a>
          <a href="#contact">Contact Us</a>

          <div className="nav-button">
            <Link to="/product">
              <button className="nav-btn">Buy now</button>
            </Link>
          </div>
        </div>

        <button className="hamburger" onClick={hamburgerToggle}>
          <img src="./hamburger.png" alt="" />
        </button>

        <div
          className="hamburger-menu"
          style={{ display: hamburger ? "flex" : "none" }}
        >
          <a href="#features">Features</a>
          <Link to="/product">
            {/* <a href="" style={{ textDecoration: "none", color: "#333333" }}> */}
            Products
            {/* </a> */}
          </Link>
          <a href="#FAQ">FAQ</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Nav;
