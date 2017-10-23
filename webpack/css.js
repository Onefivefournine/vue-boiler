module.exports = function ( paths ) {
    return {
        module: {
            rules: [ {
                test: /\.css$/,
                include: paths,
                use: [
                    'style-loader',
                    'css-loader?minimize=true'
                ]
            } ]
        }
    };
};

