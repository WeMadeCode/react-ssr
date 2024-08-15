import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";

// 创建store
const store = configureStore({
  // 组合 reducer
  reducer: {
    home: homeReducer,
  },
  devTools: true,
});

export default store;
