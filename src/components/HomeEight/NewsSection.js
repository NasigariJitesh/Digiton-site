import React from "react";

export default function NewsSection() {
  return (
    <section className="news-section-five pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="section-title text-center mb-65">
              <span className="sub-title">Blog & News</span>
              <h2>Every single day update Security</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="news-five-item wow fadeInUp delay-0-2s">
              <img
                src={require(`../../assets/images/news/blog-five1.jpg`).default}
                alt="Blog"
              />
              <div className="content">
                <span className="date">
                  <span>31</span> March
                </span>
                <ul className="post-meta-item">
                  <li>
                    <i className="far fa-user"></i>
                    <a href="#" rel="bookmark">
                      By Admin
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    <a href="#">3 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="/blog-details">
                    You don’t have to be online to be hacked.
                  </a>
                </h3>
                <a href="/blog-details" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="news-five-item wow fadeInUp delay-0-4s">
              <img
                src={require(`../../assets/images/news/blog-five2.jpg`).default}
                alt="Blog"
              />
              <div className="content">
                <span className="date">
                  <span>31</span> March
                </span>
                <ul className="post-meta-item">
                  <li>
                    <i className="far fa-user"></i>
                    <a href="#" rel="bookmark">
                      By Admin
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    <a href="#">3 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="/blog-details">
                    You don’t have to be online to be hacked.
                  </a>
                </h3>
                <a href="/blog-details" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="news-five-item wow fadeInUp delay-0-6s">
              <img
                src={require(`../../assets/images/news/blog-five3.jpg`).default}
                alt="Blog"
              />
              <div className="content">
                <span className="date">
                  <span>31</span> March
                </span>
                <ul className="post-meta-item">
                  <li>
                    <i className="far fa-user"></i>
                    <a href="#" rel="bookmark">
                      By Admin
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    <a href="#">3 Comments</a>
                  </li>
                </ul>
                <h3>
                  <a href="/blog-details">
                    You don’t have to be online to be hacked.
                  </a>
                </h3>
                <a href="/blog-details" className="learn-more">
                  Read More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
