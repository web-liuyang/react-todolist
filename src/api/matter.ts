import request from './request';

import { Response, Matter,User } from './types';

export const add = (data: Matter.Uid) => {
  return request.post<Response<Matter.MatterItem>>('/matter/add', {
    data,
  });
};

export const del = (data: Pick<Matter.MatterItem, 'id'>) => {
  return request.post<Response<Matter.MatterItem>>('/matter/del', {
    data,
  });
};

export const edit = (
  data: Partial<Matter.MatterItem> & Pick<Matter.MatterItem, 'id'>,
) => {
  return request.post<Response<Matter.MatterItem>>('/matter/edit', {
    data,
  });
};

export const query = (data: Pick<Matter.MatterItem, 'title'>) => {
  return request.post<Response<Matter.MatterList>>('/matter/query', {
    data,
  });
};
