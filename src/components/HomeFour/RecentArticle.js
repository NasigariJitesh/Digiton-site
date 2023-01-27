import React from "react";

export default function RecentArticle() {
  return (
    <section className="news-section-two pb-90 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="news-seciton-content mb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title">Recent Articles</span>
                <h2>Get News & Blog</h2>
              </div>
              <p>
                Lorem ipsum dolor amet consectetur adips elit sed do eiusmod
                tempor incididunt laboey dolore magna aliqua enim minim
              </p>
              <p>
                On the other hand, we denounce righteous indignation and dislike
                men who are beguiled and demoralized by the charms
              </p>
              <a href="/blog" className="theme-btn mt-15">
                view all news
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="news-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src={require(`../../assets/images/news/news-2.jpg`).default}
                  alt="News"
                />
              </div>
              <div className="news-content">
                <ul className="post-meta-item">
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    <a href="#" rel="bookmark">
                      22 December 2021
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-tag"></i>
                    <a href="#">it service</a>
                  </li>
                </ul>
                <h4>
                  <a href="/blog/blog-details">
                    Keep Your Business Safe &amp; Ensure High Availability.
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisc ingelit sed do
                  eiusmod
                </p>
              </div>
              <div className="news-author">
                <img
                  src={
                    require(`../../assets/images/news/news-author-2.jpg`)
                      .default
                  }
                  alt="Authro"
                />
                <span className="posted-by">
                  By <a href="#">Admin</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="row">
              <div className="col-xl-12 col-sm-6">
                <div className="news-item style-three wow fadeInUp delay-0-6s">
                  <div className="news-content">
                    <ul className="post-meta-item">
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <a href="#" rel="bookmark">
                          22 December 2021
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-tag"></i>
                        <a href="#">it pro</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="/blog/blog-details">
                        Keep Your Business Safe &amp; Ensure High Availability.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ingelit
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6">
                <div className="news-item style-three wow fadeInUp delay-0-7s">
                  <div className="news-content">
                    <ul className="post-meta-item">
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <a href="#" rel="bookmark">
                          22 December 2021
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-tag"></i>
                        <a href="#">it pro</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="/blog/blog-details">
                        Keep Your Business Safe &amp; Ensure High Availability.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ingelit
                      sed do eiusmod
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
