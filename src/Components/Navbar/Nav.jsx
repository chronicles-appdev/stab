import "./Nav.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Nav = () => {
  return (
    <section className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="#features">Features</a>
          <Link to="/product">
            <a href="" style={{ textDecoration: "none", color: "#333333" }}>
              Products
            </a>
          </Link>
          <a href="#FAQ">FAQ</a>
          <a href="#contact">Contact Us</a>

          <div className="nav-button">
            <Link to="/product">
              <button className="nav-btn">Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
