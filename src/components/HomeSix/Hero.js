import React from "react";
import hero1 from "../../assets/images/hero/hero-six-1.png";
import hero2 from "../../assets/images/hero/hero-six-2.png";
import hero3 from "../../assets/images/hero/hero-six-3.png";
import hero4 from "../../assets/images/hero/hero-six-ellipse.png";
import shape5 from "../../assets/images/shapes/circle.png";
import shape3 from "../../assets/images/shapes/close.png";
import shape1 from "../../assets/images/shapes/lines.png";
import shape4 from "../../assets/images/shapes/triangle.png";
import shape2 from "../../assets/images/shapes/w-shape.png";
import useToggle from "../../hooks/useToggle";
import VideoPopupCom from "../helpers/VideoPopupCom";

export default function Hero() {
  const [showVideo, handler] = useToggle();
  return (
    <>
      {showVideo && (
        <VideoPopupCom
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={(e) => handler.toggle(e)}
        />
      )}
      <section className="hero-section-six bg-lighter z-1 rel pt-80 rpt-65">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-six mr-10 rmr-0 py-100 rpy-80">
                <span className="sub-title d-block wow fadeInUp delay-0-2s">
                  We’re creative
                </span>
                <h1 className="wow fadeInUp delay-0-4s mt-20">
                  The direct way Organize your saas
                </h1>
                <p className="wow fadeInUp delay-0-6s">
                  Integer molestie magna in augue euismod, sit amet pulvinar
                  arcu dapibus.
                </p>
                <div className="hero-btns mt-35 wow fadeInUp delay-0-8s">
                  <a href="/about-one" className="theme-btn mr-25 mb-10">
                    Discover More <i className="fas fa-arrow-right"></i>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => handler.toggle(e)}
                    className="mfp-iframe video-play mb-10"
                  >
                    <i className="fas fa-play"></i> <span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-six-images wow fadeInRight delay-0-8s">
                <img src={hero1} alt="Hero" />
                <img src={hero2} alt="Hero" />
                <img src={hero3} alt="Hero" />
                <img src={hero4} alt="Ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img src={shape1} alt="Shape" />
          <img src={shape2} alt="Shape" />
          <img src={shape3} alt="Shape" />
          <img src={shape4} alt="Shape" />
          <img src={shape5} alt="Shape" />
        </div>
      </section>
    </>
  );
}
