const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { template } = require("lodash");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const glob = require("glob");

const pages = glob.sync("pages/*.html");

const multipleHtmlPlugins = pages.map((name) => {
  let el = name.match(/(\w+)(?=\.html)/im);
  return new HtmlWebpackPlugin({
    template: `./${name}`, // relative path to the HTML files
    filename: `${name}`, // output HTML files
    chunks: [`${el[0]}`], // respective JS files
  });
});

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    index: resolve(__dirname, "./src/index.js"),
    index_flex: resolve(__dirname, "./src/index_flex.js"),
    index_grid: resolve(__dirname, "./src/index_grid.js"),
    index_inline_block: resolve(__dirname, "./src/index_inline_block.js"),
    leo: resolve(__dirname, "./src/leo.js"),
    carusel: resolve(__dirname, "./src//slider/carusel.js"),
  },
  output: {
    filename: "[name].js",
    path: resolve(`${__dirname}/dist`),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: NODE_ENV === "production" ? "hidden-source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: `./images/[contenthash][ext]`,
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  mode: NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index", "htmlLayout"],
    }),
    new MiniCssExtractPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:9000/",
      },
      {
        reload: false,
      }
    ),
  ].concat(multipleHtmlPlugins),
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    client: {
      logging: "info",
    },
  },
};
