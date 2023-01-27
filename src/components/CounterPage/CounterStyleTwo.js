import React from "react";
import CounterUp from "../helpers/CounterUp";

export default function CounterStyleTwo() {
  return (
    <section
      id="counter-style-two"
      className="cournter-section-three bg-lighter text-center pt-115 rpt-95 pb-70 rpb-50"
    >
      <div className="container">
        <div className="section-title mb-55">
          <h2>
            Over 1200+ finished work and <br />
            Still counting.
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-2s counted animated">
              <span className="count-text k" data-speed="5000" data-stop="35">
                <CounterUp endValue={35} sectionSelect="counter-style-two" />
              </span>
              <span>Complate</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-4s color-two counted animated">
              <span className="count-text k" data-speed="5000" data-stop="34">
                <CounterUp endValue={34} sectionSelect="counter-style-two" />
              </span>
              <span>Trusted Users</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-6s color-three counted animated">
              <span
                className="count-text plus"
                data-speed="5000"
                data-stop="119"
              >
                <CounterUp endValue={119} sectionSelect="counter-style-two" />
              </span>
              <span>Awards</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-8s color-four counted animated">
              <span
                className="count-text plus"
                data-speed="5000"
                data-stop="119"
              >
                <CounterUp endValue={119} sectionSelect="counter-style-two" />
              </span>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
