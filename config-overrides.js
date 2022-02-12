const {
  addBabelPlugin,
  addWebpackModuleRule,
  override,
} = require('customize-cra')
const {
  getLocalIdent,
  generateScopedNameFactory,
} = require('@dr.pogodin/babel-plugin-react-css-modules/utils')

const localIdentName = '[path]__[name]__[local]__[hash:base64:5]'

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.css$/,
      include: /\.module\.css/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              getLocalIdent,
              localIdentName,
            },
          },
        },
      ],
    }),

    addBabelPlugin([
      '@dr.pogodin/babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        generateScopedName: generateScopedNameFactory(localIdentName),
        webpackHotModuleReloading: true
      }
    ]),
  ),
}
