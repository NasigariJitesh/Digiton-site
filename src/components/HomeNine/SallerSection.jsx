import SliderCom from "../helpers/SliderCom";

export default function SallerSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="sellers-section pt-120 rpt-100" id="sellers">
      <div className="container rel z-2 py-80">
        <div className="section-title text-center mb-65">
          <span className="sub-title">Creators</span>
          <h2>Our Top Sellers</h2>
        </div>
        <div className="sellers-active">
          <SliderCom settings={settings}>
            <div className="seller-item wow fadeInUp delay-0-1s">
              <span className="number">01</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller1.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Yeoh</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-2s">
              <span className="number">02</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller2.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michele Morrone</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-3s">
              <span className="number">03</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller3.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>David beckham</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-4s">
              <span className="number">04</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller4.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Obama</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-5s">
              <span className="number">05</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller5.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Obama</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-6s">
              <span className="number">01</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller1.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Yeoh</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-1s">
              <span className="number">02</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller2.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michele Morrone</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-2s">
              <span className="number">03</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller3.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>David beckham</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-3s">
              <span className="number">04</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller4.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Obama</h5>
              <span className="items">230 Item</span>
            </div>
            <div className="seller-item wow fadeInUp delay-0-4s">
              <span className="number">05</span>
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/sallers/saller5.png`).default
                  }
                  alt="Saller"
                />
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <h5>Michelle Obama</h5>
              <span className="items">230 Item</span>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}
