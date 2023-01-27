import React from "react";

export default function OurServices() {
  return (
    <section className="who-we-are overlay text-white text-center pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <div className="section-title mb-65">
          <span className="sub-title">WHO WE ARE</span>
          <h2>
            We deal with the aspects of <br />
            professional IT pros
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src={
                  require(`../../assets/images/services/service-five-1.jpg`)
                    .default
                }
                alt="Service"
              />
              <div className="service-content-five">
                <div className="icon">
                  <i className="flaticon flaticon-computer"></i>
                </div>
                <h3>Data Center</h3>
                <p>Lorem ipsum dolor amets consec tetur adipis</p>
                <a href="/service-details" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item-five wow fadeInUp delay-0-4s">
              <img
                src={
                  require(`../../assets/images/services/service-five-2.jpg`)
                    .default
                }
                alt="Service"
              />
              <div className="service-content-five">
                <div className="icon">
                  <i className="flaticon flaticon-3d-printing"></i>
                </div>
                <h3>Cloud Services</h3>
                <p>Lorem ipsum dolor amets consec tetur adipis</p>
                <a href="/service-details" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item-five wow fadeInUp delay-0-6s">
              <img
                src={
                  require(`../../assets/images/services/service-five-3.jpg`)
                    .default
                }
                alt="Service"
              />
              <div className="service-content-five">
                <div className="icon">
                  <i className="flaticon flaticon-software-development"></i>
                </div>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor amets consec tetur adipis</p>
                <a href="/service-details" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item-five wow fadeInUp delay-0-8s">
              <img
                src={
                  require(`../../assets/images/services/service-five-4.jpg`)
                    .default
                }
                alt="Service"
              />
              <div className="service-content-five">
                <div className="icon">
                  <i className="flaticon flaticon-web-1"></i>
                </div>
                <h3>IT Management</h3>
                <p>Lorem ipsum dolor amets consec tetur adipis</p>
                <a href="/service-details" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
