const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', // 文件入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 文件出口
        filename: 'index.js'
    },
    module: {
        rules: [ // 依赖，处理scss，ES6，等
            {
                test: '/\.css$/',
                use: ['style-loader!css-loader']
            },
            {
                test: '/\.js$/',
                use: '@babel-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ // 指定运行的html文件
            template: 'src/index.html',
            filename: 'index.html'
        })
    ],
    node: {
        fs: 'empty'
    }
};