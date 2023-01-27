import React from "react";
import icon1 from "../../assets/images/hero/hero-icon1.png";
import icon2 from "../../assets/images/hero/hero-icon2.png";
import icon3 from "../../assets/images/hero/hero-icon3.png";
import background from "../../assets/images/hero/hero-seven-bg.png";
import heroThumb from "../../assets/images/hero/hero-seven-right-image.png";
import shape1 from "../../assets/images/shapes/hero-shape1.png";
import shape2 from "../../assets/images/shapes/hero-shape2.png";

export default function Hero() {
  return (
    <section
      className="hero-section-seven z-1 rel pt-200 pb-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-content-seven pt-100 pb-50">
              <span className="sub-title mb-5 wow fadeInUp delay-0-2s">
                01 Provide Best Services
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Big data will Come up with A Solution
              </h1>
              <p className="wow fadeInUp delay-0-6s">
                Maecenas tincidunt ex quis arcu ultrices, et commodo diam
                volutpat. Fusce ligula mauris, sodales{" "}
              </p>
              <a
                href="/about-one"
                className="theme-btn style-eight mt-30 wow fadeInUp delay-0-8s"
              >
                Start Free Tral <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right-part">
        <img src={heroThumb} alt="Hero" />
        <div className="data-item one">
          <img src={icon1} alt="Icon" />
          <div className="data-item-content">
            <h4>Data Visualization</h4>
          </div>
        </div>
        <div className="data-item two">
          <img src={icon2} alt="Icon" />
          <div className="data-item-content">
            <h4>Data Scientist</h4>
            <span>259+</span>
          </div>
        </div>
        <div className="data-item three">
          <img src={icon3} alt="Icon" />
          <div className="data-item-content">
            <h4>Machine Scientist</h4>
          </div>
        </div>
      </div>
      <div className="hero-shape-one">
        <img src={shape1} alt="Shape" />
      </div>
      <div className="hero-shape-two">
        <img src={shape2} alt="Shape" />
      </div>
    </section>
  );
}
