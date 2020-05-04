import React from 'react';

import {LoaderContainer} from './styles';

export default ({error}) => {
  if(error) console.log(error);

  return (
    <LoaderContainer>
    </LoaderContainer>
  );
};