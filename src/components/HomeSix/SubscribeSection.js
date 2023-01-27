import React from "react";
import background from "../../assets/images/background/subscribe-bg.png";
import dots from "../../assets/images/shapes/dots.png";
import stones from "../../assets/images/shapes/stones.png";

export default function SubscribeSection() {
  return (
    <div
      className="subscribe-two bgs-cover rel z-1 py-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="section-title text-white mb-25 rmb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title">Subscribe Now</span>
              <h2>Get more updates to buy in our bulletins</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              className="subscribe-form-two mb-15 mr-50 wow fadeInUp delay-0-4s"
              action="#"
            >
              <input type="email" placeholder="Email Address" required />
              <button className="theme-btn" type="submit">
                Subscribe Now <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="shape-stones">
        <img src={stones} alt="Stones" />
      </div>
      <div className="shape-dots">
        <img src={dots} alt="Dots" />
      </div>
    </div>
  );
}
