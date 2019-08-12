module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  publicPath: 'vue-cascading-dynamic-dropdown-menu/'
}