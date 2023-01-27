import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Todo: for spacific page rtl disabled
// import { useLocation } from "react-router-dom";
import useToggle from "./hooks/useToggle";
import Routers from "./Routers";
import { rtlToggle } from "./store/rtlSetting";

function App() {
  const { rtl } = useSelector((state) => state.rtl);
  const dispatch = useDispatch();
  const html = document.getElementsByTagName("html");
  const [settingToggle, setToggle] = useToggle(false);
  // Todo: for spacific page rtl disabled
  // const location = useLocation();
  useEffect(() => {
    if (rtl) {
      html[0].dir = "rtl";
    } else {
      html[0].dir = "";
    }
    // Todo: for spacific page rtl disabled
    // if (location.pathname !== "/home-eight") {
    //   if (rtl) {
    //     html[0].dir = "rtl";
    //   } else {
    //     html[0].dir = "";
    //   }
    // }
  });

  return (
    <div className={rtl ? "direction-rtl" : ""}>
      <Routers />
      <div
        className={`layout-settings ${settingToggle ? "active" : ""}`}
        // Todo: for spacific page rtl disabled
        // className={`layout-settings ${
        //   location.pathname !== "/home-eight" ? "d-block" : "d-none"
        // } ${settingToggle ? "active" : ""}`}
      >
        <div className="heading">
          <h1>settings</h1>
        </div>
        <div className="layout-content">
          <ul>
            <li className="content-item">
              <div className="item-name">
                <span>RTL/LTR</span>
              </div>
              <div className={`item-button  ${rtl ? "active" : ""} `}>
                <button type="button" onClick={() => dispatch(rtlToggle())}>
                  <span></span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="close-btn-wrapper" onClick={() => setToggle.toggle()}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
