import React from "react";
import Background from "../../assets/images/contact/home-two.jpg";
import CounterUp from "../helpers/CounterUp";

function GetInTouch() {
  return (
    <section
      className="contact-section bg-lighter pb-60 rpb-40"
      id="contact-section"
    >
      <div className="container">
        <div className="contact-section-inner p-50 br-5 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-section-form rmb-50 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <h2>Get In Touch</h2>
                </div>
                <form
                  id="contact-form"
                  className="contact-form"
                  name="contact-form"
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Your email address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="number">Your phone number</label>
                        <input
                          type="text"
                          id="number"
                          name="number"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="service">Service Required</label>
                        <select id="service" name="service">
                          <option value="">Service</option>
                          <option value="">About</option>
                          <option value="">Contact</option>
                          <option value="">Team</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-control"
                          rows="4"
                          placeholder="Let us know what you need."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" className="theme-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="contact-image-number bgs-cover wow fadeInRight delay-0-2s"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
              >
                <div className="contact-number">
                  <i className="fas fa-phone-alt"></i>
                  <a href="callto:+012-345-6789">+012-345-6789</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fact-counter-color text-center">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text">
                  <CounterUp sectionSelect="contact-section" endValue={520} />
                </span>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span className="count-text plus">
                  <CounterUp sectionSelect="contact-section" endValue={24} />
                </span>
                <p>Awards Won</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-6s">
                <span className="count-text plus">
                  <CounterUp sectionSelect="contact-section" endValue={12} />
                </span>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-8s">
                <span className="count-text plus">
                  <CounterUp sectionSelect="contact-section" endValue={352} />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
