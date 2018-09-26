export default {
  publicPath:'/h5/',
  history:'hash',
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
    }],
  ],
  proxy: {
    "/api/v1": {
      "target": "https://api.tuexing.com/",
      "pathRewrite": {"^/api/v1": ""}
    }
  },
}
