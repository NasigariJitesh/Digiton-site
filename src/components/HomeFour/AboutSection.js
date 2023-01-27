import React from "react";
import aboutCircleDots from "../../assets/images/about/about-circle-dots.png";
import aboutThumbTwo from "../../assets/images/about/about-four-2.jpg";
import aboutThumb from "../../assets/images/about/about-four.jpg";
import logoCircle from "../../assets/images/logos/logo-circle.png";

export default function AboutSection() {
  return (
    <section className="about-section style-four py-120 rpy-100">
      <div className="container pb-120 rpb-95">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content pr-90 rpr-0 rmb-55 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">It Support For Business</span>
                <h2>
                  Preparing for your success trusted source in IT services for
                  global providing
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam nostrud
              </p>
              <i>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </i>
              <a href="/about-one" className="theme-btn mt-25">
                Learn About More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-four-images text-center wow fadeInRight delay-0-2s">
              <div className="row">
                <div className="col-6">
                  <img src={aboutThumb} alt="About" />
                  <img
                    className="about-bg-circle d-block mx-auto"
                    src={aboutCircleDots}
                    alt="About"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="bg-circle-dtos mb-35 d-block mx-auto"
                    src={logoCircle}
                    alt="Logo"
                  />
                  <img src={aboutThumbTwo} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
