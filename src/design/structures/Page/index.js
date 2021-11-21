import React, {useRef} from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

const Page = ({children, scrolled}) => {
  const scrollRef = useRef(null);
  return (
    <S.Container>
      <S.SafeContainer>
        {scrolled ? (
          <S.KeyboardContainer
            keyboardVerticalOffset={8}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <S.ScrollContent ref={scrollRef}>{children}</S.ScrollContent>
          </S.KeyboardContainer>
        ) : (
          <S.Content>{children}</S.Content>
        )}
      </S.SafeContainer>
    </S.Container>
  );
};

export default Page;
