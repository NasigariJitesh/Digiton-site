import React from "react";

function ServiceSection() {
  return (
    <section className="services-three bg-light-black text-white pt-115 rpt-95 pb-180 rpb-150">
      <div className="container">
        <div className="section-title-with-btn mb-55">
          <div className="section-title">
            <span className="sub-title">It Support For Business</span>
            <h2>It Support For Business</h2>
          </div>
          <a href="/service-one" className="theme-btn style-four mt-15">
            view all services
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon flaticon-web"></i>
              </div>
              <h4>
                <a href="/service-details">IT Management</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed
                do eiusm od tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon flaticon-cloud-network-1"></i>
              </div>
              <h4>
                <a href="/service-details">Cloud Services</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed
                do eiusm od tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon flaticon-website"></i>
              </div>
              <h4>
                <a href="/service-details">Machine Learning</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed
                do eiusm od tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="service-three-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon flaticon-contract"></i>
              </div>
              <h4>
                <a href="/service-details">Data Center</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed
                do eiusm od tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
