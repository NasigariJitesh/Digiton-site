import React, { useEffect } from "react";
import logo2 from "../../../../assets/images/logos/logo-two.png";
import logo from "../../../../assets/images/logos/logo.png";
import StickyMenu from "../../../../lib/StickyMenu";
import Navigation from "../../../helpers/Navigation";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeThree() {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <MobileHeaderCom logo={logo2} />
      <header className="main-header header-three text-white">
        <div className="header-top-wrap bg-blue py-10">
          <div className="container">
            <div className="header-top">
              <div className="top-left">
                <ul>
                  <li>
                    Call Us: <a href="callto:548978478">548978478</a>
                  </li>
                  <li>
                    Email us:
                    <a href="mailto:demo@example.com">demo@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <div className="office-time">
                  <i className="far fa-clock"></i>
                  <span>08:00 am - 06:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="Logo" title="Logo" />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix d-flex align-items-center">
                <div className="main-menu navbar-expand-lg">
                  <Navigation />
                </div>
                <div className="menu-btn">
                  <a href="/contact" className="theme-btn">
                    meet with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
