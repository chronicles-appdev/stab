import "./ContactUs.css";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-heading">
        <h2>Let’s talk about everything</h2>
        <p>
          Reach out to us through this form, we are interested in helping you
          build a bright future for your ward.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
