import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import App from "../app.jsx";


console.log("客户端执行");

// 在需要激活的模式下挂载应用 ( hydrateRoot )
// 客户端路由使用 BrowserRouter
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
