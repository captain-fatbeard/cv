const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
})


module.exports = (env, argv) => {
    console.log(argv.mode);
    if (argv.mode === 'development') {
        return {
            entry: "./src/app.js",
            output: {
                path: path.resolve('dist'),
                filename: 'app.js'
            },
            module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            "style-loader",
                            "css-loader", // translates CSS into CommonJS
                            "sass-loader" // compiles Sass to CSS
                        ]
                    }
                ]
            },
            plugins: [htmlPlugin, cssPlugin]
        }
    }

    if (argv.mode === 'production') {
        return {
            entry: "./src/app.js",
            output: {
                path: path.resolve('dist'),
                filename: 'app.js'
            },
            module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            "css-loader", // translates CSS into CommonJS
                            "sass-loader" // compiles Sass to CSS
                        ]
                    }
                ]
            },
            plugins: [htmlPlugin, cssPlugin]
        }
    }
};