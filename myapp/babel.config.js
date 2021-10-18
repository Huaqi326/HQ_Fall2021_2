module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HQ_Fall2021_2'
    : '/'
}
