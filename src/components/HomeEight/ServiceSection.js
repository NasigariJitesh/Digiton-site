import SliderCom from "../helpers/SliderCom";

export default function ServiceSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="services-eight rel z-1 pt-115 rpt-95 pb-120 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="sub-title">Our Services</span>
                <h2>We Provide All Kind Advanced Security Services</h2>
              </div>
            </div>
          </div>
          <div className="service-slider-wrap">
            <SliderCom settings={settings}>
              <div className="service-item-eight wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon1.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Threat intelligence</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
              <div className="service-item-eight wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon2.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Server Security</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
              <div className="service-item-eight wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon3.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Database Security</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
              <div className="service-item-eight wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon4.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Threat intelligence</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
              <div className="service-item-eight wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon2.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Server Security</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
              <div className="service-item-eight wow fadeInUp delay-1-0s">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/services/icon3.png`).default
                    }
                    alt="Icon"
                  />
                </div>
                <h3>
                  <a href="service-details.html">Database Security</a>
                </h3>
                <p>
                  Pulvinar ornare in a sem. Quisque vulputate convallis nulla.
                  In efficitur
                </p>
                <a href="service-details.html" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </SliderCom>
          </div>
        </div>
      </section>
    </>
  );
}
