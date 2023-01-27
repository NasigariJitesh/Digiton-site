import React from "react";
import aboutThumbTwo from "../../../assets/images/about/about-circle-dots.png";
import aboutThumb from "../../../assets/images/about/about-five.jpg";

export default function MainSection() {
  return (
    <section className="about-section style-five py-120 rpy-100">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="about-fiver-image rel rmb-60 wow fadeInLeft delay-0-2s">
              <img src={aboutThumb} alt="About" />
              <img
                className="about-bg-circle"
                src={aboutThumbTwo}
                alt="About"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">It Support For Business</span>
                <h2>Preparing for your IT business success</h2>
              </div>
              <div className="feature-item">
                <div className="icon">
                  <i className="flaticon flaticon-3d-printing"></i>
                </div>
                <div className="feature-content">
                  <h5>IT Management</h5>
                  <p>
                    Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                    eiusmod
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon">
                  <i className="flaticon flaticon-repair"></i>
                </div>
                <div className="feature-content">
                  <h5>Machine Learning</h5>
                  <p>
                    Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                    eiusmod
                  </p>
                </div>
              </div>
              <a href="#" className="theme-btn mt-10">
                learn about more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
