export default {
  publicPath:'/h5/',
  runtimePublicPath:true,
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
      "changeOrigin": true,
      "pathRewrite": {"^/api/v1": ""}
    }
  },
}
