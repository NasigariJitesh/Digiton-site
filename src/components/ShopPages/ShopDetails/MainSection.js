import React, { useState } from "react";
import ProductCardOne from "../../helpers/Cards/ProductCardOne";
import DataIteration from "../../helpers/DataIteration";
import SliderCom from "../../helpers/SliderCom";
import ShopSidebar from "../Shop/ShopSidebar";

export default function MainSection({ products }) {
  const bigSlider = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const smallSlider = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [quantity, setQuantity] = useState(0);
  const inputNumber = (e) => {
    setQuantity(e.target.value);
  };
  const [tab, setTab] = useState("description");
  const tabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  return (
    <section className="shop-details-area py-120 rpy-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="shop-details-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-gallery">
                    <SliderCom
                      asNavFor={nav2}
                      selector={(slider1) => setNav1(slider1)}
                      settings={bigSlider}
                    >
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-1.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-2.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-3.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-4.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-5.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                      <a href="#" className="product-image-preview">
                        <img
                          src={
                            require(`../../../assets/images/shop/preview-6.jpg`)
                              .default
                          }
                          alt="Preview"
                        />
                      </a>
                    </SliderCom>
                  </div>
                  <div className="product-thumb py-10 mb-40">
                    <SliderCom
                      asNavFor={nav1}
                      selector={(slider1) => setNav2(slider1)}
                      settings={smallSlider}
                    >
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-1.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-2.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-3.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-4.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-5.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                      <div className="product-thumb-item">
                        <img
                          src={
                            require(`../../../assets/images/shop/thumb-6.jpg`)
                              .default
                          }
                          alt="Thumb"
                        />
                      </div>
                    </SliderCom>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="descriptions mb-50">
                    <h2>Cooler</h2>
                    <div className="rating-review d-flex align-items-center mb-10">
                      <div className="rating mr-5">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <a href="#">(1 customer review)</a>
                    </div>
                    <div className="shop-price">
                      <del>
                        <span className="price">100</span>
                      </del>
                      <b className="current-price">50</b>
                    </div>
                    <p>
                      Fortunately, two seasoned digital marketers have a plan to
                      make your brand succeed. In Faster, Smarter, Louder, Aaron
                      Agius and Gián Clancey share the secrets that transformed
                      their two-person agency
                    </p>
                    <form action="#" className="add-to-cart mr-10 mb-25">
                      <input
                        type="number"
                        value={quantity}
                        min="1"
                        max="20"
                        onChange={(e) => inputNumber(e)}
                        required
                      />
                      <button type="submit" className="theme-btn">
                        Add to Cart
                      </button>
                    </form>
                    <ul className="product-meta">
                      <li>
                        Category: <a href="#">Cooler</a>
                      </li>
                      <li>
                        Tags: <a href="#">cooler</a> <a href="#">smart</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav product-information-tab mb-30">
                <li>
                  <a
                    onClick={(e) => tabHandler(e, "description")}
                    href="#"
                    className={tab === "description" ? "active show" : ""}
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => tabHandler(e, "review")}
                    href="#"
                    className={tab === "review" ? "active show" : ""}
                  >
                    Review (1)
                  </a>
                </li>
              </ul>
              <div className="tab-content mb-85">
                <div
                  className={`tab-pane fade ${
                    tab === "description" ? "active show " : ""
                  }`}
                  id="details"
                >
                  <h2>Description</h2>
                  <p>
                    Fortunately, two seasoned digital marketers have a plan to
                    make your brand succeed. In Faster, Smarter, Louder, Aaron
                    Arius, and IAN Blanca share the secrets that transformed
                    their two-person agency.
                  </p>
                  <p>
                    In today’s online world, a brand’s success lies in combining
                    technological planning and social strategies to draw
                    customers in–and keep them coming back for more. Without a
                    strong digital platform, time and money are wasted, content
                    sits unnoticed, and prospective clients disappear.
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    tab === "review" ? "active show " : ""
                  }`}
                  id="review"
                >
                  <h2>1 review for Cooler</h2>
                  <div className="review-item mb-55 pt-10">
                    <div className="reviewer-img">
                      <img
                        src={
                          require(`../../../assets/images/shop/reviewer-1.png`)
                            .default
                        }
                        alt="Reviewer"
                      />
                    </div>
                    <div className="reviewer-review">
                      <div className="reviewer-header">
                        <h6>Robert Down</h6>
                        <span className="date">7 Jan, 2022</span>
                        <div className="ratings">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Morbi interdum mollis sapien. Sed ac risus. Phasellus
                        lacinia, magna a ullamcorper laoreet, lectus arcu
                        pulvinar risus, vitae facilisis libero dolor purus. Sed
                        vel lacus.
                      </p>
                      <a href="#" className="reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <form
                    id="review-form"
                    name="review_form"
                    className="review-form"
                    action="#"
                    method="POST"
                  >
                    <h3>Add A Review</h3>
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="first_name"
                            id="name"
                            className="form-control"
                            value=""
                            placeholder="Full Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value=""
                            placeholder="Email Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="5"
                            placeholder="Write a Comment"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="your-rating mb-20 d-flex align-items-center">
                          <h6 className="mb-0 mr-15">Your Rating:</h6>
                          <div className="ratings" id="your-rating">
                            <i className="fas fa-star selected"></i>
                            <i className="fas fa-star selected"></i>
                            <i className="fas fa-star selected"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group text-left text-md-right mb-0">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            className="theme-btn br-30"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Submit <i className="fas fa-angle-double-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="section-title mb-45">
                <h2>Related products</h2>
              </div>
              <div className="row">
                <DataIteration datas={products} startLength={0} endLength={3}>
                  {({ datas }) => (
                    <div
                      key={datas.id + datas.title}
                      className="col-md-4 col-6 col-small"
                    >
                      <ProductCardOne datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>
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
