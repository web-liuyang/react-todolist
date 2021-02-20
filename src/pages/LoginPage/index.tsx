import React, {
  FC,
  Component,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { getRandomColor } from '@/utils/utils';

import Login from './components/Login';
import Register from './components/Register';
import Retrieve from './components/Retrieve';

import './index.less';

const LoginPage: FC = () => {
  const [background, setBackground] = useState<string>();
  // 当前组件切换的状态 0登陆 1注册 2找回
  const [curIndex, setCurIndex] = useState<number>(0);

  // 背景颜色切换
  useEffect(() => {
    setBackground(getRandomColor());
    const timer = setInterval(() => setBackground(getRandomColor()), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page login-page" style={{ background }}>
      <div>
        <Login
          title="用户登陆"
          show={curIndex === 0}
          setCurIndex={setCurIndex}
        />
        <Register
          title="用户注册"
          show={curIndex === 1}
          setCurIndex={setCurIndex}
        />
        <Retrieve
          title="密码找回"
          show={curIndex === 2}
          setCurIndex={setCurIndex}
        />
      </div>
    </div>
  );
};

export default LoginPage;
