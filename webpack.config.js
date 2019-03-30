var path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [
			".js"
		]
	},
	module: {
		rules: [
			{
				test: /(\.css$)/,
				loaders: [
					"style-loader",
					"css-loader"
				]
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=1000000" },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: [
						"@babel/react",
						"@babel/preset-env"
					],
					plugins: [
						"@babel/proposal-class-properties"
					]
				}
			}
		]
	},
	plugins: [
		new CompressionPlugin({
			algorithm: "gzip",
			deleteOriginalAssets: true,
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0
		}),
		new BundleAnalyzerPlugin()
	],
	optimization: {
		minimizer: [
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
};
