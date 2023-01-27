import React from "react";

export default function ShopSidebar() {
  return (
    <div className="shop-sidebar mt-120 rmt-0 rmb-100">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <h3 className="widget-title">Product Search</h3>
        <form action="#">
          <input
            type="text"
            placeholder="Search Products.."
            className="searchbox"
            required
          />
          <button type="submit" className="searchbutton fa fa-search"></button>
        </form>
      </div>
      <div className="widget widget-products wow fadeInUp delay-0-4s">
        <h3 className="widget-title">Recent News</h3>
        <div className="widget-products-wrap">
          <div className="widget-product-item">
            <a href="shop-details.html">
              <img
                src={
                  require(`../../../assets/images/shop/widget-1.jpg`).default
                }
                alt="Product"
              />
            </a>
            <div className="widget-product-content">
              <h6>
                <a href="shop-details.html">white Lamp</a>
              </h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="shop-price">
                <span className="price">150</span>
              </span>
            </div>
          </div>
          <div className="widget-product-item">
            <a href="shop-details.html">
              <img
                src={
                  require(`../../../assets/images/shop/widget-2.jpg`).default
                }
                alt="Product"
              />
            </a>
            <div className="widget-product-content">
              <h6>
                <a href="shop-details.html">Cooler</a>
              </h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="shop-price">
                <del>
                  <span className="price">100</span>
                </del>
                <span className="current-price">50</span>
              </span>
            </div>
          </div>
          <div className="widget-product-item">
            <a href="shop-details.html">
              <img
                src={
                  require(`../../../assets/images/shop/widget-3.jpg`).default
                }
                alt="Product"
              />
            </a>
            <div className="widget-product-content">
              <h6>
                <a href="shop-details.html">Black Lamp</a>
              </h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="shop-price">
                <span className="price">100</span>
              </span>
            </div>
          </div>
          <div className="widget-product-item">
            <a href="shop-details.html">
              <img
                src={
                  require(`../../../assets/images/shop/widget-4.jpg`).default
                }
                alt="Product"
              />
            </a>
            <div className="widget-product-content">
              <h6>
                <a href="shop-details.html">Watch box</a>
              </h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="shop-price">
                <span className="price">100</span>
              </span>
            </div>
          </div>
          <div className="widget-product-item">
            <a href="shop-details.html">
              <img
                src={
                  require(`../../../assets/images/shop/widget-3.jpg`).default
                }
                alt="Product"
              />
            </a>
            <div className="widget-product-content">
              <h6>
                <a href="shop-details.html">Smart watch</a>
              </h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="shop-price">
                <span className="price">80</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="widget widget-call-action wow fadeInUp delay-0-2s">
        <div className="call-action-widget">
          <h2>Work Together</h2>
          <p>
            Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed
            eiusmod tempor incididunt ut labore
          </p>
          <a className="theme-btn style-five btn-circle" href="/contact">
            Contact Now <i className="fas fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
