module.exports = {
  publicPath:'./',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // config.externals = {
      //   'wangeditor': 'wangeditor',
      //   'highlight.js': 'highlight.js',
      //   'highlight.js/styles/lioshi.css': 'highlight.js/styles/lioshi.css'
      // }
    } else {
      // 为开发环境修改配置...
    }
    
  }
}
