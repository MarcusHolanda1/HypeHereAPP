import * as S from './styles';
import {View} from 'react-native';
import React from 'react';

const BrandButton = ({background, width, heigth, marginRight, onPress}) => (
  <S.WrapButton
    onPress={onPress}
    background={background}
    width={width}
    heigth={heigth}
    marginRight={marginRight}
  />
);
export default BrandButton;
