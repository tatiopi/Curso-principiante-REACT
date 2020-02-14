const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // archivo principal
    entry: './src/index.js',
    // donde van los archivos generados
    output: {
        // directorio que nos encontramos + /dist
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // extensiones de nuestro proyecto
    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(s*)css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            // donde esta ubicado el template
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};