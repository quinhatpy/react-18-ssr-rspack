const deps = require("../package.json").dependencies;
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/rspack");

module.exports = {
  client: new ModuleFederationPlugin({
    name: "remote2",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {
      "./Image": "./src/Image",
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }),
  server: [
    new ModuleFederationPlugin({
      name: "remote2",
      filename: "remoteEntry.js",
      runtimePlugins: [
        require.resolve("@module-federation/node/runtimePlugin"),
      ],
      library: { type: "commonjs-module" },
      remotes: {},
      exposes: {
        "./Image": "./src/Image",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
