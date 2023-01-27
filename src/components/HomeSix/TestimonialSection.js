import React, { useState } from "react";
import thumbnail from "../../assets/images/testimonials/testimonial-three.jpg";
import SliderCom from "../helpers/SliderCom";

export default function TestimonialSection({ className }) {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    fade: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingTwo = {
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <section
      className={`testimonial-section-three py-120 rpy-100 ${className || ""}`}
    >
      <div className="container">
        <div className="testimonial-three-wrap bg-lighter">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="testimonial-three-content text-center p-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title">Testimonials</span>
                  <h2>
                    2356+ client say <br />
                    about us
                  </h2>
                </div>
                <div className="testimonial-three-active">
                  <SliderCom
                    asNavFor={nav2}
                    selector={(slider1) => setNav1(slider1)}
                    settings={settings}
                  >
                    <div className="testimonial-three-item">
                      <p>
                        Proin imperdiet commodo diam ac tincidunt. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Nullam
                        tristique, augue et blandit consequat,
                      </p>
                      <div className="designation">
                        <h5>Michael M. Yates</h5>
                        <span>Senior Manager</span>
                      </div>
                    </div>
                    <div className="testimonial-three-item">
                      <p>
                        Laudantium totam rem aperiam eaque ipsa quae abillo
                        inventore veritatis et Sed ut perspiciatis unde omnis
                        istenatus error sit voluptatem accusant doloremque{" "}
                      </p>
                      <div className="designation">
                        <h5>Rodney J. Sabo</h5>
                        <span>Design Lead</span>
                      </div>
                    </div>
                    <div className="testimonial-three-item">
                      <p>
                        Sed ut perspiciatis unde omnis istenatus error sit
                        voluptatem accusant doloremque laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis et
                      </p>
                      <div className="designation">
                        <h5>Michele Morrone</h5>
                        <span>Design Lead</span>
                      </div>
                    </div>
                  </SliderCom>
                </div>
                <div className="testimonial-three-thumbs quomo-testimonial-three-thumbs">
                  <SliderCom
                    asNavFor={nav1}
                    selector={(slider1) => setNav2(slider1)}
                    settings={settingTwo}
                  >
                    <img
                      src={
                        require(`../../assets/images/testimonials/testi-author-1.jpg`)
                          .default
                      }
                      alt="Authro"
                    />
                    <img
                      src={
                        require(`../../assets/images/testimonials/testi-author-4.jpg`)
                          .default
                      }
                      alt="Authro"
                    />
                    <img
                      src={
                        require(`../../assets/images/testimonials/testi-author-2.jpg`)
                          .default
                      }
                      alt="Authro"
                    />
                  </SliderCom>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-left-image wow fadeInRight delay-0-2s">
                <img className="w-100" src={thumbnail} alt="Testimonial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
