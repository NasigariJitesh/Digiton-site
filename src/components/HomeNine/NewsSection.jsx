export default function NewsSection() {
  return (
    <section
      className="news-six-area rel z-1 pt-110 pb-90 rpt-90 rpb-70"
      id="news"
    >
      <div className="container">
        <div className="section-title text-center mb-65">
          <span className="sub-title">Our Update</span>
          <h2>Our Latest Blog & News</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="news-six-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/news/news-six1.jpg`).default
                  }
                  alt="News"
                />
              </div>
              <h4>
                <a href="blog-details.html">
                  Final Thoughts on NFT Marketing Checklist
                </a>
              </h4>
              <ul className="post-meta-item">
                <li>
                  <i className="far fa-calendar-check"></i>
                  <a href="#" rel="bookmark">
                    5 Apr, 2022
                  </a>
                </li>
                <li>
                  <i className="far fa-comment"></i>
                  <a href="#">3 Comments</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="news-six-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/news/news-six2.jpg`).default
                  }
                  alt="News"
                />
              </div>
              <h4>
                <a href="blog-details.html">
                  Final Thoughts on NFT Marketing Checklist
                </a>
              </h4>
              <ul className="post-meta-item">
                <li>
                  <i className="far fa-calendar-check"></i>
                  <a href="#" rel="bookmark">
                    5 Apr, 2022
                  </a>
                </li>
                <li>
                  <i className="far fa-comment"></i>
                  <a href="#">3 Comments</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="news-six-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/news/news-six3.jpg`).default
                  }
                  alt="News"
                />
              </div>
              <h4>
                <a href="blog-details.html">
                  Final Thoughts on NFT Marketing Checklist
                </a>
              </h4>
              <ul className="post-meta-item">
                <li>
                  <i className="far fa-calendar-check"></i>
                  <a href="#" rel="bookmark">
                    5 Apr, 2022
                  </a>
                </li>
                <li>
                  <i className="far fa-comment"></i>
                  <a href="#">3 Comments</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
