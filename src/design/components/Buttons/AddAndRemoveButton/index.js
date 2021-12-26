import React from 'react';
import {IconGlobal} from '../..';
import * as S from './styles';

const AddAndRemoveButton = ({children, onPress, source}) => {
  return (
    <S.WrapButton onPress={onPress}>
      <IconGlobal source={source} />
    </S.WrapButton>
  );
};
export default AddAndRemoveButton;
