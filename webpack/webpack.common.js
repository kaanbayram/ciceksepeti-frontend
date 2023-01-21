const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { outputConfig, copyPluginPatterns, entryConfig } = require("./env.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: entryConfig,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          publicPath: "../",
          name: "[path][name].[ext]",
          // context: path.resolve(__dirname, "src/assets"),
          emitFile: false,
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "javascript/auto",
        exclude: /images/,
        loader: "file-loader",
        options: {
          publicPath: "../",
          context: path.resolve(__dirname, "src/assets"),
          name: "[path][name].[ext]",
          emitFile: false,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
          publicPath: "../",
          context: path.resolve(__dirname, "src/assets/svg/16"),
          name: "[path][name].[ext]",
          emitFile: false,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, outputConfig.destPath),
    filename: 'js/[name]/bundle.js',
    publicPath: ""
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      inject: true,
      minify: false
    }),
    new CopyPlugin(copyPluginPatterns),
    new MiniCssExtractPlugin({
      filename: 'css/[name]/[contenthash].css',
      chunkFilename: 'css/[id]/[contenthash].css'
    }),

  ],
  stats: 'errors-only',
}
