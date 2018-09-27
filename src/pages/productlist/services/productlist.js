import request from '../../../utils/request';

export async function queryProductList(param) {
  return request({
    url:'/api/service/merchant/integralProductList',
    method: 'post',
    body:param
  });
}
