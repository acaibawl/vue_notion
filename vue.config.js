module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Vue Notion",
    }
  },
  devServer: {
    port: 8081,
    disableHostCheck: true,
    host: 'localhost'
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue_notion/'   //任意
  : '/'
};
