/**
 * Created by Administrator on 2016-11-1.
 */
var webpack = require('webpack');
var path=require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
// var CopyWebpackPlugin = require('copy-webpack-plugin');

// var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var publicPath = 'http://localhost:3001/';

// var es3ifyPlugin = require('es3ify-webpack-plugin');

var plugins = [];
// plugins.push(new webpack.optimize.OccurrenceOrderPlugin()); 
plugins.push(new webpack.HotModuleReplacementPlugin()); 
plugins.push(new webpack.NoErrorsPlugin()); 
plugins.push(new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify('development')
    }
}));
// plugins.push(new webpack.ProvidePlugin({ $: "jquery",  jQuery: "jquery",  "window.jQuery": "jquery"  }));//定义全局的jQuery

plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    filename: 'index.html', //生成的html存放路径，相对于 path
    template: 'index.html', //html模板路径
    inject:'body',
    hash: true    //为静态资源生成hash值
}));
// plugins.push(new CopyWebpackPlugin([{
//     form: '/static'
// }]));

plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app:'./src/index.js'//编译的入口文件
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        // filename: 'js/[name].bundle.js' //编译后的文件名字
        filename: 'bundle.js',
        publicPath: publicPath
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader?presets[]=es2015,presets[]=react'
            }, {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ['jsx', 'babel-loader?presets[]=es2015,presets[]=react']
            }
        ]
    },
    plugins,
    resolve: {
        extensions: [ '.js', '.jsx'] //后缀名自动补全
    }
};