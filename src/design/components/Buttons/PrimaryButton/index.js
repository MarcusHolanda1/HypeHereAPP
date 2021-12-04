import * as S from './styles';
import {View, Text} from 'react-native';
import React from 'react';

const PrimaryButton = ({text, background, color, width, heigth}) => (
  <S.WrapButton background={background} width={width} heigth={heigth}>
    <S.CartIcon />
    <S.TextButton color={color}>{text}</S.TextButton>
  </S.WrapButton>
);
export default PrimaryButton;
