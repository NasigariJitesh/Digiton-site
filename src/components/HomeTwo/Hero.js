import React from "react";
import banner from "../../assets/images/hero/hero-two.jpg";

function Hero() {
  return (
    <section className="hero-section bg-dark-blue pt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                EMPOWER YOUR BUSINESS
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Excellent IT services for your success
              </h1>
              <div className="hero-btn mt-35 wow fadeInUp delay-0-6s">
                <a href="/contact" className="theme-btn">
                  meet with us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero-image">
              <img src={banner} alt="Hero" />
              <div className="circle-one"></div>
              <div className="circle-two"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-circle"></div>
    </section>
  );
}

export default Hero;
