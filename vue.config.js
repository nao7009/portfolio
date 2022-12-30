// vue.config.js
module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "portfolio"   
    }
  }
};