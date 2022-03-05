const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { IS_DEV } = require('../env')

export default {
    client: {
        test: /\.(sa|sc|c)ss$/,
        use: [IS_DEV && 'css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'].filter(Boolean),
    },
    server: {
        test: /\.(sa|sc|c)ss$/,
        loader: 'null-loader',
    },
}
