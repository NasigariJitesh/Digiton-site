import React from "react";

export default function OurTeamSection({ className }) {
  return (
    <section className={`team-section-three pb-50 rpb-30 ${className || ""}`}>
      <div className="container">
        <div className="section-title-with-btn mb-60">
          <div className="section-title">
            <span className="sub-title">Meet Our Team</span>
            <h2>Expert Team Member</h2>
          </div>
          <a href="/team-one" className="theme-btn style-two mt-15">
            view all member
          </a>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="team-member-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/team/team-three-1.jpg`).default
                  }
                  alt="Team Member"
                />
              </div>
              <div className="member-designation">
                <h3>
                  <a href="/team-profile">Charles P. Johnson</a>
                </h3>
                <span>CEO & Founder</span>
                <div className="social-style-one">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-member-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/team/team-three-2.jpg`).default
                  }
                  alt="Team Member"
                />
              </div>
              <div className="member-designation">
                <h3>
                  <a href="/team-profile">Kenneth B. Jones</a>
                </h3>
                <span>Web Developer</span>
                <div className="social-style-one">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-member-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src={
                    require(`../../assets/images/team/team-three-3.jpg`).default
                  }
                  alt="Team Member"
                />
              </div>
              <div className="member-designation">
                <h3>
                  <a href="/team-profile">Marcelo L. Cameron</a>
                </h3>
                <span>Graphics Designer</span>
                <div className="social-style-one">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
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
