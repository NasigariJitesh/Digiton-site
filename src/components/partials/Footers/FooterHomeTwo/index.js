import React from "react";
import Background from "../../../../assets/images/footer/footer-bg-map.png";
import logo from "../../../../assets/images/logos/logo.png";

export default function FooterHomeTwo({ className }) {
  return (
    <footer
      className={`main-footer footer-two bgs-cover text-white ${
        className || ""
      }`}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container">
        <div className="footer-top pt-75">
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone-alt"></i>
              <div className="content">
                <span>Call Us</span>
                <h5>
                  <a href="callto:+012-345-6789">+012-345-6789</a>
                </h5>
              </div>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <div className="content">
                <span>Write to Us</span>
                <h5>
                  <a href="mailto:info@example.com">info@example.com</a>
                </h5>
              </div>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <div className="content">
                <span>Office hours</span>
                <h5>Mon-Sat 9:00 - 7:00</h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-widget-area pt-85 pb-20">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-35">
                  <a href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </div>
                <ul className="contact-info mt-20">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      1791 Yorkshire Circle <br />
                      Kitty Hawk, NC 279499
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-widget link-widget ml-20 rml-0">
                <h4 className="footer-title">Page Links</h4>
                <ul className="list-style-two">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="footer-widget link-widget ml-20 rml-0">
                <h4 className="footer-title">Explore</h4>
                <ul className="list-style-two">
                  <li>
                    <a href="#">Our Scientists</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">SaaS Solutions</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h4 className="footer-title">Newsletter</h4>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipisicing
                </p>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your Email Address"
                    required
                  />
                  <button type="submit">
                    <i className="fa fa-location-arrow"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-inner pt-15">
            <div className="social-style-one mb-10">
              <a href="http://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="http://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
            <p>copyright 2022 Restly All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
