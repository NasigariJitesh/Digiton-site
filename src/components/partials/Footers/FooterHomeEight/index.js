import React from "react";
import logo from "../../../../assets/images/logos/logo-white.png";

export default function FooterHomeEight() {
  return (
    <>
      <footer className="main-footer footer-seven bg-black text-white pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-25">
                  <a href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="text">
                  Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam
                  auctor, neque quis blandit vestibulum,
                </div>
                <div className="social-style-two mt-30">
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
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget link-widget ml-30 rml-0">
                <h3 className="footer-title">Explore Links</h3>
                <ul className="list-style-three">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-one">About Us</a>
                  </li>
                  <li>
                    <a href="/service-on">Services</a>
                  </li>
                  <li>
                    <a href="/testimonial-one">Testimonial</a>
                  </li>
                  <li>
                    <a href="/blog">Blog & News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget link-widget ml-30 rml-0">
                <h3 className="footer-title">Services</h3>
                <ul className="list-style-three">
                  <li>
                    <a href="/service-details">Threat Hunter</a>
                  </li>
                  <li>
                    <a href="/service-details">Incident Responder</a>
                  </li>
                  <li>
                    <a href="/service-details">Secure Managed IT</a>
                  </li>
                  <li>
                    <a href="/service-details">Compliance</a>
                  </li>
                  <li>
                    <a href="/service-details">Cyber Security</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h3 className="footer-title">Information</h3>
                <ul className="list-style-two">
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <span>
                      <b>Phone : </b>
                      <a href="callto:(+001)256689">(+001) 256 689</a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>
                      <b>Email : </b>
                      <a href="mailto:motal@gmail.com">motal@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      <b>Address : </b>9FW6+599 Egham, United Kingdom
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-30">
          <div className="container">
            <div className="copyright-inner pt-15">
              <p>© 2022. Restly All rights reserved.</p>
              <button
                type="button"
                className="scroll-top scroll-to-target"
                data-target="html"
              >
                <span className="fa fa-angle-up"></span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
