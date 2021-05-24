module.exports = {
  publicPath: '/musikr/',
  css: {
    loaderOptions: {
      sass: { additionalData: '@import "src/styles/index.sass"' }
    }
  }
}
