const path = require('path');

module.exports = {
    entry : ['./client/dashboard/app/index.js'],
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    mode : 'development',
    module : {
        loaders : [
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
        inline : true
    }
}