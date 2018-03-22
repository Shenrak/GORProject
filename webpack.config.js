const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const relPath = path.resolve.bind(path, __dirname)

const BUILD_DIR = relPath('build');
const APP_DIR = relPath('src');

const config = {
  entry: APP_DIR + '/app.jsx',
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["jsx", ".js", ".json"]
  },
  devServer: {
    contentBase: BUILD_DIR
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // load and transpile js/jsx
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      // load styles and compile scss
      {
        test: /\.scss$|\.css$/,
        include: APP_DIR,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      // allow to load a file directly
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        }
      },
      // like the file-loader, but if the file has a size lower than the
      // limits, then it's inlined in a base64 string
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: relPath('public/index.html'),
      inject: 'body',
      favicon: relPath('src/assets/img/logo.png'),
      hash: process.env.NODE_ENV === 'development',
      minify: process.env.NODE_ENV === 'production' ? {} : false,
    })
  ]
};

module.exports = config;
