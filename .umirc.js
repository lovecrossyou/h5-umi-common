export default {
  publicPath: '/h5/',
  history: 'hash',
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
    }],
  ],
  proxy: {
    "target": "http://api.tuexing.com/"
  },
  // proxy:{
  //   "/api": {
  //     "target": "http://api.tuexing.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": {"^/api": ""}
  //   }
  // }
}
