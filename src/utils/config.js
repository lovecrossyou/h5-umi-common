const APIV1 = '/api/v1'
const isMock = true;
const APIV2 = isMock?APIV1:'/api/v1/th';
module.exports = {
  name: 'dva-umi-mobile',
  prefix: 'dvaumimobile',
  openPages: ['/points/page','/login/page'],
  api: {
    users: `${APIV1}/users`
  },
}
