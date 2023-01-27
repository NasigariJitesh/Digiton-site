import React from "react";
import background from "../../assets/images/counter/counter-bg-section.jpg";
import CounterUp from "../helpers/CounterUp";

export default function FunFact() {
  return (
    <section className="fact-counter-section rel z-1" id="fact-counter-section">
      <div className="container">
        <div
          className="fact-counter-inner br-5 text-white"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="counter-left-content px-100 py-70 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title">Company Statistics</span>
                  <h2>We've achieved many world wide awards</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam.
                </p>
                <a href="/about-one" className="theme-btn style-five">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counter-right wow fadeInRight delay-0-2s">
                <div className="row text-center">
                  <div className="col-sm-6">
                    <div className="success-item style-three">
                      <span
                        className="count-text plus"
                        data-speed="5000"
                        data-stop="12"
                      >
                        <CounterUp
                          endValue={12}
                          sectionSelect="fact-counter-section"
                        />
                      </span>
                      <p>Years Experience</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="success-item style-three">
                      <span
                        className="count-text plus"
                        data-speed="5000"
                        data-stop="352"
                      >
                        <CounterUp
                          endValue={352}
                          sectionSelect="fact-counter-section"
                        />
                      </span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="success-item style-three">
                      <span
                        className="count-text"
                        data-speed="5000"
                        data-stop="520"
                      >
                        <CounterUp
                          endValue={520}
                          sectionSelect="fact-counter-section"
                        />
                      </span>
                      <p>Projects Done</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="success-item style-three">
                      <span
                        className="count-text plus"
                        data-speed="5000"
                        data-stop="24"
                      >
                        <CounterUp
                          endValue={24}
                          sectionSelect="fact-counter-section"
                        />
                      </span>
                      <p>Awards Won</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
