import React from 'react';
import * as S from './styles';
import {IconGlobal} from '../../../../design';
import IMAGES from '../../../../assets';

const DetailsButton = ({onPress}) => {
  return (
    <S.WrapButton onPress={onPress}>
      <IconGlobal source={IMAGES.handle.details} />
    </S.WrapButton>
  );
};
export default DetailsButton;
