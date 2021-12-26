import React from 'react';

import * as S from './styles';

const FavoriteListStructure = ({children}) => {
  return (
    <S.Container showsVerticalScrollIndicator={false}>{children}</S.Container>
  );
};
export default FavoriteListStructure;
