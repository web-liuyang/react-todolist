import express from 'express';
import { User } from '../mysql';

import { Reception, Response } from './types';
import { STATUS } from './types/default';
const router = express.Router();

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  const { phone, password }: Reception.Login = req.body;

  const userinfo = ((await User.findOne({
    where: {
      phone,
    },
  })) as any) as Response.Login;

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
