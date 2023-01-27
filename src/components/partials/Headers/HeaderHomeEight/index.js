import React, { useEffect } from "react";
import logo from "../../../../assets/images/logos/logo-white-two.png";
import useToggle from "../../../../hooks/useToggle";
import StickyMenu from "../../../../lib/StickyMenu";
import Drawer from "../../../helpers/Drawer";
import Navigation from "../../../helpers/Navigation";

export default function HeaderHomeEight() {
  const [drawer, setDrawer] = useToggle(false);
  const [search, setValue] = useToggle(false);
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <Drawer drawer={drawer} action={setDrawer.toggle} />
      <header className="main-header header-eight">
        <div className="header-top-wrap bg-black text-white py-10">
          <div className="container">
            <div className="header-top">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope"></i>
                    <a href="mailto:info.Restly@gmail.com">
                      info.Restly@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-globe"></i>
                    <select name="language" id="language">
                      <option value="English">English</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <div className="hotline">
                  <i className="fas fa-headset"></i>
                  <span>Hotline : </span>
                  <a href="callto:+125846589">+12 (584 6589)</a>
                </div>
                <div className="social-style-one">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper bg-white">
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
                <nav className="main-menu navbar-expand-lg mx-lg-auto">
                  <Navigation className="r-header-eight" />
                </nav>
                <div className="nav-search mx-25">
                  <button
                    className="fa fa-search"
                    type="button"
                    onClick={() => setValue.toggle()}
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
                <div className="menu-btn">
                  <a href="/contact" className="theme-btn style-nine">
                    contact us <i className="far fa-paper-plane"></i>
                  </a>
                </div>
              </div>
              <div className="button-area d-block d-lg-none">
                <span onClick={setDrawer.toggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "30px", height: "30px" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
