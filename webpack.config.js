const path = require('path');

module.exports = {
    entry : ['webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server', path.resolve(__dirname, 'client/dashboard/app/index.js')],
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    mode : 'development',
    module : {
        rules : [
            {
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }
        ] 
    },
    devServer : {
        port : 3000,
        contentBase : path.resolve(__dirname, 'dist'),
        inline : true,
        hot : true
    }
}