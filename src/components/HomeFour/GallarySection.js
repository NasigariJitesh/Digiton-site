import React from "react";

export default function GallarySection() {
  return (
    <section className="gallery-section px-55 rpx-0 pt-115 rpt-95 pb-85 rpb-65">
      <div className="container-fluid">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Our Gallery</span>
          <h2>Some Of Our Work</h2>
        </div>
        <div className="row text-white justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-2s animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-1.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-4s animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-2.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-6s animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-3.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-8s animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-4.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-2s"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-5.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-4s"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-6.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-6s"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-7.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="gallery-item style-four wow fadeInUp delay-0-8s"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img
                src={
                  require(`../../assets/images/gallery/gallery-four-8.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <span className="category">Our Gallery</span>
                  <h5>Laptop in the office</h5>
                  <a href="/portfolio-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
