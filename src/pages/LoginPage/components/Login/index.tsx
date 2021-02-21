import React, { FC, memo, useEffect } from 'react';
import {
  history,
  connect,
  Dispatch,
  ConnectRC,
  ConnectProps,
  IndexModelState,
} from 'umi';
import classnames from 'classnames';

import useSetState from '@/hooks/useSetState';
import { PHONE, PASSWORD } from '@/utils/valid';
import { PublicComponents } from '../../types';
import { user } from '@/api/index';

import { dLogin } from '@/models/dispatch';

import Input from '@/components/lview-ui/Input';
import Button from '@/components/lview-ui/Button';
import Toast from '@/components/lview-ui/Toast';
import { User } from '@/api/types';

interface IProps extends PublicComponents.Props {
  dispatch: Dispatch;
}

const Login: FC<IProps> = (props) => {
  console.log('Login-props', props);
  const { title, show, dispatch, setCurIndex } = props;
  const [value, handleSetValue] = useSetState({
    phone: '',
    password: '',
  });

  useEffect(() => {
    // Toast.customize({
    //   customize: (<div>
    //     <img src="https://img-home.csdnimg.cn/images/20201124032511.png" alt=""/>
    //   </div>),
    //   onClose() {
    //     console.log('onClose');
    //   },
    // });
  }, []);

  const handleClickLogin = async (): Promise<void> => {
    console.log('handleClickLogin', value);

    if (!PHONE.test(value.phone)) {
      Toast.warn({ content: '手机号码格式错误' });
      return;
    }
    if (!PASSWORD.test(value.password)) {
      Toast.warn({ content: '密码格式错误' });
      return;
    }

    const res = await user.login(value.phone, value.password);
    console.log(res)
    if (!res) return;
    dLogin(dispatch)(res.data);

    history.push('/');
  };

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
          value={value.phone}
          placeholder="请输入手机号"
          maxLength={11}
          onChange={(phone) => handleSetValue({ phone })}
        />
      </div>
      <div className="my-20">
        <Input
          value={value.password}
          placeholder="请输入密码"
          maxLength={12}
          onChange={(password) => handleSetValue({ password })}
        />
      </div>
      <div className="my-20">
        <Button onClick={handleClickLogin}>登陆</Button>
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

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   dispatch: { login },
// });

export default connect()(memo(Login));
