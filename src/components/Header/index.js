import React from 'react';

import useLaunch from '../../core/launch/useLaunch';
import {HeaderContainer, HeaderLogo, HeaderButtonReload} from './styles';

export default (props) => {
  const [, {getItems}] = useLaunch();
  
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={'assets/spacex-logo.png'} alt="" />
        <span>{'LAUNCHES'}</span>
      </HeaderLogo>
      <HeaderButtonReload onClick={() => getItems()}>
        Reload Data
        <picture>
          <source srcSet={'assets/icon/refresh@2x.png 2x'} />
          <source srcSet={'assets/icon/refresh@3x.png 3x'} />
          <img src={'assets/icon/refresh.png'} alt="" />
        </picture>
      </HeaderButtonReload>
    </HeaderContainer>
  );
};