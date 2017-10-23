const webpack = require('webpack');
module.exports = function(paths) {
    return {
        plugins: [
        new webpack.HotModuleReplacementPlugin({})
        ],
        devServer: {
            historyApiFallback: true,
            // https: true,
            port: 3344,
            hot: true,
            noInfo: false,
            inline: true,
            contentBase: paths.source,
            compress: true,
        }
    }
};