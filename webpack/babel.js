module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        'env', {
                                            "targets": {
                                                "browsers": ["> 1%"]
                                            }
                                        }
                                    ]
                                ],
                                plugins: ['transform-runtime', 'syntax-async-functions']
                            }
                        }
                    ]
                }, {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?presets[]=env&plugins[]=transform-runtime&plugins[]=syntax-async-fu' +
                                    'nctions'
                        }
                    }
                }
            ]
        }
    };
};