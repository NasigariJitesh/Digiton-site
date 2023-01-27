import React from "react";
import leftImg from "../../assets/images/protects/left-image.png";
import readyImg from "../../assets/images/protects/ready.jpg";

export default function ProtectSection({ videoHandler }) {
  return (
    <>
      <div className="protect-ready-bg">
        <section className="protect-section pt-115 rpt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="protect-left-part rmb-55 wow fadeInRight delay-0-2s">
                  <img src={leftImg} alt="Protect" />
                  <a
                    onClick={(e) => videoHandler(e)}
                    href="#"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="protect-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title">Advance Protect</span>
                    <h2>Protecting your privacy Is our priority</h2>
                  </div>
                  <div className="protect-item">
                    <div className="icon">
                      <img
                        src={
                          require(`../../assets/images/protects/icon1.png`)
                            .default
                        }
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/service-details">Product Consultation</a>
                      </h4>
                      <p>
                        Penatibus et magnis dis parturient montes, nascetur
                        ridiculus
                      </p>
                    </div>
                  </div>
                  <div className="protect-item">
                    <div className="icon">
                      <img
                        src={
                          require(`../../assets/images/protects/icon2.png`)
                            .default
                        }
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/service-details">Security Consultation</a>
                      </h4>
                      <p>
                        Penatibus et magnis dis parturient montes, nascetur
                        ridiculus
                      </p>
                    </div>
                  </div>
                  <div className="protect-item">
                    <div className="icon">
                      <img
                        src={
                          require(`../../assets/images/protects/icon3.png`)
                            .default
                        }
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="/service-details">Operational Security</a>
                      </h4>
                      <p>
                        Penatibus et magnis dis parturient montes, nascetur
                        ridiculus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ready-section pt-110 rpt-100 rel z-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="ready-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title">We’re ready</span>
                    <h2>Protecting your privacy is Our priority</h2>
                  </div>
                  <p>
                    Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam
                    auctor, neque quis blandit vestibulum
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Use strong passwords</li>
                    <li>Use security software</li>
                    <li>Monitor for intrusion</li>
                    <li>Raise awareness</li>
                  </ul>
                  <a
                    href="about.html"
                    className="theme-btn style-ten hover-two"
                  >
                    Discover More <i className="far fa-paper-plane"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ready-image wow fadeInRight delay-0-2s">
                  <img src={readyImg} alt="Ready" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
