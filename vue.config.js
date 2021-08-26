module.exports = {
    lintOnSave: false,

    css: {
        loaderOptions: {
            sass: {
                prependData: `
              @import "@/assets/sccs/styles.scss";
            `,
            },
        },
    },

    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        port: 8080,
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
}
