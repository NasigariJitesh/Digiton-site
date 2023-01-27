import React from "react";
import solutionThumb from "../../assets/images/about/solution-place.png";
import background from "../../assets/images/background/counter-bg.png";
import CounterUp from "../helpers/CounterUp";

export default function SolutionSection() {
  return (
    <section
      id="solution-place"
      className="solution-place bgs-cover rel z-1 pb-150 rpb-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="counter-four-inner mb-150 rmb-100">
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
                    <CounterUp endValue={12} sectionSelect="solution-place" />
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
                    <CounterUp endValue={18} sectionSelect="solution-place" />
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
                    <CounterUp endValue={20} sectionSelect="solution-place" />
                  </span>
                  <span className="normal-text">upgrade conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="solution-place-content rmb-60">
              <div className="section-title mb-30">
                <span className="sub-title">04 Solution Place</span>
                <h2>A one place solution for All your problems</h2>
              </div>
              <p>
                Pellentesque purus neque, pretium non purus vitae, commodo
                cursus libero. Praesent eget tempor est. Aliquam molestie erat
                vitae faucibus volutpat.
              </p>
              <a href="/about-one" className="theme-btn style-eight mt-35">
                Learn click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="solution-place-image">
              <img src={solutionThumb} alt="About" />
            </div>
          </div>
        </div>
      </div>
      <div className="circle-drop"></div>
    </section>
  );
}
