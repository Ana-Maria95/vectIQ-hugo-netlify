const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './assets/js/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
