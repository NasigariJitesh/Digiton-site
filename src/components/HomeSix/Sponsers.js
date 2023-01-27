import React from "react";
import sponserOne from "../../assets/images/client-logo/client-logo-11.png";
import sponserTwo from "../../assets/images/client-logo/client-logo-12.png";
import sponserThree from "../../assets/images/client-logo/client-logo-13.png";
import sponserFour from "../../assets/images/client-logo/client-logo-14.png";
import sponserFive from "../../assets/images/client-logo/client-logo-15.png";
import sponserSix from "../../assets/images/client-logo/client-logo-16.png";
import SliderCom from "../helpers/SliderCom";

export default function Sponsers() {
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
        <div className="logo-carousel-wrap pt-100 pb-90">
          <SliderCom settings={settings}>
            <div className="logo-item">
              <a href="#">
                <img src={sponserOne} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserTwo} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserThree} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserFour} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserFive} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserSix} alt="Client Logo" />
              </a>
            </div>
          </SliderCom>
        </div>
        <hr />
      </div>
    </div>
  );
}
