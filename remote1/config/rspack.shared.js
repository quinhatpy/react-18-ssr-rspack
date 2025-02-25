/**
 * @type {import('webpack').Configuration}
 **/
const rspackConfig = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: "typescript",
                jsx: true,
              },
            },
          },
        },
      },
    ],
  },
};

module.exports = rspackConfig;
