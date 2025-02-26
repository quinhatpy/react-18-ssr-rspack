const path = require("path");
const { merge } = require("webpack-merge");
const shared = require("./rspack.shared");
const moduleFederationPlugin = require("./module-federation-rspack");

/**
 * @type {import('webpack').Configuration}
 **/
const rspackConfig = {
  name: "server",
  target: 'async-node',
  entry: [path.resolve(__dirname, "../src/server/index")],
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs-module",
    publicPath: "http://localhost:3001/server/",
  },
  mode: "production",
  plugins: [...moduleFederationPlugin.server],
  stats: {
    colors: true,
  },
};

module.exports = merge(shared, rspackConfig);
