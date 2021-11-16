import React from 'react';
import * as S from './styles';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';
import BackgroundImage from '../../assets/images/background/background.png';
import Logo from '../../assets/images/logo/logo.png';

import PrimaryButton from '../../design/components/Buttons/PrimaryButton';
// import {Text} from '../../design/components/Text/';
import InputLogin from '../../design/components/Input/InputLogin';

export default function Login() {
  return (
    <S.Container>
      <S.BackImage source={BackgroundImage}>
        <SafeAreaView>
          <KeyboardAvoidingView>
            <ScrollView>
              <S.ContentLogo>
                <S.ImageLogo source={Logo} />
              </S.ContentLogo>
              <S.ContentLogin>
                <S.ContentInputName>
                  <InputLogin placeholder="Digite seu nome" />
                </S.ContentInputName>
                <S.ContentInputPassword>
                  <InputLogin placeholder="Digite sua senha" />
                </S.ContentInputPassword>
                <S.ContentButton>
                  <PrimaryButton
                    background="#75F7FF"
                    color="#000"
                    text="Fazer login"
                    width="309px"
                  />
                </S.ContentButton>
              </S.ContentLogin>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </S.BackImage>
    </S.Container>
  );
}
