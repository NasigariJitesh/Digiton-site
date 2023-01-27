import React, { useState } from "react";
import aboutTab from "../../assets/images/about/about-tab.png";
import aboutTabTwo from "../../assets/images/about/about.png";
import background from "../../assets/images/counter/counter-bg.jpg";
import CounterUp from "../helpers/CounterUp";
import DataIteration from "../helpers/DataIteration";

export default function AboutTabSection() {
  const tabContent = [
    {
      id: 1,
      uniqKey: "_data_center",
      content: "Data Center",
      icon: "flaticon flaticon-web-maintenance",
      thumb: aboutTab,
    },
    {
      id: 2,
      uniqKey: "_cloud_service",
      content: "Cloud Service",
      icon: "flaticon flaticon-web-development-4",
      thumb: aboutTabTwo,
    },
    {
      id: 3,
      uniqKey: "_web_dev",
      content: "Web Devlopment",
      icon: "flaticon flaticon-web-programming",
      thumb: aboutTab,
    },
    {
      id: 4,
      uniqKey: "_it_managment",
      content: "It Management",
      icon: "flaticon flaticon-coding-5",
      thumb: aboutTabTwo,
    },
  ];
  const [tab, setTab] = useState(tabContent[0].id);
  const tabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  return (
    <section
      id="about-tab-section"
      className="about-tab-section bg-light-black text-white pb-120 rpb-100"
    >
      <div className="container">
        <div
          className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text">
                  <CounterUp endValue="520" sectionSelect="about-tab-section" />
                </span>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="24"
                >
                  <CounterUp endValue={24} sectionSelect="about-tab-section" />
                </span>
                <p>Awards Won</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-6s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="12"
                >
                  <CounterUp endValue={12} sectionSelect="about-tab-section" />
                </span>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-8s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="352"
                >
                  <CounterUp endValue={352} sectionSelect="about-tab-section" />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title text-center mb-55">
          <span className="sub-title">WHO WE ARE</span>
          <h2>
            We deal with the aspects of <br />
            professional IT Services
          </h2>
        </div>
        <ul className="nav about-tab">
          <DataIteration datas={tabContent} startLength={0} endLength={4}>
            {({ datas }) => (
              <li key={datas.id + datas.uniqKey}>
                <a
                  onClick={(e) => tabHandler(e, datas.id)}
                  className={tab === datas.id ? "active" : ""}
                  data-toggle="tab"
                  href="#"
                >
                  <i className={datas.icon}></i>
                  <h3>{datas.content}</h3>
                </a>
              </li>
            )}
          </DataIteration>
        </ul>
        <div className="tab-content about-tab-content">
          <DataIteration datas={tabContent} startLength={0} endLength={4}>
            {({ datas }) => (
              <div
                key={datas.id + datas.uniqKey}
                className={`tab-pane fade ${
                  tab === datas.id ? "show active" : ""
                }`}
                id="tabContent1"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="about-image-shape rmb-70 wow fadeInLeft delay-0-2s">
                      <img src={datas.thumb} alt="About" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-content pr-70 rpr-0 wow fadeInRight delay-0-2s">
                      <div className="section-title mb-35">
                        <span className="sub-title">
                          It Support For Business
                        </span>
                        <h2>
                          Preparing for your success trusted source in IT
                          services.
                        </h2>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam nostrud
                      </p>
                      <ul className="list-style-one mt-15">
                        <li>Custom shortcodes</li>
                        <li>Data Analytics</li>
                        <li>IT Consultancy</li>
                        <li>Data security</li>
                      </ul>
                    </div>
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
