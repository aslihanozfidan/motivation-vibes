const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const SRC_DIR = path.join(__dirname, 'src')
const DIST_DIR = path.join(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].bundle.js'
  },
  resolve: {
    extensions: [
      '.js',
      '.css'
    ]
  },
  module: {
    rules: [
      {
        test: /(\.css$)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000' },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=[name].[ext]'
        ]
      },
      {
        test: /\.js$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/react',
            '@babel/preset-env'
          ],
          plugins: [
            '@babel/proposal-class-properties'
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicons/favicon.ico'
    }),
    new WebpackPwaManifest({
      name: 'Motivation Vibes',
      short_name: 'Motivation-Vibes',
      description: 'An instrument designed to improve your perspective.',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('./public/favicons/apple-icon.png'),
          sizes: [
            96,
            128,
            192,
            256,
            384,
            512
          ]
        }
      ]
    }),
    new MiniCssExtractPlugin({
      path: DIST_DIR,
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      deleteOriginalAssets: true,
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
    //new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        cache: true
      }),
      new OptimizeCssAssetsPlugin({
        canPrint: true,
        minimize: true
      }),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: {
            comments: false
          },
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_fnames: false
        }
      })
    ]
  }
}
