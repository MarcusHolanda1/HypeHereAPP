import React from 'react';
import * as S from './styles';
import {IconGlobal} from '../..';
import IMAGES from '../../../../assets';

const TrashButton = ({children}) => {
  return (
    <S.WrapButton>
      <S.ContentIcon>
        <IconGlobal source={IMAGES.handle.trash} />
      </S.ContentIcon>
    </S.WrapButton>
  );
};
export default TrashButton;
