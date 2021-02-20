import { FC } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import classname from 'classnames';
import './index.less';

enum DEFAULT {
  DURATION = 2000,
  WARN = 'warn',
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

interface IProps {
  content?: string;
  icon?: string;
  duration?: number;
  mask?: boolean;
  customize?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  onClose?: () => void;
}

const DefaultToast: FC<IProps> = (props) => {
  const { icon, content } = props;

  return (
    <>
      <div className={classname({ loading: icon === DEFAULT.LOADING })}>
        <i className={classname(['f24 iconfont', `icon-${icon}`])}></i>
      </div>
      <div>{content}</div>
    </>
  );
};

const Toast: FC<IProps> = (props) => {
  const { customize, mask } = props;

  return (
    <div className={classname(['l-toast', { mask }])}>
      <div className="fixed-center px-12 py-6 rounded-10 text-center color-FFFFFF toast-shade">
        {customize || <DefaultToast {...props} />}
      </div>
    </div>
  );
};

const showToast = (props: IProps): { close: () => void } => {
  const { duration, onClose } = props;
  const oDiv = document.createElement('div');
  document.body.appendChild(oDiv);
  render(<Toast {...props} />, oDiv);

  const timer = setTimeout(() => {
    close();
    onClose && onClose();
  }, duration);

  const close = () => {
    clearTimeout(timer);
    unmountComponentAtNode(oDiv);
    oDiv.remove();
  };

  return {
    close,
  };
};

export default {
  info({ content, icon, duration = DEFAULT.DURATION, mask, onClose }: IProps) {
    return showToast({ content, icon, duration, mask, onClose });
  },
  warn({
    content,
    icon = DEFAULT.WARN,
    duration = DEFAULT.DURATION,
    mask,
    onClose,
  }: IProps) {
    return showToast({ content, icon, duration, mask, onClose });
  },
  error({
    content,
    icon = DEFAULT.ERROR,
    duration = DEFAULT.DURATION,
    mask,
    onClose,
  }: IProps) {
    return showToast({ content, icon, duration, mask, onClose });
  },
  success({
    content,
    icon = DEFAULT.ERROR,
    duration = DEFAULT.DURATION,
    mask,
    onClose,
  }: IProps) {
    return showToast({ content, icon, duration, mask, onClose });
  },
  loading({
    content,
    icon = DEFAULT.LOADING,
    duration = 99999 || DEFAULT.DURATION,
    mask,
    onClose,
  }: IProps) {
    return showToast({ content, icon, duration, mask, onClose });
  },
  customize({ customize, duration = DEFAULT.DURATION, mask, onClose }: IProps) {
    return showToast({ customize, duration, mask, onClose });
  },
};
