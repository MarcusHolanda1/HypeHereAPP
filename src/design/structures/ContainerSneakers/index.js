import React, {useRef} from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

const ContainerSneakers = ({children}) => {
  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <S.SafeContainer showsVerticalScrollIndicator={false}>
        {children}
      </S.SafeContainer>
    </S.Container>
  );
};

export default ContainerSneakers;
