import * as S from './styles';
import {View, Text} from 'react-native';
import React from 'react';

const PrimaryButton = ({
  text,
  background,
  color,
  width,
  heigth,
  marginRight,
  onPress,
}) => (
  <S.WrapButton
    onPress={onPress}
    background={background}
    width={width}
    heigth={heigth}
    marginRight={marginRight}>
    {<S.TextButton color={color}>{text}</S.TextButton>}
  </S.WrapButton>
);
export default PrimaryButton;
