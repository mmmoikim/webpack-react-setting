const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const APP_DIR = path.resolve(ROOT, "src");
const BUILD_DIR = path.resolve(ROOT, "dist");

const moduleConfig = require("./module.js");
const resolveConfig = require("./resolve.js");

module.exports = {
  entry: {
    app: [APP_DIR + "/index.js"]
  },
  module: moduleConfig,
  resolve: resolveConfig,
  plugins: [
    //creation of HTML files to serve your webpack bundles
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ]
};
