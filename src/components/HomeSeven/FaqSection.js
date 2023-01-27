import React, { useState } from "react";
import faqThumb from "../../assets/images/shapes/faq-triangle.png";

export default function FaqSection({ datas = [] }) {
  const [faqCollapse, setValue] = useState(datas[0].id);
  const faqHandler = (e, value) => {
    e.preventDefault();
    setValue(value);
  };
  return (
    <section className="faq-page rel z-1 pt-150 rpt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-accordion rmb-55" id="faq-accordion">
              {datas &&
                datas.length > 0 &&
                datas.map((value) => (
                  <div key={value.id + value.title} className="card">
                    <a
                      className={`card-header ${
                        value.id !== faqCollapse ? "collapsed" : ""
                      }`}
                      onClick={(e) => faqHandler(e, value.id)}
                      id="heading0"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse0"
                      aria-expanded="true"
                      aria-controls="collapse0"
                    >
                      What are the questions for data science?
                      <span className="toggle-btn"></span>
                    </a>
                    <div
                      id="collapse0"
                      className={`collapse ${
                        value.id === faqCollapse ? "show" : ""
                      }`}
                      data-parent="#faq-accordion"
                    >
                      <div className="card-body">
                        <p>
                          Nam venenatis vehicula orci, at cursus sapien
                          vestibulum et. Donec suscipit porta turpis non
                          malesuada. In sit amet ex eget turpis molestie
                          tincidunt vel a massa.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="faq-content">
              <div className="section-title mb-30">
                <span className="sub-title">05 FAQ</span>
                <h2>Any Questions for Data science</h2>
              </div>
              <p>
                Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                Donec suscipit porta turpis non malesuada. In sit amet ex eget
                turpis molestie tincidunt vel a massa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-triangle">
        <img src={faqThumb} alt="Triangle" />
      </div>
      <div className="faq-box-shape"></div>
    </section>
  );
}
