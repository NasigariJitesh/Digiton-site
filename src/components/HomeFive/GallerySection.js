import React from "react";

export default function GallerySection() {
  return (
    <section className="gallery-section-five overlay pt-115 rpt-95 pb-90 rpb-70 px-60 rpx-0">
      <div className="container">
        <div className="section-title text-center mb-60">
          <span className="sub-title">Our Case Studies</span>
          <h2>
            Let’s know Somthing About <br /> Our Recent Work
          </h2>
        </div>
        <div className="row text-white">
          <div className="col-xl-3 col-sm-6">
            <div className="gallery-item-five wow fadeInUp delay-0-2s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-five-1.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <a href="/portfolio-details" className="gallery-btn">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <h3>
                    <a href="/portfolio-details">IT Consultations</a>
                  </h3>
                  <p>Technology Service Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="gallery-item-five wow fadeInUp delay-0-4s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-five-2.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <a href="/portfolio-details" className="gallery-btn">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <h3>
                    <a href="/portfolio-details">Product Engineering</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit am consectetur adipiscing elit sed do
                    eiusmod{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="gallery-item-five wow fadeInUp delay-0-6s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-five-3.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <a href="/portfolio-details" className="gallery-btn">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <h3>
                    <a href="/portfolio-details">Marketing Policy</a>
                  </h3>
                  <p>Technology Service Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="gallery-item-five wow fadeInUp delay-0-8s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-five-4.jpg`)
                    .default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <div className="gallery-content-inner">
                  <a href="/portfolio-details" className="gallery-btn">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <h3>
                    <a href="/portfolio-details">Business Setup</a>
                  </h3>
                  <p>Technology Service Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
