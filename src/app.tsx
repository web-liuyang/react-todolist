import 'default-passive-events';
import vconsole from 'vconsole';

// 2. vconsole
if (process.env.NODE_ENV !== 'production') {
  new vconsole();
}