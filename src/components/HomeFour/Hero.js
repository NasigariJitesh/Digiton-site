import React from "react";
import shape from "../../assets/images/hero/hero-four-shape.png";
import background from "../../assets/images/hero/hero-four.jpg";

export default function Hero() {
  return (
    <section
      className="hero-section-three bgs-cover overlay pt-160 rpt-140 pb-80 rpb-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content text-white rmb-65">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                EMPOWER YOUR BUSINESS
              </span>
              <h1 className="wow fadeInUp delay-0-4s mt-20">
                Excellent services for IT success
              </h1>
              <div className="hero-btns mt-35 wow fadeInUp delay-0-6s">
                <a href="/contact" className="theme-btn mr-15 mb-10">
                  meet with us
                </a>
                <a href="/about-one" className="theme-btn style-five mb-10">
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-section-form bg-white p-50 wow fadeInRight delay-0-4s">
              <div className="section-title">
                <h2 className="mb-0">Free Consultation</h2>
              </div>
              <p>Get Free Consultation For IT Solutions</p>
              <form
                id="hero-form"
                className="hero-form mt-20"
                name="hero-form"
                action="#"
                method="post"
              >
                <div className="form-group">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Timothy K. Lukas"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="support@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Subject</label>
                  <select id="service" name="service">
                    <option value="">I Would Like to Discuss</option>
                    <option value="">About</option>
                    <option value="">Contact</option>
                    <option value="">Team</option>
                  </select>
                </div>
                <button type="submit" className="theme-btn">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-line-shape">
        <img src={shape} alt="Hero line shape" />
      </div>
    </section>
  );
}
