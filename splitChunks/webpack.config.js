const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        index: './src/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // optimization: {
    //     splitChunks: {
    //         minSize: 30,  //提取出的chunk的最小大小
    //         cacheGroups: {
    //             default: {
    //                 name: 'common',
    //                 chunks: 'initial',
    //                 minChunks: 2,  //模块被引用2次以上的才抽离
    //                 priority: -20
    //             },
    //             vendors: {  //拆分第三方库（通过npm|yarn安装的库）
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendor',
    //                 chunks: 'initial',
    //                 priority: -10
    //             },
    //             locallib: {  //拆分指定文件
    //                 test: /(src\/locallib\.js)$/,
    //                 name: 'locallib',
    //                 chunks: 'initial',
    //                 priority: -9
    //             }
    //         }
    //     }
    // },
    optimization: {
        chunkIds: "named",
        moduleIds: 'hashed',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                // cache: true,
                // sourceMap: true,
                extractComments: false,
                // 配置主要对齐 sheet
                terserOptions: {
                    safari10: true,
                    parse: {
                        ecma: 8,
                    },
                    mangle: {
                        safari10: true,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                        drop_console: true,
                        drop_debugger: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './public/index2.html',
            filename: 'index2.html'
        })
    ]
}