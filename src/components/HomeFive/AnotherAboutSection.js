import React from "react";

export default function AnotherAboutSection() {
  return (
    <section className="about-section style-fiver py-120 rpy-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content-six pr-90 rpr-0 rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title">It Support For Business</span>
                <h2>
                  Preparing for your success trusted source in IT pros for
                  global providing
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam nostrud{" "}
              </p>
              <ul className="list-style-one mt-25 pb-10">
                <li>Best IT Solutions</li>
                <li>Professional Web Solutions</li>
                <li>Products Engeering</li>
              </ul>
              <a href="/about-one" className="theme-btn mt-25">
                Learn About More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-four-images text-center wow fadeInRight delay-0-2s">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={
                      require(`../../assets/images/about/about-four.jpg`)
                        .default
                    }
                    alt="About"
                  />
                  <img
                    className="about-bg-circle d-block mx-auto"
                    src={
                      require(`../../assets/images/about/about-circle-dots.png`)
                        .default
                    }
                    alt="About"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="mb-35 d-block mx-auto"
                    src={
                      require(`../../assets/images/about/about-five-two.jpg`)
                        .default
                    }
                    alt="Logo"
                  />
                  <img
                    src={
                      require(`../../assets/images/about/about-four-2.jpg`)
                        .default
                    }
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
