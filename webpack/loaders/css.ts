const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { IS_DEV } = require('../env')

export default {
    client: {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
    server: {
        test: /\.(sa|sc|c)ss$/,
        loader: 'null-loader',
    },
}
