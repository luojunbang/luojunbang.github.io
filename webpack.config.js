const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.vue$/,
            exclude:/node_modules/,
            use:['vue-loader']
        },{
            test:/\.ts$/,
            exclude:/node_modules/,
            use:['ts-loader']
        }]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}