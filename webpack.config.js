/**
 * webpack config
 * author: dave
 *  
 */ 
const webpack = require('webpack'); // 引入webpack
const path = require('path'); // 引入path
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); // 创建公共依赖文件

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: '[name].js',
        publicPath: './'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,                
                use: [
                    'babel-loader',
                ],
                query: {
                    presets: ['es2015', 'es2017', 'stage-0', 'react',],
                    plugin: ['transform-runtime'],
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader!css-loader!less-loader'
                ]
            },
            {
                test: /\.(png||jpg||jpeg)$/,
                use: [
                    'url-loader?limit = 8192'
                ]
            }
        ]
    },
    server: {
        port: 8080,
        hot: true,
    },
    resolve: {
        extensions: ['', '.jsx', '.js', 'json', 'ts']
    }
}