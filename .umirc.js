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
}
