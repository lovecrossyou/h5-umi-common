import request from '../../../utils/request';

export async function queryUserInfo(param) {
  const accessToken = param.accessToken;
  return request({
    url:'/api/v1/mp/service/user/info?accesstoken='+accessToken,
    method: 'get',
  });
}
