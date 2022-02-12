const {
  addWebpackModuleRule,
  override,
  useBabelRc,
} = require('customize-cra')

const localIdentName = '[path]__[name]__[local]__[hash:base64:5]'

module.exports = {
  webpack: override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),

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
              localIdentName,
            },
          },
        },
      ],
    }),
  ),
}
