import React, { useRef } from "react";
import SliderCom from "../helpers/SliderCom";

export default function BlogSection() {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const blogSlider = useRef(null);
  const prevHandler = () => blogSlider.current.slickPrev();
  const nextHandler = () => blogSlider.current.slickNext();
  return (
    <section className="blog-four py-135 rpy-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-four-left rmb-55">
              <div className="section-title mt-15 mb-30">
                <span className="sub-title">08 Blog & News</span>
                <h2>Get Update for Data Science</h2>
              </div>
              <h3>68,000 client truted Restly</h3>
              <div className="blog-next-prev mt-45">
                <button
                  onClick={prevHandler}
                  type="button"
                  className="blog-prev"
                >
                  <i className="fas fa-long-arrow-alt-left"></i>
                </button>
                <button
                  onClick={nextHandler}
                  type="button"
                  className="blog-next"
                >
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="blog-carousel">
              <SliderCom selector={blogSlider} settings={settings}>
                <div className="blog-style-four">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/images/news/blog-1.jpg`).default
                      }
                      alt="Blog"
                    />
                  </div>
                  <div className="blog-four-content">
                    <span className="date">
                      <i className="far fa-calendar-alt"></i> 12 February, 2022
                    </span>
                    <h3>
                      <a href="/blog/blog-details">
                        Is your measurement plan ready for 2022?
                      </a>
                    </h3>
                    <a href="/blog/blog-details" className="read-more">
                      Click here <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-style-four">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/images/news/blog-2.jpg`).default
                      }
                      alt="Blog"
                    />
                  </div>
                  <div className="blog-four-content">
                    <span className="date">
                      <i className="far fa-calendar-alt"></i> 12 February, 2022
                    </span>
                    <h3>
                      <a href="/blog/blog-details">
                        Is your measurement plan ready for 2022?
                      </a>
                    </h3>
                    <a href="/blog/blog-details" className="read-more">
                      Click here <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-style-four">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/images/news/blog-1.jpg`).default
                      }
                      alt="Blog"
                    />
                  </div>
                  <div className="blog-four-content">
                    <span className="date">
                      <i className="far fa-calendar-alt"></i> 12 February, 2022
                    </span>
                    <h3>
                      <a href="/blog/blog-details">
                        Is your measurement plan ready for 2022?
                      </a>
                    </h3>
                    <a href="/blog/blog-details" className="read-more">
                      Click here <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-style-four">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/images/news/blog-2.jpg`).default
                      }
                      alt="Blog"
                    />
                  </div>
                  <div className="blog-four-content">
                    <span className="date">
                      <i className="far fa-calendar-alt"></i> 12 February, 2022
                    </span>
                    <h3>
                      <a href="/blog/blog-details">
                        Is your measurement plan ready for 2022?
                      </a>
                    </h3>
                    <a href="/blog/blog-details" className="read-more">
                      Click here <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </SliderCom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
