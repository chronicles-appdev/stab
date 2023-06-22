import "./Product.css";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Nav";
import Modal_Page from "../Components/Modal/Modal_Page";
import ProductsData from "./product.json";
import { motion } from "framer-motion";

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
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.5,
                stiffness: 260,
              }}
            >
              Invest in a Brighter{" "}
              <span style={{ color: "#007BFF" }}> FUTURE</span>
            </motion.h1>
            <motion.button
              className="product-button"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                duration: 3,
                delay: 0.5,
                stiffness: 260,
              }}
            >
              Explore <img src="/Send.png" />
            </motion.button>
          </div>

          <motion.div
            className="product-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              delay: 0.5,
              stiffness: 260,
            }}
          >
            <img src="/Tablet.png" alt="hero-image" />
          </motion.div>
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
