import "./Features.css";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      id="features"
      className="features-shapes"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 3,
        delay: 1.5,
        stiffness: 260,
      }}
      viewport={{ once: true }}
    >
      <div className="features-shape1">
        <img src="/Library.png" />
        <h4
          style={{
            textAlign: "center",
            width: "145px",
            height: "36px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "178%",
            color: "#FCFCFC",
          }}
        >
          Digital Library
        </h4>
        <p
          style={{
            textAlign: "center",
            width: "399px",
            height: "96px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "175%",
            color: "#FCFCFC",
          }}
        >
          Over 20 subject based e-textbooks & 100 standard electronic lessons in
          ebook format.
        </p>
      </div>

      <div className="features-shape2">
        <img src="/Online_Classroom.png" />
        <h4
          style={{
            textAlign: "center",
            width: "181px",
            height: "36px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "178%",
            color: "#FCFCFC",
          }}
        >
          Online classroom
        </h4>
        <p
          style={{
            textAlign: "center",
            width: "399px",
            height: "96px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "175%",
            color: "#FCFCFC",
          }}
        >
          This feature ensures a rich collaborative learning experience within
          and outside the classroom
        </p>
      </div>

      <div className="features-shape3">
        <img src="/Parental_control.png" />
        <h4
          style={{
            textAlign: "center",
            width: "181px",
            height: "36px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "178%",
            color: "#FCFCFC",
          }}
        >
          Parental Control
        </h4>
        <p
          style={{
            textAlign: "center",
            width: "399px",
            height: "96px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "175%",
            color: "#FCFCFC",
          }}
        >
          This feature ensures that you can control what your child is watching
          at every point in time.
        </p>
      </div>
    </motion.div>
  );
};

export default Features;
