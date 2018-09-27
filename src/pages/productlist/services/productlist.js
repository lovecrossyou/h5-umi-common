import request from '../../../utils/request';

export async function queryProductList(param) {
  return request({
    url:'/mp/service/merchant/integralProductList',
    method: 'post',
    payload:param
  });
}
