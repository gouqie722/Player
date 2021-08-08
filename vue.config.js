// // var requireHttp = require('webpack-require-http');
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/': {
                target: ' https://api.mtnhao.com/',
                changeOrigin: true
            }
        }
    },
    
    lintOnSave: false,
    
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html'
}