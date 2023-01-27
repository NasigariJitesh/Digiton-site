import React from "react";

function AboutSection() {
  return (
    <section className="about-two pt-100 rpt-80 pb-195 rpb-100">
      <div className="container">
        <div className="about-wrap pt-20">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s">
                <img
                  src={
                    require(`../../assets/images/about/about-two.jpg`).default
                  }
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">It Support For Business</span>
                  <h2>
                    Preparing for your success trusted source in IT services.
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
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
      </div>
    </section>
  );
}

export default AboutSection;
