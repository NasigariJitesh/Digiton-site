import React from "react";
import background from "../../assets/images/counter/counter-bg.jpg";
import CounterUp from "../helpers/CounterUp";

function CounterStyleOne() {
  return (
    <section
      id="counter-style-one"
      className="counter-section pt-120 rpt-100 pb-90 rpb-70"
    >
      <div className="container">
        <div
          className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text" data-speed="5000" data-stop="520">
                  <CounterUp endValue={520} sectionSelect="counter-style-one" />
                </span>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="24"
                >
                  <CounterUp endValue={24} sectionSelect="counter-style-one" />
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
                  <CounterUp endValue={12} sectionSelect="counter-style-one" />
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
                  <CounterUp endValue={352} sectionSelect="counter-style-one" />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fact-counter-color text-center pb-90 pt-90">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text" data-speed="5000" data-stop="520">
                  <CounterUp endValue={520} sectionSelect="counter-style-one" />
                </span>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="24"
                >
                  <CounterUp endValue={24} sectionSelect="counter-style-one" />
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
                  <CounterUp endValue={12} sectionSelect="counter-style-one" />
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
                  <CounterUp endValue={352} sectionSelect="counter-style-one" />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterStyleOne;
