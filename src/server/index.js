const express = require("express");
import { appRouter } from "./router/app-router";
const homeRouter = require("./router/home-router");

// 创建express服务
const server = express();
// 创建静态目录
server.use(express.static("build"));
// 创建首页路由
server.use("/api/home", homeRouter);
// 创建App路由
server.use(appRouter);

// 启动服务，监听8080端口
server.listen(8080, () => {
  console.log("server start on 8080");
});
