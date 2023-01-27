import React from "react";
import background from "../../assets/images/contact/contact-bg.jpg";

export default function ContactSection() {
  return (
    <div className="contact-section-three rel z-1">
      <div className="container">
        <form
          id="contact-form-three"
          className="contact-form-three text-white px-90 rpx-35 pt-80 pb-55"
          name="contact-form-three"
          action="#"
          method="post"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-1s">
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
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-2s">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="support@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-3s">
                <label htmlFor="service">Subject</label>
                <select id="service" name="service">
                  <option value="">I Would Like to Discuss</option>
                  <option value="">About</option>
                  <option value="">Contact</option>
                  <option value="">Team</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-4s">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="form-control"
                  placeholder="+012 (345) 67 89"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="form-group wow fadeInUp delay-0-5s">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="form-control"
                  placeholder="www.itsolutions.com"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp delay-0-6s">
              <button type="submit" className="theme-btn mt-40 mb-25">
                Get Free Consultation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
