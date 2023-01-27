import { useRef } from "react";
import SliderCom from "../helpers/SliderCom";

export default function LiveAuctions() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const actionSlider = useRef(null);
  const prev = () => {
    actionSlider.current.slickPrev();
  };
  const next = () => {
    actionSlider.current.slickNext();
  };
  return (
    <section className="actions-section rel z-1 pt-115 rpt-95" id="action">
      <div className="container">
        <div className="row align-items-end mb-40">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-20">
              <span className="sub-title">Actions</span>
              <h2>Live Auctions</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="actions-arrow-btns text-lg-right mb-30">
              <button
                onClick={prev}
                type="button"
                className="action-prev slick-arrow"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                onClick={next}
                type="button"
                className="action-next slick-arrow"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="actions-active position-relative">
          <SliderCom selector={actionSlider} settings={settings}>
            <div className="action-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action1.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 30, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author1.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>David Beckham</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action2.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 20, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author2.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Christian bale</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action3.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 22, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author3.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Michelle Yeoh</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-8s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action4.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 28, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author4.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Michele Morrone</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action1.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 25, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author1.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>David Beckham</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action2.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 30, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author2.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Christian bale</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action3.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 30, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author3.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Michelle Yeoh</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="action-item wow fadeInUp delay-0-8s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/actions/action4.jpg`).default
                  }
                  alt="Action"
                />
                <ul className="count-down" data-date="Jun 30, 2022 00:00:00">
                  <li>
                    <span className="days">14</span>days
                  </li>
                  <li>
                    <span className="hours">23</span>Hr's
                  </li>
                  <li>
                    <span className="minutes">45</span>Min's
                  </li>
                  <li>
                    <span className="seconds">29</span>Sec
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="bid-dots">
                  <div className="bid">
                    Bid : <b>17.15ETH</b>
                  </div>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <h4>Fictional character</h4>
                <div className="author-wish">
                  <div className="author">
                    <img
                      src={
                        require(`../../assets/images/actions/author4.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                    <div className="description">
                      <h6>Michele Morrone</h6>
                      <span>Creator</span>
                    </div>
                  </div>
                  <a href="#" className="wish">
                    <i className="far fa-heart"></i>
                    <span>2k</span>
                  </a>
                </div>
              </div>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}
