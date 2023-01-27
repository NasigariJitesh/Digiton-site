import { useEffect, useState } from "react";

export default function CollectionSection({ datas }) {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("all");
  useEffect(() => {
    setTimeout(() => {
      setIsotope(
        // eslint-disable-next-line no-undef
        new Isotope(".collection-active", {
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
    <section
      className="collection-section rel z-1 pt-115 pb-90 rpt-95 rpb-70"
      id="collection"
    >
      <div className="container">
        <div className="collection-filter-area mb-60">
          <div className="section-title mb-45">
            <span className="sub-title">Our Collection’s</span>
            <h2>Explore Collection’s</h2>
          </div>
          <ul className="collection-filter">
            <li
              onClick={() => handleFilterKeyChange("all")}
              className={filterKey === "all" ? "current" : ""}
            >
              All NFT
            </li>
            <li
              onClick={() => handleFilterKeyChange("collectibles")}
              className={filterKey === "collectibles" ? "current" : ""}
            >
              Collectibles
            </li>
            <li
              onClick={() => handleFilterKeyChange("game")}
              className={filterKey === "game" ? "current" : ""}
            >
              Game Assets
            </li>
            <li
              onClick={() => handleFilterKeyChange("virtual")}
              className={filterKey === "virtual" ? "current" : ""}
            >
              Virtual Land
            </li>
            <li
              onClick={() => handleFilterKeyChange("fashion")}
              className={filterKey === "fashion" ? "current" : ""}
            >
              NFT Fashion
            </li>
            <li
              onClick={() => handleFilterKeyChange("artworks")}
              className={filterKey === "artworks" ? "current" : ""}
            >
              Artworks
            </li>
            <li
              onClick={() => handleFilterKeyChange("music")}
              className={filterKey === "music" ? "current" : ""}
            >
              Music
            </li>
            <li
              onClick={() => handleFilterKeyChange("sports")}
              className={filterKey === "sports" ? "current" : ""}
            >
              Sports
            </li>
            <li
              onClick={() => handleFilterKeyChange("cartoon")}
              className={filterKey === "cartoon" ? "current" : ""}
            >
              Cartoon
            </li>
          </ul>
        </div>
        <div className="row collection-active">
          {datas &&
            datas.length > 0 &&
            datas.map((item) => (
              <div
                key={item.id}
                className={`col-xl-3 col-lg-4 col-sm-6 item game fashion music cartoon ${
                  item.filter.length > 0
                    ? // eslint-disable-next-line no-unused-vars
                      replaceCommaToSpace(item.filter)
                    : ""
                }`}
              >
                <div className="action-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/images/actions/${item.collection_thumb}`)
                          .default
                      }
                      alt="Collection"
                    />
                  </div>
                  <div className="content">
                    <div className="bid-dots">
                      <div className="bid">
                        Bid : <b>17.15ETH</b>
                      </div>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <h4>{item.title}</h4>
                    <div className="author-wish">
                      <div className="author">
                        <img
                          src={
                            require(`../../assets/images/actions/${item.author}`)
                              .default
                          }
                          alt="Author"
                        />
                        <div className="description">
                          <h6>{item.author_name}</h6>
                          <span>Creator</span>
                        </div>
                      </div>
                      <a href="#" className="wish">
                        <i className="far fa-heart"></i>
                        <span>2k</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
