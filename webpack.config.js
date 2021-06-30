module.exports = {
    entry: './src/client/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: [/\.css$/, /\.scss$/],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'url-loader?limit=8192&name=./[name].[ext]',
                    'file-loader',
                    'url-loader'
                ]
            }
        ]
    }
}