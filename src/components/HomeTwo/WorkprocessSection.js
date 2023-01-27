import React from "react";

export default function WorkprocessSection() {
  return (
    <section className="work-progress-two">
      <div className="container">
        <div className="work-progress-inner-two">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon flaticon-speech-bubble"></i>
                </div>
                <h3>
                  Advertising and <br />
                  Marketing
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
                <span className="progress-step">01</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon flaticon-vector"></i>
                </div>
                <h3>
                  Web <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
                <span className="progress-step">02</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two wow fadeInUp delay-0-6s no-border mb-0">
                <div className="icon">
                  <i className="flaticon flaticon-like-1"></i>
                </div>
                <h3>
                  Mobile App <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
                <span className="progress-step">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
