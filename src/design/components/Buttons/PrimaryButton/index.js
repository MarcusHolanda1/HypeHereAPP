import * as S from './styles';
import {View, Text} from 'react-native';
import React from 'react';

const PrimaryButton = ({onPress, text, background, color, width, heigth}) => (
  <S.WrapButton
    onPress={onPress}
    background={background}
    width={width}
    heigth={heigth}>
    <S.CartIcon />
    <S.TextButton color={color}>{text}</S.TextButton>
  </S.WrapButton>
);
export default PrimaryButton;
