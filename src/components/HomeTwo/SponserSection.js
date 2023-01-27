import React from "react";
import SliderCom from "../helpers/SliderCom";

function SponserSection() {
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
    <div className="logo-section bg-lighter py-120 rpy-100">
      <div className="container">
        <div className="logo-carousel-wrap">
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
      </div>
    </div>
  );
}

export default SponserSection;
