export default function TestimonialSection() {
  return (
    <section
      className="testimonial-six pt-120 rpt-100 pb-90 rpb-70"
      id="testimonial"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="testimonial-six-content wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title">Testimonial</span>
                <h2>Awsome Clients Feedback</h2>
              </div>
              <div className="testi-author-images mb-45">
                <img
                  src={
                    require(`../../assets/images/testimonials/tai1.png`).default
                  }
                  alt="Tesimonial"
                />
                <img
                  src={
                    require(`../../assets/images/testimonials/tai2.png`).default
                  }
                  alt="Tesimonial"
                />
                <img
                  src={
                    require(`../../assets/images/testimonials/tai3.png`).default
                  }
                  alt="Tesimonial"
                />
                <img
                  src={
                    require(`../../assets/images/testimonials/tai4.png`).default
                  }
                  alt="Tesimonial"
                />
                <img
                  src={
                    require(`../../assets/images/testimonials/tai5.png`).default
                  }
                  alt="Tesimonial"
                />
                <span className="plus">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <a
                href="testimonial.html"
                className="theme-btn gradient-btn-one mb-30 rmb-55"
              >
                View Testimonial
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="testimonial-six-item wow fadeInUp delay-0-4s">
              <p>
                Aenean volutpat in massa at euismod. Phasellus quis viverra
                lacus, ac interdum dui. Quisque pretium metus id molestie
                aliquet. In nec neque in metus placerat commodo. Sed in bibendum
                lorem.
              </p>
              <div className="author-description">
                <div className="designation">
                  <h3>David Beckham</h3>
                  <span>UI-Designer</span>
                </div>
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-six-author-1.png`)
                      .default
                  }
                  alt="Author"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="testimonial-six-item wow fadeInUp delay-0-6s">
              <p>
                Aenean volutpat in massa at euismod. Phasellus quis viverra
                lacus, ac interdum dui. Quisque pretium metus id molestie
                aliquet. In nec neque in metus placerat commodo. Sed in bibendum
                lorem.
              </p>
              <div className="author-description">
                <div className="designation">
                  <h3>David Beckham</h3>
                  <span>UI-Designer</span>
                </div>
                <img
                  src={
                    require(`../../assets/images/testimonials/testi-six-author-2.png`)
                      .default
                  }
                  alt="Author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
