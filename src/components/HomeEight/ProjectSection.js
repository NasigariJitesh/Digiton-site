import React from "react";

export default function ProjectSection() {
  return (
    <>
      <section className="project-section pt-115 rpt-95 pb-90 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-70">
                <span className="sub-title">Our Project</span>
                <h2>Our Latest Digital Security Projects Solution</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-2s">
                <img
                  src={
                    require(`../../assets/images/gallery/project1.jpg`).default
                  }
                  alt="project"
                />
                <div className="project-content">
                  <h3>
                    <a href="/portfolio-details">Cyber Security Advice</a>
                  </h3>
                  <span className="category">
                    <a href="/portfolio-details">Digital security</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-4s">
                <img
                  src={
                    require(`../../assets/images/gallery/project2.jpg`).default
                  }
                  alt="project"
                />
                <div className="project-content">
                  <h3>
                    <a href="/portfolio-details">Cyber Security Advice</a>
                  </h3>
                  <span className="category">
                    <a href="/portfolio-details">Digital security</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-6s">
                <img
                  src={
                    require(`../../assets/images/gallery/project3.jpg`).default
                  }
                  alt="project"
                />
                <div className="project-content">
                  <h3>
                    <a href="/portfolio-details">Cyber Security Advice</a>
                  </h3>
                  <span className="category">
                    <a href="/portfolio-details">Digital security</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="project-item wow fadeInUp delay-0-8s">
                <img
                  src={
                    require(`../../assets/images/gallery/project4.jpg`).default
                  }
                  alt="project"
                />
                <div className="project-content">
                  <h3>
                    <a href="/portfolio-details">Cyber Security Advice</a>
                  </h3>
                  <span className="category">
                    <a href="/portfolio-details">Digital security</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
