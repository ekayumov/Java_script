const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[fullhash].css'
        }),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    }
}
