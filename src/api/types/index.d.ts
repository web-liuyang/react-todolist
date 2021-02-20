import { STATUS } from '../index';

export type Response<T = any> = {
  code: number;
  success: boolean;
  msg: string;
  data: T;
};
export { Matter } from './matter';
export { User } from './user';
