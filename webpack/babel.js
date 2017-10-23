const INCLUDED_MODULES = [
'selectr-th',
'selectr-tags',
'notifystr',
'vue-pagination-btns',
'vue-on-off',
'login-input-ru'
].join('|');

module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.js$/,
                exclude: new RegExp('node_modules\/(?!(' + INCLUDED_MODULES + ')\/).*'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {
                            "targets": {
                                "browsers": ["> 1%"]
                            }
                            }]],
                        plugins: ['transform-runtime', 'syntax-async-functions']
                    },
                }],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader?presets[]=env&plugins[]=transform-runtime&plugins[]=syntax-async-functions'
                    }
                }
            }],
        },
    };
};