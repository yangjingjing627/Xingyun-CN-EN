var utils = require('./utils')
var config = require('../config')
import px2rem from 'postcss-px2rem'
var isProduction = process.env.NODE_ENV === 'production'
let px2remConfig = { remUnit: 37.5 }
let postcssOptions = [px2rem(px2remConfig)]

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: postcssOptions
}
