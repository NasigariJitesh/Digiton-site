import React, { useRef } from "react";
import backgroundImg from "../../assets/images/testimonials/testimonial-five-bg.jpg";
import SliderCom from "../helpers/SliderCom";

export default function TestimonialSection() {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };
  const testimonalEightSlider = useRef(null);
  const prevHandler = () => {
    testimonalEightSlider.current.slickPrev();
  };

  const nextHandler = () => {
    testimonalEightSlider.current.slickNext();
  };
  return (
    <>
      <section
        className="testimonial-five pt-120 rpt-100 mb-55 relative"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="testimonial-five-wrap p-70 bg-white wow fadeInRight delay-0-2s ">
                <button
                  onClick={prevHandler}
                  className="prev slick-arrow"
                  type="button"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <SliderCom selector={testimonalEightSlider} settings={settings}>
                  <div className="testimonial-five-item">
                    <p>
                      Praesent eget ullamcorper elit, vel volutpat tellus.
                      Aliquam auctor, neque quis blandit vestibulum, magna ante
                      congue arcu, nec sodales purus ante sed sapien. Cras
                      eleifend ex vitae odio ultrices volutpat. Quisque sodales
                      aliquam accumsan.
                    </p>
                    <div className="author-description">
                      <img
                        src={
                          require(`../../assets/images/testimonials/testi-five-author.jpg`)
                            .default
                        }
                        alt="Author"
                      />
                      <div className="name-designation">
                        <h3>Rafiqul Islam</h3>
                        <span>Software Engineer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-five-item">
                    <p>
                      Magna ante congue arcu, nec sodales purus ante sed sapien.
                      Cras eleifend ex vitae odio ultrices volutpat. Quisque
                      sodales aliquam accumsan. Praesent eget ullamcorper elit,
                      vel volutpat tellus. Aliquam auctor, neque quis blandit
                      vestibulum,
                    </p>
                    <div className="author-description">
                      <img
                        src={
                          require(`../../assets/images/testimonials/testi-five-author.jpg`)
                            .default
                        }
                        alt="Author"
                      />
                      <div className="name-designation">
                        <h3>Ali Hossen</h3>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                </SliderCom>
                <button
                  onClick={nextHandler}
                  className="next slick-arrow"
                  type="button"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
