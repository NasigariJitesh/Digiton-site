import React from "react";
import background from "../../assets/images/background/progress.png";
import SliderCom from "../helpers/SliderCom";

export default function WorkProcessSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section
      className="work-progress-three bg-blue text-white pb-85 rpb-65"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="logo-carousel-wrap style-two bg-white py-100 px-25 br-5">
          <SliderCom settings={settings}>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-1.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-2.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-3.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-4.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-5.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-1.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-2.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-3.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-4.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-5.png`)
                      .default
                  }
                  alt="Client Logo"
                />
              </a>
            </div>
          </SliderCom>
        </div>
        <div className="work-progress-inner-three">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-2s">
                <span className="progress-step">01</span>
                <div className="icon">
                  <i className="flaticon flaticon-speech-bubble"></i>
                </div>
                <h3>
                  Advertising and <br />
                  Marketing
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-4s">
                <span className="progress-step">02</span>
                <div className="icon">
                  <i className="flaticon flaticon-vector"></i>
                </div>
                <h3>
                  Web <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-6s no-border mb-0">
                <span className="progress-step">03</span>
                <div className="icon">
                  <i className="flaticon flaticon-like-1"></i>
                </div>
                <h3>
                  Mobile App <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
