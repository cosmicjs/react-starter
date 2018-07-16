const webpack = require('webpack')
module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
        'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY)
      })
    )
    return config
  }
}