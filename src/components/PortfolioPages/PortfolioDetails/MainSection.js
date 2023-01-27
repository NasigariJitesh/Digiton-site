import React from "react";
import background from "../../../assets/images/contact/home-two.jpg";

export default function MainSection() {
  return (
    <>
      <section className="portfolio-details pt-120 rpt-100 pb-90 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-details-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="image mb-35">
                  <img
                    src={
                      require(`../../../assets/images/gallery/portfolio-details.jpg`)
                        .default
                    }
                    alt="Portfolio Details"
                  />
                </div>
                <h2>Software License Management</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur{" "}
                </p>
                <div className="row mt-45">
                  <div className="col-sm-6">
                    <div className="image mb-30 wow fadeInUp delay-0-2s">
                      <img
                        src={
                          require(`../../../assets/images/gallery/portfolio-middle-1.jpg`)
                            .default
                        }
                        alt="Portfolio"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="image mb-30 wow fadeInUp delay-0-4s">
                      <img
                        src={
                          require(`../../../assets/images/gallery/portfolio-middle-2.jpg`)
                            .default
                        }
                        alt="Portfolio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-sidebar">
                <div className="widget widget-portfolio-info bg-lighter p-45 wow fadeInUp delay-0-3s">
                  <h3 className="widget-title">Project Details</h3>
                  <ul>
                    <li>
                      <h4>Project Name:</h4>
                      <p>Software License Management</p>
                    </li>
                    <li>
                      <h4>Clients:</h4>
                      <p>Management</p>
                    </li>
                    <li>
                      <h4>Category:</h4>
                      <p>Template blocks</p>
                    </li>
                    <li>
                      <h4>Project Year:</h4>
                      <p>August 12, 2021</p>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget contact-info-widget contact-image-number style-two bgs-cover overlay wow fadeInUp delay-0-2s"
                  style={{ backgroundImage: `url(${background})` }}
                >
                  <div className="contact-informations text-white">
                    <h3>Don't hesitate to contact us</h3>
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-phone-alt"></i>
                        <div className="content">
                          <span>Call Us</span>
                          <h5>
                            <a href="callto:+012-345-6789">+012-345-6789</a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <div className="content">
                          <span>Write to Us</span>
                          <h5>
                            <a href="mailto:info@example.com">
                              info@example.com
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>
                        <div className="content">
                          <span>Office hours</span>
                          <h5>Mon-Sat 9:00 - 7:00</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
