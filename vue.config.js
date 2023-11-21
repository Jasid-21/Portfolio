const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio_2/'
  : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/sass/variables';`,
      }
    }
  }
});
