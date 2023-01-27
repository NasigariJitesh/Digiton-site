import { configureStore } from "@reduxjs/toolkit";
import rtlSetting from "./rtlSetting";

export default configureStore({
  reducer: {
    rtl: rtlSetting,
  },
});
