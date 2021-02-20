import React, {
  FC,
  memo,
  Component,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { PublicComponents } from '../../types';

import Form from '@/components/lview-ui/Form';
import Input from '@/components/lview-ui/Input';
import Button from '@/components/lview-ui/Button';
import useInput from '@/hooks/useSetState';
import classnames from 'classnames';

const Login: FC<PublicComponents.Props> = (props) => {
  console.log(props);
  const { title, show, setCurIndex } = props;
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div
      className={classnames([
        'fixed-center px-24 py-30 rounded-4 components-box login-box',
        { show },
      ])}
    >
      <h2 className="text-center">{title}</h2>
      <div className="my-20">
        <Input
          value={phone}
          placeholder="请输入手机号"
          maxLength={11}
          onChange={setPhone}
        />
      </div>
      <div className="my-20">
        <Input
          value={password}
          placeholder="请输入新密码"
          maxLength={12}
          onChange={setPassword}
        />
      </div>
      <div className="my-20">
        <Button>找回</Button>
      </div>
      <div className="flex-c-between px-4 f12 color-458EDB">
        <span
          onClick={() => {
            setCurIndex(1);
          }}
        >
          用户注册
        </span>
        <span
          onClick={() => {
            setCurIndex(0);
          }}
        >
          用户登陆
        </span>
        <span onClick={() => setCurIndex(2)}>找回密码</span>
      </div>
    </div>
  );
};

export default memo(Login);
