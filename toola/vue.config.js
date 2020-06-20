const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/imports.scss')]
    })
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cart/'
    : '/',

  chainWebpack: config => {
    const types = [ 'vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  devServer: {
    before: function (app) {
      app.get('/some/path', function (req, res) {
        res.json([{ name: 'response', price: 100 }, { name: 'flying', price: 100 }])
      })
    }
  // proxy: 'http://localhost:4000'
  }
}
