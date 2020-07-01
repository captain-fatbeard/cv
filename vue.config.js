module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/sass/_variables.scss";
                    @import "@/assets/sass/_comon.scss";
                `
            }
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
}




