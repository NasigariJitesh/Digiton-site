import React from "react";
import backgroundImg from "../../assets/images/background/call-action-three-bg.jpg";

export default function ActionSection() {
  return (
    <section
      className="call-action-three bgs-cover pt-55 pb-35 rpb-40"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="section-title text-white mb-15">
              <h2>We guarantee 100% protection</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-right">
            <a
              href="about.html"
              className="theme-btn style-nine hover-two mb-20"
            >
              Discover More <i className="far fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
