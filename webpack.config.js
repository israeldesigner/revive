const modeEnv = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    mode: modeEnv ? 'development' : 'production',
    entry: path.join(__dirname, './static_src/bundle.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        contentBase: "./public",
        port: 8000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssets({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module:{
        rules:[
            {
                test: /\.s?[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }
}