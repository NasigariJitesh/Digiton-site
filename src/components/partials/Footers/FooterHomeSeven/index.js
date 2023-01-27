import React from "react";
import background from "../../../../assets/images/background/footer-bg.png";
import logo from "../../../../assets/images/logos/logo-footer-three.png";

export default function FooterHomeSeven() {
  return (
    <footer
      className="main-footer footer-six bgs-cover pt-110"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-30">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="text">
                Sed perspiciatis unde omnis natus error voluptatem accusan
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
          <div className="col-md-2 col-sm-6">
            <div className="footer-widget link-widget">
              <h4 className="footer-title">Links</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer-widget link-widget">
              <h4 className="footer-title">Our Services</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Healthcare</a>
                </li>
                <li>
                  <a href="#">Data Science</a>
                </li>
                <li>
                  <a href="#">Applied math</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="footer-title">Address</h4>
              <p>Pellentesque aliquam sem in tellus fringilla interdum.</p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  required=""
                />
                <button type="button" value="submit">
                  <i className="fa fa-location-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area mt-65 mb-35">
        <div className="container">
          <div className="copyright-inner">
            <p>Copyright@ 2022 All Rights Reserved.</p>
            <ul className="footer-menu">
              <li>
                <a href="#">Privacy & Terms.</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
