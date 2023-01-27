import React from "react";
import background from "../../assets/images/background/counter-bg.png";
import CounterUp from "../helpers/CounterUp";

export default function CounterStyleFour() {
  return (
    <section
      id="counter-style-four"
      className="solution-place bgs-cover rel z-1 pt-150 pb-150 rpb-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="counter-four-inner rmb-100">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-four">
                <i className="fas fa-check"></i>
                <div className="success-content">
                  <span
                    className="count-text m-plus"
                    data-speed="2000"
                    data-stop="12"
                  >
                    <CounterUp
                      endValue={12}
                      sectionSelect="counter-style-four"
                    />
                  </span>
                  <span className="normal-text">Successful work</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-four">
                <i className="fas fa-check"></i>
                <div className="success-content">
                  <span
                    className="count-text percent"
                    data-speed="2000"
                    data-stop="18"
                  >
                    <CounterUp
                      endValue={18}
                      sectionSelect="counter-style-four"
                    />
                  </span>
                  <span className="normal-text">upgrade conversion</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-four">
                <i className="fas fa-check"></i>
                <div className="success-content">
                  <span
                    className="count-text percent"
                    data-speed="2000"
                    data-stop="18"
                  >
                    <CounterUp
                      endValue={18}
                      sectionSelect="counter-style-four"
                    />
                  </span>
                  <span className="normal-text">upgrade conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
