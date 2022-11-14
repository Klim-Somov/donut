module.exports = {
    devServer: {
      proxy: process.env.DEV_PROXY
    },
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/scss/style.scss";`,
        },
      },
    },
  }