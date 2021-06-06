const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				test: /\.css$/i,
			}),
			new TerserPlugin({
				parallel: true,
				test: /\.js(\?.*)?$/i,
			}),
			new UglifyJsPlugin()
		],
	},
})
