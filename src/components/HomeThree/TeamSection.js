import React from "react";
import background from "../../assets/images/team/team-bg.jpg";
import TeamCardStyleOne from "../helpers/Cards/TeamCardStyleOne";
import DataIteration from "../helpers/DataIteration";

export default function TeamSection({ teams, backgroundImg = "", className }) {
  return (
    <section
      className={`team-section-two bgs-cover ${
        backgroundImg === "none" ? "" : "text-white"
      } pt-115 rpt-95 pb-90 rpb-70 ${className || ""} `}
      style={
        backgroundImg
          ? { backgroundImage: `${backgroundImg}` }
          : { backgroundImage: `url(${background})` }
      }
    >
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Team Memabers</span>
          <h2>Our Awesome Team</h2>
        </div>
        <div className="row justify-content-center">
          <DataIteration datas={teams} startLength={0} endLength={4}>
            {({ datas }) => (
              <div key={Math.random()} className="col-lg-3 col-sm-6">
                <TeamCardStyleOne
                  className="style-two text-white"
                  datas={datas}
                />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}
