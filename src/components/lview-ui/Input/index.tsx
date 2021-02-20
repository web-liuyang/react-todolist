import React, { ChangeEvent, FC, memo, useState } from 'react';

import '../style/index.less';
import './index.less';

interface IProps {
  width?: number;
  height?: number;
  rounded?: number;
  type?: string;
  disabled?: boolean;

  value?: string;
  name?: string;
  placeholder?: string;
  maxLength?: number;

  onChange?: (value: string) => void;
  onClickIcon?: () => void;
  onClickTitle?: () => void;
  onClickInput?: () => void;
}

const Input: FC<IProps> = (props) => {
  const {
    type = 'text',
    maxLength,
    rounded = 4,
    disabled,
    value = '',
    name,
    placeholder,

    onChange,
  } = props;

  // const [inputValue, setInputValue] = useState<string>(value);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div
      className="position-relative flex-center align-items-stretch px-8 py-4 bg-FFFFFF border border-E5E5E5  l-input"
      style={{ borderRadius: rounded }}
    >
      <div className="input-box">
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default memo(Input);
