import React from "react";

export default function AboutSection({ className }) {
  return (
    <section className={`about-three py-120 rpy-100 ${className || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-three-image rmb-60 mr-10 rmr-0 wow fadeInLeft delay-0-2s">
              <img
                src={
                  require(`../../assets/images/about/about-three-1.jpg`).default
                }
                alt="About"
              />
              <img
                src={
                  require(`../../assets/images/about/about-three-2.jpg`).default
                }
                alt="About"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">It Support For Business</span>
                <h2>
                  Preparing for your success trusted source in IT services.
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <ul className="list-style-three mt-15">
                <li>which means as the company ramps</li>
                <li>Available in 14.1-in. and 16-in. versions.</li>
                <li>The potential loss of the Touch Bar.</li>
                <li>High-speed USB 4.0.</li>
              </ul>
              <a href="/about-one" className="theme-btn style-three mt-25">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
