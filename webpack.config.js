const path = require('path');

module.exports = {
    entry : [ path.resolve(__dirname, 'client/dashboard/app/index.js')],
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
        port : 3000
    }
}