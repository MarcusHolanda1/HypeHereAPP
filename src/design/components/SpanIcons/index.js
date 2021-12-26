import React from 'react';
import {Image} from 'react-native';
import * as S from './styles';
import {IconGlobal, Text} from '../index';
import IMAGES from '../../../assets';

const SpanIcon = ({source, spanText}) => {
  return (
    <S.Container>
      <IconGlobal source={source} />
      <S.ContentSpan>
        <Text type="span">{spanText}</Text>
      </S.ContentSpan>
    </S.Container>
  );
};
export default SpanIcon;
