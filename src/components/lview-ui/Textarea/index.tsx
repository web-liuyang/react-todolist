import React, { ChangeEvent, FC, memo, useState } from 'react';

import '../style/index.less';
import './index.less';

interface IProps {
  width?: number;
  height?: number;
  rounded?: number;
  disabled?: boolean;

  value?: string;
  placeholder?: string;
  maxLength?: number;

  onChange?: (value: string) => void;
  onClickIcon?: () => void;
  onClickTitle?: () => void;
  onClickInput?: () => void;
}

const Textarea: FC<IProps> = (props) => {
  const {
    value = '',
    placeholder,
    maxLength,
    rounded = 4,
    disabled,
    onChange,
  } = props;

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div
      className="position-relative flex-center align-items-stretch px-8 py-4 bg-FFFFFF border border-E5E5E5 l-textarea"
      style={{ borderRadius: rounded }}
    >
      <div className="textarea-box">
        <textarea
          className="textarea"
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          onChange={handleChangeTextarea}
        />
      </div>
    </div>
  );
};

export default memo(Textarea);
