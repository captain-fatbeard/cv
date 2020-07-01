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
    }
    
    // configureWebpack: {
    //     performance: {
    //         hints: 'warning', // enum
    //         maxAssetSize: 1048576, // int (in bytes),
    //         maxEntrypointSize: 1048576, // int (in bytes)
    //     }
    // }
}




