import React, { FC, Component } from 'react';

import '../style/index.less';
import './index.less';

const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  const { children, ...attributes } = props;

  return (
    <div className="l-button">
      <button className="rounded-4 border border-E5E5E5 button" {...attributes}>
        {children}
      </button>
    </div>
  );
};

export default Button;
