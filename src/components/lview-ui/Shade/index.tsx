import { FC } from 'react';
import classnames from 'classnames';

import './index.less';

interface IProps {
  show?: boolean;
  onClick?: () => void;
}

const Shade: FC<IProps> = (props) => {
  const { show, onClick } = props;

  const handleClickShade = () => {
    onClick && onClick();
  };

  return (
    <div
      className={classnames([
        'position-fixed t-0 l-0 w-100 h-100 l-shade',
        show ? 'd-block' : 'd-none',
      ])}
      onClick={handleClickShade}
    ></div>
  );
};

export default Shade;
