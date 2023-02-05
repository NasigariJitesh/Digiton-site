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
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial-four pt-150 rpt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-title text-center mb-60">
              <span className="sub-title">07 Testimonial</span>
              <h2>Really take a look at What Say our clients</h2>
            </div>
          </div>
        </div>
        <div className="testimonial-four-active">
          <SliderCom settings={settings}>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-1.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Al Mahmud</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-2.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Michelle Ley</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet ex eget
                  turpis
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-3.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Michael Jack</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-1.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Al Mahmud</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-2.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Michelle Ley</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-four-item">
              <div className="testimonial-four-content">
                <p className="line-clamp-3">
                  Nam venenatis vehicula orci, at cursus sapien vestibulum et.
                  Donec suscipit porta turpis non malesuada. In sit amet ex eget
                  turpis
                </p>
              </div>
              <div className="testimonial-four-author">
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-four-author-3.png`)
                      .default
                  }
                  alt="Testimonial Author"
                />
                <div className="testimonial-four-author-designation">
                  <h4>Michael Jack</h4>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}
