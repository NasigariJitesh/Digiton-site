import React from "react";
import ColumCardStyleTwo from "../helpers/Cards/ColumCardStyleTwo";
import DataIteration from "../helpers/DataIteration";

export default function NewsSection({ blogs, className }) {
  return (
    <section className={`news-section-two pb-90 rpb-70 ${className || ""}`}>
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Recent Articles</span>
          <h2>Latest News from Us</h2>
        </div>
        <div className="row justify-content-center">
          <DataIteration datas={blogs} startLength={0} endLength={3}>
            {({ datas }) => (
              <div key={Math.random()} className="col-xl-4 col-md-6">
                <ColumCardStyleTwo datas={datas} />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}
