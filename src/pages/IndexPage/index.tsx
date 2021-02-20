import { FC } from 'react';
import { connect, IndexModelState, ConnectRC, ConnectProps } from 'umi';

import Header from './components/Header';
import List from './components/List';

interface IProps {
  state: IndexModelState;
}

const IndexPage: ConnectRC<IProps> = ({ history, state }) => {
  if (!state.userinfo) {
    history.replace('/login');
    return <></>;
  }

  console.log('indexPage');
  return (
    <div>
      <Header />
      <List />
    </div>
  );
};

const mapStateToProps = ({ index }: { index: IndexModelState }) => ({
  state: index,
});

export default connect(mapStateToProps)(IndexPage);
