import React from "react";
import Background from "../../assets/images/counter/counter-bg.jpg";
import CounterUp from "../helpers/CounterUp";

function AboutSection({ className, funFact = true }) {
  return (
    <section
      className={`about-section bg-light-black pt-120 rpt-100 ${
        className || ""
      }`}
      id="about-section "
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image-shape rmb-70 wow fadeInLeft delay-0-2s">
              <img
                src={require(`../../assets/images/about/about.png`).default}
                alt="About"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content text-white pr-70 rpr-0 wow fadeInRight delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">It Support For Business</span>
                <h2>
                  Preparing for your success trusted source in IT services.
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam nostrud
              </p>
              <ul className="list-style-one mt-15">
                <li>Custom shortcodes</li>
                <li>Data Analytics</li>
                <li>IT Consultancy</li>
                <li>Data security</li>
              </ul>
            </div>
          </div>
        </div>
        {funFact && (
          <div
            className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="success-item wow fadeInUp delay-0-2s">
                  <span
                    className="count-text"
                    data-speed="5000"
                    data-stop="520"
                  >
                    <CounterUp endValue={520} sectionSelect="about-section " />
                  </span>
                  <p>Projects Done</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="success-item wow fadeInUp delay-0-4s">
                  <span className="count-text plus">
                    <CounterUp endValue={24} sectionSelect="about-section " />
                  </span>
                  <p>Awards Won</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="success-item wow fadeInUp delay-0-6s">
                  <span
                    className="count-text plus"
                    data-speed="5000"
                    data-stop="12"
                  >
                    <CounterUp endValue={12} sectionSelect="about-section " />
                  </span>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="success-item wow fadeInUp delay-0-8s">
                  <span
                    className="count-text plus"
                    data-speed="5000"
                    data-stop="352"
                  >
                    <CounterUp endValue={352} sectionSelect="about-section " />
                  </span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
