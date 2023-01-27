import React from "react";
import background from "../../assets/images/hero/hero-five.jpg";

function Hero() {
  return (
    <section className="hero-section-five rel pt-125">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="hero-content-five mr-10 rmr-0 py-125 rpy-100">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                EMPOWER YOUR BUSINESS
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Excellent services for IT success
              </h1>
              <ul className="list-style-one py-10 wow fadeInUp delay-0-6s">
                <li>Best IT Solutions</li>
                <li>Professional Web Solutions</li>
                <li>Products Engeering</li>
              </ul>
              <div className="hero-btns mt-35 wow fadeInUp delay-0-8s">
                <a href="/contact" className="theme-btn mr-15 mb-10">
                  meet with us
                </a>
                <a href="/about-one" className="theme-btn style-six mb-10">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-five-image bgs-cover wow fadeInRight delay-0-8s"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </section>
  );
}

export default Hero;
