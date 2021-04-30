const registerRouter = require('./backend/router')
// 配置路径别名
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-music/' : '/',
  devServer: {
    before (app) {
      registerRouter(app)
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/assets/stylus/var.styl', '~@/assets/stylus/mixin.styl']
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}
