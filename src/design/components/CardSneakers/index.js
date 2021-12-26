import React from 'react';
import * as S from './styles';

const CardSneakers = ({children, width}) => {
  return <S.Card width={width}>{children}</S.Card>;
};
export default CardSneakers;
