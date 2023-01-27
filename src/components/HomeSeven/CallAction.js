import React from "react";
import background from "../../assets/images/background/footer-call-action-bg.png";
import thumb from "../../assets/images/footer/footer-call-action.png";

export default function CallAction() {
  return (
    <section className="footer-call-action">
      <div className="container">
        <div
          className="footer-call-action-inner bgs-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="footer-call-action-image rpt-60">
                <img src={thumb} alt="Call to Action" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-call-action-content py-70">
                <h2>Better data with a better Company</h2>
                <a href="/about-one" className="theme-btn style-eight mt-30">
                  Learn click here{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
