import React from "react";
import ColumCardStyleOne from "../helpers/Cards/ColumCardStyleOne";
import DataIteration from "../helpers/DataIteration";

export default function RecentArticle({ blogs }) {
  return (
    <section className="news-section pt-115 rpt-95 pb-75 rpb-55">
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Recent Articles</span>
          <h2>Latest News from Us</h2>
        </div>
        <div className="row justify-content-center">
          <DataIteration datas={blogs} startLength={0} endLength={3}>
            {({ datas }) => (
              <div key={datas.id + datas.title} className="col-lg-4 col-sm-6">
                <ColumCardStyleOne datas={datas} />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}
