import React from "react";
import ProductCardOne from "../../helpers/Cards/ProductCardOne";
import DataIteration from "../../helpers/DataIteration";
import ShopSidebar from "./ShopSidebar";

export default function MainSection({ products }) {
  return (
    <section className="shop-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="shop-grid-content pt-120 rpt-100 pb-110 rpb-70">
              <div className="shop-shorter mb-40">
                <ul className="grid-list">
                  <li>
                    <a href="#" className="active">
                      <i className="fas fa-border-all"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-list-ul"></i>
                    </a>
                  </li>
                </ul>
                <div className="sort-text">
                  <span>Showing 1-9 of 11 Result</span>
                </div>
                <div className="products-dropdown">
                  <select>
                    <option value="">Default Sorting</option>
                    <option value="">Short by Latest</option>
                    <option value="">Oldest Product</option>
                    <option value="">High To Low</option>
                    <option value="">Low To High</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <DataIteration datas={products} startLength={0} endLength={9}>
                  {({ datas }) => (
                    <div
                      key={`${datas.id} + ${datas.title}`}
                      className="col-md-4 col-6 col-small"
                    >
                      <ProductCardOne datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>

              <ul className="pagination flex-wrap mt-40 justify-content-center">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-9">
            <ShopSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
