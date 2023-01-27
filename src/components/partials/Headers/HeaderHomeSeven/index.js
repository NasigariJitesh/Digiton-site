import React, { useEffect } from "react";
import logo from "../../../../assets/images/logos/logo-black.png";
import logo2 from "../../../../assets/images/logos/logo-two.png";
import StickyMenu from "../../../../lib/StickyMenu";
import Navigation from "../../../helpers/Navigation";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeSeven() {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <MobileHeaderCom logo={logo2} />
      <header className="main-header header-seven">
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="Logo" title="Logo" />
                  </a>
                </div>
              </div>
              <div className="nav-outer clearfix d-flex align-items-center">
                <nav className="main-menu navbar-expand-lg">
                  <Navigation className="nav-home-five" />
                </nav>
                <div className="header-number">
                  <i className="fas fa-phone-alt"></i>
                  <div className="number-content">
                    <span>Tell Us</span>
                    <a href="callto:+1223558656">+12 ) 235 - 586 - 56</a>
                  </div>
                </div>
                <div className="menu-btn">
                  <a href="#" className="theme-btn style-eight">
                    Start Free Tral
                    <i className="fas fa-long-arrow-alt-right"></i>
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
