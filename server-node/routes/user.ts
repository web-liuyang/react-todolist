import express from 'express';
import { User } from '../mysql';
import { Reception, Response } from './types';
import { STATUS } from './types/default';
const router = express.Router();

router.post('/login', async (req, res, next) => {
  console.log('login-body', req.body);
  const { phone, password }: Reception.Login = req.body;

  if (!phone || !password) {
    res.json({
      code: STATUS.PARAMSERROR,
      msg: '参数错误',
      success: true,
      data: null,
    });
    return;
  }

  const userinfo = ((await User.findOne({
    where: {
      phone,
    },
  })) as any) as Response.Login | null;

  if (!userinfo) {
    res.json({
      code: STATUS.ABSENCE,
      msg: '账号不存在',
      success: true,
      data: null,
    });
    return;
  }

  if (userinfo.password !== password) {
    res.json({
      code: STATUS.AUTHENTICATION,
      msg: '密码错误',
      success: true,
      data: null,
    });
    return;
  }

  res.json({
    code: STATUS.SUCCESS,
    msg: '登陆成功',
    success: true,
    data: userinfo,
  });
});

export default router;
