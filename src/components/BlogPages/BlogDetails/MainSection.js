import React from "react";

export default function MainSection() {
  return (
    <section className="blog-details-area bg-lighter">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-content pt-120 rpt-100 pb-95 rpb-75 pr-15 rpr-0">
              <div className="image wow fadeInUp delay-0-2s">
                <img
                  src={
                    require(`../../../assets/images/news/blog-standard-1.jpg`)
                      .default
                  }
                  alt="Blog Standard"
                />
              </div>
              <div className="blog-header">
                <ul className="post-meta-item mr-15">
                  <li>
                    <i className="far fa-user"></i>
                    <a href="#" rel="bookmark">
                      Daniele Custer
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    <a href="#">25 Jan 2022</a>
                  </li>
                </ul>
                <div className="social-style-one">
                  <span>Share Now</span>
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://google.com/">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
              <h3>
                Monthly Web Development Update Complexity Over HTTPS, And Push
                Notifications
              </h3>
              <p>
                But we ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incididunt labore
              </p>
              <p>
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor reprehendermust explain to you
                how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the
                system, and expound the actual teachings of the great explorer
                of the truth, the master-builder of human happiness. No one
                rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone
              </p>
              <blockquote>
                Avoids pleasure itself, because it is pleasure, but because
                those who do not know how to pursue pleasure rationally
                encounter con sequences that are extremely painful again anyone
                <span className="author">Tony R. Francois</span>
              </blockquote>
              <div className="blog-footer mb-40">
                <div className="popular-tags mb-15">
                  <b>Popular Tag :</b> <a href="#">IT Services</a>{" "}
                  <a href="#">Technology</a> <a href="#">Services</a>
                </div>
                <div className="social-style-two">
                  <span>Share</span>
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://google.com/">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="row wow fadeInUp delay-0-2s">
                <div className="col-sm-6">
                  <a href="/blog/blog-details" className="next-prev-blog">
                    <h4>Building Pub Sub Service Using Node And Redis</h4>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="/blog/blog-details" className="next-prev-blog">
                    <h4>Once Upon Time Use Story For Better Engagement</h4>
                  </a>
                </div>
              </div>
              <div className="comments-wrap mt-55 wow fadeInUp delay-0-2s">
                <h3 className="comment-title mb-55">Client’s Comments</h3>
                <div className="comment-item">
                  <div className="author-image">
                    <img
                      src={
                        require(`../../../assets/images/news/comment-author-1.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>Alexzeder Alex</h5>
                      <span className="date">25 Jan 2022</span>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete
                    </p>
                    <a href="#" className="reply">
                      Reply Commets
                    </a>
                  </div>
                </div>
                <div className="comment-item child-comment">
                  <div className="author-image">
                    <img
                      src={
                        require(`../../../assets/images/news/comment-author-2.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>John F. Medina</h5>
                      <span className="date">25 Jan 2022</span>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you
                    </p>
                    <a href="#" className="reply">
                      Reply Commets
                    </a>
                  </div>
                </div>
                <div className="comment-item">
                  <div className="author-image">
                    <img
                      src={
                        require(`../../../assets/images/news/comment-author-3.jpg`)
                          .default
                      }
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>Alexzeder Alex</h5>
                      <span className="date">25 Jan 2022</span>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete
                    </p>
                    <a href="#" className="reply">
                      Reply Commets
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-form-wrap mt-60 wow fadeInUp delay-0-2s">
                <h3 className="comment-title mb-55">Send A Message</h3>
                <form
                  id="comment-form"
                  className="comment-form"
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <div className="row clearfix justify-content-center">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="full-name">
                          <i className="far fa-user"></i>
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          value=""
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope"></i>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value=""
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="comments">
                          <i className="fas fa-pencil-alt"></i>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-control"
                          rows="4"
                          placeholder="Write Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <button type="submit" className="theme-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-9">
            <div className="blog-sidebar mt-120 rmy-100">
              <div className="widget widget-search wow fadeInUp delay-0-2s">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required
                  />
                  <button
                    type="submit"
                    className="searchbutton fa fa-search"
                  ></button>
                </form>
              </div>
              <div className="widget widget-recent-post wow fadeInUp delay-0-4s">
                <h3 className="widget-title">Recent News</h3>
                <div className="widget-news-wrap">
                  <div className="widget-news-item">
                    <img
                      src={
                        require(`../../../assets/images/news/news-widget-1.jpg`)
                          .default
                      }
                      alt="News"
                    />
                    <div className="widget-news-content">
                      <h5>
                        <a href="/blog/blog-details">
                          Quick Win For Improe Perfor Securitys.
                        </a>
                      </h5>
                      <span className="date">
                        <a href="#">15 Dec 2021</a>
                      </span>
                    </div>
                  </div>
                  <div className="widget-news-item">
                    <img
                      src={
                        require(`../../../assets/images/news/news-widget-2.jpg`)
                          .default
                      }
                      alt="News"
                    />
                    <div className="widget-news-content">
                      <h5>
                        <a href="blog-details.html">
                          Quick Win Imperfora Security Web ses
                        </a>
                      </h5>
                      <span className="date">
                        <a href="#">15 Dec 2021</a>
                      </span>
                    </div>
                  </div>
                  <div className="widget-news-item">
                    <img
                      src={
                        require(`../../../assets/images/news/news-widget-3.jpg`)
                          .default
                      }
                      alt="News"
                    />
                    <div className="widget-news-content">
                      <h5>
                        <a href="/blog/blog-details">
                          We’ve Got Announce ment Make Rachel
                        </a>
                      </h5>
                      <span className="date">
                        <a href="#">15 Dec 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget-category wow fadeInUp delay-0-2s">
                <h3 className="widget-title">Category</h3>
                <ul className="list-style-two">
                  <li>
                    <a href="#">Business Strategy</a> <span>(20)</span>
                  </li>
                  <li>
                    <a href="#">Investment Planning</a> <span>(05)</span>
                  </li>
                  <li>
                    <a href="#">Financial Investment</a> <span>(03)</span>
                  </li>
                  <li>
                    <a href="#">Banking & Insurance</a> <span>(30)</span>
                  </li>
                  <li>
                    <a href="#">Free Consulting</a> <span>(07)</span>
                  </li>
                  <li>
                    <a href="#">Meet Our Team</a> <span>(09)</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                <h3 className="widget-title">Category</h3>
                <div className="tags">
                  <a href="#">Cleaning</a>
                  <a href="#">Business</a>
                  <a href="#">Booking</a>
                  <a href="#">car</a>
                  <a href="#">House</a>
                  <a href="#">Apartment</a>
                  <a href="#">Washing</a>
                  <a href="#">Agency</a>
                  <a href="#">Listing</a>
                </div>
              </div>
              <div className="widget widget-call-action wow fadeInUp delay-0-2s">
                <div className="call-action-widget">
                  <h2>Work Together</h2>
                  <p>
                    Bur wemust ipsum dolor sit amet consectetur adipisicing elit
                    sed eiusmod tempor incididunt ut labore
                  </p>
                  <a
                    className="theme-btn style-five btn-circle"
                    href="/contact"
                  >
                    Contact Now <i className="fas fa-angle-double-right"></i>
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
