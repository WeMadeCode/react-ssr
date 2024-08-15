const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  res.json("欢迎获取首页数据");
});

homeRouter.get("/info", (req, res, next) => {
  console.log("req = ", req.query);
  res.json({
    data: {
      home: "qwer",
    },
    message: "success",
    code: "200",
  });
});

// 模拟器跨请求状态污染
let globalState = {};

// Endpoint 1：修改全局状态
homeRouter.get("/setState", (req, res) => {
  globalState = { key: "value" };
  res.send("Global state set successfully");
});

// Endpoint 2：读取全局状态
homeRouter.get("/getState", (req, res) => {
  res.send(globalState);
});

module.exports = homeRouter;
