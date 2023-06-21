import "./Product.css";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Nav";
import Modal_Page from "../Components/Modal/Modal_Page";
import ProductsData from "./product.json";

const Product = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="">
      <Nav />

      <div>
        <Modal_Page modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

        <div className="product-wrapper">
          <div className="product-shape">
            <h1>
              Invest in a Brighter{" "}
              <span style={{ color: "#007BFF" }}> FUTURE</span>
            </h1>
            <button className="product-button">
              Explore <img src="/Send.png" />
            </button>
          </div>

          <div className="product-image">
            <img src="/Tablet.png" alt="hero-image" />
          </div>
        </div>

        <div className="product-container">
          <h2>
            Our products <div className="product-marker marker"></div>
          </h2>
          <p>
            Our product SuccessTAB serves our customers at two different levels,
            both primary and secondary and they are categorized into four major
            categories as seen below.
          </p>
        </div>

        <div className="product-cards">
          {ProductsData.products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src="/star.png" />
              <button onClick={openModal}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
