/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Modal_Page.css";
import Modal from "react-modal";
import ProductsData from "../../Pages/product.json";
import Pay_info from "./Pay_info";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "1200px",
    height: "700px",
    background: "#FFFFFF",
    borderRadius: "10px",
    // border: "none",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal_Page = ({ modalIsOpen, setIsOpen }) => {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openPayModal() {
    setModal(true);
    setIsOpen(false);
  }
  return (
    <div>
      <Pay_info modal={modal} setModal={setModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal} className="modal-close_btn">
          <img src="/close.png" />
        </button>
        {ProductsData.description.map((desc) => (
          <div className="modal-modal" key={desc.id}>
            <div>
              <img src={desc.image} className="modal-product_image" />
            </div>

            <div className="modal-desc">
              <h1 className="modal-name">{desc.name}</h1>
              <h1 className="modal-price">{desc.price}</h1>
              <h1>{desc.product}</h1>
              <h1>{desc.Resolution}</h1>
              <h1>{desc.storage}</h1>
              <h1>{desc.size}</h1>
              <h1>{desc.os}</h1>
              <h1>{desc.processor}</h1>
              <h1>{desc.camera}</h1>
              <h1>{desc.sim}</h1>

              <button onClick={openPayModal} className="modal-Buy_btn">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default Modal_Page;
