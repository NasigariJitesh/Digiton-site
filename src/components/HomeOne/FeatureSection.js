import React from "react";

function FeatureSection() {
  return (
    <section className="featured-section bgs-cover pt-240 rpt-150 pb-120 rpb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="section-title text-center mb-35">
              <span className="sub-title">WHO WE ARE</span>
              <h2>We deal with the aspects of professional IT Services</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon flaticon-art"></i>
              </div>
              <div className="feature-content">
                <h5>Data Center</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon flaticon-cloud-computing-1"></i>
              </div>
              <div className="feature-content">
                <h5>Cloud Services</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon flaticon-development-3"></i>
              </div>
              <div className="feature-content">
                <h5>Web Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon flaticon-analysis-1"></i>
              </div>
              <div className="feature-content">
                <h5>IT Management</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-0s">
              <div className="icon">
                <i className="flaticon flaticon-web-development"></i>
              </div>
              <div className="feature-content">
                <h5>Software Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-2s">
              <div className="icon">
                <i className="flaticon flaticon-plan"></i>
              </div>
              <div className="feature-content">
                <h5>Machine Learning</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-btn text-center mt-20">
          <a href="/service-one" className="theme-btn">
            view all services
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
