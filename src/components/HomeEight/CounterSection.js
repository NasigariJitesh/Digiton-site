import React from "react";
import CounterUp from "../helpers/CounterUp";

export default function CounterSection() {
  return (
    <>
      <div
        className="cournter-section-five bg-black text-white pt-95 rpt-75 pb-65 rpb-45"
        id="cournter-section-five"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-five wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/counter/icon1.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <div className="content">
                  <span className="count-text k">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={45}
                    />
                  </span>
                  <span className="count-text bg-text k">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={45}
                    />
                  </span>
                  <span>Global Projects</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-five wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/counter/icon2.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <div className="content">
                  <span className="count-text k">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={45}
                    />
                  </span>
                  <span className="count-text bg-text k">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={45}
                    />
                  </span>
                  <span>Global Projects</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="success-item style-five no-border wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/counter/icon3.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <div className="content">
                  <span className="count-text plus">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={220}
                    />
                  </span>
                  <span className="count-text bg-text plus">
                    <CounterUp
                      sectionSelect="cournter-section-five"
                      endValue={220}
                    />
                  </span>
                  <span>Global Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
