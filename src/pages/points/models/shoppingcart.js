export default {
  namespace: 'points',
  state: {
    shoppingCart:{}
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/points/page') {
          // dispatch({
          //   type: 'fetch'
          // })
          dispatch({
            type:'global/setTitle',payload:{
              text:"积分商城"
            }
          })
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // const response = yield call(queryShoppingCart, payload);
      //
      // console.log('response ',response)
      // yield put({type: 'save', payload: response.data.shops});
    },
  },


  reducers: {
    save(state, action) {
      return {...state};
    }
  },
};
