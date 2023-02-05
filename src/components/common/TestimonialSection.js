import React from "react";
import CounterUp from "../helpers/CounterUp";
import SliderCom from "../helpers/SliderCom";

export default function TestimonialSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      className="testimonial-section bg-lighter pt-115 rpt-95 pb-120 rpb-100"
      id="testimonial-section"
    >
      <div className="container">
        <div className="section-title text-center mb-65">
          <span className="sub-title">It Support For Business</span>
          <h2>
            Preparing for your success <br />
            trusted source in IT services.
          </h2>
        </div>
        <div className="fact-counter-color text-center mb-30">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text plus">
                  <CounterUp
                    sectionSelect="testimonial-section"
                    endValue={24}
                  />
                </span>
                <p>Awards Won</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span className="count-text plus">
                  <CounterUp
                    sectionSelect="testimonial-section"
                    endValue={12}
                  />
                </span>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-6s">
                <span className="count-text plus">
                  <CounterUp
                    sectionSelect="testimonial-section"
                    endValue={352}
                  />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-wrap">
          <SliderCom settings={settings}>
            <div className="testimonial-item wow fadeInLeft delay-0-2s">
              <div className="author-description">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-author-1.jpg`)
                      .default
                  }
                  alt="Author"
                />
                <div className="designation">
                  <h5>Rodney J. Sabo</h5>
                  <span>Design Lead</span>
                </div>
                <i className="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
            <div className="testimonial-item wow fadeInRight delay-0-2s">
              <div className="author-description">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-author-2.jpg`)
                      .default
                  }
                  alt="Author"
                />
                <div className="designation">
                  <h5>Rodney J. Sabo</h5>
                  <span>Design Lead</span>
                </div>
                <i className="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
            <div className="testimonial-item">
              <div className="author-description">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-author-1.jpg`)
                      .default
                  }
                  alt="Author"
                />
                <div className="designation">
                  <h5>Rodney J. Sabo</h5>
                  <span>Design Lead</span>
                </div>
                <i className="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
            <div className="testimonial-item">
              <div className="author-description">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-author-2.jpg`)
                      .default
                  }
                  alt="Author"
                />
                <div className="designation">
                  <h5>Rodney J. Sabo</h5>
                  <span>Design Lead</span>
                </div>
                <i className="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}
