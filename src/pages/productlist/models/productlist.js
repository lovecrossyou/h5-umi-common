import {queryProductList} from "../services/productlist";

export default {
  namespace: 'productlist',
  state: {
    guestLikeResult:[],
    hotResult:[],
    prefectResult:[],
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/productlist/page') {
          dispatch({
            type: 'fetch',
          });
          dispatch({
            type: 'global/setTitle', payload: {
              text: "商品列表"
            }
          })
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const [guestLikeResult, hotResult, prefectResult] = yield [
        call(queryProductList, {
          "page": 1,
          "pageSize": 20,
          "category": "guess_like"
        }),
        call(queryProductList, {
          "page": 1,
          "pageSize": 20,
          "category": "hot_product"
        }),
        call(queryProductList, {
          "page": 1,
          "pageSize": 20,
          "category": "prefect_product"
        })
      ];

      yield put({
        type: 'save', payload: {
          guestLikeResult:guestLikeResult.data.content,
          hotResult:hotResult.data.content,
          prefectResult:prefectResult.data.content,
        }
      });
    },
  },


  reducers: {
    save(state, action) {
      return {
        ...state,
        guestLikeResult: action.guestLikeResult,
        hotResult: action.guestLikeResult,
        prefectResult: action.prefectResult,
      }
    }
  }
}
