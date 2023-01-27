import React from "react";
import background from "../../assets/images/hero/hero-three.jpg";

export default function Hero({ videoHandler }) {
  return (
    <section
      className="hero-section-two bgs-cover overlay pt-40 rpt-80"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-11">
            <div className="hero-content text-white py-220 rpy-120">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                EMPOWER YOUR BUSINESS
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Web & Mobile Apps Development
              </h1>
              <div className="hero-btns mt-35 wow fadeInUp delay-0-6s">
                <a href="/contact" className="theme-btn mr-25">
                  meet with us
                </a>
                <a
                  onClick={(e) => videoHandler(e)}
                  href="#"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
