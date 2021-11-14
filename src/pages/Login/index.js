import React from 'react';
import * as S from './styles';
import {KeyboardAvoidingView} from 'react-native';
import BackgroundImage from '../../assets/images/background/background.png';
import Logo from '../../assets/images/logo/logo.png';

import PrimaryButton from '../../design/components/Buttons/PrimaryButton';
import {Text} from '../../design/components/Text/';
import InputLogin from '../../design/components/Input/InputLogin';

export default function Login() {
  return (
    <S.Container>
      <S.BackgroundImage source={BackgroundImage}>
        <S.ContentLogo>
          <S.ImageLogo source={Logo} />
        </S.ContentLogo>
        <S.ContentInput>
          <S.ContentInputName>
            <InputLogin placeholder="Digite seu email" />
          </S.ContentInputName>
          <S.ContentInputPassword>
            <InputLogin placeholder="Digite sua senha" />
          </S.ContentInputPassword>
        </S.ContentInput>
        <S.ContentButton>
          <PrimaryButton
            background="#75F7FF"
            color="#000"
            text="Fazer login"
            width="309px"
          />
        </S.ContentButton>
      </S.BackgroundImage>
    </S.Container>
  );
}
