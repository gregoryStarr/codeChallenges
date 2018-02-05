const path = require('path');
const nodeExternals = require('webpack-node-externals');
const moduleObj = {
    loaders: [
        {
            test:  /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }
    ],
};
const server = {
    entry: './app.js',
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}
module.exports = server;