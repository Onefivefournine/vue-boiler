module.exports = function ( paths ) {
    return {
        module: {
            rules: [ {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].mp3'
                }
            } ]
        }
    };
};

