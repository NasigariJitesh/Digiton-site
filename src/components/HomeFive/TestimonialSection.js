import React from "react";
import SliderCom from "../helpers/SliderCom";

export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonial-section-two py-120 rpy-100">
      <div className="container">
        <div className="testimonial-two-wrap">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="testimonial-left-image wow fadeInLeft delay-0-2s">
                <img
                  src={
                    require(`../../assets/images/testimonials/testimonial-two.jpg`)
                      .default
                  }
                  alt="Testimonial"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-two-content p-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title">Our Testimonials</span>
                  <h2>What our client’s say about us</h2>
                </div>
                <div className="testimonial-two-active">
                  <SliderCom settings={settings}>
                    <div className="testimonial-two-item">
                      <p>
                        Sed ut perspiciatis unde omnis istenatus error sit
                        voluptatem accusant doloremque laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis et
                      </p>
                      <i>
                        Consectetur adipisicing elit, sed do eiusmod incididunt
                        labore et dolore magna.
                      </i>
                      <div className="author-description">
                        <img
                          src={
                            require(`../../assets/images/testimonials/testi-author-3.jpg`)
                              .default
                          }
                          alt="Author"
                        />
                        <div className="designation">
                          <h5>Michael M. Yates</h5>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-two-item">
                      <p>
                        Sed ut perspiciatis unde omnis istenatus error sit
                        voluptatem accusant doloremque laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis et
                      </p>
                      <i>
                        Consectetur adipisicing elit, sed do eiusmod incididunt
                        labore et dolore magna.
                      </i>
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
                      </div>
                    </div>
                    <div className="testimonial-two-item">
                      <p>
                        Sed ut perspiciatis unde omnis istenatus error sit
                        voluptatem accusant doloremque laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis et
                      </p>
                      <i>
                        Consectetur adipisicing elit, sed do eiusmod incididunt
                        labore et dolore magna.
                      </i>
                      <div className="author-description">
                        <img
                          src={
                            require(`../../assets/images/testimonials/testi-author-3.jpg`)
                              .default
                          }
                          alt="Author"
                        />
                        <div className="designation">
                          <h5>Michael M. Yates</h5>
                          <span>Senior Manager</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-two-item">
                      <p>
                        Sed ut perspiciatis unde omnis istenatus error sit
                        voluptatem accusant doloremque laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis et
                      </p>
                      <i>
                        Consectetur adipisicing elit, sed do eiusmod incididunt
                        labore et dolore magna.
                      </i>
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
                      </div>
                    </div>
                  </SliderCom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
