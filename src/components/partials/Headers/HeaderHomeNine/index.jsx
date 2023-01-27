import { useEffect, useState } from "react";
import logo from "../../../../assets/images/logos/logo-white-three.png";
import StickyMenu from "../../../../lib/StickyMenu";
import Navigation from "../../../helpers/Navigation";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeNine({ className }) {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  const [search, setSearch] = useState(null);
  return (
    <>
      <MobileHeaderCom logo={logo} />
      <header
        className={`main-header header-nine d-lg-block d-none text-white ${
          className || ""
        }`}
      >
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
                <nav className="main-menu navbar-expand-lg ml-lg-auto">
                  <div className="navbar-header">
                    <div className="mobile-logo py-15">
                      <a href="/">
                        <img src={logo} alt="Logo" title="Logo" />
                      </a>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <Navigation />
                </nav>

                <div className="menu-icons">
                  <div className="nav-search mx-15">
                    <button
                      onClick={() => setSearch(!search)}
                      type="button"
                      className="fa fa-search"
                    ></button>
                    <form action="#" className={search ? "" : "hide"}>
                      <input
                        type="text"
                        placeholder="Search"
                        className="searchbox"
                        required=""
                      />
                      <button
                        type="submit"
                        className="searchbutton fa fa-search"
                      ></button>
                    </form>
                  </div>

                  <button type="button">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="number">0</span>
                  </button>
                </div>
                <div className="menu-btn">
                  <a href="#" className="theme-btn gradient-btn-one">
                    wallet connect
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
