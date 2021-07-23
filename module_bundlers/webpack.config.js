const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    //defines the entry point to application
    entry: './src/index.js',
    //can be an object to spport code splitting => https://webpack.js.org/guides/code-splitting/
    // entry: {
    //     foo: 'foo.js',
    //     bar: 'bar.js'
    // }

    output: {
        // output file name, defult to [main.js]
        filename: 'out.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        // match files to loaders
        rules: [
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
    plugins: [
        new BundleAnalyzerPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    }
}