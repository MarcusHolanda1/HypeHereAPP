import React from 'react';
import * as S from './styles';
import IMAGES from '../../../../assets';
import {IconGlobal} from '../..';

const BackButton = ({onPress}) => {
  return (
    <S.WrapButton onPress={onPress}>
      <IconGlobal source={IMAGES.handle.handleBack} />
    </S.WrapButton>
  );
};
export default BackButton;
