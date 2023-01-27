import React from "react";

function GallerySection() {
  return (
    <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80">
      <div className="container-fluid px-0">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Our Gallery</span>
          <h2>Some Of Our Work</h2>
        </div>
        <div className="row small-gap">
          <div className="col-lg-3 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-1.jpg`).default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <span className="category">
                  <a href="/portfolio-details">Our Gallery</a>
                </span>
                <h5>
                  <a href="/portfolio-details">Laptop in the office</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-4s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-2.jpg`).default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <span className="category">
                  <a href="/portfolio-details">Our Gallery</a>
                </span>
                <h5>
                  <a href="/portfolio-details">Laptop in the office</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-6s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-3.jpg`).default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <span className="category">
                  <a href="/portfolio-details">Our Gallery</a>
                </span>
                <h5>
                  <a href="/portfolio-details">Laptop in the office</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="gallery-item wow fadeInUp delay-0-8s">
              <img
                src={
                  require(`../../assets/images/gallery/gallery-4.jpg`).default
                }
                alt="Gallery"
              />
              <div className="gallery-content">
                <span className="category">
                  <a href="/portfolio-details">Our Gallery</a>
                </span>
                <h5>
                  <a href="/portfolio-details">Laptop in the office</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
