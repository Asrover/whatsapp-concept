const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        disableHostCheck: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "url-loader?limit=10000",
                    "img-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};