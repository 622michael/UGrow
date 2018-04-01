const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        noParse: /\.png$/,
        rules: [{
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
        ]
        // loaders: [
        // {
        //     test: /\.json$/,
        //     loader: "json"
        // },
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2017', 'react']
        //         }
        //     },
        // {
        //     test: /\.css$/,
        //     loader: 'css-loader'
        // }
        // ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};