import React from 'react';
import { Content } from './style';

import fight from '../../assets/fight.gif';

const LoadingPage = () => {
  return (
    <Content>
      Search something
      <div>
        <img src={fight} alt="gif" />
      </div>
    </Content>
  );
};

export default LoadingPage;
