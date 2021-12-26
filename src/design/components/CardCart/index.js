import React from 'react';
import * as S from './styles';

const CardCart = ({width, children}) => {
  return <S.Card width={width}>{children}</S.Card>;
};
export default CardCart;
