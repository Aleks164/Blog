const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['index_flex', 'index_grid', 'index_inline_block'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./pages/${name}.html`, // relative path to the HTML files
        filename: `${name}.html`, // output HTML files
        chunks: [`${name}`] // respective JS files
    })
});

module.exports = {
    entry: {
        main: './js/main.js',
        example1: './js/example1.js',
        //... repeat until example 4
    },
    module: {
        //.. your rules
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./pages/index.html",
            chunks: ['main']
        })
    ].concat(multipleHtmlPlugins)

};