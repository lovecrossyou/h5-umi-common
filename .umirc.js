export default {
  plugins: [
    ['umi-plugin-react', {
      dynamicImport: true,
      dva: {
        immer: true,
      },
      antd: true
    }],
  ],
}
