import mockjs from 'mockjs';

module.exports =  {
  // 使用 mockjs 等三方库
  'GET /api/vi/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
