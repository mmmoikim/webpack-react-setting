const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const APP_DIR = path.resolve(ROOT, "src");
const BUILD_DIR = path.resolve(ROOT, "dist");
const isDev = process.env.NODE_ENV === "development";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: "/node_modules",
      use: ["babel-loader"]
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: isDev ? "/" : "webpack-react-setting/",
            hmr: isDev
          }
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              context: APP_DIR
            }
          }
        },
        "postcss-loader"
      ]
    }
  ]
};
