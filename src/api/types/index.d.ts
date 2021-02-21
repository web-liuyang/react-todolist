import { STATUS } from '../index';

export type Response<T = any> = {
  code: number;
  success: boolean;
  msg: string;
  data: T;
};

export * as Matter from './matter';
export * as User from './user';
