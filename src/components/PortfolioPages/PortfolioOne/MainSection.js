import React, { useEffect, useState } from "react";

export default function MainSection({ datas }) {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("all");
  useEffect(() => {
    setTimeout(() => {
      setIsotope(
        // eslint-disable-next-line no-undef
        new Isotope(".portfolio-wrap", {
          // filter-container: className of the parent of the isotope elements
          itemSelector: ".item", // filter-item: className of the isotope elements
          // layoutMode: "fitRows", // for horizontal isotope
        })
      );
    }, 100);
  }, []);
  useEffect(() => {
    if (isotope) {
      // sanity check
      // eslint-disable-next-line no-unused-expressions
      filterKey === "all"
        ? isotope.arrange({ filter: `.all` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  const handleFilterKeyChange = (key) => setFilterKey(key);
  const replaceCommaToSpace = (value) => value.join(" ");
  return (
    <section className="portfolio-section pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <ul className="portfolio-filter mb-45">
          <li
            onClick={() => handleFilterKeyChange("all")}
            className={filterKey === "all" ? "current" : ""}
          >
            Show All
          </li>
          <li
            onClick={() => handleFilterKeyChange("software")}
            className={filterKey === "software" ? "current" : ""}
          >
            Software
          </li>
          <li
            onClick={() => handleFilterKeyChange("mobile")}
            className={filterKey === "mobile" ? "current" : ""}
          >
            Mobile
          </li>
          <li
            onClick={() => handleFilterKeyChange("development")}
            className={filterKey === "development" ? "current" : ""}
          >
            Development
          </li>
          <li
            onClick={() => handleFilterKeyChange("marketing")}
            className={filterKey === "marketing" ? "current" : ""}
          >
            Marketing
          </li>
          <li
            onClick={() => handleFilterKeyChange("engineering")}
            className={filterKey === "engineering" ? "current" : ""}
          >
            Engineering
          </li>
        </ul>
        <div className="row portfolio-wrap">
          {datas &&
            datas.length > 0 &&
            datas.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-sm-6 item ${
                  item.filter.length > 0
                    ? // eslint-disable-next-line no-unused-vars
                      replaceCommaToSpace(item.filter)
                    : ""
                }`}
              >
                <div className="gallery-item style-three wow fadeInUp delay-0-2s">
                  <img
                    src={
                      require(`../../../assets/images/gallery/${item.image}`)
                        .default
                    }
                    alt="Gallery"
                  />
                  <div className="gallery-content">
                    <h5>
                      <a href="/portfolio-details" className="text-capitalize">
                        {item.title}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
