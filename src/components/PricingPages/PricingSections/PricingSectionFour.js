import React from "react";
import background from "../../../assets/images/background/price-five-bg.png";

export default function PricingSectionFour() {
  return (
    <section
      className="pricing-section-five bgs-cover bg-blue pt-120 rpt-95 pb-90 rpb-70"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container rel">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-8">
            <div className="price-five-content text-white rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title">Pricing Packages</span>
                <h2>Choose Best Plan</h2>
              </div>
              <p>
                Epsum dolor sit amet consectetur adipisicing seddo eiusmod
                tempor incididunt labore dolore magna aliqua enim ad minim
                veniam
              </p>
              <div className="monthly-yearly mt-15 mb-30">
                <div className="custom-control custom-radio mr-15">
                  <input
                    type="radio"
                    id="monthly"
                    name="month-year"
                    className="custom-control-input"
                    checked
                  />
                  <label className="custom-control-label" htmlFor="monthly">
                    monthly
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="yearly"
                    name="month-year"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor="yearly">
                    yearly
                  </label>
                </div>
              </div>
              <p>
                Amet consectetur adipisicing seddo eiusmod tempor incididunt
                labore dolore
              </p>
              <a className="theme-btn style-two mt-10" href="#">
                learn more
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="pricing-item-three wow fadeInUp delay-0-4s">
              <span className="pricing-type">popular</span>
              <div className="pricing-header">
                <h5 className="pricing-title">BUSINESS</h5>
                <div className="icon">
                  <i className="flaticon flaticon-web-traffic-1"></i>
                </div>
                <span className="price">48.99</span>
                <h5 className="pricing-time">Per Month</h5>
              </div>
              <ul>
                <li>Free 15 GB Linux Hosting</li>
                <li>Unlimited Download</li>
                <li>Free One Year Support</li>
                <li>Limited install</li>
              </ul>
              <a className="theme-btn" href="#">
                Choose Plan
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="pricing-item-three wow fadeInUp delay-0-6s">
              <span className="pricing-type">STANDARD</span>
              <div className="pricing-header">
                <h5 className="pricing-title">STANDARD</h5>
                <div className="icon">
                  <i className="flaticon flaticon-design-process"></i>
                </div>
                <span className="price">29.99</span>
                <h5 className="pricing-time">Per Month</h5>
              </div>
              <ul>
                <li>Free 15 GB Linux Hosting</li>
                <li>Unlimited Download</li>
                <li>Free One Year Support</li>
              </ul>
              <a className="theme-btn" href="#">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
