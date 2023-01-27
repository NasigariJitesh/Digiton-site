import { useRef } from "react";
import SliderCom from "../helpers/SliderCom";

export default function CategoryCollections() {
  const settings = {
    dots: false,
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
  const collectionSlider = useRef(null);
  const prev = () => {
    collectionSlider.current.slickPrev();
  };
  const next = () => {
    collectionSlider.current.slickNext();
  };
  return (
    <section
      className="collection-category-area rel z-1 pt-115 pb-90 rpt-95 rpb-70"
      id="categories"
    >
      <div className="container">
        <div className="row align-items-end mb-50">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-20">
              <span className="sub-title">Popular Collection</span>
              <h2>Collection Category</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="collection-category-btns text-lg-right mb-20">
              <a href="about.html" className="theme-btn gradient-btn-one">
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="collection-category-active position-relative">
          <button onClick={prev} type="button" className="prev slick-arrow">
            <i className="fas fa-chevron-left"></i>
          </button>
          <SliderCom selector={collectionSlider} settings={settings}>
            <div className="collection-category-item wow fadeInUp delay-0-2s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category1.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category2.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category3.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="collection-category-item wow fadeInUp delay-0-4s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category4.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category5.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category6.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="collection-category-item wow fadeInUp delay-0-6s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category7.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category8.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category9.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category10.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="collection-category-item wow fadeInUp delay-0-2s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category1.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category2.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category3.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="collection-category-item wow fadeInUp delay-0-4s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category4.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category5.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category6.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="collection-category-item wow fadeInUp delay-0-6s">
              <div className="category-images">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category7.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category8.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category9.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src={
                          require(`../../assets/images/categories/category10.png`)
                            .default
                        }
                        alt="Category"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="title-dots">
                <div className="content">
                  <h4>Creative Artwork</h4>
                  <span className="items">225 Item</span>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </SliderCom>
          <button onClick={next} type="button" className="next slick-arrow">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
