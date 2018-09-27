import {queryProductList} from "../services/productlist";

export default {
  namespace: 'productlist',
  state: {
    products: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        dispatch({
          type: 'fetch',
          payload:{
            "page":1,
            "pageSize":20,
            "category":"hot_product"
          }
        })
        dispatch({
          type: 'global/setTitle', payload: {
            text: "商品列表"
          }
        })
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(queryProductList, payload);
      console.log('response ', response)
      yield put({type: 'save', payload: response.data.content});
    },
  },


  reducers: {
    save(state, action) {
      return {
        ...state,
        products: action.payload
      }
    }
  }
}
