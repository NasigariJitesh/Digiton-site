import React from "react";
import background from "../../../assets/images/background/pricing-seven-bg.png";

export default function PricingSectionSix() {
  return (
    <section
      className="pricing-seven rel z-1 pt-130 pb-120 rpt-80 rpb-70"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="section-title text-center mb-30">
              <span className="sub-title"> Pricing Plan</span>
              <h2>The prices are best! its Unbelievable</h2>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="nav pricing-tab mb-80">
            <a href="#yearly" data-toggle="tab">
              Yearly
            </a>
            <a href="#monthely" data-toggle="tab" className="active show">
              Monthely
            </a>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade" id="yearly">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">Basic</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">15</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">standard</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">29</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">Premium</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">99</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade active show" id="monthely">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">Basic</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">5</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">standard</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">29</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item-seven">
                  <div className="pricing-top">
                    <div className="price-top-left">
                      <h4 className="pricing-title">Premium</h4>
                      <span>Enjoy Basic ammunites</span>
                    </div>
                    <span className="price">99</span>
                  </div>
                  <ul className="list-style-three">
                    <li>Unlimited Reports 100+ Data</li>
                    <li>Connectors</li>
                    <li>Yearly Premium Support</li>
                  </ul>
                  <a className="theme-btn style-six" href="#">
                    Start Free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-drop"></div>
    </section>
  );
}
