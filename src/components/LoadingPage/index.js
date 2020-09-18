import { Content } from './style';

import fight from '../../assets/fight.gif';

import React from 'react';

const LoadingPage = () => {
  return (
    <Content>
        Search something
      <div>
        <img src={fight} alt="gif"/>
      </div>

    </Content>
  );
}

export default LoadingPage;
