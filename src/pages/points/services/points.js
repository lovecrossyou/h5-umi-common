import request from '../../../utils/request';

export function queryUserInfo() {
  return request({
    url:'/api/mp/service/user/info',
    method: 'get',
  });
}
