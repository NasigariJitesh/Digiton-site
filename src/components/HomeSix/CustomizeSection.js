import React from "react";
import thumb1 from "../../assets/images/about/customization-1.png";
import thumb2 from "../../assets/images/about/customization2.png";

export default function CustomizeSection() {
  return (
    <section className="customization-section py-75 rpy-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="customization-images wow fadeInLeft delay-0-2s">
              <img src={thumb1} alt="customization" />
              <img src={thumb2} alt="customization" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="customization-content mr-100 rmr-0 pb-35 rpb-40 rpt-50 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title">Use & Customization</span>
                <h2>Planned in view of the candidate</h2>
              </div>
              <p>
                Praesent non viverra elit. Suspendisse sed nulla cursus, gravida
                diam id, consectetur nisl. Sed fermentum ipsum mollis velit
                eleifend,
              </p>
              <ul className="list-style-three mt-25 pb-10">
                <li>top audience</li>
                <li>Web & app development</li>
                <li>software analysis</li>
                <li>Appplication design</li>
              </ul>
              <a href="/about-one" className="theme-btn mt-15">
                Discover More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
