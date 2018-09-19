const path = require('path')
export default {
  plugins:[
    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
  ],
    alias:{
        components:path.resolve(__dirname,'src/components'),
        utils:path.resolve(__dirname,'src/utils'),
        services:path.resolve(__dirname,'src/services'),
        models:path.resolve(__dirname,'src/models'),
        themes:path.resolve(__dirname,'src/themes'),
        images:path.resolve(__dirname,'src/assets')
    },
    // proxy: {
    //     "/api/v1/th": {
    //       "target": "http://url",
    //       "changeOrigin": true,
    //       "pathRewrite": { "^/api/v1/th": "" }
    //     },
    //   },
}
