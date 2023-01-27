import React from "react";
import SliderCom from "../helpers/SliderCom";

export default function SponserSection() {
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
    <div className="client-logo-area">
      <div className="container">
        <hr />
        <div className="logo-carousel-wrap pt-65 pb-170">
          <SliderCom settings={settings}>
            <div className="logo-item">
              <a href="#">
                <img
                  src={
                    require(`../../assets/images/client-logo/client-logo-6.png`)
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
                    require(`../../assets/images/client-logo/client-logo-7.png`)
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
                    require(`../../assets/images/client-logo/client-logo-8.png`)
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
                    require(`../../assets/images/client-logo/client-logo-9.png`)
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
                    require(`../../assets/images/client-logo/client-logo-10.png`)
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
                    require(`../../assets/images/client-logo/client-logo-6.png`)
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
                    require(`../../assets/images/client-logo/client-logo-7.png`)
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
                    require(`../../assets/images/client-logo/client-logo-8.png`)
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
                    require(`../../assets/images/client-logo/client-logo-9.png`)
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
                    require(`../../assets/images/client-logo/client-logo-10.png`)
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
