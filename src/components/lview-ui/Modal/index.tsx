import { FC, FunctionComponent, ReactNode } from 'react';
import classname from 'classnames';

import Shade from '../Shade';

import './index.less';

enum Default {
  CANCEL = '取消',
  CONFIRM = '确定',
}

interface IProps {
  show?: boolean;
  title?: string;
  content?: string;
  cancel?: string;
  showCancel?: boolean;
  confirm?: boolean;
  showConfirm?: boolean;
  rounded?: boolean;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
}

const Modal: FC<IProps> = (props) => {
  const {
    show,
    title,
    content,
    cancel = Default.CANCEL,
    confirm = Default.CONFIRM,
    showCancel = true,
    showConfirm = true,
    rounded,
    children,
    onClickCancel,
    onClickConfirm,
  } = props;

  console.log(children);
  // 点击遮罩层
  const handleClickShade = () => {};

  // 取消
  const handleClickCancel = () => {
    onClickCancel && onClickCancel();
  };

  // 确定
  const handleClickConfirm = () => {
    onClickConfirm && onClickConfirm();
  };

  return show ? (
    <div className="l-modal">
      <Shade show onClick={handleClickShade} />
      <div className="fixed-center flex-center w-100 modal-container">
        <div
          className={classname([
            'bg-FFFFFF modal-box',
            { 'rounded-4': rounded },
          ])}
        >
          {children ? (
            children
          ) : (
            <>
              <div className=" px-20 py-12 text-center">
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
              <div className="border-top text-center event-buttons">
                {showCancel && (
                  <span
                    className="d-inline-block w-50 h-100 lh-45 border-right cancel-button"
                    onClick={handleClickCancel}
                  >
                    {cancel}
                  </span>
                )}
                {showConfirm && (
                  <span
                    className="d-inline-block w-50 h-100 lh-45 confirm-button"
                    onClick={handleClickConfirm}
                  >
                    {confirm}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
