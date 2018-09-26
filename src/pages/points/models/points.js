import {setAccessToken} from "../../../utils/authority";
import {queryUserInfo} from "../services/points";

export default {
  namespace: 'points',
  state: {
    userInfo: {}
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/points/page') {
          const accessToken = query.accessToken;
          setAccessToken(accessToken)
          dispatch({
            type: 'fetch',
            payload: {}
          })
          dispatch({
            type: 'global/setTitle', payload: {
              text: "积分商城"
            }
          })
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const response = yield call(queryUserInfo, payload);
      console.log('response ', response)
      yield put({type: 'save', payload: response.data});
    },
  },


  reducers: {
    save(state, action) {
      return {
        ...state,
        userInfo: action.payload
      }
    }
  }
}
