import React from "react";
import DataIteration from "../../helpers/DataIteration";

export default function MainSection({ sectionDatas }) {
  return (
    <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80">
      <div className="container-fluid px-0">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Our Gallery</span>
          <h2>Some Of Our Work</h2>
        </div>
        <div className="row small-gap">
          <DataIteration datas={sectionDatas} startLength={0} endLength={8}>
            {({ datas }) => (
              <div
                key={datas.title + sectionDatas.length}
                className="col-lg-3 col-sm-6"
              >
                <div className="gallery-item wow fadeInUp delay-0-2s">
                  <img
                    src={
                      require(`../../../assets/images/gallery/${datas.image}`)
                        .default
                    }
                    alt="Gallery"
                  />
                  <div className="gallery-content">
                    <span className="category">
                      <a href="/portfolio-details">Our Gallery</a>
                    </span>
                    <h5>
                      <a href="/portfolio-details" className="text-capitalize">
                        {datas.title}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}
