const path = require("path");
const { merge } = require("webpack-merge");
const sharedRspackConfig = require("./rspack.shared");
const moduleFederationPlugin = require("./module-federation-rspack");

/**
 * @type {import('rspack').Configuration}
 **/
const rspackConfig = {
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs-module",
    publicPath: "http://localhost:3001/server/",
  },
  name: "server",
  plugins: [...moduleFederationPlugin.server],
};

module.exports = merge(sharedRspackConfig, rspackConfig);
