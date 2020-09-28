const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: "./src/index.html",
    //设置生成的预览页面名称
    filename: "index.html"
});

const vuePlugin = new VueLoaderPlugin();


module.exports = {
    //可以设置为development(开发模式)，production(发布模式)
    mode: "development",
    //设置入口文件路径
    entry: path.join(__dirname, "./src/index.js"),
    //设置出口文件
    output: {
        //设置路径
        path: path.join(__dirname, "./dist"),
        //设置文件名
        filename: "bundle.js",
    },
    plugins: [htmlPlugin, vuePlugin],

    // babel 语法转化
    module: {
        rules: [{
            //test设置需要匹配的文件类型，支持正则(以css结尾的文件)
            test: /\.css$/,
            //use表示该文件类型需要调用的loader
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            //limit用来设置字节数，只有小于limit值的图片，才会转换
            //为base64图片
            use: "url-loader?limit=16940"
        }, {
            test: /\.js$/,
            use: "babel-loader",
            //exclude为排除项，意思是不要处理node_modules中的js文件
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: "vue-loader",

        }]
    }
}