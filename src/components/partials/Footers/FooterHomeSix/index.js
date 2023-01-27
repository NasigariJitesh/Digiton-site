import React from "react";
import logo from "../../../../assets/images/logos/logo-footer-two.png";

export default function FooterHomeSix() {
  return (
    <footer className="main-footer footer-five bg-lighter pt-110">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-35">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="text">
                Build a modern and creative website with crealand
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
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget link-widget ml-50 rml-0">
              <h4 className="footer-title">Product</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Landing page</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Referral Program</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget link-widget ml-50 rml-0">
              <h4 className="footer-title">Services</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget contact-widget mr-30 rmr-0">
              <h4 className="footer-title">Informaion</h4>
              <ul className="list-style-two">
                <li>
                  <i className="fas fa-phone-alt"></i>{" "}
                  <a href="callto:+123-589-847">+123 - 589 - 847</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  <a href="mailto:resly@gmail.com">resly@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> 1791 Yorkshire
                  Circle Kitty Hawk, NC 279499
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area mt-50">
        <div className="container">
          <div className="copyright-inner justify-content-center">
            <p>@copyright 2022 Restly All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
