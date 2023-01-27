import React from "react";
import DataIteration from "../helpers/DataIteration";

export default function TeamSection({ teams, className }) {
  return (
    <>
      <section
        className={`team-section bg-lighter text-center pt-115 rpt-95 pb-90 rpb-70 ${
          className || ""
        }`}
      >
        <div className="container">
          <div className="section-title mb-55">
            <span className="sub-title">Export Team</span>
            <h2>Meet our colleague</h2>
          </div>
          <div className="row">
            <DataIteration datas={teams} startLength={0} endLength={4}>
              {({ datas }) => (
                <div key={datas.id + datas.name} className="col-lg-3 col-sm-6">
                  <div className="team-member-four wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src={
                          require(`../../assets/images/team/${datas.profile_photo}`)
                            .default
                        }
                        alt="Team Member"
                      />
                      <div className="social-style-two">
                        <a href="http://facebook.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://twitter.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-designation">
                      <h5>
                        <a href="/team-single">{datas.name}</a>
                      </h5>
                      <span>{datas.designation}</span>
                    </div>
                  </div>
                </div>
              )}
            </DataIteration>
          </div>
        </div>
      </section>
    </>
  );
}
