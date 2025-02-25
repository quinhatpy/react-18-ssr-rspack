const path = require("path");
const { merge } = require("webpack-merge");
const sharedRspackConfig = require("./rspack.shared");
const moduleFederationPlugin = require("./module-federation-rspack");
const { HtmlRspackPlugin } = require("@rspack/core");

/**
 * @type {import('rspack').Configuration}
 **/
const rspackConfig = {
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    publicPath: "http://localhost:3001/client/",
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlRspackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = merge(sharedRspackConfig, rspackConfig);
