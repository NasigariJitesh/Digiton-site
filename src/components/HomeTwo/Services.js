import React from "react";

function Services() {
  return (
    <section className="services-section-two bg-blue pb-60">
      <div className="container">
        <div className="service-two-wrap">
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon flaticon-seo-1"></i>
                </div>
                <h6>
                  <a href="/service-details">IT Management</a>
                </h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-0-8s">
                <div className="icon">
                  <i className="flaticon flaticon-cloud-network-1"></i>
                </div>
                <h6>
                  <a href="/service-details">Cloud Services</a>
                </h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-0-9s">
                <div className="icon">
                  <i className="flaticon flaticon-prototype"></i>
                </div>
                <h6>
                  <a href="/service-details">Data Service</a>
                </h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-1-0s">
                <div className="icon">
                  <i className="flaticon flaticon-web-development-4"></i>
                </div>
                <h6>
                  <a href="/service-details">Cloud security</a>
                </h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-1-1s">
                <div className="icon">
                  <i className="flaticon flaticon-plan"></i>
                </div>
                <h6>
                  <a href="/service-details">Web Service</a>
                </h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <div className="service-style-two wow fadeInUp delay-1-2s">
                <div className="icon">
                  <i className="flaticon flaticon-plan"></i>
                </div>
                <h6>
                  <a href="/service-details">Machine Learning</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title-with-btn">
          <div className="section-title text-white mb-10">
            <h2>
              Preparing for your success <br />
              trusted source in IT services.
            </h2>
          </div>
          <a href="/service-one" className="theme-btn style-two mb-10">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
