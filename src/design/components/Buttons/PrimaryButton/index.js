import * as S from './styles';
import {View, Text} from 'react-native';
import React from 'react';

const PrimaryButton = ({text, background, color, width, onPress}) => (
  <S.WrapButton onPress={onPress} background={background} width={width}>
    {<S.TextButton color={color}>{text}</S.TextButton>}
  </S.WrapButton>
);
export default PrimaryButton;
