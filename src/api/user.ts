import request from './request';

import { Response, User } from './types';

export const login = (phone: string, password: string) => {
  return request.post<Response<User.Userinfo>>('/user/login', {
    data: {
      phone,
      password,
    },
  });
};
