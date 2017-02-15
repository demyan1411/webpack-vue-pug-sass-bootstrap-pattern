var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function () {
    var pages = fs.readdirSync(path.resolve(__dirname, '../src/templates/pages'));

    var htmlPages = pages.map(page => {
        var options = {
            filename: process.env.NODE_ENV === 'production'
                ? path.resolve(__dirname, '../dist/' + page.split('.')[0] + '.html')
                : page.split('.')[0] + '.html',
            template: 'src/templates/pages/' + page,
            inject: true,
            minify: false
        }

        // if(process.env.NODE_ENV !== 'development') {
        //     options = Object.assign(options, {
        //         minify: false
        //         // {
        //         //     removeComments: true,
        //         //     collapseWhitespace: true,
        //         //     removeAttributeQuotes: true
        //         // }
        //     });
        // }

        return new HtmlWebpackPlugin(options)
    });

    return htmlPages
}