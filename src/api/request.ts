import { extend } from 'umi-request';

import { STATUS } from './index';
import Toast from '@/components/lview-ui/Toast';
import { Response } from './types';
let close: () => void | undefined;

const request = extend({
  prefix: 'http://localhost:3000/api',
  timeout: 1000,
  errorHandler: (error) => {
    close();

    if (error.type.toLowerCase() === 'timeout') {
      Toast.error({ content: '请求超时' });
    }
  },
});

// 请求拦截
request.interceptors.request.use((url, options) => {
  close = Toast.loading({ content: '加载中', mask: true }).close;

  return {
    url,
    options: {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
});

// 响应拦截
request.interceptors.response.use(
  async (response): Promise<any> => {
    close();
    const res: Response = await response.clone().json();

    switch (res.code) {
      // 成功
      case STATUS.SUCCESS:
        return res;
      // 无数据
      case STATUS.NONE:
        Toast.info({ content: res.msg, mask: true });
        return;
      // 不存在
      case STATUS.ABSENCE:
        Toast.info({ content: res.msg, mask: true });
        return;
      // 认证失败
      case STATUS.AUTHENTICATION:
        Toast.info({ content: res.msg, mask: true });
        return;
      default:
        Toast.info({ content: res.msg, mask: true });
        return;
    }
  },
);

export default request;
