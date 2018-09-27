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
          // const accessToken = query.accessToken;
          const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNTM4MDEzODQ4LCJzdWIiOiJEWjAwMDAxMTMwIn0.DJxHiQltxQDy3T0AImq71nRP4RdHNkw0dQ6Z0e9WR0s';
          setAccessToken(accessToken)
          dispatch({
            type: 'fetch'
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
