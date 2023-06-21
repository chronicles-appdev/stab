import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left">
          <a href="/">
            <img src="/footer_logo.png" alt="logo" />
          </a>
          <p>
            SuccessTAB delivers digital learning, contains volumes of
            pre-installed educational contents and most importantly it is 100%
            World Class.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#">Legal Information</a>
          </div>
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p>
              <span>
                <img src="/location.png" />
              </span>
              Lagos, Nigeria
            </p>

            <p>
              <span>
                <img src="/mail.png" />
              </span>
              solutions@chroniclesoft.com
            </p>

            <p>
              <span>
                <img src="/phone.png" />
              </span>
              +234 8037699362
            </p>
          </div>
          <div className="footer-newsletter">
            <h1>Subscribe to our Newsletter</h1>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
