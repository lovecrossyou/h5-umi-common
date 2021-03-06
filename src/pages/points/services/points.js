import request from '../../../utils/request';
import {getAccessToken} from "../../../utils/authority";

export async function queryUserInfo() {
  const accessToken = getAccessToken();
  return request({
    url:'/mp/service/user/info?accesstoken='+accessToken,
    method: 'get',
  });
}
