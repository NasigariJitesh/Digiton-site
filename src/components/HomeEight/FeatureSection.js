import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/about/about-eight-content-bg.jpg";

export default function FeatureSection() {
  return (
    <>
      <div className="feature-about-bg">
        <section className="feature-section-three pt-120 rpt-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="feature-item-three wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/images/feature/icon1.png`).default
                      }
                      alt="Icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h3>
                      <Link to="/service-details">Security Services</Link>
                    </h3>
                    <p>
                      Pulvinar ornare in a sem. Quisque Vulputate convallis
                      nulla. In Efficitur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="feature-item-three wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/images/feature/icon2.png`).default
                      }
                      alt="Icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h3>
                      <Link to="/service-details">Data Privacy</Link>
                    </h3>
                    <p>
                      Pulvinar ornare in a sem. Quisque Vulputate convallis
                      nulla. In Efficitur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="feature-item-three no-border wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/images/feature/icon3.png`).default
                      }
                      alt="Icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h3>
                      <Link to="/service-details">Industry Certified</Link>
                    </h3>
                    <p>
                      Pulvinar ornare in a sem. Quisque Vulputate convallis
                      nulla. In Efficitur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section-eight pt-70 rpt-35 pb-120 rpb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-eight-images rmb-55 wow fadeInLeft delay-0-2s">
                  <img
                    src={
                      require(`../../assets/images/about/about-eight1.jpg`)
                        .default
                    }
                    alt="About"
                  />
                  <img
                    src={
                      require(`../../assets/images/about/about-eight2.jpg`)
                        .default
                    }
                    alt="About"
                  />
                  <div
                    className="left-content text-white p-40"
                    style={{ backgroundImage: `url(${background})` }}
                  >
                    <h5>1,400+ Trusted Clients</h5>
                    <p>
                      Pulvinar ornare in a sem. Quisque vulputate convallis
                      nulla. In efficitur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-eight-content wow fadeInRight delay-0-2s">
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="section-title mb-30">
                        <span className="sub-title">Know Avout Company</span>
                        <h2>Security is our number One priority</h2>
                      </div>
                    </div>
                  </div>
                  <p>
                    Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                    In efficitur scelerisque odio sed tincidunt. Integer maximus
                    eu tellus eleifend feugiat. Aliquam hendrerit pulvinar augue
                    vitae rutrum. In sit amet neque odio
                  </p>
                  <ul className="list-style-one mt-35 pb-45">
                    <li>Essential Features of Cybersecurity</li>
                    <li>Coverage of your biggest external threats.</li>
                    <li>Threat detection prevention and response</li>
                  </ul>
                  <a
                    href="about.html"
                    className="theme-btn style-ten hover-two"
                  >
                    Discover More <i className="far fa-paper-plane"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
