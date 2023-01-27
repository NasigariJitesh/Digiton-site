import React from "react";
import TeamCardStyleOne from "../helpers/Cards/TeamCardStyleOne";
import DataIteration from "../helpers/DataIteration";

function TeamSection({ teams, className }) {
  return (
    <section
      className={`team-section pt-115 rpt-95 pb-60 rpb-40 ${className || ""}`}
    >
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Team Memabers</span>
          <h2>Our Awesome Team</h2>
        </div>
        <div className="row justify-content-center">
          <DataIteration datas={teams} startLength={0} endLength={3}>
            {({ datas }) => (
              <div key={Math.random()} className="col-lg-3 col-sm-6">
                <TeamCardStyleOne datas={datas} />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
