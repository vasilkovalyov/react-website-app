const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');

const BuildFolder = 'dist'


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, BuildFolder),
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        host: 'localhost',
        port: 8080,
        hot: true,
        open: true,
        watchContentBase: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: "defaults"
                            }]
                        ]
                    }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: `/${BuildFolder}/`,
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: '../fonts/[name].[ext]',
                    publicPath: `./${BuildFolder}/`,
                    outputPath: 'fonts/'
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
        new ErrorOverlayPlugin(),
        new ProgressPlugin(true)
    ],
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
    devtool: 'eval-source-map',
}