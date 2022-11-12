// vue.config.js

module.exports = {
  outputDir: 'docs',
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
};