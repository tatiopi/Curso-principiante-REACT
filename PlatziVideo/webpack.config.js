const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            // donde esta ubicado el template
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
};