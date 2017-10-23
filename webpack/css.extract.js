const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = function ( paths ) {
    return {
        module: {
            rules: [ {
                test: /\.scss$/,
                include: paths,
                use: ExtractTextPlugin.extract( {
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: [ 'css-loader?minimize=true', 'sass-loader' ],
                } ),
            }, {
                test: /\.css$/,
                include: paths,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: 'css-loader?minimize=true',
                } ),
            }, ],
        },
        plugins: [
            new ExtractTextPlugin( '[name].[hash].css' ),
        ],
    };
};

