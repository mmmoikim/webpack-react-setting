const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
  mode: 'production',
  optimization: {
    providedExports: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // improve the build spee
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false, //If you avoid building with comments
          }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
