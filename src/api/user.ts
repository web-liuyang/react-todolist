import request from './request';

import { Response, User } from './types';

export const login = (data: User.Request.Login) => {
  return request.post<Response<User.Response.Userinfo>>('/user/login', {
    data,
  });
};
