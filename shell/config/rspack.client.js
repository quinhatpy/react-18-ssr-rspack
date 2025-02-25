const path = require("path");
const { merge } = require("webpack-merge");
const shared = require("./rspack.shared");
const moduleFederationPlugin = require("./module-federation-rspack");

/**
 * @type {import('webpack').Configuration}
 **/
const rspackConfig = {
  name: "client",
  target: "web",
  entry: [path.resolve(__dirname, "../src/client/index")],
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "http://localhost:3000/static/",
  },
  plugins: [moduleFederationPlugin.client],
};

module.exports = merge(shared, rspackConfig);
