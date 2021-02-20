import React, { Dispatch, FC, SetStateAction } from 'react';

import Modal from '@/components/lview-ui/Modal';
import Input from '@/components/lview-ui/Input';
import Textarea from '@/components/lview-ui/Textarea';

interface IProps {
  show?: boolean;
  title: string;
  content: string;
  disabled?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setItemValue: (nVal: Partial<{ title: string; content: string }>) => void;
}

const ItemModal: FC<IProps> = (props) => {
  const { show, title, content, disabled, setShow, setItemValue } = props;
  
  const handleClickAddItem = () => {
    console.log('handleClickAddItem');
  };

  return (
    <Modal show={show} rounded>
      <div className=" px-20 py-12 text-center">
        <h3>{disabled ? '查看代办事项' : '编辑代办事项'}</h3>
        <Input
          value={title}
          placeholder="请输入标题，最多8个字"
          maxLength={8}
          onChange={(value) => setItemValue({ title: value })}
          disabled={disabled}
        />
        <div className="my-12">
          <Textarea
            value={content}
            placeholder="请输入代办事项的详细内容"
            disabled={disabled}
            onChange={(value) => setItemValue({ content: value })}
          />
        </div>
        <div className="flex-center justify-content-start my-12">
          <span className="mr-6 f12">是否已完成</span>
          <input type="checkbox" />
        </div>
        <div className="border-top text-center event-buttons">
          <span
            className="d-inline-block w-50 h-100 lh-45 border cancel-button"
            onClick={() => setShow(false)}
          >
            取消
          </span>
          <span
            className="d-inline-block w-50 h-100 lh-45 border confirm-button"
            onClick={handleClickAddItem}
          >
            确定
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
