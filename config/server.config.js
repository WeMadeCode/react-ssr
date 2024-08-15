let path = require("path");
let nodeExternals = require("webpack-node-externals");
let baseConfig = require("./base.config");
let { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  target: "node", // 打包目标为node服务
  entry: "./src/server/index.js", // 相对于根目录（执行nodemon命令所在的目录）
  output: {
    filename: "server_bundle.js",
    path: path.resolve(__dirname, "../build/server"), // 相对于当前目录
  },
  externals: [nodeExternals()],
});
