import React from 'react';
import * as S from './styles';
import BackgroundImage from '../../assets/images/background/background.png';
import Logo from '../../assets/images/logo/logo.png';
import SubLogo from '../../assets/images/logo/subLogo.png';

import PrimaryButton from '../../design/components/Buttons/PrimaryButton';
import {Text} from '../../design/components/Text/';

export default function InitialScreen({navigation}) {
  return (
    <S.Container>
      <S.BackgroundImage source={BackgroundImage}>
        <S.ContentLogo>
          <S.ImageLogo source={Logo} />
          <S.SubLogo source={SubLogo} />
        </S.ContentLogo>
        <S.ContentButtons>
          <S.ContentButtonLogin>
            <PrimaryButton
              background="#75F7FF"
              color="#000"
              text="Fazer login"
              width="210px"
              onPress={() => navigation.navigate('Login')}
            />
          </S.ContentButtonLogin>
          <S.ContentButtonRegister>
            <PrimaryButton
              background="#FFFF"
              color="#000"
              text="Cadastrar"
              width="193px"
            />
          </S.ContentButtonRegister>
        </S.ContentButtons>
      </S.BackgroundImage>
    </S.Container>
  );
}
