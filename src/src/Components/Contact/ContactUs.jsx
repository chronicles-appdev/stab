import "./ContactUs.css";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 3,
        delay: 1,
        stiffness: 260,
      }}
      viewport={{ once: true }}
    >
      <div className="contact-heading" id="contact">
        <h2>Let’s talk about everything</h2>
        <p>
          Reach out to us through this form, we are interested in helping you
          build a bright future for your ward.
        </p>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default ContactUs;
