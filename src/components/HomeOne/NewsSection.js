import React from "react";
import ColumCardStyleOne from "../helpers/Cards/ColumCardStyleOne";
import DataIteration from "../helpers/DataIteration";

function NewsSection({ blogs }) {
  return (
    <section className="news-section pb-90 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Recent Articles</span>
          <h2>Latest News from Us</h2>
        </div>
        <div className="row justify-content-center">
          <DataIteration datas={blogs} startLength={0} endLength={3}>
            {({ datas }) => (
              <div key={Math.random()} className="col-lg-4 col-sm-6">
                <ColumCardStyleOne datas={datas} />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
