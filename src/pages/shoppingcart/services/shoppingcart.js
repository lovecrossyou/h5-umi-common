import request from '../../../utils/request';

export function queryShoppingCart() {
  return request('/api/v1/shoppingcarts',{
    method:'POST'
  });
}

export function queryAddressList() {
  return request('/api/v1/addresslist',{
    method:'POST'
  });
}
