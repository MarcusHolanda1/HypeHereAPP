import React from 'react';
import * as S from './styles';
import BackgroundImage from '../../assets/images/background/background.png';

import PrimaryButton from '../../design/components/Buttons/PrimaryButton';
import {Text} from '../../design/components/Text/';

export default function InitialScreen() {
  return (
    <S.Container>
      <S.BackgroundImage source={BackgroundImage}>
        <PrimaryButton
          background="#75F7FF"
          color="#000"
          text="Fazer login"
          width="193px"
        />
        <Text type="text">
          <Text type="h1">SALVEEEEEE</Text>
        </Text>
      </S.BackgroundImage>
    </S.Container>
  );
}
