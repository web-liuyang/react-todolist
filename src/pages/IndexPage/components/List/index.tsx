import { FC, useEffect, useRef, useState } from 'react';
import Hammerjs from 'hammerjs';
import classname from 'classnames';
import { useMount } from 'ahooks';
import Modal from '@/components/lview-ui/Modal';

import './index.less';

const Item: FC = () => {
  let oItem = useRef<HTMLDivElement>(null);
  let oButtons = useRef<HTMLDivElement>(null);

  // 滑动距离
  const [left, setLeft] = useState<number>(0);
  // 回弹动画
  const [springback, setSpringback] = useState<boolean>(false);

  // 手势滑动操作
  useMount(() => {
    // 创建手势
    const handles = new Hammerjs((oItem.current as unknown) as HTMLElement);
    // 操作按钮宽度
    const widthButton = parseFloat(getComputedStyle(oButtons.current!).width);

    // 开始
    handles.on('panstart', (e) => {
      setSpringback(false);
    });

    // 移动
    handles.on('panmove', (e) => {
      setLeft(e.deltaX);
    });

    // 结束
    handles.on('panend', (e) => {
      setSpringback(true);
      setLeft((oVal) => (oVal < -widthButton / 2 ? -widthButton : 0));
    });
  });

  // 操作菜单
  const handleClickAction = (type: 'look' | 'edit' | 'delect') => {
    console.log(type)
    switch (type) {
      case 'look':
        break;
      case 'edit':
        break;
      case 'delect':
        break;
      default:
        console.error('不正常操作：' + type);
        break;
    }
  };

  return (
    <div className="position-relative">
      <div
        ref={oItem}
        className={classname([
          'position-relative flex-center mt-6 p-12 bg-FFFFFF over-hidden matter-item',
          { springback },
        ])}
        style={{ transform: `translateX(${left}px)` }}
      >
        <div className="flex-center justify-content-start check-input">
          <input className="checkbox" type="checkbox" />
        </div>
        <div className="flex-center justify-content-start title">
          这是标题标题标
        </div>
        <div className="flex-center justify-content-start f12 color-666666 introduction">
          这是简介
        </div>
      </div>

      <div
        className="absolute-right flex-center align-items-stretch h-100 bg-FFFFFF text-center color-FFFFFF action-buttons"
        ref={oButtons}
      >
        <span
          className="flex-center flex-1 bg-999999"
          onClick={() => handleClickAction('look')}
        >
          查看
        </span>
        <span
          className="flex-center flex-1 bg-CEB379"
          onClick={() => handleClickAction('edit')}
        >
          编辑
        </span>
        <span
          className="flex-center flex-1 bg-FF4500"
          onClick={() => handleClickAction('delect')}
        >
          删除
        </span>
      </div>
    </div>
  );
};

const List: FC = () => {


  return (
    <div className="component-list">
      <Item />
      {/* <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item /> */}
    </div>
  );
};

export default List;
