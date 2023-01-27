import React from "react";

export default function PricingSection() {
  return (
    <section className="pricing-section-three text-center pt-115 rpt-95 pb-95 rpb-65">
      <div className="container rel">
        <div className="section-title mb-65">
          <span className="sub-title">Pricing Packages</span>
          <h2>Choose Your Best Plan</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="pricing-item-three wow fadeInUp delay-0-2s">
              <span className="pricing-type">popular</span>
              <div className="pricing-header">
                <h5 className="pricing-title">Standard</h5>
                <div className="icon">
                  <i className="flaticon flaticon-computer"></i>
                </div>
                <span className="price">29.99</span>
                <h5 className="pricing-time">Per Month</h5>
              </div>
              <ul>
                <li>Limited install</li>
                <li>Unlimited Download</li>
                <li>Free One Year Support</li>
              </ul>
              <a className="theme-btn btn-circle" href="#">
                Choose Plan
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
                <span className="price">59.99</span>
                <h5 className="pricing-time">Per Month</h5>
              </div>
              <ul>
                <li>Limited install</li>
                <li>Unlimited Download</li>
                <li>Free One Year Support</li>
                <li>Free 15 GB Linux Hosting</li>
              </ul>
              <a className="theme-btn btn-circle" href="#">
                Choose Plan
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="pricing-item-three wow fadeInUp delay-0-6s">
              <span className="pricing-type">popular</span>
              <div className="pricing-header">
                <h5 className="pricing-title">PREMIUM</h5>
                <div className="icon">
                  <i className="flaticon flaticon-design-process"></i>
                </div>
                <span className="price">79.99</span>
                <h5 className="pricing-time">Per Month</h5>
              </div>
              <ul>
                <li>Limited install</li>
                <li>Unlimited Download</li>
                <li>Free One Year Support</li>
                <li>Free 15 GB Linux Hosting</li>
                <li>IT Consultations</li>
              </ul>
              <a className="theme-btn btn-circle" href="#">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
