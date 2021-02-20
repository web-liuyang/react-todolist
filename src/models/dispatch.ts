import { User } from '@/api/types';
import { Dispatch } from 'umi';

export const LOGIN = 'LOGIN';

// 登陆
export const dLogin = (dispatch: Dispatch) => (userinfo: User.Userinfo) => {
  dispatch({
    type: 'index/' + LOGIN,
    payload: userinfo,
  });
};
