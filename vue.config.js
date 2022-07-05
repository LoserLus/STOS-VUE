const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    }
})
module.exports = {
    pluginOptions: {
        proxy: {
            enabled: true,
            context: '/api',
            options: {
                target: 'http://localhost:8181',
                changeOrigin: true,
                onProxyReq: function (proxyReq) {
                    proxyReq.removeHeader('origin')
                },
                ws: true,                                            //websocket
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
// module.exports = {
//     publicPath: './',
//     outputDir: 'dist',
//     assetsDir: 'static',
// };