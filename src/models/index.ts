import { Effect, Reducer, Subscription, Action } from 'umi';
import { User, Matter } from '@/api/types';
import { LOGIN } from './dispatch';

export interface IndexModelState {
  userinfo?: User.Userinfo;
  matterList?: Matter.MatterList;
}

export interface IndexModel {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    [LOGIN]: Effect;
    matterList: Effect;
  };
  reducers: {
    userinfo: Reducer<IndexModelState>;
    matterList: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModel = {
  namespace: 'index',
  state: {
    userinfo: undefined,
    matterList: [],
  },
  effects: {
    *[LOGIN]({ payload }, { put }) {
      console.log('effects-login');
      yield put({
        type: 'userinfo',
        payload,
      });
    },
    *matterList(action, dispatch) {
      console.log('effects-matterList');
      console.log('actions', action);
      console.log('dispatch', dispatch);
    },
  },
  reducers: {
    userinfo(state, { payload }) {
      console.log('reducers-userinfo');
      console.log('state', state);
      return {
        ...state,
        userinfo: payload,
      };
    },
    matterList(state, action) {
      console.log('reducers-matterList');
      console.log('state', state);
      console.log('action', action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      history.listen((location) => {
        // console.log(IndexModel)
        // console.log(location)
        // console.log(this)
        // if (!IndexModel.state.userinfo) {
        //   history.replace('/login');
        // }
      });
    },
  },
};



export default IndexModel;
