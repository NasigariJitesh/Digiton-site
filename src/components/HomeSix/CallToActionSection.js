import React from "react";
import background from "../../assets/images/background/call-action-bg.png";

export default function CallToActionSection() {
  return (
    <section
      className="call-to-action-two bgs-cover pt-90 pb-65"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 wow fadeInUp delay-0-2s">
            <div className="section-title text-white mb-25">
              <h2>The only one layout you want.</h2>
            </div>
          </div>
          <div className="col-xl-3 wow fadeInUp delay-0-4s">
            <a href="/contact" className="theme-btn style-three mb-25">
              Get started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
