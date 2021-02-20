import React, { FC, useState } from 'react';
import useSetState from '@/hooks/useSetState';

import Input from '@/components/lview-ui/Input';
import Modal from '@/components/lview-ui/Modal';
import Textarea from '@/components/lview-ui/Textarea';

import './index.less';
import ItemModal from '../ItemModal';

const Header: FC = () => {
  const [value, setValue] = useState<string>('');
  const [itemValue, setItemValue] = useSetState({
    title: '',
    content: '',
  });

  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="position-stickily t-0 flex-center px-6 bg-458EDB component-header">
      <div className="search-input">
        <Input
          value={value}
          onChange={setValue}
          placeholder="请输入代办事项标题"
        />
      </div>
      <div
        className="flex-center add-item-button"
        onClick={() => setShow(true)}
      >
        <i className="iconfont icon-jia position-relative color-FFFFFF f-bold icon" />
      </div>
      <ItemModal
        show={show}
        title={itemValue.title}
        content={itemValue.content}
        setShow={setShow}
        setItemValue={setItemValue}
      />
    </div>
  );
};

export default Header;
