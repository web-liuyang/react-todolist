import express from 'express';
import { Reception } from './types';

const router = express.Router();
/* 增 */
router.post('/add', (req, res, next) => {
  console.log('add-body', req.body);

  // const {title}: Reception.Add = req.body;
  let a:Reception.Add;
  
  res.send();
});
/* 删 */
router.post('/del', (req, res, next) => {
  console.log('del-body', req.body);
  res.send();
});
/* 改 */
router.post('/edit', (req, res, next) => {
  console.log('edit-body', req.body);
  res.send();
});
/* 查 */
router.get('/query', (req, res, next) => {
  console.log('query-query', req.query);

  res.send();
});

export default router;
