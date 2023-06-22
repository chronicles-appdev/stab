import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about-container"
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
      <h2>
        About SuccessTAB <div className="marker"></div>
      </h2>
      <p>
        SuccessTAB delivers digital learning, contains volumes of pre-installed
        educational contents and most importantly it is 100% World Class.
      </p>
    </motion.div>
  );
};

export default About;
