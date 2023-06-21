import Testimonial from "../Testimonial/Testimonial";
import "./Product_Review.css";
const Product_Review = () => {
  return (
    <div className="review-wrapper">
      <div className="review-heading">
        <h2>
          Product Review <div className="review-marker marker"></div>
        </h2>

        <p>Check out what our customers are saying about us</p>
      </div>
      <div className="review-video">
        <Testimonial />
      </div>
    </div>
  );
};

export default Product_Review;
