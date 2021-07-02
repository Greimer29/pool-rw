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
            },		  
            {
                test: /\.(jpg|png|gif)$/,
                use:{
                    loader: "url-loader", // salida de menos de 100 kb como base64
                                                         // Si es mayor de 100 KB, llame al cargador de archivos como salida de archivo
                    options:{
                         límite: 100 * 1024, // 100KB Al establecer el atributo de publicPath, se recomienda establecerlo en 1--10kb		
                         outputPath: "img", // Cuando la imagen es grande, el directorio de salida es img
                         publicPath: "http://www.xxx.com" // Agrega automáticamente un prefijo a la imagen. Este método no es adecuado para base64, por lo que al configurar este atributo, debe prestar atención. Aquí todavía no configuramos esta propiedad.
                    }
                }               
            }, 			  
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:'file-loader'
            }
        ]
    }
}