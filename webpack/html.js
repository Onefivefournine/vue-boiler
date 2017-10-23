module.exports = function () {
    return {
        module: {
            rules: [ {
                test: /\.html$/,
                loader: 'vue-html-loader',
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            }, ],
        },
    };
};

