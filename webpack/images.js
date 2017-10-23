module.exports = function () {
    return {
        module: {
            rules: [ {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                exclude: /favicon\.png$/,
                options: {
                    limit: 1024,
                    name: '[path]/[name].[ext]'
                },
            }, {
                test: /favicon\.png$/,
                loader: 'file-loader',
                options: {
                    name: '[path]/[name].[ext]'
                },
            }, {
                test: /\.svg$/,
                exclude: [ /fonts\// ],
                loader: 'svg-inline-loader',
                options: {
                    prefix: 'inl-svg'
                },
            }, ],
        },
    };
};

