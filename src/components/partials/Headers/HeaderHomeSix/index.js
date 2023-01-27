import React, { useEffect } from "react";
import logo from "../../../../assets/images/logos/logo-three.png";
import logo2 from "../../../../assets/images/logos/logo-two.png";
import useToggle from "../../../../hooks/useToggle";
import StickyMenu from "../../../../lib/StickyMenu";
import Navigation from "../../../helpers/Navigation";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeSix() {
  const [showSearch, searchHandler] = useToggle(false);
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <MobileHeaderCom logo={logo2} />
      <header className="main-header header-six">
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
                <nav className="main-menu navbar-expand-lg">
                  <Navigation className="nav-home-six" />
                </nav>
                <div className="menu-icons">
                  <div className="nav-search mx-15">
                    <button
                      onClick={(e) => searchHandler.toggle(e)}
                      type="button"
                      className="fa fa-search"
                    ></button>
                    <form action="#" className={showSearch ? "" : "hide"}>
                      <input
                        type="text"
                        placeholder="Search"
                        className="searchbox"
                        required
                      />
                      <button
                        type="submit"
                        className="searchbutton fa fa-search"
                      ></button>
                    </form>
                  </div>

                  <button type="button">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
                <div className="menu-btn">
                  <a href="#" className="theme-btn style-seven">
                    LogIn/Sign up
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
